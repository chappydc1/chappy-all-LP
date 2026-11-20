type AccordionItem = {
  title: string
  html: string
}

type ProductAccordionsProps = {
  items: AccordionItem[]
}

export function ProductAccordions({ items }: ProductAccordionsProps): React.JSX.Element {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.title}
          className="cy-pm-accordion"
        >
          <details>
            <summary>
              <div className="cy-pm-summary-title">
                <h2 className="cy-pm-accordion-title">{item.title}</h2>
              </div>
            </summary>
            <div
              className="cy-pm-accordion-content"
              dangerouslySetInnerHTML={{ __html: item.html }}
            />
          </details>
        </div>
      ))}
    </>
  )
}
