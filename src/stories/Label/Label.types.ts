export interface LabelProps {
  /** The text to display */
  text: string
  /** The id of the input element the label is associated with */
  htmlFor?: string
  /** Is this field required? */
  required?: boolean
  /** Is the label disabled? */
  disabled?: boolean
}
