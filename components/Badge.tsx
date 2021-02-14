import { BadgeProps } from '../interfaces/index'

const Badge = ({ label, color, postStyle }: BadgeProps) => {
  return (
    <div
      className={` text-center tracking-wide w-32 py-2 px-5 inline-block ${
        postStyle ? 'rounded-tl-md rounded-br-md' : 'rounded-tr-md'
      } text-sm font-semibold tl-md text-primary-white bg-primary-${color}`}
    >
      {label}
    </div>
  )
}

export default Badge
