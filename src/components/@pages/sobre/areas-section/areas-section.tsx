import { MaxWidthWrapper } from '@/components/shared/max-width-wrapper'
import { AreasCard } from './areas-card'

export function AreasSection() {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="space-y-20 py-28">
          <div className="space-y-4 text-center">
            <span className="font-semibold">Apoio Academico</span>
            <h2 className="text-4xl font-bold">Áreas</h2>
            <p className="mt-2 text-lg">
              Tutoria online para estudantes com dificuldades acadêmicas
            </p>
          </div>
          <div className="grid max-h-[500px] grid-cols-3 gap-6">
            <AreasCard
              title="Linguagens"
              description="Apoio acadêmico personalizado para ajudar você a ter sucesso em seus estudos."
            />
            <AreasCard
              title="Matemática"
              description="Oferecer suporte acadêmico de qualidade para estudantes de todas as áreas."
            />
            <AreasCard
              title="Informática"
              description="Contribuir para o sucesso acadêmico de estudantes em todo o país."
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}
