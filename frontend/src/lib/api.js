export const API_BASE = import.meta.env.VITE_API_BASE || '/api'

export async function apiFetch(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, options)
  return res
}
