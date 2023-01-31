import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import style from '@/styles/modules/tournaments.module.scss';
import { PrismicNextImage } from '@prismicio/next';

/**
 * @typedef {import("@prismicio/client").Content.TournamentsSlice} TournamentsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TournamentsSlice>} TournamentsProps
 * @param { TournamentsProps }
 */
const Tournaments = ({ slice }) => (
  <section className={style.section}>
    <PrismicNextImage field={slice.primary.image} loading="lazy" />
  </section>
);

export default Tournaments;
