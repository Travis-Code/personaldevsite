import express from 'express'
import cors from 'cors'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { config } from './config.js'
import { contactSchema } from './validation.js'
import { sendContactEmail } from './email.js'
import { rateLimit } from './rateLimit.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.set('trust proxy', 1) // honor X-Forwarded-For when behind proxies (Railway)

// Middleware
app.use(
  cors({
    origin: config.allowedOrigins,
    methods: ['GET', 'POST'],
    credentials: true,
  })
)
app.use(express.json())

// Rate limiting for contact endpoint
app.use('/api/contact', rateLimit(config.rateLimit.windowMs, config.rateLimit.maxRequests))

/**
 * GET /api/projects
 * Returns list of projects from JSON file
 */
app.get('/api/projects', async (req, res) => {
  try {
    const projectsPath = path.join(__dirname, '..', 'data', 'projects.json')
    const projectsData = await fs.readFile(projectsPath, 'utf-8')
    const projects = JSON.parse(projectsData)
    res.json(projects)
  } catch (error) {
    console.error('Error reading projects:', error)
    res.status(500).json({ message: 'Failed to load projects' })
  }
})

/**
 * POST /api/contact
 * Handles contact form submissions with validation and email notification
 */
app.post('/api/contact', async (req, res) => {
  try {
    // Validate request body
    const validatedData = contactSchema.parse(req.body)

    // Send email notification
    const emailResult = await sendContactEmail(
      validatedData.name,
      validatedData.email,
      validatedData.message
    )

    if (!emailResult.ok) {
      const missingConfig = emailResult.reason === 'missing-email-config'
      const status = missingConfig ? 503 : 500
      return res.status(status).json({
        message: missingConfig
          ? 'Email service not configured. Please try again later.'
          : 'Failed to send message. Please try again.',
      })
    }

    res.status(200).json({
      message: 'Message received successfully. We will get back to you soon!',
    })
  } catch (error) {
    // Handle Zod validation errors
    if (error.name === 'ZodError') {
      const fieldErrors = error.errors.map((err) => ({
        field: err.path.join('.'),
        message: err.message,
      }))
      return res.status(400).json({
        message: 'Validation error',
        errors: fieldErrors,
      })
    }

    console.error('Error in contact endpoint:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' })
})

// Start server
const port = config.port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
  console.log(`Environment: ${config.nodeEnv}`)
})
