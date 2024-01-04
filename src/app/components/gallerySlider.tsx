'use client';
import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import styles from '../css/slider.module.css'

const options = {
    loop: true,
    
}

export default function GallerySlider({ images }: any) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, active: true, align: 'start', direction: 'rtl', startIndex: 0, breakpoints: { '(min-width: 990px)': { active: false } } })
  return (
    <div className={styles.embla} dir="rtl">
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {images.map((image: any) => (
            <div className={styles.embla__slide} key={image.name}>
              <Image
                src={`/draws/${image.name}.png`}
                alt={image.name}
                width={image.width}
                height={image.height}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}