import { RichText as HygraphRichText } from '@graphcms/rich-text-react-renderer'
import Image from 'next/image'
import Link from 'next/link'
import { ComponentProps } from 'react'

type RichTextProps = ComponentProps<typeof HygraphRichText>

export function RichText({ ...props }: RichTextProps) {
  return (
    <HygraphRichText
      {...props}
      renderers={{
        h1: ({ children }) => (
          <h2 className="text-4xl font-bold sm:text-5xl">{children}</h2>
        ),
        h2: ({ children }) => (
          <h2 className="text-3xl font-bold sm:text-4xl">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-2xl font-bold sm:text-3xl">{children}</h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-xl font-bold sm:text-2xl">{children}</h4>
        ),
        h5: ({ children }) => (
          <h5 className="text-lg font-bold sm:text-xl">{children}</h5>
        ),
        h6: ({ children }) => (
          <h6 className="text-base font-bold sm:text-lg">{children}</h6>
        ),
        p: ({ children }) => (
          <p className="text-muted-foreground">{children}</p>
        ),
        bold: ({ children }) => (
          <b className="font-bold text-foreground">{children}</b>
        ),
        underline: ({ children }) => <u className="underline">{children}</u>,
        blockquote: ({ children }) => (
          <blockquote className="w-full border-s-4 border-primary/50 bg-secondary/50 p-4 text-foreground">
            {children}
          </blockquote>
        ),
        img: ({ src, width, height, altText }) => (
          <div className="w-full">
            <Image
              src={src as string}
              width={width}
              height={height}
              alt={altText as string}
              className="w-full rounded-xl border"
            />
          </div>
        ),
        code_block: ({ children }) => (
          <div className="overflow-hidden overflow-x-scroll rounded-xl border bg-secondary p-4">
            <pre>
              <code className="block w-full">{children}</code>
            </pre>
          </div>
        ),
        ul: ({ children }) => (
          <ul className="list-inside list-disc">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-inside list-decimal">{children}</ol>
        ),
        a: ({ children, href, openInNewTab, title }) => (
          <Link
            href={href as string}
            target={openInNewTab ? '_blank' : '_self'}
            className="text-primary underline"
            title={title}
          >
            {children}
          </Link>
        ),
      }}
    />
  )
}
