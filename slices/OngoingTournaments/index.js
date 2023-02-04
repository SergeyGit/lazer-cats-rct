import { PrismicLink, PrismicRichText } from '@prismicio/react';
import { Container } from 'react-bootstrap';
import cn from 'classnames';
import { PrismicNextImage } from '@prismicio/next';
import moment from 'moment';
import style from '@/styles/modules/oTournaments.module.scss';
import dynamic from 'next/dynamic';
import { useMediaListener } from '@/hooks/MediaListener';

const DesctopBlock = dynamic(() => import('./DesctopBlock'));
const MobileBlock = dynamic(() => import('./MobileBlock'));

/**
 * @typedef {import("@prismicio/client").Content.OngoingTournamentsSlice} OngoingTournamentsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OngoingTournamentsSlice>} OngoingTournamentsProps
 * @param { OngoingTournamentsProps }
 */

export const getDate = (d1, d2) => {
  return `${moment(d1, 'YYYY-MM-DDhh:mm:ssZ, hh:mm').format('MMM DD, YYYY')} - ${moment(
    d2,
    'YYYY-MM-DDhh:mm:ssZ, hh:mm'
  ).format('MMM DD, YYYY')}`;
};

const OngoingTournaments = ({ slice }) => {
  const isMobile = useMediaListener('(max-width: 767px)');

  return (
    <section className={style.section}>
      <Container>
        <div className="d-flex align-items-start align-items-lg-end flex-column flex-lg-row justify-content-between">
          <div className="multicolor-title h1">
            <PrismicRichText field={slice.primary.title} />
          </div>
          <div className={cn(style.seeAll, 'link')}>
            <PrismicLink field={slice.primary.link}>{slice.primary.text_link}</PrismicLink>
          </div>
        </div>
        {isMobile ? <MobileBlock slice={slice} /> : <DesctopBlock slice={slice} />}
      </Container>
      <div className={style.bg}>
        <PrismicNextImage
          field={slice.primary.background_image}
          fill
          loading="lazy"
          alt="bg ongoing tournaments"
        />
      </div>
    </section>
  );
};
export default OngoingTournaments;
