import { Section } from '@/components/section/section'
import SectionHeader from '@/components/section/section-header'
import { TeamCarousel } from './team-carousel'
import { Suspense } from 'react'

export function TeamSection() {
  return (
    <Section background="gray">
      <SectionHeader
        title="Nossa equipe"
        description="Conheça mais sobre a equipe do Programa de Tutoria Discente Castanhal"
      />
      
      <Suspense fallback={<p>Carregando...</p>}>
        <TeamCarousel />
      </Suspense>

    </Section>
  )
}
