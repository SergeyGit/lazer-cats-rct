import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import style from '@/styles/modules/mainSlider.module.scss';
import cn from 'classnames';
import { PrismicNextImage } from '@prismicio/next';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useMediaListener } from '@/hooks/MediaListener';
import { isFilled } from '@prismicio/helpers';
import { PrismicLink, PrismicRichText } from '@prismicio/react';
import { useRouter } from 'next/router';

/**
 * @typedef {import("@prismicio/client").Content.MainSliderSlice} MainSliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MainSliderSlice>} MainSliderProps
 * @param { MainSliderProps }
 */
const MainSlider = ({ slice }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    drag: true,
    slides: { perView: 1, origin: 'auto' },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const { locale } = useRouter();

  useEffect(() => {
    setCurrentSlide(0);
  }, [locale]);

  const isMobile = useMediaListener('(max-width: 600px)');

  const handleButtonClick = (props) => {
    if (props.currentTarget.getAttribute('data-value') === 'increment') {
      instanceRef.current?.next();
    }
    if (props.currentTarget.getAttribute('data-value') === 'decrement') {
      instanceRef.current?.prev();
    }
  };
  const length = slice?.items?.length;

  return (
    <section className={style.section} key={locale}>
      <div className={cn('keen-slider', style.list)} ref={sliderRef}>
        {slice?.items?.map(
          ({ image, mobile_image, slide_caption, slide_link_text, slide_link }) => (
            <div className={cn(style.sliderItem, 'keen-slider__slide')} key={image.url}>
              <PrismicNextImage
                field={isMobile ? mobile_image : image}
                fill
                loading="lazy"
                alt="slide"
              />
              {(isFilled.link(slide_link) || isFilled.richText(slide_caption)) && (
                <div className={style.sliderMore}>
                  {isFilled.richText(slide_caption) && <PrismicRichText field={slide_caption} />}
                  {isFilled.link(slide_link) && (
                    <div className={cn(style.seeAll, 'link')}>
                      <PrismicLink field={slide_link}>{slide_link_text}</PrismicLink>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        )}
      </div>
      <div className={style.navigation}>
        <Container>
          <div className="d-flex align-items-end">
            <div className={style.bigNumber}>
              {currentSlide <= 8 && '0'}
              {currentSlide + 1}
            </div>
            <div>
              /{length <= 9 && '0'}
              {length}
            </div>
          </div>
          <div className={cn(style.navigationStatus, 'd-flex align-items-center')}>
            <div
              onClick={handleButtonClick}
              data-value="decrement"
              className="cursorPointer helveticaFont"
            >
              {slice.primary.prev_text}
            </div>
            <div className={style.navigationStatusRow}>
              <div
                className={style.navigationStatusIndicator}
                style={{
                  width: `${100 / length}%`,
                  transform: `translateX(${currentSlide * 100}%)`,
                }}
              />
            </div>
            <div
              onClick={handleButtonClick}
              data-value="increment"
              className="cursorPointer helveticaFont"
            >
              {slice.primary.next_text}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default MainSlider;
