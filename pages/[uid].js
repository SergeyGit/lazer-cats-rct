import Head from 'next/head';
import { SliceZone } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';

import { createClient } from '../prismicio';
import { components } from '../slices';
import { Layout } from '@/components/Layout';
import Favico from '../assets/images/favicon.ico';
import { MatchesProvider } from '../context/MatchecsContext';

const Page = ({ page, settings, matches, footer }) => {
  return (
    <Layout
      alternateLanguages={page.alternate_languages}
      // navigation={navigation}
      settings={settings}
      footer={footer}
    >
      <Head>
        <title>
          {prismicH.asText(page.data.title)} | {prismicH.asText(settings.data.siteTitle)}
        </title>
        <link rel="icon" href={Favico.src} sizes="any" />
      </Head>
      <MatchesProvider matchesData={matches}>
        <SliceZone slices={page.data.slices} components={components} />
      </MatchesProvider>
    </Layout>
  );
};

export default Page;

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID('page', params.uid, { lang: locale });
  // const navigation = await client.getSingle('navigation', { lang: locale });
  const settings = await client.getSingle('settings', { lang: locale });
  const matches = await client.getSingle('matches', { lang: locale });
  const footer = await client.getSingle('footer', { lang: locale });

  return {
    props: {
      page,
      // navigation,
      settings,
      matches,
      footer,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType('page', { lang: '*' });

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
        locale: page.lang,
      };
    }),
    fallback: false,
  };
}
