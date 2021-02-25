import { Document } from '@contentful/rich-text-types'

export type Params = {
  params: {
    id: string
  }
}
export interface MetaProps {
  title: string
  keywords?: string
  description?: string
}
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
  postStyle?: boolean
}
export interface BlogProps {
  listPosts: [
    {
      sys: { id: string }
      fields: IPost
    }
  ]
  listCategoties: [string]
}
export interface HomeProps {
  posts: [
    {
      sys: { id: string }
      fields: IPost
    }
  ]
}
export interface PostProps {
  post: {
    sys: { id: string }
    fields: IPost
  }
}
export interface IObjectPost {
  sys: { id: string }
  fields: IPost
}
export interface IPost {
  id: string
  title: string
  postImg: IPostImg
  content: Document
  excerpt: string
  authorImg: IAuthorImg
  authorName: string
  date: string
  category: string
}

export interface IPostImg {
  fields: {
    file: {
      url: string
      details: {
        image: {
          width: number
          height: number
        }
      }
    }
  }
}
export interface IAuthorImg {
  fields: {
    file: {
      url: string
    }
  }
}
export interface CardListProps {
  posts: IObjectPost[]
}
export interface PostCardItemProps {
  post: IObjectPost
}
export interface DropDownMenuProps {
  onClickSetCategory: (value: string) => void
  divRef?: any // fix
  category: string
  listCategoties: [string]
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
  listCategoties: [string]
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
export interface PaginationProps {
  postPerPage: number
  totalPosts: number
  paginate: (number: number) => void
  currentPage: number
}
export interface LoaderProps {
  label: string
}
export interface IFormValues {
  name: string
  email: string
  subject: string
  message: string
}


