import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import React, { ReactNode } from 'react'

const SectionVariants = cva('relative py-20 overflow-hidden ', {
  variants: {
    background: {
      default: '',
      gray: 'bg-secondary/30 border-y',
    },
  },
  defaultVariants: {
    background: 'default',
  },
})

interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof SectionVariants> {
  className?: string
  children: ReactNode
  enableBg?: boolean
}

export function Section({
  className,
  children,
  background,
  enableBg,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(SectionVariants({ background }), className)}
      {...props}
    >
      {enableBg && <div className="dots-bg"></div>}
      <div className="container">{children}</div>
    </section>
  )
}
// enableBg && <div className="dots-bg"></div>
