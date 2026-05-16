import { Metadata } from 'next'
import { ContactHero } from '@/components/sections/contact/ContactHero'
import { ContactForm } from '@/components/sections/contact/ContactForm'
import dynamic from 'next/dynamic'

const ContactScene = dynamic(() => import('@/components/three/ContactScene').then(m => m.ContactScene), { ssr: false })

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch.',
}

export default function ContactPage() {
  return (
    <div className="relative">
      <ContactScene />
      <ContactHero />
      <ContactForm />
    </div>
  )
}
