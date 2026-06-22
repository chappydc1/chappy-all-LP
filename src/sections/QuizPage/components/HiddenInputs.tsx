import React from "react"
export type HiddenInputsProps = {
  type: string
  name?: string
  className: string
}

export function HiddenInputs(props: HiddenInputsProps): React.JSX.Element {
  return (
    <input type={props.type} name={props.name} className={props.className} />
  )
}
