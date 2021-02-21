import ButtonBack from '../components/ButtonBack'
import Meta from '../components/Meta'
import TechStackList from '../components/TechStackList'
import Title from '../components/Title'

const tech = () => {
  return (
    <>
      <Meta
        title="ProBlog App | Tech Stack"
        description="Tech Stack page"
        keywords="about"
      />
      <section className="container min-h-screen flex flex-col pb-40">
        <div className="mt-7 md:hidden">
          <ButtonBack />
        </div>
        <div className="mb-16 text-center md:hidden">
          <Title label="Tech Stack." />
        </div>
        <div className="flex justify-center">
          <div className="flex md:mt-20 flex-col w-full sm:w-3/4 md:w-4/5 lg:w-2/3 xl:w-3/5">
            <TechStackList />
          </div>
        </div>
      </section>
    </>
  )
}

export default tech
