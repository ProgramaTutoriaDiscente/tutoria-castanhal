import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from '../shadcn-ui/button'

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  title: string
  description?: string
  subtitle?: string
  label?: string
  href?: string
  withButton?: boolean
}

export function SectionHeader({
  title,
  description,
  subtitle,
  className,
  withButton,
  label,
  href,
  ...props
}: SectionHeaderProps) {
  if (withButton) {
    return (
      <div
        className={cn(
          'mb-8 flex w-full flex-col items-center justify-center  space-y-1 min-[448px]:flex-row min-[448px]:justify-between',
          className,
        )}
      >
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-start">
          {title}
        </h2>
        {label && href && (
          <Link
            className={buttonVariants({ variant: 'link' })}
            href={`${href}`}
          >
            {label} &rarr;
          </Link>
        )}
      </div>
    )
  }
  return (
    <div
      className={cn('mb-8 flex flex-col items-center gap-4', className)}
      {...props}
    >
      {subtitle && <span className="font-semibold">{subtitle}</span>}
      <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-start">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'max-w-prose text-center text-lg text-muted-foreground lg:text-start',
            className,
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
