import { useEffect, useState } from 'react';
import { PrismicLink } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import { linkResolver } from '../prismicio';
import { Container } from 'react-bootstrap';
import { LANGS } from '../constants/constant';
import Image from 'next/image';
import { useMediaListener } from '@/hooks/MediaListener';
import cn from 'classnames';
import dynamic from 'next/dynamic';

const OnlineStreams = dynamic(() => import('./Header/OnlineStreams'));

const Header = ({ alternateLanguages = [], settings, footer: { data } }) => {
  const [dark, setDark] = useState(false);
  const [toggle, setToggle] = useState(false);

  const isDesctop = useMediaListener('(min-width: 768px)');

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    function logit() {
      if (window.pageYOffset > 80) {
        setDark(true);
      } else {
        setDark(false);
      }
    }
    window.addEventListener('scroll', logit);
    return () => {
      window.removeEventListener('scroll', logit);
    };
  }, []);

  return (
    <header className={`header ${dark || toggle ? 'dark' : ''}`}>
      <div className="header_top header_line d-flex">
        <Container className="d-flex align-items-center">
          <OnlineStreams />
          <div className="d-flex align-items-center header_top_right">
            <div className="header_tag f-w-b">{data.tag}</div>
            <div className="header_social_list d-flex justify-content-center">
              {data.social_links.map(({ main_white, hover, link }) => (
                <a
                  href={link.url}
                  className="header_social_list_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  key={link.url}
                >
                  <PrismicNextImage field={main_white} fill={false} loading="lazy" alt="social" />
                  <PrismicNextImage field={hover} fill={false} loading="lazy" alt="social" />
                </a>
              ))}
            </div>
            {isDesctop &&
              alternateLanguages.map((lang) => (
                <div className="d-flex langs align-items-center" key={lang.lang}>
                  <PrismicLink href={linkResolver(lang)} locale={lang.lang}>
                    <span>{LANGS[lang.lang].text}</span>
                    <Image src={LANGS[lang.lang].icon} alt="calendar" loading="lazy" />
                  </PrismicLink>
                </div>
              ))}
          </div>
        </Container>
      </div>
      <div className="header_line d-flex">
        <Container className="d-flex align-items-center">
          <PrismicLink href="/">
            <div className="header_logo">
              <PrismicNextImage field={data.logo} loading="lazy" alt="logo" />
            </div>
          </PrismicLink>
          {!isDesctop && (
            <div
              className={cn('header_burger', {
                active: toggle,
              })}
              onClick={handleToggle}
            />
          )}
          {(toggle || isDesctop) && (
            <div className="d-flex flex-column flex-md-row align-items-center header_burger_menu">
              <div className="header_pages_list page-links">
                {data.pages.map(({ title_link, link }) => (
                  <div onClick={!isDesctop ? handleToggle : undefined} key={title_link}>
                    <PrismicLink field={link}>{title_link}</PrismicLink>
                  </div>
                ))}
              </div>
              {!isDesctop &&
                alternateLanguages.map((lang) => (
                  <div className="d-flex langs align-items-center" key={lang.lang}>
                    <PrismicLink href={linkResolver(lang)} locale={lang.lang}>
                      <span>{LANGS[lang.lang].text}</span>
                      <Image src={LANGS[lang.lang].icon} alt="calendar" loading="lazy" />
                    </PrismicLink>
                  </div>
                ))}
              <div
                className={cn('link', {
                  dark: !isDesctop || !dark,
                })}
              >
                <PrismicLink href={settings.data.shop_link.url}>
                  {settings.data.shop_title}
                </PrismicLink>
              </div>
            </div>
          )}
        </Container>
      </div>
    </header>
  );
};

export default Header;
