import { cn } from '@/utils/cn'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

  const variants = {
    primary:
      'bg-accent-500 text-white hover:bg-accent-600 focus-visible:ring-accent-500',
    secondary:
      'bg-white text-primary-900 border-2 border-primary-900 hover:bg-primary-900 hover:text-white focus-visible:ring-primary-900',
    outline:
      'border-2 border-white text-white hover:bg-white hover:text-primary-900 focus-visible:ring-white',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}
