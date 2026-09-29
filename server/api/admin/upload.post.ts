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

  const targetUploadDir = path.resolve(process.cwd(), 'public', 'images', 'uploads')
  if (!fs.existsSync(targetUploadDir)) {
    fs.mkdirSync(targetUploadDir, { recursive: true })
  }

  const cleanBaseName = path.basename(originalName, ext).replace(/[^a-z0-9_-]/gi, '-').toLowerCase()
  const newFilename = Date.now() + '-' + cleanBaseName + ext
  const targetPath = path.join(targetUploadDir, newFilename)

  fs.writeFileSync(targetPath, file.data)

  const publicUrl = '/images/uploads/' + newFilename

  return {
    success: true,
    url: publicUrl,
    filename: newFilename
  }
})
