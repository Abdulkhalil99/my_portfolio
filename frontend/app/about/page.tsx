import { Metadata } from 'next'
import { AboutHero } from '@/components/sections/about/AboutHero'
import { MyStory } from '@/components/sections/about/MyStory'
import { Experience } from '@/components/sections/about/Experience'
import { Values } from '@/components/sections/about/Values'
import dynamic from 'next/dynamic'

const AboutScene = dynamic(() => import('@/components/three/AboutScene').then(m => m.AboutScene), { ssr: false })

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about my story, experience, and values.',
}

export default function AboutPage() {
  return (
    <div className="relative">
      <AboutScene />
      <AboutHero />
      <MyStory />
      <Experience />
      <Values />
    </div>
  )
}
