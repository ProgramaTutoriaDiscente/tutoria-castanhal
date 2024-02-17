import React from 'react'

interface SectionHeaderProps {
  title: string
  description?: string
  subtitle?: string
}

export default function SectionHeader({
  title,
  description,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      {subtitle && <span className="font-semibold">{subtitle}</span>}
      <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-start">
        {title}
      </h2>
      <p className="max-w-prose text-center text-lg text-muted-foreground lg:text-start">
        {description}
      </p>
    </div>
  )
}
