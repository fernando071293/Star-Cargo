import { CMS_NAME, CMS_URL } from '../lib/constants'
import Image from 'next/image'
export default function Footer() {
  return (
    <section className="flex">
      <Image width={193} height={23} alt="Star Cargo" className="h-8 w-8 mr-2" src="/images/logo_horizontal_b1.svg" /> 
    </section>
  )
}
