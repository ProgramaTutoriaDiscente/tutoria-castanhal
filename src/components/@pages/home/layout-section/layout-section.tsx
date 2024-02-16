import { MaxWidthWrapper } from '@/components/shared/max-width-wrapper'
import Image from 'next/image'

export function LayoutSection() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="two-cols max-h-[640px] ">
          <Image
            src={'/images/layout-section-image.jpg'}
            width={616}
            height={640}
            alt="Imagem ilustrativa"
            className="h-[640px]"
          />
          <div className="col-y-center gap-4">
            <span className=" font-semibold">Supere</span>
            <h3 className="text-4xl font-bold">
              Alcance o sucesso acadêmico com nossas tutorias
            </h3>
            <p className="mt-2 text-lg">
              Participe de nossas tutorias e workshops e obtenha os benefícios
              de um ensino personalizado e de qualidade. Nossos tutores
              experientes ajudarão você a superar seus desafios acadêmicos.
            </p>
            <div className="mt-4 flex gap-6">
              <div>
                <span className="text-4xl font-bold">50%</span>
                <p className="text-base">
                  Aulas personalizadas e workshops interativos
                </p>
              </div>
              <div>
                <span className="text-4xl font-bold">50%</span>
                <p className="text-base">
                  Materiais de estudo e recursos úteis
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  )
}
