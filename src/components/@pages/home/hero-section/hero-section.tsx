import { Section } from '@/components/section/section'
import { buttonVariants } from '@/components/shadcn-ui/button'
import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <Section>
      <div className="two-cols">
        <div className="col-y-center gap-6">
          <h2 className="text-5xl font-bold">Programa de tutoria discente</h2>
          <p className="text-lg">
            Fornecemos suporte personalizado e workshops para auxiliá-lo na
            aprendizagem de conceitos fundamentais para a faculdade.
          </p>
          <div className="mt-4 flex gap-4">
            <Link href={'/sobre'} className={buttonVariants()}>
              Saiba mais
            </Link>
            <Link
              href={'https://google.com.br'}
              className={buttonVariants({ variant: 'outline' })}
            >
              Inscreva-se
            </Link>
          </div>
        </div>
        <Image
          src={'/images/hero-section-image.jpg'}
          width={616}
          height={640}
          alt=""
          priority
        />
      </div>
    </Section>
  )
}
