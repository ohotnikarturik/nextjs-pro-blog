import Meta from '../components/Meta'
import ContactForm from '../components/ContactForm'
import Title from '../components/Title'
import ButtonBack from '../components/ButtonBack'

const contact = () => {
  return (
    <>
      <Meta
        title="ProBlog App | Contact"
        description="Contact page"
        keywords="contact"
      />
      <section className="container h-full flex flex-col pb-40">
        <div className="mt-7 md:hidden">
          <ButtonBack />
        </div>
        <div className="mb-16 text-center md:hidden">
          <Title label="Contact." />
        </div>
        <div className="md:mt-20 h-full">
          <ContactForm />
        </div>
      </section>
    </>
  )
}

export default contact
