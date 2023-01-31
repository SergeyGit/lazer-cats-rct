import cn from 'classnames';
import style from '@/styles/modules/partners.module.scss';
import { PrismicNextImage } from '@prismicio/next';
import { useMediaListener } from '@/hooks/MediaListener';

const AnimationItem = ({ slice }) => {
  const toggleHeader = useMediaListener('(max-width: 991px)');
  return (
    <div className={cn('partners-anim', style.partnersAnim)}>
      {slice?.items?.map(({ image }) => (
        <div className={style.partnersItem} key={image.url}>
          <PrismicNextImage
            field={image}
            alt={image.url}
            // priority={toggleHeader}
          />
        </div>
      ))}
    </div>
  );
};

export default AnimationItem;
