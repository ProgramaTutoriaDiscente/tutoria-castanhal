import { Section } from '@/components/section/section'
import { SectionHeader } from '@/components/section/section-header'
import { GridWrapper } from '@/components/shared/grid-wrapper'
import { AreasCard } from './areas-card'

export function AreasSection() {
  return (
    <Section>
      <SectionHeader
        title="Áreas"
        description="Tutoria online para estudantes com dificuldades acadêmicas"
      />
      <GridWrapper>
        <AreasCard
          title="Linguagens"
          description="Apoio acadêmico personalizado para ajudar você a ter sucesso"
          background="/images/areas-card-image-linguagens.jpg"
        />
        <AreasCard
          title="Matemática"
          description="Oferecer suporte acadêmico de qualidade para estudantes"
          background="/images/areas-card-image-matematica.jpg"
        />
        <AreasCard
          title="Informática"
          description="Contribuir com o sucesso acadêmico de estudantes do país"
          background="/images/areas-card-image-informatica.jpg"
        />
      </GridWrapper>
    </Section>
  )
}
