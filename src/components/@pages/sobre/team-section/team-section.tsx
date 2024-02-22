import { Section } from '@/components/section/section'
import SectionHeader from '@/components/section/section-header'
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/shadcn-ui/carousel'
import { TeamItem } from './team-item'

export function TeamSection() {
  return (
    <Section background="gray">
      <SectionHeader
        title="Nossa equipe"
        description="Conheça mais sobre a equipe do Programa de Tutoria Discente Castanhal"
      />
      <Carousel className="mt-6 w-full px-2">
        <CarouselContent>
          <TeamItem
            name="Aridan Pantoja"
            avatarImage="https://github.com/aridanpantoja.png"
            avatarFallback="AP"
            role="Tutor de Informática Básica"
            description="Discente de Engenharia de Computação (8º período)"
            linkedin="https://www.linkedin.com/in/aridan-pantoja/"
            lattes="https://github.com/aridanpantoja"
          />
          <TeamItem
            name="Alícia Maia"
            avatarImage="https://github.com/Ali-Maia.png"
            avatarFallback="AM"
            role="Tutora de Informática Básica"
            description="Discente de Engenharia de Computação (8º período)"
            linkedin="https://www.linkedin.com/in/dev-maia/"
            lattes="https://github.com/Ali-Maia"
          />
          <TeamItem
            name="Aridan Pantoja"
            avatarImage="https://github.com/aridanpantoja.png"
            avatarFallback="AP"
            role="Tutor de Informática Básica"
            description="Discente de Engenharia de Computação (8º período)"
            linkedin="https://www.linkedin.com/in/dev-maia/"
            lattes="https://github.com/Ali-Maia"
          />
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  )
}
