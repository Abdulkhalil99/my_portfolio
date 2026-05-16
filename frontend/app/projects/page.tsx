import { Metadata } from 'next'
import { ProjectsHero } from '@/components/sections/projects/ProjectsHero'
import { ProjectsGrid } from '@/components/sections/projects/ProjectsGrid'
import dynamic from 'next/dynamic'

const ProjectsScene = dynamic(() => import('@/components/three/ProjectsScene').then(m => m.ProjectsScene), { ssr: false })

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A collection of things I have built.',
}

export default function ProjectsPage() {
  return (
    <div className="relative">
      <ProjectsScene />
      <ProjectsHero />
      <ProjectsGrid />
    </div>
  )
}
