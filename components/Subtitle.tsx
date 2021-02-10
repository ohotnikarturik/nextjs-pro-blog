import { SubtitleProps } from '../interfaces/index'

const Subtitle = ({ label }: SubtitleProps) => {
  return <h3 className="text-2xl font-light text-primary-gray ">{label}</h3>
}

export default Subtitle
