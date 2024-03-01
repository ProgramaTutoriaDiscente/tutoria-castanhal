import { Section } from '@/components/section/section'
import { buttonVariants } from '@/components/shadcn-ui/button'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  // TODO: 404 Page
  return (
  <Section className='relative h-full w-full'>
    <div className="absolute -z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"/>
    <div className='flex justify-between items-center'>
      <div>
        <div className='flex gap-2 items-center'>
          <h1 className='text-center text-5xl'> <span className='font-bold'>404</span> Not Found</h1>
          <Search className='color-foreground h-max'/>
        </div>
        <p>Oops! Ocorreu um erro e não conseguimos encontrar a página desejada.</p>
        <Link href={'/'} className={buttonVariants()}>
          Voltar para home
        </Link>
      </div>
      <Image src="/images/not-found-image.svg" width={400} height={400} alt='imagem ilustrativa'/>
    </div>
  </Section>
  )
}
