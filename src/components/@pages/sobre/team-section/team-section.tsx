import { TeamCarousel } from '@/components/@pages/sobre/team-section/team-carousel'
import { Section } from '@/components/section/section'
import { SectionHeader } from '@/components/section/section-header'
import { Suspense } from 'react'
import { TeamLoading } from './team-loading'

export function TeamSection() {
  return (
    <Section background="gray">
      <SectionHeader
        title="Nossa equipe"
        description="Conheça mais sobre a equipe do Programa de Tutoria Discente Castanhal"
      />

      <Suspense fallback={<TeamLoading />}>
        <TeamCarousel />
      </Suspense>
    </Section>
  )
}
