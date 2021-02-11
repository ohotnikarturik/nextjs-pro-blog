import { SubtitleProps } from '../interfaces/index'

const Subtitle = ({ label, cardStyle }: SubtitleProps) => {
  return (
    <h3
      className={`text-xl font-${
        cardStyle ? 'bold' : 'light'
      } text-primary-gray`}
    >
      {label}
    </h3>
  )
}

export default Subtitle
