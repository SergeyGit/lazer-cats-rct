import { PrismicLink } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import { Container } from 'react-bootstrap';
import { useMediaListener } from '@/hooks/MediaListener';
import { linkResolver } from '../prismicio';
import Image from 'next/image';
import { LANGS } from '../constants/constant';

const Footer = ({ footer: { data }, alternateLanguages }) => {
  const isDesctop = useMediaListener('(min-width: 991px)');

  return (
    <footer className="footer">
      <div className="footer_social">
        <PrismicLink href="/">
          <div className="image-content footer_logo">
            <PrismicNextImage field={data.logo} fill loading="lazy" alt="logo" />
          </div>
        </PrismicLink>
        <div className="footer_tag">{data.tag}</div>
        <div className="footer_social_list d-flex justify-content-center">
          {data.social_links.map(({ main, hover, link }) => (
            <a
              href={link.url}
              className="footer_social_list_link"
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
            >
              <PrismicNextImage field={main} fill={false} loading="lazy" alt="social" />
              <PrismicNextImage field={hover} fill={false} loading="lazy" alt="social" />
            </a>
          ))}
        </div>
        <div className="footer_bg">
          <PrismicNextImage field={data.background_image} fill loading="lazy" alt="bg social" />
        </div>
      </div>
      <div className="footer_insta">inst photos</div>
      <Container className="footer_partners d-flex align-items-center justify-content-around flex-wrap">
        {data.partners.map(({ logo }) => (
          <div key={logo.url} className="footer_partners_item">
            <PrismicNextImage field={logo} fill={false} loading="lazy" alt="partner" />
          </div>
        ))}
      </Container>
      {isDesctop && (
        <Container className="footer_pages d-flex align-items-center justify-content-between">
          <div className="image-content footer_pages_logo">
            <PrismicLink href="/">
              <PrismicNextImage field={data.logo} fill={false} loading="lazy" alt="logo" />
            </PrismicLink>
          </div>
          <div className="footer_pages_list page-links">
            {data.pages.map(({ title_link, link }) => (
              <PrismicLink field={link} key={title_link}>
                {title_link}
              </PrismicLink>
            ))}
          </div>
        </Container>
      )}
      <div className="footer_terms">
        <Container className="d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="footer_terms_text">{data.terms_text}</div>
          <div className="footer_terms_list d-flex">
            {data.terms_links.map(({ title_link, link }) => (
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {title_link}
              </a>
            ))}
            {alternateLanguages.map((lang) => (
              <div className="d-flex langs" key={lang.lang}>
                <PrismicLink href={linkResolver(lang)} locale={lang.lang}>
                  <span>{LANGS[lang.lang].text}</span>
                  <Image src={LANGS[lang.lang].icon} alt="calendar" loading="lazy" />
                </PrismicLink>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
};
export default Footer;
