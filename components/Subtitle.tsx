import { SubtitleProps } from '../interfaces/index'

const Subtitle = ({ label, boldStyle }: SubtitleProps) => {
  return (
    <h3
      className={`text-xl font-${
        boldStyle ? 'bold' : 'light'
      } text-primary-gray`}
    >
      {label}
    </h3>
  )
}

export default Subtitle
