import { MaxWidthWrapper } from '@/components/shared/max-width-wrapper'
import { buttonVariants } from '@/components/shadcn-ui/button'
import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="two-cols">
          <div className="flex flex-col justify-center gap-6">
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
      </MaxWidthWrapper>
    </>
  )
}
