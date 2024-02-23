import { Section } from '@/components/section/section'
import { buttonVariants } from '@/components/shadcn-ui/button'
import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <Section enableBg>
      <div className="grid gap-8 lg:gap-6 ">
        <div className="flex flex-col items-center justify-center gap-4 ">
          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
            Programa de Tutoria Discente
          </h1>
          <p className="max-w-prose text-center text-lg text-muted-foreground ">
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
        <div className="hidden items-center justify-center md:flex">
          <Image
            src={'/images/hero-section-image.jpg'}
            width={616}
            height={640}
            alt="Hero Section Alt"
            className="mt-4 rounded-2xl"
            priority
          />
        </div>
      </div>
    </Section>
  )
}
