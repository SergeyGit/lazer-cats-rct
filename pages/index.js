import Head from 'next/head';
import { SliceZone } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';

import { createClient } from '../prismicio';
import { components } from '../slices/';
import { Layout } from '@/components/Layout';
import Favico from '../assets/images/favicon.ico';

const Index = ({ page, navigation, settings, footer }) => {
  return (
    <Layout
      alternateLanguages={page.alternate_languages}
      navigation={navigation}
      settings={settings}
      footer={footer}
    >
      <Head>
        <title>{prismicH.asText(page.data.title)}</title>
        <link rel="icon" href={Favico.src} sizes="any" />
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID('page', 'home', { lang: locale });
  const navigation = await client.getSingle('navigation', { lang: locale });
  const settings = await client.getSingle('settings', { lang: locale });
  const footer = await client.getSingle('footer', { lang: locale });

  return {
    props: {
      page,
      navigation,
      settings,
      footer,
    },
  };
}
