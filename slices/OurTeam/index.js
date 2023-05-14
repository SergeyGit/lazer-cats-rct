import { PrismicRichText } from '@prismicio/react';
import cn from 'classnames';
import { PrismicNextImage } from '@prismicio/next';
import { Container } from 'react-bootstrap';
import { useMediaListener } from '@/hooks/MediaListener';
import dynamic from 'next/dynamic';
import style from '@/styles/modules/ourTeam.module.scss';

const DesctopBlock = dynamic(() => import('./DesctopBlock'));
const MobileBlock = dynamic(() => import('./MobileBlock'));

/**
 * @typedef {import("@prismicio/client").Content.OurTeamSlice} OurTeamSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OurTeamSlice>} OurTeamProps
 * @param { OurTeamProps }
 */
const OurTeam = ({ slice }) => {
  const isMobile = useMediaListener('(max-width: 767px)');
  return (
    <section className={style.section}>
      <Container>
        <div
          className={cn(style.head, {
            [style.left]: slice.primary.player_page,
          })}
        >
          <div className={cn(style.caption, 'multicolor-title h1')}>
            <PrismicRichText field={slice.primary.title} />
          </div>
          <div className="helveticaFont">
            <PrismicRichText field={slice.primary.description} />
          </div>
        </div>
        {isMobile ? <MobileBlock slice={slice} /> : <DesctopBlock slice={slice} />}
      </Container>
      <div className={style.bg}>
        <PrismicNextImage
          field={isMobile ? slice.primary.background_mob : slice.primary.backgound}
          fill={!isMobile}
          loading="lazy"
          alt="bg"
        />
      </div>
    </section>
  );
};

export default OurTeam;
