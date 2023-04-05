import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./Header'));
const Footer = dynamic(() => import('./Footer'));

export const Layout = ({ alternateLanguages, settings, footer, children }) => {
  return (
    <div>
      <Header alternateLanguages={alternateLanguages} footer={footer} settings={settings} />
      <main>{children}</main>
      <Footer alternateLanguages={alternateLanguages} footer={footer} />
    </div>
  );
};
