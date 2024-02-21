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
    <Section>
      <SectionHeader
        title="Nossa equipe"
        description="Conheça mais sobre a equipe do Programa de Tutoria Discente Castanhal"
        className="mb-8"
      />
      <Carousel className="w-full px-2">
        <CarouselContent>
          <TeamItem />
          <TeamItem />
          <TeamItem />
          <TeamItem />
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  )
}
