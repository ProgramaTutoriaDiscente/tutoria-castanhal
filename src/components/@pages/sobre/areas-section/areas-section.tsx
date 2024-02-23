import { Section } from '@/components/section/section'
import SectionHeader from '@/components/section/section-header'
import { AreasCard } from './areas-card'

export function AreasSection() {
  return (
    <Section>
      <SectionHeader
        title="Áreas"
        description="Tutoria online para estudantes com dificuldades acadêmicas"
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
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
      </div>
    </Section>
  )
}
