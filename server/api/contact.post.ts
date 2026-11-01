export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const name = String(body.name || body.fullName || '').trim()
  const email = String(body.email || '').trim()
  const message = String(body.message || '').trim()
  const phone = String(body.phone || body.phoneNumber || '').trim()
  const organization = String(body.organization || body.company || body.companyName || '-').trim()
  const domain = String(body.domain || body.inquiryCategory || body.interestedIn || 'General Inquiry').trim()

  if (!name || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: 'Mohon lengkapi nama, email, dan pesan Anda' })
  }

  const ticketRef = 'BSS-TGI-' + Math.floor(100000 + Math.random() * 900000)

  // Enrich message with contact phone number and inquiry category for database record
  const fullMessage = phone
    ? `${message}\n\n[Kontak: ${phone} | Kategori: ${domain}]`
    : message

  const newInquiry = {
    id: 'inq-' + Date.now(),
    bssTicketId: ticketRef,
    name,
    email,
    organization: organization || '-',
    domain: domain || 'Platform TerraPulse (Demo & Lisensi BSS)',
    phone: phone || null,
    message: fullMessage,
    source: 'Web Contact Form',
    status: 'new',
    createdAt: new Date().toISOString()
  }

  // Save to Supabase Cloud
  await saveInquiryToSupabase(newInquiry)

  // Backup to local file store
  try {
    const inquiries = getStore('inquiries.json', [])
    inquiries.unshift(newInquiry)
    setStore('inquiries.json', inquiries)
  } catch (err) {
    // ignore filesystem write errors on Vercel
  }

  return {
    success: true,
    message: 'Inquiry berhasil terintegrasi dengan platform BSS Terrabyte',
    ticketId: ticketRef
  }
})
