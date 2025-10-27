// Component List
import Container from '../../../components/container'
import Layout from '../../../components/layouts/layout'
import HeroBanner from '../../../components/hero-banner'
import Header from '../../../components/header'
import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'
// Next
import Head from 'next/head'
import Image from 'next/image'

export default function Routes() {
  const preview = 'preview test';
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Star Cargo - Routes</title>
        </Head>
        <Header />
        <Container>
          <HeroBanner title="Centroamérica." imageUrl="/images/hero_bg.png"/>
          <div className="relative overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl">
              <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
                <svg className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <polygon points="50,0 100,0 50,100 0,100" />
                </svg>
                <div>
                  <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                  </div>
                </div>

                <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                  <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                      <span className="block xl:inline">Data to enrich your</span>
                      <span className="block text-indigo-600 xl:inline">online business</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow">
                        <a href="#" className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">Get started</a>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <a href="#" className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg">Live demo</a>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <Image layout='fill' className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" />
            </div>
          </div>
          <h1 className='text-h1'>Header 1</h1>
          <h2 className='text-h2'>Header 2</h2>
          <h3 className='text-h3'>Header 3</h3>
          <h4 className='text-h4'>Header 4</h4>
          <h5 className='text-h5'>Header 5</h5>
          <h6 className='text-h6'>Header 6</h6>
        </Container>
      </Layout>
    </>
  )
}

const getStaticProps = makeStaticProps(['common','footer'])
export { getStaticPaths, getStaticProps }