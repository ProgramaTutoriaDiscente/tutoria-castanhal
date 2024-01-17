import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import { Item } from '@radix-ui/react-dropdown-menu'
import {
  Divide,
  HelpingHand,
  Laptop,
  NotebookText,
  PencilRuler,
  Users,
} from 'lucide-react'
import next from 'next'
import build from 'next/dist/build'
import Image from 'next/image'
import Link from 'next/link'

const perks = [
  {
    name: 'Suporte acadêmico',
    Icon: HelpingHand,
    description:
      'Assistência na compreensão de conceitos básicos, fortalecendo o aprendizado e desempenho dos tutorados.',
  },
  {
    name: 'Abordagem personalizada',
    Icon: PencilRuler,
    description:
      'Atenção individualizada e adaptação de métodos de tutoria para atender às necessidades específicas dos discentes',
  },
  {
    name: 'Tutoria por Pares',
    Icon: Users,
    description:
      'Estudantes veteranos com bom desempenho auxiliam discentes com dificuldades acadêmicas',
  },
]

const areas = [
  {
    name: 'Matemática',
    Icon: Divide,
    subtitle: 'Build anything',
    image: '/images/vrum',
    description:
      "Because Tailwind is so low-level, it never encourages you to design the same site twice. Even with the same color palette and sizing scale, it's easy to build the same component with a completely different look in the next project.",
    href: '/sobre#matematica',
  },
  {
    name: 'Linguagens',
    Icon: NotebookText,
    subtitle: 'Build anything',
    image: '/images/vrum',
    description:
      "Because Tailwind is so low-level, it never encourages you to design the same site twice. Even with the same color palette and sizing scale, it's easy to build the same component with a completely different look in the next project.",
    href: '/sobre#linguagens',
  },
  {
    name: 'Informática Básica',
    Icon: Laptop,
    subtitle: 'Build anything',
    image: '/images/vrum',
    description:
      "Because Tailwind is so low-level, it never encourages you to design the same site twice. Even with the same color palette and sizing scale, it's easy to build the same component with a completely different look in the next project.",
    href: '/sobre#informatica',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <MaxWidthWrapper>
        <div className="mx-auto flex max-w-4xl flex-col items-center py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-accent-foreground sm:text-6xl">
            Programa de Tutoria Discente
          </h1>
          <p className="mt-6 max-w-prose text-lg text-muted-foreground">
            Promovendo o desenvolvimento pessoal, acadêmico e profissional dos
            alunos, orientando-os em direção à formação integral.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a href="#" className={buttonVariants()}>
              Quero participar
            </a>
            <Button variant="ghost">Nossas áreas &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Perks Section */}
      <section className="border-y border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((item) => (
              <div
                key={item.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="flex justify-center md:flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-900">
                    {<item.Icon className="h-1/3 w-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-sn mt-3 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* All Areas Section */}
      <section>
        <MaxWidthWrapper className="flex flex-col gap-12 py-20 md:gap-20">
          {areas.map((area) => (
            <div
              className="flex flex-col gap-3 md:gap-6 lg:flex-row"
              key={area.name}
            >
              <div className="max-h-96 w-full overflow-hidden rounded-3xl border border-gray-200 bg-red-800 lg:w-1/2">
                <Image
                  alt={area.name}
                  src={area.image}
                  width={100}
                  height={400}
                />
              </div>
              <div className="flex w-full flex-col items-start justify-center gap-2 lg:w-1/2 lg:gap-4">
                <span className="font-semibold text-red-500">
                  {area.subtitle} <area.Icon className="inline" />{' '}
                </span>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  {area.name}
                </h2>
                <p className="text-base text-muted-foreground md:text-lg">
                  {area.description}
                </p>
                <Link href={area.href} className={buttonVariants()}>
                  Ver conteúdos &rarr;
                </Link>
              </div>
            </div>
          ))}
        </MaxWidthWrapper>
      </section>

      {/* Contact Section */}
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((item) => (
              <div
                key={item.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="flex justify-center md:flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-900">
                    {<item.Icon className="h-1/3 w-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-sn mt-3 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
