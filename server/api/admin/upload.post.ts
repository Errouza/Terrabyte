import fs from 'node:fs'
import path from 'node:path'

export default defineEventHandler(async (event) => {
  if (!isValidAdminSession(event)) {
    throw createError({ statusCode: 401, statusMessage: 'Sesi admin tidak valid. Harap login kembali.' })
  }

  const form = await readMultipartFormData(event)
  if (!form || form.length === 0) {
    throw createError({ statusCode: 400, statusMessage: 'Tidak ada file yang diunggah.' })
  }

  const file = form.find(item => item.name === 'file' || item.filename)
  if (!file || !file.data) {
    throw createError({ statusCode: 400, statusMessage: 'Data file gambar tidak ditemukan.' })
  }

  const originalName = file.filename || 'image.jpg'
  const ext = path.extname(originalName).toLowerCase()
  const allowedExts = ['.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif']

  if (!allowedExts.includes(ext)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Format file tidak didukung. Harap gunakan format JPG, PNG, atau WebP.'
    })
  }

  const cleanBaseName = path.basename(originalName, ext).replace(/[^a-z0-9_-]/gi, '-').toLowerCase()
  const newFilename = Date.now() + '-' + cleanBaseName + ext

  // 1. Prioritaskan Upload ke Supabase Cloud Storage (CDN Permanen)
  const mimeType = file.type || (ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : 'image/jpeg')
  const supabaseUrl = await uploadImageToSupabaseStorage(newFilename, file.data, mimeType)

  if (supabaseUrl) {
    return {
      success: true,
      url: supabaseUrl,
      filename: newFilename
    }
  }

  // 2. Fallback Lokal (Jika Supabase offline / dev tanpa koneksi)
  try {
    const targetUploadDir = path.resolve(process.cwd(), 'public', 'images', 'uploads')
    if (!fs.existsSync(targetUploadDir)) {
      fs.mkdirSync(targetUploadDir, { recursive: true })
    }
    const targetPath = path.join(targetUploadDir, newFilename)
    fs.writeFileSync(targetPath, file.data)

    return {
      success: true,
      url: '/images/uploads/' + newFilename,
      filename: newFilename
    }
  } catch (err: any) {
    console.warn('[Upload] Local fallback write skipped on read-only system:', err.message)
    throw createError({
      statusCode: 500,
      statusMessage: 'Gagal mengunggah gambar ke cloud storage.'
    })
  }
})
