import Head from 'next/head'
import Header from './Header'
import Search from './Search'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
      </Head>

      <Header  />
      <Search />
      <main className='container mx-auto my-5 font-lato'>{children}</main>

    </div>
  )
}

Layout.defaultProps = {
  title: 'Welcome to the Quotes',
  keywords: 'SSG',
  description: 'News articles page',
}
