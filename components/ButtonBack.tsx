import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ButtonBack = () => {
  const router = useRouter()

  return (
    <button className="focus:outline-none" onClick={() => router.back()}>
      <a className="transform hover:scale-105 motion-reduce:transform-none flex justify-between  w-50 py-2 pr-4 text-primary-red font-bold hover:text-primary-crimson transition ease-in duration-200">
        <div className="mr-2 transform rotate-90">
          <FontAwesomeIcon width={15} icon={'chevron-down'} />
        </div>
        Back
      </a>
    </button>
  )
}

export default ButtonBack
