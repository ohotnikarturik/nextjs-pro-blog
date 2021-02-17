import Head from 'next/head'

import { MetaProps } from '../interfaces'

const Meta = ({ title, keywords, description }: MetaProps) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#F67280" />

      <link rel="manifest" href="/manifest.json" />
      <link
        href="/images/favicon-16x16.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />
      <link
        href="/images/favicon-32x32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link rel="apple-touch-icon" href="/images/apple-icon.png" />
    </Head>
  )
}

Meta.defaultProps = {
  title: 'ProBlog App',
  keywords: 'nextjs blog app',
  description: 'Find and read latest the most popular topics.',
}

export default Meta
