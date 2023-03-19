import cn from 'classnames';
import { PrismicNextImage } from '@prismicio/next';
import style from '@/styles/modules/ourTeam.module.scss';
import { Col, Row } from 'react-bootstrap';

const DesctopBlock = ({ slice }) => {
  return (
    <Row>
      {slice?.items?.map(({ nick, name, position, link, image, image_hover }) => (
        <Col md={6} xl={slice.primary.player_page ? 3 : 4} key={nick}>
          {/*<PrismicLink field={link}>*/}
          <div className="d-flex align-items-center flex-column">
            <div className={cn(style.image, { [style.player]: slice.primary.player_page })}>
              <PrismicNextImage field={image} loading="lazy" height={480} alt={nick} />
            </div>
            <div className={cn(style.nick, 'h3')}>{nick}</div>
            <div className="h6">{name}</div>
            <div className={style.position}>{position}</div>
          </div>
          {/*</PrismicLink>*/}
        </Col>
      ))}
    </Row>
  );
};

export default DesctopBlock;
