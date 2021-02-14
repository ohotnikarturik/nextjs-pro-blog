export interface ButtonProps {
  label: string
  path: string
  as?: string
  onClick?: () => void
}
export interface ButtonDropDownMenuProps {
  label: string
  onClickMenuOpen?: () => void
  isMenuOpen?: boolean
}
export interface TitleProps {
  label: string
}
export interface SubtitleProps {
  label: string
  boldStyle?: boolean
  color?: string
}
export interface BadgeProps {
  label: string
  color: string
  postStyle?: boolean
}
export interface IPost {
  id: number
  title: string
  postImg: string
  textContent: string
  authorImg: string
  authorName: string
  date: string
  badgeColor: string
  category: string
}
export interface CardListProps {
  posts: IPost[]
}
export interface DropDownMenuProps {
  onClickSetCategory: (value: string) => void
  divRef: any // fix
  category: string
}
export interface HamburgerMenuProps {
  onClick: () => void
}
export interface LogoProps {
  footerStyle?: boolean
}
export interface NavBarProps {
  footerStyle?: boolean
  overlayStyle?: boolean
}
export interface OverlayMenuProps {
  onClick: () => void
}

export interface ReverseListItemProps {
  onClickReversPosts: () => void
}
export interface SearchFilterSortPanelProps {
  getSearchInputValue: (value: string) => void
  onClickReversPosts: () => void
  onSelectCategory: (category: string) => void
}
export interface SearchFormProps {
  getSearchInputValue: (value: string) => void
}
export interface SocialItemsProps {
  footerStyle?: boolean
}
export interface ButtonToScrollProps {
  label: string
  path: string
}