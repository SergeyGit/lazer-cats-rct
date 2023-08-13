import React from 'react';
import { PrismicLink, PrismicRichText } from '@prismicio/react';
import style from '@/styles/modules/404.module.scss';
import { Container } from 'react-bootstrap';
import cn from 'classnames';
import { PrismicNextImage } from '@prismicio/next';

/**
 * @typedef {import("@prismicio/client").Content.Page404Slice} Page404Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<Page404Slice>} Page404Props
 * @param { Page404Props }
 */
const Page404 = ({ slice }) => (
  <section className={style.section}>
    <Container style={{ zIndex: 2 }}>
      <div className={style.content}>
        <div className={style.logo}>
          <PrismicNextImage field={slice.primary.logo} loading="lazy" alt="logo" />
        </div>
        <div className={style.caption}>
          <PrismicRichText field={slice.primary.title} />
        </div>
        <div className={cn(style.link, 'link flex-shrink-0')}>
          <PrismicLink field={slice.primary.link}>{slice.primary.title_link}</PrismicLink>
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
  </section>
);

export default Page404;
