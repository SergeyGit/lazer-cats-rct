// import { Header } from './Header';
// import { Footer } from './Footer';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('./Footer'));

export const Layout = ({ alternateLanguages, navigation, settings, footer, children }) => {
  return (
    <div>
      {/*<Header alternateLanguages={alternateLanguages} navigation={navigation} settings={settings} />*/}
      <main>{children}</main>
      <Footer alternateLanguages={alternateLanguages} footer={footer} />
    </div>
  );
};
