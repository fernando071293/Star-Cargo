import Image from 'next/image'
import { useTranslation } from 'react-i18next';
export default function HeroBanner({
  supText,
  subText,
  title,
  imageUrl,
  imageClass,
  className,
  shadow,
  isFullWidth
}) {
  const { t } = useTranslation('common');
  return (
    <>
      { isFullWidth ?
        <section className={className + ' relative'}>
            <div className={"w-full h-full bg-no-repeat bg-center bg-cover bg-[url('/images/hero-bg-2.png')] absolute z-0 top-0"}></div>
            { shadow && <div className="w-full min-h-[100vh] md:min-h-[756px] bg-no-repeat bg-base-700 absolute z-0 top-0 opacity-60"></div>}
            <div className='absolute top-1/3 md:top-[250px] mx-7 px-6 text-white max-w-6xl w-full'>
              { supText && <h5 className='text-h5'>{t(supText)}</h5>}
              { title && <h1 className='text-h2 md:text-h1 md:text-[90px] mt-2 md:mt-6'>{t(title)}</h1>}
              { subText && <p className='text-base mt-2 md:mt-6'>{t(subText)}</p>}
            </div>
        </section>:
        <section className={'flex justify-center md:pt-10 md:mt-10 overflow-hidden '+ className}>
            <div className='relative max-w-[1440px] grid grid-cols-12 gap-4 w-full'>
              <div className='col-span-12 pr-10 md:pr-0 md:col-span-5 lg:col-span-4 lg:col-start-2 pl-6 top-[30%] absolute md:relative z-10'>
                { supText && <h5 className='text-h5'>{t(supText)}</h5>}
                { title && <h1 className='text-h2 text-blue-900 md:text-h1 mt-2 md:mt-6'>{t(title)}<span className='inline-block w-[5px] h-[5px] bg-blue-400'></span></h1>}
                { subText && <p className='text-base mt-2 md:mt-6'>{t(subText)}</p>}
              </div>
              <div className='relative col-span-12 md:col-span-7 w-full min-h-[100vh] md:min-h-[466px] border-blue-200 overflow-hidden'>
                
                <div className="image-pre border-blue-200"></div>
                {/* <div className="w-full h-full bg-100% bg-left-bottom bg-no-repeat bg-[url('/images/image-border.svg')] absolute z-0 bottom-0 "></div> */}
                <div className='block ml-[75px] relative w-full min-h-[100vh] md:min-h-[466px]'
                style={{clipPath: 'polygon(175px 0%, 100% 0%, 100% 100%, 0% 100%)'}}>
                  <Image
                    layout='fill'
                    alt={title}
                    className={"inline "+imageClass}
                    src={imageUrl}
                  />
                </div>
              </div>
            </div>
        </section>
      }
    </>
  )
}
