import { BadgeProps } from '../interfaces/index'

const Badge = ({ label, colour }: BadgeProps) => {
  return (
    <div
      className={`text-center tracking-wide w-32 py-2 px-5 inline-block rounded-tr-md text-sm font-semibold text-primary-white bg-primary-${colour}`}
    >
      {label}
    </div>
  )
}

export default Badge
