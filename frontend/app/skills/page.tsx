import { Metadata } from 'next'
import { SkillsHero } from '@/components/sections/skills/SkillsHero'
import { SkillsGrid } from '@/components/sections/skills/SkillsGrid'
import { Tools } from '@/components/sections/skills/Tools'
import { CurrentlyLearning } from '@/components/sections/skills/CurrentlyLearning'
import dynamic from 'next/dynamic'

const SkillsScene = dynamic(() => import('@/components/three/SkillsScene').then(m => m.SkillsScene), { ssr: false })

export const metadata: Metadata = {
  title: 'Skills',
  description: 'My technical skills and tools.',
}

export default function SkillsPage() {
  return (
    <div className="relative">
      <SkillsScene />
      <SkillsHero />
      <SkillsGrid />
      <Tools />
      <CurrentlyLearning />
    </div>
  )
}
