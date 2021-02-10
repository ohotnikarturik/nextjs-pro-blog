export interface ButtonProps {
  label: string
  path: string  // fix
  icon?: any // fix
  onClick?: () => void
  isMenuOpen?: boolean
}

export interface TitleProps {
  label: string
}

export interface SubtitleProps {
  label: string
}