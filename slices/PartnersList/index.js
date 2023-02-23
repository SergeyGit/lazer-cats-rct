import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import style from '@/styles/modules/partnersList.module.scss';
import { PrismicNextImage } from '@prismicio/next';
import { Container } from 'react-bootstrap';
import cn from 'classnames';

/**
 * @typedef {import("@prismicio/client").Content.PartnersListSlice} PartnersListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PartnersListSlice>} PartnersListProps
 * @param { PartnersListProps }
 */
const PartnersList = ({ slice }) => (
  <section className={style.section}>
    <Container>
      {slice?.items?.map(({ logo, gradient_main_color, caption, text, link, title_link }) => (
        <div className={cn(style.card, 'd-flex flex-column flex-md-row')}>
          <div
            className={style.cardBg}
            style={{
              background: `linear-gradient(82.19deg, ${gradient_main_color} 0%, rgba(255, 0, 0, 0) 100%);`,
            }}
          />
          <div className={cn(style.image, 'flex-shrink-0')}>
            <PrismicNextImage field={logo} fill loading="lazy" alt="caption" />
          </div>
          <div
            className={cn(
              style.right,
              'd-flex flex-column align-items-center align-items-md-start'
            )}
          >
            <div className="h5">{caption}</div>
            <div className={style.text}>
              <PrismicRichText field={text} />
            </div>
            <div className={cn(style.link, 'link flex-shrink-0')}>
              <a href={link?.url} target="_blank" rel="noopener noreferrer">
                {title_link}
              </a>
            </div>
          </div>
        </div>
      ))}
    </Container>
    <div className={style.bg}>
      <PrismicNextImage field={slice.primary.background_image} fill loading="lazy" alt="bg" />
    </div>
  </section>
);

export default PartnersList;
