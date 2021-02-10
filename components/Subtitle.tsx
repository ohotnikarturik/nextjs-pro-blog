import { SubtitleProps } from '../interfaces/index'

const Subtitle = ({ label }: SubtitleProps) => {
  return <h3 className="text-xl font-medium text-primary-gray ">{label}</h3>
}

export default Subtitle
