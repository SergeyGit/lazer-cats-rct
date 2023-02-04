import cn from 'classnames';
import { PrismicNextImage } from '@prismicio/next';
import { useKeenSlider } from 'keen-slider/react';
import style from '@/styles/modules/oTournaments.module.scss';
import 'keen-slider/keen-slider.min.css';
import { BADGES_COLORS } from '../../constants/constant';
import Image from 'next/image';
import Calendar from '../../assets/images/icons/utilities/Calendar.svg';
import { getDate } from './index';
import Star from '../../assets/images/icons/utilities/Star.svg';

const MobileBlock = ({ slice }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    mode: 'free',
    loop: true,
    drag: true,
    slides: { perView: 'auto', spacing: 20, origin: 'auto' },
  });
  const handleButtonClick = (props) => {
    if (props.currentTarget.getAttribute('data-value') === 'increment') {
      instanceRef.current?.next();
    }
    if (props.currentTarget.getAttribute('data-value') === 'decrement') {
      instanceRef.current?.prev();
    }
  };

  return (
    <div className={style.list}>
      <div className={cn('keen-slider', style.slider)} ref={sliderRef}>
        {slice?.items?.map(({ bage, image, caption, from_date, to_date, prise }) => (
          <div className={cn(style.itemMob, 'keen-slider__slide')} key={caption}>
            <div className={style.image}>
              <PrismicNextImage field={image} fill loading="lazy" alt="caption" />
              <div
                className={cn(style.badge, 'badge')}
                style={{ backgroundColor: BADGES_COLORS[bage.toLowerCase()] || '#FF007A' }}
              >
                {bage}
              </div>
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
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <button className="slideButton" onClick={handleButtonClick} data-value="decrement" />
        <button className="slideButton" onClick={handleButtonClick} data-value="increment" />
      </div>
    </div>
  );
};

export default MobileBlock;
