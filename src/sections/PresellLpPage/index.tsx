"use client";

/** Each body block is a single-key object: { sectionName: copyText }
 *  String → paragraph (or blockquote / cta depending on the key name)
 *  string[] → bullet list
 *  null → cta image (no copy)
 */
type BodyBlock = Record<string, string | string[] | null>;

const BLOCKQUOTE_KEYS = new Set(["expert_quote", "results_teaser", "testimonial_quote"]);
const BULLETS_KEYS    = new Set(["objections_crushed", "discover_bullets"]);

/** Convert **bold** markdown to <strong>bold</strong>. No other HTML allowed in copy.json. */
function md(text: string): string {
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}

type NavLink = { label: string; active: boolean };

type Comment = {
  initial: string;
  avatarColor: string;
  name: string;
  timestamp: string;
  text: string;
  likes: string;
  hidden?: boolean;
};

type LegalLink = { label: string; href: string };

export type LpCopy = {
  seo: { title: string; description: string };
  nav: {
    advertorialLabel: string;
    date: string;
    siteNameParts: string[];
    signIn: string;
    subscribe: string;
    navLinks: NavLink[];
  };
  article: {
    category: string;
    headline: string;
    author: string;
    datePublished: string;
    views: string;
    rating: string;
    ratingStars: number;
    heroImageAlt: string;
    body: BodyBlock[];
    relatedTopics: string[];
  };
  comments: {
    title: string;
    topCommentsLabel: string;
    sortOptions: string[];
    commentPlaceholder: string;
    postButtonLabel: string;
    loadMoreLabel: string;
    items: Comment[];
  };
  footer: {
    brandName: string;
    brandHighlight: string;
    tagline: string;
    legalTitle: string;
    legalLinks: LegalLink[];
    disclaimer: string;
    copyright: string;
  };
  ctaUrl: string;
};

export type LpMedia = {
  authorAvatar: { src: string; alt: string };
  heroImage: { src: string; alt: string };
  ctaImageDesktop: { src: string; alt: string };
  ctaImageMobile: { src: string; alt: string };
};

export type PresellLpPageProps = {
  content: LpCopy;
  media: LpMedia;
};

function StarRating({ count, rating }: { count: number; rating: string }){
  return (
    <div className="items-center flex flex-wrap md:flex-nowrap">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 mr-1">★</span>
      ))}
      <span className="text-gray-600 font-medium ml-1">{rating}</span>
    </div>
  );
}

function CommentItem({ item, ctaUrl }: { item: Comment; ctaUrl: string }){
  return (
    <div className="items-start flex flex-wrap max-w-full md:flex-nowrap md:max-w-none md:break-normal">
      <div
        className={`text-white font-bold items-center flex shrink-0 h-10 justify-center max-w-full min-h-[auto] min-w-[auto] w-10 mr-3 rounded-[50%] md:max-w-none md:break-normal ${item.avatarColor}`}
      >
        {item.initial}
      </div>
      <div className="max-w-full min-h-[auto] min-w-[auto] md:max-w-none md:break-normal">
        <div className="items-center flex flex-wrap max-w-full md:flex-nowrap md:max-w-none md:break-normal">
          <span className="font-medium block max-w-full min-h-[auto] min-w-[auto] md:max-w-none md:break-normal">
            {item.name}
          </span>
          <span className="text-gray-500 text-xs block leading-4 max-w-full min-h-[auto] min-w-[auto] ml-2 md:max-w-none md:break-normal">
            {item.timestamp}
          </span>
        </div>
        <p className="text-gray-800 max-w-full mt-1 md:max-w-none md:break-normal">{item.text}</p>
        <div className="text-gray-500 text-sm items-center flex flex-wrap leading-5 max-w-full mt-2 md:flex-nowrap md:max-w-none md:break-normal">
          <button className="items-center bg-transparent flex flex-wrap min-h-[auto] text-center mr-2 p-0 md:flex-nowrap md:break-normal md:mr-0 hover:text-blue-600">
            <span className="mr-1">♡</span>
            {item.likes}
          </button>
          <a
            href={ctaUrl}
            className="bg-transparent block min-h-[auto] min-w-[auto] text-center ml-4 p-0 md:break-normal hover:text-blue-600"
          >
            Reply
          </a>
        </div>
      </div>
    </div>
  );
}

export function PresellLpPage({ content, media }: PresellLpPageProps){
  const { nav: header, article, comments, footer, ctaUrl } = content;

  function renderBlock(block: BodyBlock, index: number){
    const [key, value] = Object.entries(block)[0];

    if (key === "cta_image") {
      return (
        <div key={index}>
          <a href={ctaUrl} className="hidden md:inline md:break-normal">
            <img src={media.ctaImageDesktop.src} alt={media.ctaImageDesktop.alt} className="max-w-full w-full my-3 rounded md:break-normal" />
          </a>
          <a href={ctaUrl} className="inline-block md:hidden md:break-normal">
            <img src={media.ctaImageMobile.src} alt={media.ctaImageMobile.alt} className="max-w-full w-full my-3 rounded md:break-normal" />
          </a>
        </div>
      );
    }

    if (key === "cta_link") {
      return (
        <p key={index} className="text-xl leading-[34px] max-w-full mb-5 font-domine md:max-w-none md:break-normal">
          <a href={ctaUrl} className="text-sky-600 font-bold md:break-normal">
            <b className="font-black md:break-normal">{value as string}</b>
          </a>
        </p>
      );
    }

    if (Array.isArray(value)) {
      if (BULLETS_KEYS.has(key)) {
        return (
          <ul key={index} className="text-xl leading-[34px] max-w-full mb-5 font-domine list-none pl-0 md:max-w-none md:break-normal">
            {value.map((item, i) => (
              <li key={i} className="before:content-['•'] before:mr-2" dangerouslySetInnerHTML={{ __html: md(item) }} />
            ))}
          </ul>
        );
      }
      // line-group: lines joined with <br/>
      return (
        <p key={index} className="text-xl leading-[34px] max-w-full mb-5 font-domine md:max-w-none md:break-normal"
          dangerouslySetInnerHTML={{ __html: value.map(md).join("<br/>") }} />
      );
    }

    if (BLOCKQUOTE_KEYS.has(key)) {
      return (
        <blockquote key={index} className="text-xl italic border-l-sky-600 leading-[34px] ml-[5px] pl-5 border-l-[3px] border-solid md:break-normal mb-5">
          <p className="max-w-full font-domine md:max-w-none md:break-normal"
            dangerouslySetInnerHTML={{ __html: md(value as string) }} />
        </blockquote>
      );
    }

    return (
      <p key={index} className="text-xl leading-[34px] max-w-full mb-5 font-domine md:max-w-none md:break-normal"
        dangerouslySetInnerHTML={{ __html: md(value as string) }} />
    );
  }

  const visibleComments = comments.items.filter((c) => !c.hidden);
  const hiddenComments = comments.items.filter((c) => c.hidden);

  return (
    <>
      <header className="bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)]">
        <div className="text-neutral-500 text-[10px] leading-[15px] max-w-full text-center uppercase md:max-w-none">
          {header.advertorialLabel}
        </div>

        <div className="max-w-full overflow-x-hidden overflow-y-auto w-full mx-auto pb-2 px-3 md:max-w-screen-xl md:px-4">
          <div className="text-sm items-center flex flex-wrap justify-between leading-5 max-w-full border-gray-200 py-2 border-b border-solid md:flex-nowrap md:max-w-none">
            <div className="text-gray-600 max-w-full min-h-[auto] min-w-[auto] md:max-w-none">
              <span className="max-w-full md:max-w-none">{header.date}</span>
            </div>
            <div className="flex flex-wrap max-w-full min-h-[auto] md:flex-nowrap md:max-w-none">
              <a
                href={ctaUrl}
                className="text-gray-600 block min-h-[auto] min-w-[auto] mr-2 md:mr-0 hover:text-blue-800"
              >
                {header.signIn}
              </a>
              <a
                href={ctaUrl}
                className="text-gray-600 block min-h-[auto] min-w-[auto] ml-4 hover:text-blue-800"
              >
                {header.subscribe}
              </a>
            </div>
          </div>

          <div className="items-center flex flex-wrap justify-between max-w-full px-2 py-4 md:flex-nowrap md:max-w-none md:px-0">
            <div className="text-blue-900 text-2xl font-bold leading-8 max-w-full min-h-[auto] min-w-[auto] md:max-w-none">
              <span className="text-red-600 md:max-w-none">{header.siteNameParts[0]}</span>
              {header.siteNameParts[1]}
            </div>

            <div className="hidden max-w-full md:block md:max-w-none md:min-h-[auto] md:min-w-[auto]">
              <div className="flex flex-wrap max-w-full md:flex-nowrap md:max-w-none">
                {header.navLinks.map((link, i) => (
                  <a
                    key={i}
                    href={ctaUrl}
                    className={`font-medium block min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto] hover:text-blue-600 ${
                      i === 0 ? "text-gray-800 mr-3 md:mr-0" : "ml-6"
                    } ${link.active ? "text-red-600" : "text-gray-800"}`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-full overflow-x-hidden overflow-y-auto w-full mx-auto px-3 py-6 md:max-w-[1200px] md:px-4">
        <div className="max-w-4xl w-full mx-auto">
          <div className="text-sky-600 font-bold tracking-[1px] max-w-full uppercase mb-3 md:max-w-none">
            {article.category}
          </div>

          <h1 className="text-2xl font-semibold leading-[28.8px] mb-3 font-playfair_display md:text-[40px] md:leading-[48px]">
            {article.headline}
          </h1>

          <div className="items-center flex flex-wrap max-w-full mb-6 md:flex-nowrap md:max-w-none">
            <img
              src={media.authorAvatar.src}
              alt={media.authorAvatar.alt}
              className="h-12 max-w-full min-h-[auto] min-w-[auto] object-cover w-12 mr-4 rounded-full"
            />
            <div className="max-w-full min-h-[auto] min-w-[auto] md:max-w-none">
              <div className="font-medium max-w-full md:max-w-none">By {article.author}</div>
              <div className="text-gray-500 text-sm leading-5 max-w-full md:max-w-none">
                Updated: <span>{article.datePublished}</span>
              </div>
              <div className="items-center flex flex-wrap max-w-full mt-1 md:max-w-none">
                <div className="text-neutral-600 items-center flex max-w-full min-h-[auto] min-w-[auto] mr-4 mt-1 md:max-w-none">
                  👁 {article.views}
                </div>
                <StarRating count={article.ratingStars} rating={article.rating} />
              </div>
            </div>
          </div>

          <div className="max-w-full mb-8 md:max-w-none">
            <img
              src={media.heroImage.src}
              alt={media.heroImage.alt}
              className="max-w-full w-full rounded-lg"
            />
          </div>

          <div className="leading-[27.2px] max-w-full overflow-x-hidden overflow-y-auto px-2 md:max-w-[800px] md:overflow-x-visible md:overflow-y-visible md:break-normal md:px-0">
            <article className="md:break-normal">
              {article.body.map((block, i) => renderBlock(block, i))}
            </article>

            <div className="max-w-full border-gray-200 mt-8 pt-4 border-t border-solid md:max-w-none md:break-normal">
              <div className="text-gray-600 text-sm leading-5 max-w-full md:max-w-none md:break-normal">
                Related Topics:
              </div>
              <div className="gap-x-2 flex flex-wrap max-w-full gap-y-2 mt-2 md:max-w-none md:break-normal">
                {article.relatedTopics.map((topic) => (
                  <a
                    key={topic}
                    href={ctaUrl}
                    className="text-gray-700 text-sm bg-gray-100 block leading-5 min-h-[auto] min-w-[auto] px-3 py-1 rounded-full md:break-normal hover:bg-gray-200"
                  >
                    {topic}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-full border-gray-300 mt-12 pt-6 border-t border-solid md:max-w-none">
            <h3 className="text-xl font-bold leading-7 mb-6">{comments.title}</h3>

            <div className="items-center flex flex-wrap justify-between max-w-full mb-6 md:flex-nowrap md:max-w-none">
              <div className="font-medium max-w-full min-h-[auto] min-w-[auto] md:max-w-none">
                {comments.topCommentsLabel}
              </div>
              <div className="text-sm leading-5 max-w-full min-h-[auto] min-w-[auto] md:max-w-none">
                <select className="bg-zinc-100 leading-normal max-w-full border-gray-300 px-2 py-1 rounded md:max-w-none">
                  {comments.sortOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="bg-gray-50 max-w-full mb-6 p-4 rounded-lg md:max-w-none">
              <div className="items-start flex flex-wrap max-w-full md:flex-nowrap md:max-w-none">
                <div className="bg-gray-300 shrink-0 h-10 max-w-full min-h-[auto] min-w-[auto] w-10 overflow-hidden mr-3 rounded-full md:max-w-none" />
                <div className="grow max-w-full min-h-[auto] min-w-[auto] md:max-w-none">
                  <textarea
                    rows={3}
                    placeholder={comments.commentPlaceholder}
                    className="max-w-full resize-y w-full border-gray-300 border p-2 rounded md:max-w-none"
                  />
                  <div className="flex flex-wrap justify-end max-w-full mt-2 md:flex-nowrap md:max-w-none">
                    <button className="text-white bg-blue-600 block min-h-[auto] min-w-[auto] text-center px-4 py-1 rounded hover:bg-blue-700">
                      {comments.postButtonLabel}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-full md:max-w-none">
              {visibleComments.map((item, i) => (
                <div
                  key={i}
                  className={`border-l-zinc-200 max-w-full overflow-x-hidden overflow-y-auto ${
                    i > 0 ? "mt-6" : ""
                  } pl-4 border-l-[3px] border-solid md:max-w-none md:overflow-x-visible md:overflow-y-visible md:break-normal`}
                >
                  <CommentItem item={item} ctaUrl={ctaUrl} />
                </div>
              ))}

              {hiddenComments.length > 0 && (
                <div className="hidden max-w-full mt-6 md:max-w-none">
                  {hiddenComments.map((item, i) => (
                    <div
                      key={i}
                      className={`border-l-zinc-200 max-w-full overflow-x-hidden overflow-y-auto ${
                        i > 0 ? "mt-6" : ""
                      } pl-4 border-l-[3px] border-solid md:max-w-none md:overflow-x-visible md:overflow-y-visible md:break-normal`}
                    >
                      <CommentItem item={item} ctaUrl={ctaUrl} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="max-w-full text-center pt-4 md:max-w-none">
              <button className="text-gray-700 bg-transparent border border-gray-300 px-6 py-2 rounded-full hover:bg-gray-50">
                {comments.loadMoreLabel}
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="text-white bg-gray-800 pt-10 pb-6 border-t border-solid border-t-zinc-100">
        <div className="max-w-full overflow-x-hidden overflow-y-auto w-full mx-auto pb-2 px-3 md:max-w-screen-xl md:px-4">
          <div className="gap-x-8 grid grid-cols-1 max-w-full gap-y-8 mb-8 md:grid-cols-4 md:max-w-none">
            <div className="max-w-full min-h-[auto] min-w-[auto] md:max-w-none">
              <h4 className="text-xl font-bold leading-7 mb-4">
                {footer.brandName}
                <span className="text-red-400">{footer.brandHighlight}</span>
              </h4>
              <p className="text-gray-400 max-w-full mb-4 md:max-w-none">{footer.tagline}</p>
            </div>

            <div className="max-w-full min-h-[auto] min-w-[auto] md:max-w-none">
              <h4 className="font-bold mb-4">{footer.legalTitle}</h4>
              <ul className="list-none pl-0">
                {footer.legalLinks.map((link, i) => (
                  <li key={link.href} className={i > 0 ? "mt-2" : ""}>
                    <a href={link.href} className="text-gray-400 hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-gray-400 text-sm leading-5 max-w-full border-gray-700 pt-6 border-t border-solid md:max-w-none">
            <p className="max-w-full md:max-w-none">{footer.disclaimer}</p>
            <p className="max-w-full mt-4 md:max-w-none">{footer.copyright}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
