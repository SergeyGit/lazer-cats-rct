import { Col, Container, Row } from 'react-bootstrap';
import style from '@/styles/modules/playerGear.module.scss';
import { PrismicNextImage } from '@prismicio/next';
import cn from 'classnames';
// import { BADGES_COLORS } from '../../constants/constant';
// import Image from 'next/image';
// import Calendar from '../../assets/images/icons/utilities/Calendar.svg';
// import { getDate } from '../OngoingTournaments';
// import Star from '../../assets/images/icons/utilities/Star.svg';
import { isFilled } from '@prismicio/helpers';
import { PrismicRichText } from '@prismicio/react';
import React from 'react';

/**
 * @typedef {import("@prismicio/client").Content.PlayerGearSlice} PlayerGearSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PlayerGearSlice>} PlayerGearProps
 * @param { PlayerGearProps }
 */
const PlayerGear = ({ slice }) => (
  <section className={style.section}>
    <Container>
      <div className="multicolor-title h1">
        <PrismicRichText field={slice.primary.title} />
      </div>
      <Row className={style.list}>
        {slice?.items?.map(({ photo, text_link, link, category }) => (
          <Col md={6} lg={3} className={style.item} key={text_link}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(style.card, 'd-flex flex-column')}
            >
              <div className={style.image}>
                <PrismicNextImage field={photo} fill loading="lazy" alt="product" />
              </div>
              <div className={style.category}>{category}</div>
              <div className={cn(style.caption, 'h4 f-w-b')}>{text_link}</div>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
    {isFilled.image(slice.primary.background_image) && (
      <div className={style.bg}>
        <PrismicNextImage
          field={slice.primary.background_image}
          fill
          loading="lazy"
          alt="bg ongoing tournaments"
        />
      </div>
    )}
  </section>
);

export default PlayerGear;
