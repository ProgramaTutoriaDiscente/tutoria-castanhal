import { AreasCard } from './areas-card'
import { Section } from '@/components/section/section'

export function AreasSection() {
  return (
    <div>
      <Section>
        <div className="space-y-20">
          <div className="space-y-4 text-center">
            <span className="font-semibold">Apoio Academico</span>
            <h2 className="text-4xl font-bold">Áreas</h2>
            <p className="mt-2 text-lg">
              Tutoria online para estudantes com dificuldades acadêmicas
            </p>
          </div>
          <div className="h-max-[640px] grid h-full gap-6 lg:grid-cols-3">
            <AreasCard
              title="Linguagens"
              description="Apoio acadêmico personalizado para ajudar você a ter sucesso."
              background="bg-[url('/images/areas-card-image-linguagens.jpg')]"
            />
            <AreasCard
              title="Matemática"
              description="Oferecer suporte acadêmico de qualidade para estudantes."
              background="bg-[url('/images/areas-card-image-matematica.jpg')]"
            />
            <AreasCard
              title="Informática"
              description="Contribuir para o sucesso acadêmico de estudantes em todo o país."
              background="bg-[url('/images/areas-card-image-informatica.jpg')]"
            />
          </div>
        </div>
      </Section>
    </div>
  )
}
