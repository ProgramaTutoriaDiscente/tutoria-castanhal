import { Section } from '@/components/section/section'
import { SectionHeader } from '@/components/section/section-header'
import { GridWrapper } from '@/components/shared/grid-wrapper'
import CardImageInformatica from '../../../../../public/images/areas-card-image-informatica.jpg'
import CardImageLinguagens from '../../../../../public/images/areas-card-image-linguagens.jpg'
import CardImageMatematica from '../../../../../public/images/areas-card-image-matematica.jpg'
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
          description="Estuda diferentes tipos de textos, a produção escrita, as regras gramaticais, a compreensão de textos e a comunicação verbal."
          disciplinas="Gêneros Discursivos, Produção Textual, Gramática, Leitura e Interpretação de texto, Oralidade"
          background={CardImageLinguagens}
        />
        <AreasCard
          title="Matemática"
          description="Focada em aspectos específicos dos números e formas, aplicados em diversos campos, como finanças, estatísticas e modelagem geométrica."
          disciplinas="Álgebra, Geometria, Trigonometria, Probabilidade, Estatística, Matemática Financeira"
          background={CardImageMatematica}
        />
        <AreasCard
          title="Informática"
          description="Auxilia em temas como introdução à informática, navegação na internet, uso de ferramentas do Google e plataformas acadêmicas."
          disciplinas="Introdução à Informática, Internet, Ferramentas do Google, Central Acadêmica"
          background={CardImageInformatica}
        />
      </GridWrapper>
    </Section>
  )
}
