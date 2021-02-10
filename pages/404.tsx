import Link from 'next/link'

const notFoundPage = () => {
  return (
    <div className="flex h-screen flex-col justify-center items-center">
      <h2 className="text-9xl text-primary-red font-extrabold border-primary-black border-b">
        404
      </h2>
      <span className="font-medium text-primary-black pt-3">
        Page not found. Back to{' '}
        <Link href="/">
          <a className="text-primary-red border-b border-primary-red">Home</a>
        </Link>
      </span>
    </div>
  )
}

export default notFoundPage