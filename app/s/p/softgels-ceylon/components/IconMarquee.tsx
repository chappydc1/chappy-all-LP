import "./icon-marquee.css"

type IconMarqueeProps = {
  items: string[]
  icons: string[]
  repeat: number
  className: string
  background: string
  color: string
}

export function IconMarquee({
  items,
  icons,
  repeat,
  className,
  background,
  color,
}: IconMarqueeProps): React.JSX.Element {
  const rounds = Array.from({ length: repeat }, (_, i) => i)

  return (
    <section
      className={`cy-mq ${className}`}
      style={{ background }}
    >
      <div className="cy-mq-wrapper">
        <div
          className="cy-mq-track"
          style={{ color }}
        >
          {rounds.map((round) =>
            items.map((text, i) => (
              <div
                key={`${round}-${text}`}
                className="cy-mq-item"
                aria-hidden={round > 0 ? true : undefined}
              >
                <img
                  className="cy-mq-icon"
                  src={icons[i]}
                  width={32}
                  height={32}
                  alt={round > 0 ? "" : text}
                />
                <span className="cy-mq-text">{text}</span>
              </div>
            )),
          )}
        </div>
      </div>
    </section>
  )
}
