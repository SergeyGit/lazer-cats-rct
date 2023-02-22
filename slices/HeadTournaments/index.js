import { PrismicRichText } from '@prismicio/react';
import { Container } from 'react-bootstrap';
import { PrismicNextImage } from '@prismicio/next';

/**
 * @typedef {import("@prismicio/client").Content.HeadTournamentsSlice} HeadTournamentsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeadTournamentsSlice>} HeadTournamentsProps
 * @param { HeadTournamentsProps }
 */
const HeadTournaments = ({ slice }) => (
  <section className="section-head text-center">
    <Container>
      <div className="multicolor-title h1">
        <PrismicRichText field={slice.primary.title} />
      </div>
    </Container>
    <div className="bg_image">
      <PrismicNextImage
        field={slice.primary.background_image}
        fill
        loading="lazy"
        alt="bg tournaments"
      />
    </div>
  </section>
);

export default HeadTournaments;
