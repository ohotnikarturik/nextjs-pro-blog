import { BadgeProps } from '../interfaces/index'

const Badge = ({ label, color, postStyle }: BadgeProps) => {
  console.log(color)

  return (
    <div
      className={`bg-primary-${color} text-center tracking-wide w-32 py-2 px-2 inline-block ${
        postStyle ? 'rounded-tl-md rounded-br-md' : 'rounded-tr-md'
      } text-sm font-semibold tl-md text-primary-white`}
    >
      {label}
    </div>
  )
}

export default Badge
