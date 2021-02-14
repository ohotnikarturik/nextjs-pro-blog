import Link from 'next/link'
import { useRouter } from 'next/router'

const notFoundPage = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col justify-start items-center">
      <h2 className="text-9xl text-primary-red font-bold border-primary-red border-b">
        404
      </h2>
      <span className="font-medium text-primary-black mt-6">
        This page could not be found. Go{' '}
        <button
          className="focus:outline-none hover:text-primary-crimson hover:border-primary-crimson transition ease-in duration-200"
          onClick={() => router.back()}
        >
          <a className="text-primary-red border-b border-primary-red hover:text-primary-crimson hover:border-primary-crimson transition ease-in duration-200">
            Back
          </a>
        </button>
        <span> or go</span>{' '}
        <Link href="/">
          <a className="text-primary-red border-b border-primary-red hover:text-primary-crimson hover:border-primary-crimson transition ease-in duration-200">
            Home
          </a>
        </Link>
      </span>
    </div>
  )
}

export default notFoundPage
