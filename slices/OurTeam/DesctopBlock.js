import cn from 'classnames';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicLink } from '@prismicio/react';
import style from '@/styles/modules/ourTeam.module.scss';
import { Col, Row } from 'react-bootstrap';

const DesctopBlock = ({ slice }) => {
  return (
    <Row>
      {slice?.items?.map(({ nick, name, position, link, image, image_hover }) => (
        <Col md={6} xl={slice.primary.player_page ? 3 : 4} key={nick}>
          <PrismicLink field={link}>
            <div className={cn(style.card, 'd-flex align-items-center flex-column')}>
              <div className={cn(style.image, { [style.player]: slice.primary.player_page })}>
                <div className={style.imageIn}>
                  <PrismicNextImage field={image} loading="lazy" alt={nick} />
                </div>
                <div className={style.imageInHover}>
                  <PrismicNextImage field={image_hover} loading="lazy" alt={nick} />
                </div>
              </div>
              <div className={cn(style.nick, 'h3')}>{nick}</div>
              <div className="h6">{name}</div>
              <div className={style.position}>{position}</div>
            </div>
          </PrismicLink>
        </Col>
      ))}
    </Row>
  );
};

export default DesctopBlock;
