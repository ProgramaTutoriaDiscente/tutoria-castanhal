import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'
import { BsYoutube } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { Section } from '../section/section'
import { buttonVariants } from '../shadcn-ui/button'

export function Footer() {
  return (
    <footer>
      <div className="bg-secondary-foreground">
        <Section className="">
          <div className="flex justify-between items-start gap-4 sm:items-center flex-col sm:flex-row sm:text-start ">
            <div className="text-background">
              <h3 className="text-4xl font-bold">
                Aprenda e se destaque acadêmico
              </h3>
              <p className="text-lg">
                Descubra como nossas sessões de tutoria podem ajudá-lo a ter
                sucesso acadêmico.
              </p>
            </div>
            <div className="flex justify-start gap-4 pt-4 sm:justify-end sm:pt-0">
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
        </Section>
      </div>
      <div>
        <Section>
          <div>
            <div className="two-cols justify-center text-center md:justify-between md:text-start">
              <div className="space-y-8 text-sm">
                <Link href="/">
                  <span className="text-2xl font-bold">Logo</span>
                </Link>
                <div className=" flex flex-col gap-6">
                  <div>
                    <span className="font-semibold">Endereço</span>
                    <p>Nível 1, Rua Exemplo, Sydney NSW 2000</p>
                  </div>
                  <div>
                    <span className="font-semibold">Contato</span>
                    <p className="underline">1800 123 4567</p>
                    <p className="underline">info@relume.io</p>
                  </div>

                  <div className="flex justify-center gap-3 md:justify-start">
                    <Link href="#">
                      <FaFacebook />
                    </Link>
                    <Link href="#">
                      <InstagramLogoIcon />
                    </Link>
                    <Link href="#">
                      <TwitterLogoIcon />
                    </Link>
                    <Link href="#">
                      <LinkedInLogoIcon />
                    </Link>
                    <Link href="#">
                      <BsYoutube />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-20 pt-6 md:justify-end md:pr-20 md:pt-0">
                <div className="space-y-3">
                  <div className="inline-block">
                    <Link href="#">Link</Link>
                  </div>
                  <div className="block">
                    <Link href="#">Link</Link>
                  </div>
                  <div className="block">
                    <Link href="#">Link</Link>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="block">
                    <Link href="#">Link</Link>
                  </div>
                  <div className="block">
                    <Link href="#">Link</Link>
                  </div>
                  <div className="block">
                    <Link href="#">Link</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 border-t-2 pt-8 md:flex md:items-center md:justify-between">
              <div className="text-center md:text-left">
                <p className="text-sm text-muted-foreground">
                  &copy; {new Date().getFullYear()} All Rights Reserved
                </p>
              </div>
              <div className="mt-4 flex items-center justify-center md:mt-0">
                <div className="flex space-x-8">
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-gray-600"
                  >
                    Terms
                  </Link>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-gray-600"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-gray-600"
                  >
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </footer>
  )
}
