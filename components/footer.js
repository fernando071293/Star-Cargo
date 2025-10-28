import Container from './container';
import Image from 'next/image';
import { useTranslation } from 'next-i18next'
import Link from '../components/Link';
const Footer = () => {
  const { t } = useTranslation('footer');
  return (
    <footer className="bg-base-900">
      <Container>
        <div className="pt-20 pb-16 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Image width="193" height="23" alt="Star Cargo" className="h-[23px] w-[193px] mr-2" src="/images/logo_horizontal_b1.svg" />
            <p className='text-base-050 mt-6 max-w-[400px]'>{t('mission')}</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 md:mt-0'>
            <div className='team-white'>
              <h5 className='text-white mb-6 text-h5'>{t('site_map')}</h5>
              <ul className='text-base-100'>
                <li className='mb-3'>
                  <Link href="/home">
                    {t('home_link_text')}
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link href="/about-us">
                    {t('about_us_link_text')}
                  </Link>
                </li>
                {/* <li className='mb-3'>
                  Rutas
                </li>
                <li className='mb-3'>
                  Itinerarios
                </li> */}
                <li className='mb-3'>
                <Link href="/contact">
                  {t('contact_link_text')}
                </Link>
                </li>
              </ul>
            </div>
            <div className='text-white text-h5 mt-10 md:mt-0'>
              <h5 className='text-white mb-6 text-h5'>{t('contact_us')}</h5>
              <ul className='text-base-050 text-body'>
                <li className='mb-6 flex content-center'>
                  <Image width={24} height={24} alt="email contact" className="" src="/images/email-contact.svg" /> <span className='ml-3 inline-block'>info@starcargoservice.com</span>
                </li>
                <li className='mb-6 flex content-center'>
                  <Image width={24} height={24} alt="phone" className="" src="/images/phone.svg" /> <span className='ml-3 inline-block'>(506) 4001 3155</span>
                </li>
                <li className='mb-6 flex content-center'>
                  <span className='mr-6'>
                    <a href='https://www.facebook.com/starcargoservice'target="_blank" rel="noreferrer"> 
                      <Image width={32} height={32} alt="facebook" src="/images/FB.svg" />
                    </a>
                  </span>
                  <span className='mr-6'>
                    <a href='https://www.instagram.com/starcargo.service'target="_blank" rel="noreferrer">
                    <Image width={32} height={32} alt="instagram" src="/images/IG.svg" />
                    </a>
                  </span>
                  {/* <span>
                    <Image width={32} height={32} alt="linkedin" src="/images/IN.svg" />
                  </span> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='pb-16 mt-10 md:mt-0'>
          <p className='text-base-050'>© 2022 Star Cargo. {t('copyright')}.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;


