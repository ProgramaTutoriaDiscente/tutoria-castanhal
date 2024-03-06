import { Section } from '@/components/section/section'
import { SectionHeader } from '@/components/section/section-header'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/shadcn-ui/accordion'
import { siteConfig } from '@/config/site'
import Link from 'next/link'

export function FaqSection() {
  return (
    <Section>
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
            A equipe do PTD é formada por discentes mais experientes
            responsáveis por ensinar a base de matemática, informática e
            linguagens para o seu curso
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-bold">
            Como posso me beneficiar?
          </AccordionTrigger>
          <AccordionContent>
            Se você tem dificuldades acadêmicas, o Programa de Tutoria Discente
            pode te ajudar a revisar assuntos importantes e aprender
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-bold">
            Quem pode participar?
          </AccordionTrigger>
          <AccordionContent>
            Qualquer discente pode participar do projeto
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="font-bold">
            Como me inscrevo?
          </AccordionTrigger>
          <AccordionContent>
            Para se inscrever basta acessar o formulário disponibilizado{' '}
            <Link href={siteConfig.form}>neste link</Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="font-bold">
            Qual é o custo?
          </AccordionTrigger>
          <AccordionContent>
            Nenhum! O custo para participar das aulas e oficinas é zero.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Section>
  )
}
