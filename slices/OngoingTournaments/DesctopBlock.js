import cn from 'classnames';
import { PrismicNextImage } from '@prismicio/next';
import style from '@/styles/modules/oTournaments.module.scss';
import { Col, Row } from 'react-bootstrap';
import { BADGES_COLORS } from '../../constants/constant';
import Image from 'next/image';
import Calendar from '../../assets/images/icons/utilities/Calendar.svg';
import Star from '../../assets/images/icons/utilities/Star.svg';
import { getDate } from './index';

const DesctopBlock = ({ slice }) => (
  <Row className={style.list}>
    {slice?.items?.map(
      ({ bage, image, caption, from_date, to_date, prise, link, text_link }, index) => (
        <Col md={6} lg={3} className={style.item} key={caption}>
          <div className={style.card}>
            <div className={cn(style.image, style[`image-${(index % 4) + 1}`])}>
              <PrismicNextImage field={image} loading="lazy" alt="caption" />
            </div>
            <div
              className={cn(style.badge, 'badge')}
              style={{ backgroundColor: BADGES_COLORS[bage.toLowerCase()] || '#FF007A' }}
            >
              {bage}
            </div>
            <div className={cn(style.caption, 'h4 f-w-b')}>{caption}</div>
            <div className={cn(style.info, 'd-flex align-items-center')}>
              <div className={cn(style.icon, 'image-content flex-shrink-0')}>
                <Image src={Calendar} alt="calendar" loading="lazy" />
              </div>
              <div>{getDate(from_date, to_date)}</div>
            </div>
            <div className={cn(style.info, 'd-flex align-items-center')}>
              <div className={cn(style.icon, 'image-content flex-shrink-0')}>
                <Image src={Star} alt="star" loading="lazy" />
              </div>
              <div>{prise}</div>
            </div>
            <a
              href={link?.url}
              className={cn(style.link, 'prime')}
              target="_blank"
              rel="noopener noreferrer"
            >
              {text_link}
            </a>
          </div>
        </Col>
      )
    )}
  </Row>
);

export default DesctopBlock;
