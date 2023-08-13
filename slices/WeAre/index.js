import { PrismicRichText } from '@prismicio/react';
import { Container } from 'react-bootstrap';
import style from '@/styles/modules/weare.module.scss';
import { PrismicNextImage } from '@prismicio/next';
import cn from 'classnames';

/**
 * @typedef {import("@prismicio/client").Content.WeAreSlice} WeAreSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WeAreSlice>} WeAreProps
 * @param { WeAreProps }
 */
const WeAre = ({ slice }) => {
  return (
    <section className={style.section}>
      <Container style={{ zIndex: 2 }}>
        <div className={style.content}>
          <div className={cn(style.caption, 'multicolor-title fz-160')}>
            <PrismicRichText field={slice.primary.title} />
          </div>
          <div className={cn(style.h6, 'h6')}>
            <PrismicRichText field={slice.primary.description} />
          </div>
        </div>
      </Container>
      <div className={cn(style.bg, 'd-flex align-items-center')}>
        <PrismicNextImage
          field={slice.primary.background_image}
          fill={true}
          loading="lazy"
          alt="bg"
        />
      </div>
      <div className={style.logo}>
        <PrismicNextImage field={slice.primary.logo} loading="lazy" alt="logo" />
      </div>
      <div className={cn(style.smoke2, 'd-flex align-items-center')}>
        <PrismicNextImage field={slice.primary.smoke2} fill={true} loading="lazy" alt="bg" />
      </div>
      <div className={cn(style.smoke, 'd-flex align-items-center')}>
        <PrismicNextImage field={slice.primary.smoke} fill={true} loading="lazy" alt="bg" />
      </div>
    </section>
  );
};

export default WeAre;
