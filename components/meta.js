import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL, META_DESCRIPTION } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="64x64"
        href="/images/favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon.png"
      />
      <link
        rel="mask-icon"
        href="/images/favicon.png"
        color="#ffffff"
      />
      <link rel="shortcut icon" href="/images/favicon.png" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="description"
        content={`${META_DESCRIPTION}.`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}
