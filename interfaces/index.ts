export interface ButtonProps {
  label: string
  path: string
  onClick?: () => void
}
export interface ButtonDropDownMenuProps {
  label: string
  onClick?: () => void
  isMenuOpen?: boolean
}
export interface TitleProps {
  label: string
}
export interface SubtitleProps {
  label: string
  boldStyle?: boolean
}
export interface BadgeProps {
  label: string
  colour: string
}
