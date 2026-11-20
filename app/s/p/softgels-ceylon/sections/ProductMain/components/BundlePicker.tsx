import copy from "../../../copy.json"
import media from "../../../media.json"

type BundlePickerProps = {
  selectedId: string
  onSelect: (variantId: string) => void
}

export function BundlePicker({ selectedId, onSelect }: BundlePickerProps): React.JSX.Element {
  const c = copy.productMain.bundles
  const variants = copy.checkout.variants
  const images = media.productMain.bundles

  return (
    <div className="cy-pm-bundles">
      <div className="cy-pm-bundles-title">
        <span>{c.title}</span>
      </div>
      <div
        className="cy-pm-bars"
        role="radiogroup"
        aria-label={c.title}
      >
        {c.options.map((option, index) => {
          const variant = variants.find((item) => item.id === option.variantId)
          const isSelected = option.variantId === selectedId
          const classes = ["cy-pm-bar"]
          if (isSelected) classes.push("cy-pm-bar--selected")
          if (option.badge) classes.push("cy-pm-bar--badge")

          return (
            <label
              key={option.variantId}
              className={classes.join(" ")}
            >
              <input
                type="radio"
                name="cy-pm-bundle"
                value={option.variantId}
                checked={isSelected}
                onChange={() => onSelect(option.variantId)}
              />
              {option.badge && <span className="cy-pm-bar-badge">{option.badge}</span>}
              <img
                className="cy-pm-bar-image"
                src={images[index]}
                alt=""
                width={300}
                height={222}
              />
              <span className="cy-pm-bar-content">
                <span className="cy-pm-bar-left">
                  <span className="cy-pm-bar-title">{option.title}</span>
                  <span className="cy-pm-bar-subtitle">{option.subtitle}</span>
                </span>
                <span className="cy-pm-bar-pricing">
                  <span className="cy-pm-bar-price">{variant?.price}</span>
                  <span className="cy-pm-bar-full-price">{variant?.compareAtPrice}</span>
                </span>
              </span>
            </label>
          )
        })}
      </div>
    </div>
  )
}
