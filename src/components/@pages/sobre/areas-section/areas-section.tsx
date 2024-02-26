import { Section } from '@/components/section/section'
import { SectionHeader } from '@/components/section/section-header'
import { GridWrapper } from '@/components/shared/grid-wrapper'
import { AreasCard } from './areas-card'
import CardImageLinguagens from '../../../../../public/images/areas-card-image-linguagens.jpg'
import CardImageInformatica from '../../../../../public/images/areas-card-image-informatica.jpg'
import CardImageMatematica from '../../../../../public/images/areas-card-image-matematica.jpg'

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
          background={CardImageLinguagens}
        />
        <AreasCard
          title="Matemática"
          description="Oferecer suporte acadêmico de qualidade para estudantes"
          background={CardImageMatematica}
        />
        <AreasCard
          title="Informática"
          description="Contribuir com o sucesso acadêmico de estudantes do país"
          background={CardImageInformatica}
        />
      </GridWrapper>
    </Section>
  )
}
