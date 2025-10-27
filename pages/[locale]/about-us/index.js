// Component List
import Container from '../../../components/container'
import Layout from '../../../components/layouts/layout'
import HeroBanner from '../../../components/hero-banner'
import Header from '../../../components/header'
import ContactSection from '../../../components/contact-section'
import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'
// Next
import Head from 'next/head'
import Image from 'next/image'

const AboutUs = () => {
  const { t } = useTranslation(['common', 'footer'])
  const preview = 'preview test';
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Star Cargo - About Us</title>
        </Head>
        <Header />
        <HeroBanner className="" imageClass="" title="Logística de calidad" imageUrl="/images/us.png"/>
        <Container>
          <div className='grid grid-cols-12 md:gap-20 mt-[90px] md:mt-[120px] mb-[90px] md:mb-[120px]'>
            <div className='col-span-12 md:col-span-6 relative min-h-[340px] md:min-h-[520px]'>
              <Image
                    layout='intrinsic'
                    width={448}
                    height={519}
                    alt=''
                    src='/images/Images-1.png'
                  />
            </div>
            <div className='col-span-12 md:col-span-6 mt-[60px] md:mt-0'>
              <div className='uppercase text-blue-500 overline-large'>
                ¿quienes somos?
              </div>
              <h4 className='text-h3 md:text-h2 text-blue-900 mt-2'>
                Somos una empresa dedicada a brindar servicios logisticos
              </h4>
              <p className='text-base-400 text-body mt-8 md:mt-10'>
                Diseñamos soluciones personalizadas a las necesidas de nuestros clientes.
              </p>
              <p className='text-base-400 text-body mt-8 md:mt-4'>
                Star Cargo esta encofada en el servicio de consolidación de carga terrestre en Centroamerica con salidas semanales conectando la región.
              </p>
              <div className='uppercase text-blue-500 overline-large mt-4 md:mt-10'>
                MISIÓN
              </div>
              <p className='text-base-400 text-body mt-22'>
                Brindar un servicio enfocado en las necesidades de nuestros clientes, ofreciendo soluciones logisticas competitivas y de calidad.
              </p>
              <div className='uppercase text-blue-500 overline-large mt-4 md:mt-10'>
                VISIÓN
              </div>
              <p className='text-base-400 text-body mt-2'>
                Ser la empresa lider en servicio de consolidación de la región.
              </p>
            </div>
          </div>
        </Container>
        <ContactSection />
      </Layout>
    </>
  )
}
export default AboutUs

const getStaticProps = makeStaticProps(['common','footer'])
export { getStaticPaths, getStaticProps }
