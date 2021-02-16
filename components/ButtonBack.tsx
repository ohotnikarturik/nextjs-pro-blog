import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ButtonBack = () => {
  const router = useRouter()

  return (
    <button
      className="focus:outline-none hover:text-primary-crimson hover:border-primary-crimson transition ease-in duration-200"
      onClick={() => router.back()}
    >
      <a className="transform hover:scale-105 motion-reduce:transform-none flex justify-between shadow-md focus:outline-none focus:bg-primary-crimson items-center w-50 py-2 px-4 bg-primary-red hover:bg-primary-crimson transition ease-in duration-200 text-primary-white rounded-md font-medium">
        <div className="mr-2 transform rotate-90">
          <FontAwesomeIcon width={15} icon={'chevron-down'} />
        </div>
        Back
      </a>
    </button>
  )
}

export default ButtonBack
