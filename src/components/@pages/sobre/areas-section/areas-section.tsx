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
          description="Área que estuda as estruturas linguísticas, regras gramaticais e mecanismos de comunicação, a linguística é a ciência da expressão verbal e da interpretação."
          disciplinas="Gêneros Discursivos, Produção Textual, Gramática, Leitura e Interpretação de texto, Oralidade"
          background={CardImageLinguagens}
        />
        <AreasCard
          title="Matemática"
          description="Área que investiga os símbolos numéricos, fórmulas e teoremas, a matemática é a ciência do raciocínio lógico e abstrato que descreve fenômenos."
          disciplinas="Álgebra, Geometria, Trigonometria, Probabilidade, Estatística, Matemática financeira"
          background={CardImageMatematica}
        />
        <AreasCard
          title="Informática"
          description="Área que estuda os fundamentos dos sistemas computacionais e algoritmos, a informática é a ciência da manipulação de dispositivos eletrônicos."
          disciplinas="Introdução à Informática, Internet, Ferramentas do Google, Central Acadêmica"
          background={CardImageInformatica}
        />
      </GridWrapper>
    </Section>
  )
}
