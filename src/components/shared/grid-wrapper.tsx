import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import React, { ReactNode } from 'react'

const GridWrapperVariants = cva('grid grid-cols-1 gap-6 lg:gap-8', {
  variants: {
    columns: {
      default: 'sm:grid-cols-2 lg:grid-cols-3',
      two: 'sm:grid-cols-2',
    },
  },
  defaultVariants: {
    columns: 'default',
  },
})

interface GridWrapperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof GridWrapperVariants> {
  className?: string
  children: ReactNode
}

export function GridWrapper({
  className,
  children,
  columns,
  ...props
}: GridWrapperProps) {
  return (
    <div className={cn(GridWrapperVariants({ columns }), className)} {...props}>
        {children}
    </div>
  )
}
