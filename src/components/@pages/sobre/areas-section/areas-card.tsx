import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface AreasCardProps {
  title: string;
  description: string;
  background?: string;
}
export function AreasCard({ title, description, background }: AreasCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-cover bg-center",
        background,
      )}
    >
      {/* <Image 
        src={background}
        width={500}
        height={500}
        alt="imagem ilustrativa"
        className="absolute -z-10 h-full"
      /> */}
      <div className="flex h-[300px] flex-col justify-end bg-gradient-to-b   from-transparent to-foreground/85 lg:h-[500px] ">
        <div className="p-8 text-background">
          <span className="font-semibold">Apoio Acadêmico</span>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold">{title}</h3>
            <p>{description}</p>
          </div>

          <Link href="#" className="flex gap-2 mt-6">
            Saiba Mais <ChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
