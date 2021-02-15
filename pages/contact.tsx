import Meta from '../components/Meta'
import ContactForm from '../components/ContactForm'
import Title from '../components/Title'

const contact = () => {
  return (
    <>
      <Meta
        title="ProBlog App | Contact"
        description="Contact page"
        keywords="contact"
      />
      <section className="container h-full flex flex-col pb-40">
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
