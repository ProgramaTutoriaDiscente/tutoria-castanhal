import { AreasSection } from '@/components/@pages/sobre/areas-section/areas-section'
import { FaqSection } from '@/components/@pages/sobre/faq-section/faq-section'
import { TeamSection } from '@/components/@pages/sobre/team-section/team-section'
import { PageHeader } from '@/components/shared/page-header'

export default function Sobre() {
  return (
    <>
      {/* TODO: Page Header */}
      <PageHeader
        title="Sobre o Projeto de Tutoria"
        description="Nossa missão é ajudar estudantes a superar os desafios acadêmicos que enfrentam ao longo de sua jornada educacional e alcançar seu pleno potencial, desenvolvendo habilidades e competências que serão fundamentais para o seu sucesso futuro."
      />

      {/* TODO: Areas Section */}
      <AreasSection />
      {/* Team Section */}
      <TeamSection />
      {/* FAQ Section */}
      <FaqSection />
    </>
  )
}
