// Component List
import Container from '../../../components/container'
import Layout from '../../../components/layouts/layout'
import HeroBanner from '../../../components/hero-banner'
import Footer from '../../../components/footer'
import Header from '../../../components/header'
import Services from '../../../components/services'
import ContactSection from '../../../components/contact-section'
import RouteSection from '../../../components/route-section'
import TrackingSection from '../../../components/tracking-section'
import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'

import { Suspense } from 'react';
// Next
import Head from 'next/head'
const Home = () => {
  const { t } = useTranslation('common')
  const preview = 'preview test';

  return (
    <>
    <Suspense fallback={null}>
      <Layout preview={preview}>
        <Head>
          <title>{t("home_page_title")}</title>
        </Head>
        <Header transparent='true'/>
        <HeroBanner className="flex justify-center min-h-[100vh] md:min-h-[756px]" shadow="true" imageClass=""
          isFullWidth="true"
          title="home_title"
          supText="home_sup"
          subText="home_description"
          imageUrl="/images/hero-bg-2.png"/>
        <Services />
        <RouteSection />
        <TrackingSection />
        <ContactSection />
      </Layout>
      </Suspense>
    </>
  )
}

export default Home

const getStaticProps = makeStaticProps('common')
export { getStaticPaths, getStaticProps }
