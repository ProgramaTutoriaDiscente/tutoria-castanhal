import { Section } from '@/components/section/section'
import { SectionHeader } from '@/components/section/section-header'
import Image from 'next/image'
import LayoutSectionImage from '../../../../public/images/layout-section-image.jpg'

export function LayoutSection() {
  return (
    <Section background="gray">
      <div className="grid gap-12 lg:grid-cols-2 ">
        <div className="hidden items-center justify-center lg:flex">
          <Image
            src={LayoutSectionImage}
            placeholder="blur"
            loading="lazy"
            alt="Pessoa estudando com livro na mão e notebook na frente"
            className="h-[640px] rounded-2xl"
          />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <SectionHeader
            title="Alcance o sucesso acadêmico com nossas tutorias"
            description="Participe de nossas tutorias e oficinas e obtenha os benefícios de
            um ensino personalizado e de qualidade. Nossos tutores experientes
            ajudarão você a superar seus desafios acadêmicos."
          />
          <div className="grid grid-cols-2 justify-center gap-4">
            <div className="flex flex-col items-center gap-2 lg:items-start">
              <span className="text-4xl font-bold">50%</span>
              <p className="text-center lg:text-start">
                Aulas personalizadas e oficinas interativas
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 lg:items-start">
              <span className="text-4xl font-bold">50%</span>
              <p className="text-center lg:text-start">
                Materiais de estudo e recursos úteis
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
