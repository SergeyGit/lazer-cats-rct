import cn from 'classnames';
import { PrismicNextImage } from '@prismicio/next';
import style from '@/styles/modules/oTournaments.module.scss';
import { BADGES_COLORS } from '../../constants/constant';
import Image from 'next/image';
import Calendar from '../../assets/images/icons/utilities/Calendar.svg';
import Star from '../../assets/images/icons/utilities/Star.svg';
import { getDate } from './index';

const VerticalBlock = ({ slice }) => (
  <>
    {slice?.items?.map(
      ({
        bage,
        image,
        caption,
        from_date,
        to_date,
        prise,
        link,
        text_link,
        info,
        country_name,
        country_logo,
      }) => (
        <div
          className={cn(
            style.card,
            style.verticalCard,
            'd-flex align-items-center flex-column flex-md-row'
          )}
        >
          <div className={cn(style.image, style.vertical, 'flex-shrink-0')}>
            <PrismicNextImage field={image} fill loading="lazy" alt="caption" />
          </div>
          <div>
            <div className="d-flex align-items-center flex-wrap ">
              <div
                className={cn(style.badge, 'badge')}
                style={{ backgroundColor: BADGES_COLORS[bage.toLowerCase()] || '#FF007A' }}
              >
                {bage}
              </div>
              <div className={cn(style.country, ' flex-shrink-0')}>
                <PrismicNextImage
                  field={country_logo}
                  height={24}
                  width={36}
                  alt="country"
                  loading="lazy"
                />
              </div>
              <div className="helveticaFont">{country_name}</div>
            </div>
            <div className={cn(style.caption, 'h4 f-w-b')}>{caption}</div>
            <div className="d-flex align-items-center  flex-wrap">
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
                <div className="d-flex align-items-center flex-column flex-md-row flex-shrink-0">
                  {prise}
                </div>
              </div>
            </div>
            <div className={style.text}>{info}</div>
            <a
              href={link?.url}
              className={cn(style.link, 'prime')}
              target="_blank"
              rel="noopener noreferrer"
            >
              {text_link}
            </a>
          </div>
        </div>
      )
    )}
  </>
);

export default VerticalBlock;
