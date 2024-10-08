'use client';
import useEmblaCarousel from 'embla-carousel-react';
import AutoHeight from 'embla-carousel-auto-height';
import Image from 'next/image';
import styles from '../css/slider.module.css'
import { useEffect } from 'react';

const options = {
    loop: true,
    
}

export default function GallerySlider({ images }: any) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, active: true, align: 'start', direction: 'rtl', startIndex: 0 }, [AutoHeight()])
  return (
    <div className={styles.embla} dir="rtl">
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {images.map((image: any, index: any) => (
            index == 0 ?
            <div className={styles.embla__slide} key={image.name}>
              <Image
                src={`/draws/${image.name}.jpg`}
                alt={image.name}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '600px', height: 'auto' }}
                priority= {true}
                onLoadingComplete={() => emblaApi?.reInit()}
              />
            </div>
            :
            <div className={styles.embla__slide} key={image.name}>
              <Image
                src={`/draws/${image.name}.jpg`}
                alt={image.name}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '600px', height: 'auto' }}
                priority= {true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}