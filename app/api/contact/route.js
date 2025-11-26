import nodemailer from 'nodemailer'

export async function POST(req){
  try{
    const data = await req.json()
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })

    await transporter.sendMail({
      from: data.email,
      to: process.env.CONTACT_EMAIL,
      subject: `Contact from ${data.name}`,
      text: data.message
    })

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  }catch(err){
    console.error(err)
    return new Response(JSON.stringify({ ok: false }), { status: 500 })
  }
}
