type Review = {
  rating: string
  title: string
  text: string
  author: string
  tags: string[]
}

type ReviewCardProps = {
  review: Review
  avatar: string | undefined
  verifiedLabel: string
  starsLabel: string
}

export function ReviewCard({
  review,
  avatar,
  verifiedLabel,
  starsLabel,
}: ReviewCardProps): React.JSX.Element {
  return (
    <div className="cy-rc-card">
      <div className="cy-rc-rating-wrap">
        <span className="cy-rc-rating-num">{review.rating}</span>
        <span
          className="cy-rc-stars"
          aria-label={`${review.rating} ${starsLabel}`}
        >
          ★★★★★
        </span>
      </div>

      <h3 className="cy-rc-card-title">{review.title}</h3>
      <p className="cy-rc-card-text">{review.text}</p>

      <div className="cy-rc-author-row">
        <div className="cy-rc-author-left">
          {avatar ? (
            <img
              src={avatar}
              alt={review.author}
              className="cy-rc-author-img"
              loading="lazy"
              width={36}
              height={36}
            />
          ) : null}
          <strong className="cy-rc-author-name">{review.author}</strong>
        </div>
        <span className="cy-rc-verified-badge">
          <svg
            className="cy-rc-verified-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          {verifiedLabel}
        </span>
      </div>

      {review.tags.length > 0 ? (
        <div className="cy-rc-tags-row">
          {review.tags.map((tag) => (
            <span
              key={tag}
              className="cy-rc-tag-pill"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  )
}
