import { SubtitleProps } from '../interfaces/index'

const Subtitle = ({ label, boldStyle, color }: SubtitleProps) => {
  return (
    <h3
      className={`text-xl font-${
        boldStyle ? 'bold' : 'light'
      } text-primary-${color}`}
    >
      {label}
    </h3>
  )
}

export default Subtitle
