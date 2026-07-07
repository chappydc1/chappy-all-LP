import adv from "../copy.json";
import media from "../media.json";

export function ZikeeyArticleHeader() {
  const { breadcrumbs, logoAlt, logoUrl } = adv.header;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="border-neutral-200 border-b">
        <div className="max-w-[1100px] mx-auto px-[10px] py-[2px]">
          <a href={logoUrl} className="inline-block">
            <img
              src={media.logo}
              className="block max-h-[50px]"
              alt={logoAlt}
            />
          </a>
        </div>
      </div>
      <div className="max-w-[1100px] mx-auto px-[10px] pt-[3px] pb-[4px]">
        <nav
          aria-label="Breadcrumb"
          className="block text-[12px] font-normal font-sans m-0 p-0 tracking-tight"
          style={{ color: "rgb(70, 70, 70)" }}
        >
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb}>
              {i > 0 && <span> &gt; </span>}
              <span>{crumb}</span>
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
}
