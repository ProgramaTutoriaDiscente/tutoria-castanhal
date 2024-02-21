import { Section } from '@/components/section/section'
import SectionHeader from '@/components/section/section-header'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/shadcn-ui/accordion'

export function FaqSection() {
  return (
    <Section>
      <div className="space-y-16">
        <SectionHeader
          title="Perguntas"
          description="Aqui você encontrará respostas para as duvidas mais frequentes sobre o funcionamento do projeto e como ele pode ajudar os alunos"
          className="items-center lg:text-center"
        />
        <Accordion
          type="single"
          collapsible
          className="m-auto
        w-full max-w-[800px] border-t-2 "
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold">
              Como funciona o projeto?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-bold">
              Como posso me beneficiar?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-bold">
              Quem pode participar?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-bold">
              Como me inscrevo?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="font-bold">
              Qual é o custo?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Section>
  )
}
