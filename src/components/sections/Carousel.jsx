import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import carouselImages from '@/data/carouselImages'
import { cn } from '@/utils/cn'

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  ])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div className="relative select-none">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {carouselImages.map(({ id, src, alt }) => (
            <div key={id} className="flex-none w-full">
              <div className="aspect-video lg:aspect-[21/9]">
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        aria-label="Slide anterior"
        className={cn(
          'absolute left-3 top-1/2 -translate-y-1/2',
          'bg-primary-900/70 hover:bg-primary-900 text-white',
          'w-10 h-10 rounded-full flex items-center justify-center',
          'transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white',
        )}
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={scrollNext}
        aria-label="Próximo slide"
        className={cn(
          'absolute right-3 top-1/2 -translate-y-1/2',
          'bg-primary-900/70 hover:bg-primary-900 text-white',
          'w-10 h-10 rounded-full flex items-center justify-center',
          'transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white',
        )}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
}
