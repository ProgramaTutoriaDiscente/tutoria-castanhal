import { AreasSection } from '@/components/@pages/sobre/areas-section/areas-section'
import { FaqSection } from '@/components/@pages/sobre/faq-section/faq-section'
import { TeamSection } from '@/components/@pages/sobre/team-section/team-section'
import { PageHeader } from '@/components/shared/page-header'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Saiba mais sobre o Programa de Tutoria Discente para estudantes com dificuldades acadêmicas',
}

export default function Sobre() {
  return (
    <>
      <PageHeader
        title="Sobre o Projeto de Tutoria"
        description="Nossa missão é ajudar estudantes a superar os desafios acadêmicos que enfrentam ao longo de sua jornada educacional e desenvolver habilidades e competências fundamentais para o seu futuro."
      />

      <AreasSection />

      <TeamSection />

      <FaqSection />
    </>
  )
}
