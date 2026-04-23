import { cn } from '@/utils/cn'

export default function SectionTitle({ title, subtitle, centered = false, light = false }) {
  return (
    <div className={cn('mb-12', centered && 'text-center')}>
      <h2
        className={cn(
          'font-heading text-3xl lg:text-4xl font-bold mb-3',
          light ? 'text-white' : 'text-primary-900',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn('text-lg max-w-2xl', light ? 'text-primary-100' : 'text-gray-500', centered && 'mx-auto')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
