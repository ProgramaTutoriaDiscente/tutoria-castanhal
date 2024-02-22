import SectionHeader from "@/components/section/section-header";
import { AreasCard } from "./areas-card";
import { Section } from "@/components/section/section";
// import CardImageLinguagens from 'public/images/areas-card-image-linguagens.jpg'
// import CardImageMatematica from 'public/images/areas-card-image-matematica.jpg'
// import CardImageInformatica from 'public/images/areas-card-image-informatica.jpg'

export function AreasSection() {
  return (
    <div>
      <Section>
        <div className="space-y-20">
          <SectionHeader title="Áreas" subtitle="Apoio Academico" description="Tutoria online para estudantes com dificuldades acadêmicas" className=" items-center" />
          <div className="h-max-[640px] grid h-full gap-6 lg:grid-cols-3">
            <AreasCard
              title="Linguagens"
              description="Apoio acadêmico personalizado para ajudar você a ter sucesso."
              background={"bg-[url('/images/areas-card-image-linguagens.jpg')]"}
            />
            <AreasCard
              title="Matemática"
              description="Oferecer suporte acadêmico de qualidade para estudantes."
              background={"bg-[url('/images/areas-card-image-matematica.jpg')]"}
            />
            <AreasCard
              title="Informática"
              description="Contribuir para o sucesso acadêmico de estudantes em todo o país."
              background={
                "bg-[url('/images/areas-card-image-informatica.jpg')]"
              }
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
// bg-[url('/images/areas-card-image-linguagens.jpg')]
