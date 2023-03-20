import { PrismicRichText } from '@prismicio/react';
import cn from 'classnames';
import style from '../../styles/modules/playerMain.module.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { PrismicNextImage } from '@prismicio/next';
import { useMediaListener } from '@/hooks/MediaListener';
import Triangles from '../../assets/images/player/Triangles.svg';
import Image from 'next/image';
import React, { Fragment } from 'react';

/**
 * @typedef {import("@prismicio/client").Content.PlaterMainSlice} PlaterMainSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PlaterMainSlice>} PlaterMainProps
 * @param { PlaterMainProps }
 */
const PlaterMain = ({ slice }) => {
  const isMobile = useMediaListener('(max-width: 767px)');
  const settings = slice.primary.ingame_settings.split(', ')?.map((item) => ({
    value: item.replace(/^.*\[/g, '').replace(/].*/g, ''),
    label: item.split(' [')[0] || '',
  }));
  const stats = slice.primary.stats.split(', ')?.map((item) => ({
    value: item.replace(/^.*\[/g, '').replace(/].*/g, ''),
    label: item.split(' [')[0] || '',
  }));

  return (
    <section className={cn(style.section, 'section-head')}>
      <Container>
        <Row>
          <Col lg={6} className="justify-content-center d-flex">
            <div className={style.photo}>
              <PrismicNextImage field={slice.primary.photo} loading="lazy" alt="photo" />
              <div className={style.photoBG}>
                <Image src={Triangles} alt="calendar" loading="lazy" />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className={style.text}>
              <div className="h1 f-w-b">{slice.primary.name}</div>
              <div className={style.role}>{slice.primary.role}</div>
              <div className="h5">{slice.primary.fio}</div>
              <div className={cn(style.info, 'd-flex align-items-center')}>
                <PrismicNextImage field={slice.primary.country} loading="lazy" alt="country" />
                <span className={style.countryName}>{slice.primary.country_name}</span>
                <span>{slice.primary.years}</span>
              </div>
              <div className={style.bio}>
                <PrismicRichText field={slice.primary.bio} />
              </div>
              <Row>
                <Col lg={6}>
                  <h5 className={cn(style.ingame)}>{slice.primary.ingame_title}</h5>
                  {settings.map(({ label, value }) => (
                    <div className="d-flex fz-14" key={label}>
                      <div className={cn(style.ingameLabel, 'flex-shrink-0')}>{label}</div>
                      <div>{value}</div>
                    </div>
                  ))}
                </Col>
                <Col lg={6}>
                  <h5 className={style.social}>{slice.primary.social_title}</h5>
                  <div className={cn(style.socialList, 'd-flex flex-wrap')}>
                    {slice?.items.map(({ social_icon, social_icon_hover, social_link }) => (
                      <a
                        href={social_link.url}
                        className="header_social_list_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={social_link.url}
                      >
                        <PrismicNextImage
                          field={social_icon}
                          fill={false}
                          loading="lazy"
                          alt="social"
                        />
                        <PrismicNextImage
                          field={social_icon_hover}
                          fill={false}
                          loading="lazy"
                          alt="social"
                        />
                      </a>
                    ))}
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <div className={cn(style.stats, 'd-flex align-items-center flex-lg-nowrap flex-wrap')}>
          {stats.map(({ label, value }, index) => (
            <Fragment key={label}>
              {index !== 0 && (
                <div className={cn(style.statsDerived, 'd-lg-inline-flex d-none flex-shrink-0')} />
              )}
              <div className={style.statsItem}>
                <div className={style.statsItemHead}>{label}</div>
                <h3 className="d-inline-flex">{value}</h3>
              </div>
            </Fragment>
          ))}
        </div>
      </Container>
      <div className={style.bg}>
        <PrismicNextImage
          field={slice.primary.background_image}
          fill={!isMobile}
          loading="lazy"
          alt="bg"
        />
      </div>
      <div className={style.playerbg}>
        <PrismicNextImage
          field={slice.primary.background_player}
          // fill={!isMobile}
          loading="lazy"
          alt="bg"
        />
      </div>
    </section>
  );
};

export default PlaterMain;
