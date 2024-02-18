import { Section } from '@/components/section/section'
import { buttonVariants } from '@/components/shadcn-ui/button'
import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-6">
        <div className="flex flex-col items-center justify-center gap-4 lg:items-start">
          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-start">
            Programa de Tutoria Discente
          </h1>
          <p className="max-w-prose text-center text-lg text-muted-foreground lg:text-start">
            Fornecemos suporte personalizado e workshops para auxiliá-lo na
            aprendizagem de conceitos fundamentais para a faculdade.
          </p>
          <div className="space-x-4">
            <Link href={'/sobre'} className={buttonVariants()}>
              Saiba mais
            </Link>
            <Link
              href={
                'https://docs.google.com/forms/d/e/1FAIpQLSdle9P_0kVByW5itjUESMdsMecKLXeBQb_aEoMextOO52lj2A/viewform?pli=1'
              }
              className={buttonVariants({ variant: 'outline' })}
            >
              Inscreva-se
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={'/images/hero-section-image.jpg'}
            width={616}
            height={640}
            alt="Hero Section Alt"
            className="rounded-2xl"
            priority
          />
        </div>
      </div>
    </Section>
  )
}
