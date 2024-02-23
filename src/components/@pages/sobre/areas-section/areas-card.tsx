import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface AreasCardProps {
  title: string;
  description: string;
  background: string;
}
export function AreasCard({ title, description, background }: AreasCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl w-full border shadow">
      <div className="relative h-[256px] sm:h-[364px]">
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-foreground to-transparent" />
        <Image 
            src={background}
            width={800}
            height={800}
            alt="imagem ilustrativa"
            className="absolute top-0 right-0 bottom-0 left-0 -z-10 h-contain"
        />
        <div className="absolute bottom-0 p-6 text-background space-y-2">
          <h3 className="text-2xl sm:text-3xl font-bold">{title}</h3>
          <p className="text-sm">{description}</p>
          <Link href="#" className="inline-flex text-sm sm:text-base font-semibold">
            Saiba Mais <ChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
