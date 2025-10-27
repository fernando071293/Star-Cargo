import languageDetector from '../lib/languageDetector'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

const LanguageSwitchLink = ({ locale, currentLanguage, changeLaguage, ...rest }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const router = useRouter()

  let href = rest.href || router.asPath
  let pName = router.pathname
  Object.keys(router.query).forEach(k => {
    if (k === 'locale') {
      pName = pName.replace(`[${k}]`, locale.value)
      return
    }
    pName = pName.replace(`[${k}]`, router.query[k])
  })
  if (locale) {
    href = rest.href ? `/${locale.value}${rest.href}` : pName
  }
  return (
    <Link href={href}>
              <span className={classNames(
                    currentLanguage.value === locale.value ? 'bg-support-grey text-base-900' : 'text-base-500',
                    'flex text-sm px-2 py-2 transition duration-300'
                  )}>
                      <span className='mr-2 ml-4 mt-1 min-w-[30px]'>
                      {currentLanguage.value === locale.value ? (<Image width={14} height={10} alt=""  src='/images/check-blue.svg' />) : ''}
                      </span>
                      <span className='min-w-[80px]'
                        onClick={() => changeLaguage(locale.value) && languageDetector.cache(locale.value)}
                      >
                        {locale.name}
                      </span>
                      <Image className="mr-2" width={18} height={18} alt=""  src={locale.flag} />
              </span>

    </Link>
  )
}

export default LanguageSwitchLink
