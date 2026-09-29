export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body.name || !body.email || !body.message) {
    throw createError({ statusCode: 400, statusMessage: 'Mohon lengkapi nama, email, dan pesan Anda' })
  }

  const inquiries = getStore('inquiries.json', [])
  const ticketRef = 'BSS-TGI-' + Math.floor(100000 + Math.random() * 900000)
  const newInquiry = {
    id: 'inq-' + Date.now(),
    bssTicketId: ticketRef,
    name: body.name,
    email: body.email,
    organization: body.organization || '-',
    domain: body.domain || 'Platform TerraPulse (Demo & Lisensi BSS)',
    message: body.message,
    source: 'BSS Enterprise Gateway',
    status: 'new',
    createdAt: new Date().toISOString()
  }

  inquiries.unshift(newInquiry)
  setStore('inquiries.json', inquiries)

  return {
    success: true,
    message: 'Inquiry berhasil terintegrasi dengan platform BSS Terrabyte',
    ticketId: ticketRef
  }
})
