import copy from "./copy.json";
import media from "./media.json";

type BodySection =
  | { type: "p" | "h2" | "h3"; html?: string; text?: string }
  | { type: "figure"; mediaKey: keyof typeof media }
  | { type: "list"; items: string[] };

function RichText({ html }: { html: string }) {
  return (
    <p
      className="text-black text-lg box-border leading-[30px] outline-[3px] mb-[30px]"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function ArticleSection({ section }: { section: BodySection }) {
  if (section.type === "h2") {
    return (
      <h2 className="text-black text-3xl font-bold outline-[3px] mt-[50px] mb-[30px]">
        {section.text}
      </h2>
    );
  }
  if (section.type === "h3") {
    return (
      <h3 className="text-black text-[27px] font-bold outline-[3px] mb-[30px]">
        {section.text}
      </h3>
    );
  }
  if (section.type === "p") {
    return <RichText html={section.html ?? ""} />;
  }
  if (section.type === "figure") {
    const img = media[section.mediaKey as keyof typeof media] as {
      src: string;
      alt: string;
    };
    return (
      <figure className="outline-[3px] mb-[30px]">
        <img
          src={img.src}
          alt={img.alt}
          className="aspect-auto max-w-full outline-[3px] align-bottom w-[854px] mt-10 mx-auto"
        />
      </figure>
    );
  }
  if (section.type === "list") {
    return (
      <ul className="list-none outline-[3px] ml-[30px] mb-[30px] pl-0">
        {section.items.map((item, i) => (
          <li
            key={i}
            className="text-lg leading-[30px] outline-[3px] mb-5 flex items-start gap-2.5"
          >
            <span className="inline-block mt-3 w-[5px] h-[5px] rounded-full bg-cyan-600 shrink-0" />
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ul>
    );
  }
  return null;
}

export default function HealthinsiderGynocologistPage() {
  const { nav, disclosure, breadcrumbs, article, newsletter, footer } = copy;
  const m = media;

  return (
    <div className="text-black text-base font-normal">
      {/* Navbar */}
      <nav className="sticky bg-zinc-100 outline-[3px] z-[99999] py-5 top-0">
        <div className="relative items-stretch flex h-full justify-between max-w-none outline-[3px] mx-0 px-5 md:max-w-[1000px] md:mx-auto md:px-0">
          {/* Logo */}
          <div className="min-h-[auto] min-w-[auto] outline-[3px]">
            <a href={nav.logoHref}>
              <img
                src={m.logo.src}
                alt={m.logo.alt}
                className="float-left h-10 max-w-[110px] w-[110px] align-baseline"
              />
            </a>
          </div>
          {/* Desktop Nav */}
          <div className="items-center flex min-h-[auto] min-w-[auto] outline-[3px]">
            <ul className="items-center hidden leading-[14px] list-none outline-[3px] mr-[30px] pl-0 md:flex">
              {nav.categories.map((cat) => (
                <li key={cat.label} className="text-sm inline-block min-h-0 min-w-0 outline-[3px] align-middle mr-[30px] md:block md:min-h-[auto] md:min-w-[auto]">
                  <a
                    href={cat.href}
                    className={`font-medium outline-[3px] uppercase md:mb-0 ${"active" in cat && cat.active ? "text-cyan-600" : "text-black hover:text-cyan-600"}`}
                  >
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
            <button type="button" className="bg-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-center mr-10 p-0 md:mr-0">
              <img src={m.icons.search} alt="search-icon" className="float-left h-3.5 w-3.5 align-baseline" />
            </button>
          </div>
        </div>
      </nav>

      {/* Disclosure Banner */}
      <div className="relative outline-[3px]">
        <div className="relative max-w-none outline-[3px] mx-0 px-5 md:max-w-[1000px] md:mx-auto md:px-0">
          <div className="max-w-[854px] outline-[3px] mx-auto">
            <div className="text-neutral-500 text-sm leading-5 outline-[3px] my-[15px] md:my-5">
              {disclosure.text}{" "}
              <a href={disclosure.linkHref} className="outline-[3px] underline">
                {disclosure.linkText}
              </a>
              .
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <section className="relative outline-[3px]">
        <div className="relative max-w-none outline-[3px] mx-0 px-5 md:max-w-[1000px] md:mx-auto md:px-0">
          <div className="max-w-[854px] outline-[3px] mx-auto">
            <span className="text-[10px] items-center flex shrink-0 outline-[3px] overflow-hidden md:text-xs">
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="text-[10px] items-center flex shrink-0 min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-xs">
                  {"href" in crumb && crumb.href ? (
                    <a
                      href={crumb.href}
                      className="text-[10px] items-center flex shrink-0 min-h-[auto] min-w-[auto] outline-[3px] text-nowrap md:text-xs hover:text-cyan-600 after:content-['>'] after:mx-2 after:text-black"
                    >
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-neutral-500 text-[10px] items-center block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap align-middle overflow-hidden md:text-xs">
                      {crumb.label}
                    </span>
                  )}
                </span>
              ))}
            </span>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="relative outline-[3px]">
        <div className="relative max-w-none outline-[3px] mx-0 pt-2.5 px-5 md:max-w-[1000px] md:mx-auto md:pt-5 md:px-0">
          <div className="items-start gap-x-8 max-w-[854px] outline-[3px] gap-y-8 mx-auto">
            {/* Article Header */}
            <div className="outline-[3px]">
              <h1 className="text-black text-[22px] font-bold border-b-zinc-300 leading-[30px] outline-[3px] pb-5 border-b md:text-3xl md:leading-10 md:pb-[25px]">
                {article.headline}
              </h1>

              {/* Article Meta */}
              <div className="flex flex-col outline-[3px] md:block">
                <div className="text-neutral-500 text-xs items-start flex flex-col leading-[22px] min-h-[auto] min-w-[auto] order-2 outline-[3px] mt-2.5 md:items-center md:flex-row md:mt-[15px]">
                  <div className="text-[11px] inline-block leading-5 outline-[3px] align-middle">
                    <div className="block leading-[22px] outline-[3px] align-middle md:inline-block">
                      <span className="inline-block outline-[3px] align-middle">Published By </span>
                      <span className="text-cyan-600 font-bold inline-block outline-[3px] align-middle">{article.meta.publishedBy}</span>
                      <span className="font-semibold inline-block outline-[3px] align-middle mx-[5px]">|</span>
                      <a href={article.meta.categoryHref} className="font-bold inline-block outline-[3px] align-middle">{article.meta.category}</a>
                    </div>
                    <div className="block leading-[22px] outline-[3px] align-middle md:inline-block">
                      <span className="hidden outline-[3px] align-middle mx-[5px] md:inline-block">•</span>
                      <span className="inline-block outline-[3px] align-middle">
                        <span>Last update: </span>{article.meta.lastUpdate}
                      </span>
                      <span className="inline-block outline-[3px] align-middle mx-[5px]">•</span>
                      <span className="inline-block outline-[3px] align-middle mr-[7px]">
                        <img src={m.icons.comments} alt="comments" className="inline h-2.5 w-[10.58px] mr-[5px]" />
                        <span className="align-middle">{article.meta.commentsCount}</span>
                      </span>
                      <span className="inline-block outline-[3px] align-middle mr-[7px]">
                        <img src={m.icons.views} alt="views" className="inline h-[9px] w-[15.77px] mr-[5px]" />
                        <span className="align-middle">{article.meta.viewsCount}</span>
                      </span>
                      <span className="inline-block outline-[3px] align-middle">
                        <img src={m.icons.readingTime} alt="reading-time" className="inline h-[11px] w-[7.69px] mr-[5px]" />
                        <span className="align-middle">{article.meta.readTime}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="outline-[3px] mt-2.5">
                <img
                  src={m.featured.src}
                  alt={m.featured.alt}
                  className="aspect-[auto_1286/_600] object-cover outline-[3px] align-baseline w-[calc(100%_+_40px)] -ml-5 mr-auto my-10 md:w-full md:ml-auto"
                />

                {/* Article Body Sections */}
                {(article.body as BodySection[]).map((section, i) => (
                  <ArticleSection key={i} section={section} />
                ))}

                {/* Important Update Box */}
                <div className="outline-[3px] border-rose-600 p-[30px] border-[3px] border-solid">
                  <h3 className="text-black text-[27px] font-bold outline-[3px] mb-[30px]">
                    <span className="font-normal">{article.importantUpdate.label}</span>
                  </h3>
                  <p className="text-black text-lg leading-[30px] outline-[3px] mb-[30px]">
                    {article.importantUpdate.text}
                  </p>
                </div>

                <p className="text-black text-lg leading-[30px] outline-[3px] mb-[30px]"></p>
              </div>

              {/* CTA Box */}
              <div className="bg-zinc-100 outline-[3px] text-center w-full mt-10 p-[30px]">
                <div className="text-black text-2xl font-bold leading-[34px] outline-[3px]">
                  {article.cta.heading}
                </div>
                <a
                  href={article.cta.buttonHref}
                  className="text-white text-lg font-bold bg-rose-600 inline-block outline-[3px] w-full mt-5 px-[30px] py-[15px] md:w-auto hover:bg-rose-700"
                >
                  {article.cta.buttonText}
                </a>
                <div className="text-zinc-400 text-xs leading-5 outline-[3px] mt-5">
                  {article.cta.disclaimer}
                </div>
              </div>

              {/* Sources */}
              <div className="relative outline-[3px] mt-2.5 md:mt-10">
                <p className="relative text-cyan-600 text-lg font-extralight leading-[30px] outline-[3px] w-fit pl-[25px]">
                  <img
                    src={m.icons.plus}
                    alt="plus"
                    className="absolute w-[18px] left-0 top-2/4 -translate-y-1/2"
                  />
                  {article.sourcesLabel}
                </p>
                <ol className="hidden list-inside list-decimal outline-[3px] ml-[25px] mt-5 mb-[30px] pl-0">
                  {article.sources.map((source, i) => (
                    <li key={i} className="text-[13px] font-extralight leading-[30px] outline-[3px] mb-2.5">
                      <p className="text-black inline outline-[3px]">
                        {source.text}
                        <br />
                        <a href={source.href} className="text-cyan-600 font-light outline-[3px] break-all">
                          {source.href}
                        </a>
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Share Bar */}
              <div className="text-neutral-500 text-[10px] font-medium items-center border-t-zinc-300 flex justify-end outline-[3px] uppercase mt-5 pt-5 border-t">
                <div className="min-h-[auto] min-w-[auto] outline-[3px]">{article.shareBar.label}</div>
                <a href={article.shareBar.facebook} className="block min-h-[auto] min-w-[auto] outline-[3px] ml-[23px]">
                  <img src={m.icons.facebookShare} alt="facebook" className="inline h-4 w-3 align-baseline" />
                </a>
                <a href={article.shareBar.twitter} className="block min-h-[auto] min-w-[auto] outline-[3px] ml-[15px]">
                  <img src={m.icons.twitterShare} alt="twitter" className="inline h-4 w-5 align-baseline" />
                </a>
                <a href={article.shareBar.pinterest} className="block min-h-[auto] min-w-[auto] outline-[3px] ml-[15px]">
                  <img src={m.icons.pinterestShare} alt="pinterest" className="inline h-4 w-4 align-baseline" />
                </a>
                <a href={article.shareBar.linkedin} className="block min-h-[auto] min-w-[auto] outline-[3px] ml-[15px]">
                  <img src={m.icons.linkedinShare} alt="linkedin" className="inline h-4 w-5 align-baseline" />
                </a>
              </div>

              {/* Comments */}
              <div className="relative outline-[3px] mt-10">
                <h2 className="text-black text-[22px] font-bold outline-[3px] mb-[30px]">
                  {article.comments.heading}{" "}
                  <span className="outline-[3px]">({article.comments.count})</span>
                </h2>
                <ol className="list-none outline-[3px] pl-0">
                  {article.comments.items.map((comment) => (
                    <li key={comment.commentId} className="border-b-zinc-100 outline-[3px] mb-5 pb-5 border-b">
                      <div className="outline-[3px]">
                        <div className="items-start flex outline-[3px]">
                          <div className={`relative ${comment.avatarColor} h-10 min-h-[auto] min-w-[auto] outline-[3px] w-10 rounded-full`}>
                            <img
                              src={m.icons.avatar}
                              alt="avatar"
                              className="absolute h-5 outline-[3px] w-[18px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 align-baseline brightness-0 saturate-100 invert-[0.48] sepia-[0.19] saturate-[9.99] hue-rotate-[148deg] brightness-[1.01] contrast-[0.88]"
                            />
                          </div>
                          <div className="min-h-[auto] min-w-[auto] outline-[3px] ml-[15px]">
                            <div className="text-black text-sm font-bold outline-[3px]">{comment.username}</div>
                            <div className="text-neutral-500 text-xs outline-[3px] mt-2">{comment.date}</div>
                          </div>
                        </div>
                        <div className="items-start flex outline-[3px] mt-[17px]">
                          <div className="bg-neutral-100 min-h-[auto] min-w-[auto] outline-[3px] mr-2.5 px-5 py-2 rounded-[10px]">
                            <div className="outline-[3px] mb-4">
                              <p className="text-black leading-6 outline-[3px]">{comment.text}</p>
                            </div>
                          </div>
                          <a
                            href={`#comment-${comment.commentId}`}
                            aria-label={`Reply to ${comment.username}`}
                            className="relative bg-neutral-100 block h-10 min-h-[auto] min-w-10 outline-[3px] rounded-full hover:bg-cyan-600"
                          >
                            <img
                              src={m.icons.replyArrow}
                              alt="back-arrow"
                              className="absolute h-3 outline-[3px] w-3.5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 align-baseline"
                            />
                          </a>
                        </div>
                        {"showReplies" in comment && comment.showReplies && (
                          <div className="text-cyan-600 text-sm font-medium outline-[3px] mt-5">
                            {comment.showReplies}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>

                {/* Leave a Comment Form */}
                <div className="relative outline-[3px] my-10">
                  <h3 className="text-black text-[22px] font-bold outline-[3px] uppercase mb-2.5">
                    {article.comments.leaveCommentHeading}
                  </h3>
                  <form className="outline-[3px]">
                    <p className="text-neutral-500 text-[13px] leading-5 outline-[3px] mb-5">
                      {article.comments.emailNotPublished}
                    </p>
                    <p className="block outline-[3px] align-middle w-full mr-[5px] md:inline-block md:w-[calc(50%_-_5px)]">
                      <input
                        name="author"
                        placeholder={article.comments.namePlaceholder}
                        type="text"
                        className="appearance-none text-black text-sm font-semibold h-[50px] outline-[3px] w-full border border-zinc-300 px-[15px] py-0 border-solid"
                      />
                    </p>
                    <p className="block outline-[3px] align-middle w-full ml-0 mt-[15px] md:inline-block md:w-[calc(50%_-_5px)] md:ml-[5px] md:mt-0">
                      <input
                        name="email"
                        placeholder={article.comments.emailPlaceholder}
                        className="text-black text-sm font-semibold h-[50px] outline-[3px] w-full border border-zinc-300 px-[15px] py-0 border-solid"
                      />
                    </p>
                    <p className="outline-[3px] mt-2.5 mb-5">
                      <textarea
                        name="comment"
                        placeholder={article.comments.commentPlaceholder}
                        className="appearance-none text-black text-sm font-semibold h-[100px] outline-[3px] resize-none w-full border-zinc-300 p-[15px]"
                      />
                    </p>
                    <div className="text-neutral-500 text-[13px] items-start flex leading-5 outline-[3px]">
                      <div className="relative bg-white h-4 min-h-[auto] min-w-4 outline-[3px] w-4 border border-zinc-300 mt-[3px] border-solid" />
                      <label className="block min-h-[auto] min-w-[auto] outline-[3px] ml-2.5">
                        {article.comments.saveLabel}
                      </label>
                    </div>
                    <p className="relative outline-[3px]">
                      <label className="outline-[3px]">{article.comments.attachmentsLabel} </label>
                      <input name="attachment[]" type="file" className="appearance-none p-0" />
                      <span className="block outline-[3px]">{article.comments.attachmentsNote}</span>
                      <span className="block outline-[3px]">{article.comments.attachmentsTypes}</span>
                    </p>
                    <div className="items-center flex flex-col outline-[3px] mt-[30px] md:flex-row">
                      <input
                        name="submit"
                        type="submit"
                        value={article.comments.submitButtonText}
                        className="appearance-none text-white text-base font-bold bg-cyan-600 block min-h-[auto] min-w-[auto] outline-[3px] text-center text-nowrap w-full px-[45px] py-5 md:w-auto hover:bg-cyan-700"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advertisement */}
      <div className="clear-both outline-[3px] text-center mx-auto my-2">
        <p className="text-neutral-500 text-xs outline-[3px]">Advertisement</p>
        <ins className="inline-block outline-[3px] underline w-[480px]">
          <div className="relative inline-block outline-[3px] w-[480px]">
            <div className="content-center items-center gap-x-2.5 flex flex-wrap justify-center max-h-80 outline-[3px] gap-y-2.5 w-[480px]" />
          </div>
        </ins>
      </div>

      {/* Newsletter */}
      <section className="outline-[3px] my-10 px-5 md:px-0">
        <div className="items-center bg-cyan-600 flex flex-col justify-between max-w-none outline-[3px] mx-0 p-5 md:flex-row md:max-w-[1000px] md:mx-auto md:p-10">
          <div className="basis-6/12 min-h-[auto] min-w-[auto] outline-[3px] text-center mb-[30px] pr-0 md:text-start md:mb-0 md:pr-[60px]">
            <div className="items-center flex justify-center outline-[3px] text-center md:justify-normal md:text-start">
              <img src={m.newsletterIcon.src} alt={m.newsletterIcon.alt} className="h-6 w-[26px] align-baseline" />
              <h2 className="text-white text-3xl font-bold min-h-[auto] min-w-[auto] outline-[3px] uppercase ml-5">
                {newsletter.heading}
              </h2>
            </div>
            <p className="text-white leading-[22px] outline-[3px] text-center mt-[15px] md:text-start">
              {newsletter.description}
            </p>
          </div>
          <form className="flex basis-6/12 flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full md:flex-row md:w-auto">
            <input
              type="email"
              placeholder={newsletter.emailPlaceholder}
              className="text-neutral-500 font-medium block basis-full h-[60px] min-h-[60px] min-w-[auto] outline-[3px] border border-zinc-300 px-5 py-0 border-solid md:min-h-[auto]"
            />
            <button
              type="submit"
              className="text-white font-bold bg-rose-600 block h-auto min-h-[60px] min-w-[30%] outline-[3px] text-center text-wrap w-full ml-0 mt-4 px-[30px] py-0 md:h-[60px] md:min-h-[auto] md:min-w-[auto] md:text-nowrap md:w-auto md:ml-2.5 md:mt-0 hover:bg-rose-700"
            >
              {newsletter.buttonText}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black outline-[3px] py-10 md:pb-[15px]">
        <div className="flex flex-col max-w-none outline-[3px] mx-0 px-5 md:block md:max-w-[1000px] md:mx-auto md:px-0">
          {/* Footer nav columns — desktop grid */}
          <div className="hidden grid-cols-[25%_50%_25%] justify-center order-2 outline-[3px] pb-10 border-b border-b-neutral-700 md:grid md:justify-normal md:order-none">
            <div className="hidden min-h-0 min-w-0 outline-[3px] align-top w-[85%] md:block md:min-h-[auto] md:min-w-[auto]">
              <a href={footer.logoHref}>
                <img src={m.footerLogo.src} alt={m.footerLogo.alt} className="h-10 max-w-[110px] min-w-[110px] w-[110px] align-baseline" />
              </a>
              <div className="items-center flex outline-[3px] mt-[30px]">
                <a href={footer.social.facebook} className="block min-h-0 min-w-0 outline-[3px] mr-5 md:min-h-[auto] md:min-w-[auto]">
                  <img src={m.icons.facebookFooter} alt="Facebook" className="inline h-5 w-3 align-baseline" />
                </a>
                <a href={footer.social.twitter} className="block min-h-0 min-w-0 outline-[3px] mr-5 md:min-h-[auto] md:min-w-[auto]">
                  <img src={m.icons.twitterFooter} alt="twitter" className="inline h-[17px] w-[21px] align-baseline" />
                </a>
                <a href={footer.social.pinterest} className="block min-h-0 min-w-0 outline-[3px] mr-5 md:min-h-[auto] md:min-w-[auto]">
                  <img src={m.icons.pinterestFooter} alt="Pinterest" className="inline h-5 w-4 align-baseline" />
                </a>
                <a href={footer.social.youtube} className="block min-h-0 min-w-0 outline-[3px] mr-5 md:min-h-[auto] md:min-w-[auto]">
                  <img src={m.icons.youtubeFooter} alt="youtube" className="inline h-[15px] w-[21px] align-baseline" />
                </a>
                <a href={footer.social.instagram} className="block min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                  <img src={m.icons.instagramFooter} alt="HI instagram icon" className="inline h-5 w-5 align-baseline" />
                </a>
              </div>
            </div>
            <div className="inline-block basis-6/12 min-h-0 min-w-0 outline-[3px] align-top md:block md:basis-auto md:min-h-[auto] md:min-w-[auto]">
              <ul className="grid grid-cols-[1fr_1fr] outline-[3px] gap-y-[15px] pl-0">
                {footer.categories.map((cat) => (
                  <li key={cat.label} className="min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                    <a href={cat.href} className="text-white text-xs outline-[3px] uppercase hover:text-cyan-600">{cat.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="inline-block basis-6/12 min-h-0 min-w-0 outline-[3px] align-top md:block md:basis-auto md:min-h-[auto] md:min-w-[auto]">
              <ul className="grid grid-cols-[1fr_1fr] outline-[3px] gap-y-[15px] pl-0 md:block">
                {footer.links.map((link) => (
                  <li key={link.label} className="outline-[3px] mb-0 md:mb-[15px]">
                    <a href={link.href} className="text-white text-xs outline-[3px] uppercase hover:text-cyan-600">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-neutral-500 text-xs border-t-neutral-700 flex flex-col justify-between min-h-[auto] min-w-[auto] order-4 outline-[3px] mt-5 pt-5 border-t md:flex-row md:min-h-0 md:min-w-0 md:order-none md:mt-[15px]">
            <div className="min-h-[auto] min-w-[auto] outline-[3px] align-top w-full mb-5 pr-0 md:w-[85%] md:mb-0 md:pr-[30px]">
              <p className="outline-[3px]">
                {footer.copyright}{" "}
                <a href={footer.additionalInfoHref} className="outline-[3px] underline">{footer.additionalInfoText}</a>.
              </p>
            </div>
            <div className="shrink-0 min-h-[auto] min-w-[auto] outline-[3px] align-top">
              <ul className="list-none outline-[3px] pl-0">
                <li className="outline-[3px]">
                  <a href={footer.privacyPolicy.href} className="outline-[3px] uppercase">{footer.privacyPolicy.label}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
