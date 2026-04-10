import { ReactNode } from 'react'

interface SectionTitleProps {
  label?: string
  title: string | ReactNode
  subtitle?: string
  centered?: boolean
}

export default function SectionTitle({ label, title, subtitle, centered = false }: SectionTitleProps) {
  const alignClasses = centered ? 'text-center' : ''
  
  return (
    <div className={`space-y-3 ${alignClasses}`}>
      {label && (
        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
          {label}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
