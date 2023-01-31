import dynamic from 'next/dynamic';
import style from '../../styles/modules/partners.module.scss';

const AnimationItem = dynamic(() => import('./AnimationItem'));

const Partners = ({ slice }) => (
  <section className={style.partners}>
    {[...Array(3)].map((_, index) => (
      <AnimationItem slice={slice} key={index} />
    ))}
  </section>
);

export default Partners;
