import { cn } from '@/utils/cn'

export default function Section({ children, className, id }) {
  return (
    <section id={id} className={cn('py-16 lg:py-24', className)}>
      <div className="container-content">{children}</div>
    </section>
  )
}
