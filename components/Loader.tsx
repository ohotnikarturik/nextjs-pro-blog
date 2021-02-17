import { LoaderProps } from '../interfaces/'

const Loader = ({ label }: LoaderProps) => {
  return <span className="text-xl font-bold text-primary-purple">{label}</span>
}

export default Loader
