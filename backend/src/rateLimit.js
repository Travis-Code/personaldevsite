/**
 * Simple in-memory rate limiter middleware
 * Tracks IP addresses and request counts within a time window
 */
const requestCounts = new Map()

export function rateLimit(windowMs, maxRequests) {
  return (req, res, next) => {
    const ip = req.ip || req.connection.remoteAddress
    const now = Date.now()
    
    // Initialize or get existing request data for this IP
    if (!requestCounts.has(ip)) {
      requestCounts.set(ip, { count: 1, resetTime: now + windowMs })
      return next()
    }

    const data = requestCounts.get(ip)
    
    // Reset counter if window has passed
    if (now > data.resetTime) {
      requestCounts.set(ip, { count: 1, resetTime: now + windowMs })
      return next()
    }

    // Increment and check limit
    data.count++
    if (data.count > maxRequests) {
      return res.status(429).json({
        message: 'Too many requests. Please try again later.',
      })
    }

    next()
  }
}
