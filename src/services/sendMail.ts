import axios from 'axios'
import emailjs from '@emailjs/browser'

const service_id = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string
const template_id = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string
const user_id = process.env.NEXT_PUBLIC_EMAIL_USER_ID as string

export const sendContactMail = async (name: string, email: string, message: string) => {
  try {
    const templateParams = { name, email, message }

    await emailjs.send(service_id, template_id, templateParams, user_id)
    return true
  } catch (err) {
    console.error('EmailJS Error:', err)
    throw err
  }
}
