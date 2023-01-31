import { PrismicNextImage } from '@prismicio/next';
import style from '../../styles/modules/hero.module.scss';

const Hero = ({ slice }) => {
  return (
    <section className={style.section}>
      <PrismicNextImage
        field={slice.primary.image}
        loading="lazy"
        fill={true}
        objectFit="contain"
      />
    </section>
  );
};

export default Hero;
