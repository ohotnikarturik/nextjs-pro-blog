import Head from 'next/head'
import ContactForm from '../components/ContactForm'

import Title from '../components/Title'

const contact = () => {
  return (
    <>
      <Head>
        <title>ProBlog App | Contact</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="blog web application" />
      </Head>

      <section className="container h-screen flex flex-col pb-16">
        <div className="mt-14">
          <div className="mb-7">
            <Title label="Contact." />
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}

export default contact
