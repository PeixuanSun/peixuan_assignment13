export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large'
  /** Button contents */
  label: string
  /** Is the button disabled? */
  disabled?: boolean
  /** Optional click handler */
  rounded?: boolean
  onClick?: () => void
}
