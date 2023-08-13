import Head from 'next/head';
import { SliceZone } from '@prismicio/react';

import { createClient } from '../prismicio';
import { components } from '../slices';
import { Layout } from '@/components/Layout';
import Favico from '../assets/images/favicon.ico';

const Page404 = ({ page, settings, footer }) => {
  return (
    <Layout alternateLanguages={page.alternate_languages} settings={settings} footer={footer}>
      <div>
        <Head>
          <title>{page.data.title}</title>
          <link rel="icon" href={Favico.src} sizes="any" />
        </Head>
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </Layout>
  );
};

export default Page404;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID('page', 'page-404', { lang: locale });
  // const navigation = await client.getSingle('navigation', { lang: locale });
  const settings = await client.getSingle('settings', { lang: locale });
  const footer = await client.getSingle('footer', { lang: locale });

  return {
    props: {
      page,
      settings,
      footer,
    },
  };
}
