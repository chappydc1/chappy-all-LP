export type HiddenIframeProps = {
  src?: string
}

export const HiddenIframe = (props: HiddenIframeProps) => {
  return (
    <iframe
      src={props.src}
      className="box-border caret-transparent hidden outline-[3px] align-baseline border-zinc-100"
    />
  )
}
