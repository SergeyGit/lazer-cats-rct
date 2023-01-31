import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import style from '@/styles/modules/socialFooter.module.scss';
import { PrismicNextImage } from '@prismicio/next';

/**
 * @typedef {import("@prismicio/client").Content.SocialFooterSlice} SocialFooterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SocialFooterSlice>} SocialFooterProps
 * @param { SocialFooterProps }
 */
const SocialFooter = ({ slice }) => (
  <section className={style.section}>
    <PrismicNextImage field={slice.primary.image} loading="lazy" />
  </section>
);

export default SocialFooter;
