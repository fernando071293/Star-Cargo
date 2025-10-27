import Image from 'next/image'
import DropdownLanguage from '../components/dropdown-language'
import Link from '../components/Link'
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Header({
  transparent
}) {
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
  }
  const { t } = useTranslation('common')
  const router = useRouter();
  const currentLocale =
    router.query.locale || i18nextConfig.i18n.defaultLocale
  const nav = [
    {
      text: 'home_link_text',
      path: '/home',
    },
    {
      text: 'about_us_link_text',
      path: '/about-us',
    }
  ];
  const languageList = [
    {
      name: 'Español',
      sortName: 'Esp',
      value: 'es',
      flag: '/images/spain.png'
    },
    {
      name: 'English',
      sortName: 'Eng',
      value: 'en',
      flag: '/images/united-kingdom.png'
    }
  ]
  const headerHeight = 45;
  const currentLanguageObj = languageList.filter(
    language => language.value === currentLocale
  )
  const [scrollPosition, setScrollPosition] = useState(0);
  const [goingTop, setGoingTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(currentLanguageObj.length ? 
    currentLanguageObj[0]: languageList[0] );
  // Actions
  const handleScroll = () => {
      const position = window.pageYOffset;
      if(position < scrollPosition){
        setGoingTop(true);
      } else {
        setGoingTop(false);
      }
      setScrollPosition(position);
  };
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const changeLaguage = (value) => {
    setCurrentLanguage(languageList.find(language => language.value === value));
  }
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  });

  return (
      <header className={classNames(!transparent || (scrollPosition > headerHeight) ? 'bg-white shadow-lg':'','z-20 transition duration-300 w-full top-0', (goingTop) ? 'fixed': 'absolute')}>
          <nav className='flex justify-center'>
            <div className={classNames('w-full max-w-7xl mx-auto px-5 py-3')}>
              <div className="flex justify-between">
                <div className="flex lg:space-x-7">
                  <div>
                    <a href="" className="flex items-center py-4 px-2">
                    {!transparent || (scrollPosition > headerHeight) ? 
                    <Image width="193" height="23" alt={t('logo_alt')} className="h-[23px] w-[193px] mr-2" src="/images/logo_horizontal_a1.svg" /> :
                    <Image width="193" height="23" alt={t('logo_alt')} className="h-[23px] w-[193px] mr-2" src="/images/logo_horizontal_b1.svg" />
                    }
                    
                    </a>
                  </div>
                  <div className='flex items-center hidden md:flex'>
                    <DropdownLanguage transparent={transparent && (scrollPosition < headerHeight)} changeLaguage={changeLaguage} languageList={languageList}  currentLanguage={currentLanguage} />
                  </div>
                </div>
                <div className="hidden md:flex items-center space-x-3 pr-4">
                  <div className="hidden md:flex items-center space-x-2 lg:space-x-10 lg:mr-10">
                    {nav.map(({text,path}, j) => (
                      <Link href={path} key={j}>
                        <span className={
                          transparent && (scrollPosition < headerHeight) ? classNames(router.pathname === '/[locale]'+path ? "text-white border-b-2 border-white":"text-base-050 mb-[2px] hover:border-b-2 hover:border-base-050 hover:mb-0 transition duration-300", "font-semibold pb-[12px] px-2") :
                          classNames(router.pathname === '/[locale]'+path ? "text-base-900 border-b-2 border-blue-700":"text-gray-500 mb-[2px] hover:text-blue-700 hover:mb-0 transition duration-300", "font-semibold pb-[12px] px-2")
                          }>
                          {t(text)}
                        </span>
                      </Link>))}
                  </div>
                  <Link href="/contact">
                    <span className="py-2 px-6 font-medium text-white bg-blue-500 hover:bg-blue-700 transition duration-300">
                      {t('contact_link_text')}
                    </span>
                  </Link>
                </div>

                <div className="md:hidden flex items-center">
                  <button className="outline-none" onClick={handleMenu}>
                    <svg className={classNames(!transparent || (scrollPosition > headerHeight) ? 'text-base-900':'text-white','w-6 h-6')}
                      x-show="!showMenu"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className={classNames( menuOpen ? '' : 'hidden', 'md:hidden mobile-menu bg-white fixed w-full h-full')} >
              <div className='flex flex-col h-full'>
                    <div className="flex justify-between px-5 mt-4 mb-10">
                      <a href="" className="flex items-center py-4">
                      <Image width="193" height="23" alt="Star Cargo" className="h-[23px] w-[193] mr-2" src="/images/logo_horizontal_a1.svg" />
                      </a>
                      <button className="outline-none" onClick={handleMenu}>
                        <Image width={24} height={24} alt="Close Menu" className="h-6 w-6" src="/images/X.svg" />
                      </button>
                    </div>
                    <div className='flex-1'>
                      <div className="items-center space-x-4">
                        <div className="space-y-2">
                          {nav.map(({text,path}, i) => (
                            <Link href={path} key={i}>
                              <span className={
                                classNames(router.pathname === path ? "text-base-600 bg-support-grey":"text-base-300", "text-h5 font-semibold py-3 mb-2 px-5 flex w-full")
                                }>
                                {t(text)}
                              </span>
                            </Link>))}
                        </div>
                      </div>
                      <div className='mt-5 py-3 border-y-2 border-base-050 flex'>
                        <DropdownLanguage changeLaguage={changeLaguage} languageList={languageList}  currentLanguage={currentLanguage} />
                      </div>
                    </div>
                    <div className='p-5 flex w-full'>
                      <Link href="/contact" className='w-full'>
                        <span className="py-2 px-6 font-medium text-white text-center bg-blue-500 hover:bg-blue-700 transition duration-300 w-full inline-block">
                        {t('contact_link_text')}
                        </span>
                      </Link>
                    </div>
              </div>
            </div>
          </nav>
      </header>
  )
}
