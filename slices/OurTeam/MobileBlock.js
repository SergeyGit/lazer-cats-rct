import cn from 'classnames';
import { PrismicNextImage } from '@prismicio/next';
import { useKeenSlider } from 'keen-slider/react';
import style from '@/styles/modules/ourTeam.module.scss';
import 'keen-slider/keen-slider.min.css';

const MobileBlock = ({ slice }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    mode: 'free',
    loop: true,
    drag: true,
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
    <div>
      <div className={cn('keen-slider')} ref={sliderRef}>
        {slice?.items?.map(({ nick, name, position, link, image, image_hover }) => (
          <div className="keen-slider__slide" key={nick}>
            {/*<PrismicLink field={link}>*/}
            <div className="d-flex align-items-center flex-column">
              <div className={style.image}>
                <PrismicNextImage field={image} loading="lazy" height={480} alt={nick} />
              </div>
              <div className={cn(style.nick, 'h3')}>{nick}</div>
              <div className="h6">{name}</div>
              <div className={style.position}>{position}</div>
            </div>
            {/*</PrismicLink>*/}
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <button className={style.slideButton} onClick={handleButtonClick} data-value="decrement" />
        <button className={style.slideButton} onClick={handleButtonClick} data-value="increment" />
      </div>
    </div>
  );
};

export default MobileBlock;
