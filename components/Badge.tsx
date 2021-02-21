import { BadgeProps } from '../interfaces/index'

const Badge = ({ label, color, postStyle }: BadgeProps) => {
  return (
    <div
      className={`${
        postStyle ? 'rounded-tl-md  rounded-br-md' : 'rounded-tr-md'
      } bg-primary-orange text-center tracking-wide w-32 py-2 px-2 inline-block  text-sm font-semibold tl-md text-primary-white`}
    >
      {label}
    </div>
  )
}

export default Badge
