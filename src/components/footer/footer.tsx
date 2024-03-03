import Image from 'next/image'
import Link from 'next/link'
import { Section } from '../section/section'
import { SectionHeader } from '../section/section-header'
import { buttonVariants } from '../shadcn-ui/button'
import { Separator } from '../shadcn-ui/separator'

export function Footer() {
  return (
    <footer className="border-t">
      <Section className="py-20">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <SectionHeader
            className="mb-0"
            title="Aprenda e se transforme"
            description="Descubra como nossas sessões de tutoria podem ajudá-lo a ter sucesso acadêmico."
          />
          <div className="mt-4 flex flex-row justify-center gap-4 lg:mt-0 lg:flex-col">
            <Link href="https://google.com" className={buttonVariants()}>
              Inscreva-se
            </Link>
            <Link
              href="/sobre"
              className={buttonVariants({ variant: 'secondary' })}
            >
              Saiba mais
            </Link>
          </div>
        </div>
      </Section>

      <div className="border-t bg-secondary/30 text-muted-foreground">
        <Section className="py-8">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between sm:gap-0">
            <Link href="/" className="inline-block max-w-28">
              <Image
                src="/logo.svg"
                alt="Logo da Tutoria Castanhal"
                width={112}
                height={41}
              />
            </Link>

            <nav className="flex items-center gap-8">
              <Link
                href="/sobre"
                className="underline-offset-4 hover:underline"
              >
                Sobre Nós
              </Link>
              <Link href="/blog" className="underline-offset-4 hover:underline">
                Blog
              </Link>
              <Link
                href="/contato"
                className="underline-offset-4 hover:underline"
              >
                Contato
              </Link>
            </nav>
          </div>

          <Separator className="my-8" />

          <div>
            <p className="text-center">
              Tutoria Castanhal &copy; {new Date().getFullYear()} - Feito por
              Alícia e Aridan
            </p>
          </div>
        </Section>
      </div>
    </footer>
  )
}
