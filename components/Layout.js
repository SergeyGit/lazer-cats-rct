import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ alternateLanguages, navigation, settings, children }) => {
  return (
    <div>
      {/*<Header alternateLanguages={alternateLanguages} navigation={navigation} settings={settings} />*/}
      <main>{children}</main>
      {/*<Footer settings={settings} />*/}
    </div>
  );
};
