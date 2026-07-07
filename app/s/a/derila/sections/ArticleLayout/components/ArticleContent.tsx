import adv from "../../../copy.json";
import media from "../../../media.json";
import { ArticleDisclosure } from "../../ArticleLayout/components/ArticleDisclosure";

const { productUrl, publishedDate, article } = adv;
const imgs = media.articleImages;

const linkClass = "text-sky-600 font-bold box-border caret-transparent underline";
const imgLinkClass = "text-sky-600 font-bold box-border caret-transparent block underline my-6";
const h2Class = "text-[23.904px] font-bold box-border caret-transparent leading-[28.6848px] outline-[3px] mb-2";
const pClass = "box-border caret-transparent outline-[3px] mb-[22px]";

function ProductLink({ children }: { children: React.ReactNode }) {
  return (
    <a href={productUrl} className={linkClass}>
      {children}
    </a>
  );
}

function ArticleImage({ index }: { index: number }) {
  const img = imgs[index];
  if (!img?.src) return null;
  return (
    <a href={productUrl} className={imgLinkClass}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img.src} alt={img.alt} className="box-border caret-transparent max-w-full outline-[3px]" />
    </a>
  );
}

export const ArticleContent = () => {
  const { intro, section1, section2, section3, section4, section5, section6, features, testimonials, closing } = article;

  return (
    <div className="relative box-border caret-transparent basis-full shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full mb-12 px-[15px] md:basis-9/12 md:max-w-[75%]">

      {/* Headline */}
      <h1 className="text-[35px] font-extrabold box-border caret-transparent leading-[42px] outline-[3px] mt-4 mb-2 md:text-5xl md:leading-[57.6px]">
        {article.headline}
      </h1>
      <div className="box-border caret-transparent outline-[3px] mb-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={media.stars.src} alt={media.stars.alt} className="box-border caret-transparent max-w-[150px] outline-[3px]" />
        <small className="text-stone-500 text-[15.75px] box-border caret-transparent block outline-[3px] mt-1">
          {publishedDate}
        </small>
      </div>

      {/* Article image 1 */}
      <ArticleImage index={0} />

      {/* Intro */}
      <h2 className={h2Class}>{intro.h2}</h2>
      {intro.paragraphs.map((p, i) => (
        <p key={i} className={pClass}>{p}</p>
      ))}
      <ul className="box-border caret-transparent list-none outline-[3px] mb-4 pl-0">
        {intro.listItems.map((item, i) => (
          <li key={i} className="box-border caret-transparent outline-[3px]">
            <b className="font-bold box-border caret-transparent outline-[3px]">{item.bold}</b>
            {item.text}
          </li>
        ))}
      </ul>

      {/* Article image 2 */}
      <ArticleImage index={1} />

      {/* Section 1 */}
      <h2 className={h2Class}>{section1.h2}</h2>
      <p className={pClass}>{section1.paragraphs[0]}</p>
      <p className={pClass}>{section1.paragraphs[1]}</p>
      <p className={pClass}>{section1.paragraphs[2]}</p>
      <p className={`font-bold ${pClass}`}>
        Meet <ProductLink>Derila</ProductLink> - the cost-effective way to reduce sleep problems and increase energy levels throughout the day.
      </p>

      {/* Article image 3 */}
      <ArticleImage index={2} />

      {/* Section 2 */}
      <h2 className={h2Class}>{section2.h2}</h2>
      <p className={pClass}>{section2.paragraphs[0]}</p>
      <p className={pClass}>{section2.paragraphs[1]}</p>
      <p className={pClass}>
        This is why specialists designed the <ProductLink>Derila Memory Foam Pillow</ProductLink> to provide the ultimate comfort and rest.
      </p>
      <p className={pClass}>{section2.paragraphs[3]}</p>
      <p className={pClass}>{section2.paragraphs[4]}</p>
      <p className={pClass}>
        The <ProductLink>Derila Memory Foam Pillow</ProductLink> will give you the excellent night&apos;s sleep you deserve and allow you to wake up feeling refreshed, re-energized, and uplifted.
      </p>

      {/* Section 3 */}
      <h2 className={h2Class}>{section3.h2}</h2>

      {/* Article image 4 */}
      <ArticleImage index={3} />

      <p className={pClass}>{section3.paragraphs[0]}</p>
      <p className={pClass}>
        <ProductLink>Derila</ProductLink> provides contoured support to reduce muscle pain and headaches caused by poor sleeping habits
      </p>

      {/* Section 4 */}
      <h2 className={h2Class}>
        Why does <ProductLink>Derila</ProductLink> work so well?
      </h2>
      <p className={pClass}>{section4.paragraphs[0]}</p>
      <p className={pClass}>{section4.paragraphs[1]}</p>
      <p className={pClass}>
        <ProductLink>Derila</ProductLink> uses advanced memory foam technology to straighten and support your spine in its natural position, in this way reducing pain and improving sleep.
      </p>
      <p className={pClass}>{section4.paragraphs[3]}</p>

      {/* Article image 5 (placeholder) */}
      <ArticleImage index={4} />

      {/* Section 5 */}
      <h2 className={h2Class}>{section5.h2}</h2>
      <p className={pClass}>{section5.paragraphs[0]}</p>
      <p className={pClass}>{section5.paragraphs[1]}</p>
      <p className={pClass}>{section5.paragraphs[2]}</p>
      <p className={pClass}>
        Made from this material, <ProductLink>Derila</ProductLink> not only supports – it molds to your unique shape, just like a custom pillow (at a fraction of the price). This means that however you like to sleep (back, side or stomach), you&apos;ll get the restful sleep you need.
      </p>

      {/* Section 6 */}
      <h2 className={h2Class}>{section6.h2}</h2>

      {/* Article image 6 (placeholder) */}
      <ArticleImage index={5} />

      <p className={pClass}>
        But when you switch to <ProductLink>Derila</ProductLink>, you&apos;ll relax into memory foam that adapts to your position and gives your anatomy the support it needs. Allowing you to tackle your busy day, without pain and tiredness holding you back.
      </p>
      <p className={pClass}>
        With <ProductLink>Derila</ProductLink>, support meets comfort
      </p>

      {/* Article image 7 (placeholder) */}
      <ArticleImage index={6} />

      {/* Features */}
      <h2 className="text-[23.904px] font-bold box-border caret-transparent leading-[28.6848px] outline-[3px] mb-6">
        Here&apos;s Why Customers Love <ProductLink>Derila</ProductLink>:
      </h2>
      {features.items.map((feature) => (
        <div key={feature.title}>
          <ul className="box-border caret-transparent list-none outline-[3px] mb-4 pl-0">
            <li className="box-border caret-transparent outline-[3px]">
              <h5 className="text-[19.152px] font-bold box-border caret-transparent leading-[22.9824px] outline-[3px] mb-2">
                {feature.title}
              </h5>
            </li>
          </ul>
          <p className={pClass}>
            {feature.title === "BUTTERFLY SUPPORT WINGS" ? (
              <>Wings at each side mean the <ProductLink>Derila</ProductLink> works for side, back, and stomach sleepers.</>
            ) : feature.description}
          </p>
        </div>
      ))}

      {/* Article image 8 (placeholder) */}
      <ArticleImage index={7} />

      {/* Testimonials */}
      {testimonials.map((t, i) => (
        <div key={i}>
          <p className="box-border caret-transparent outline-[3px] mb-1">{t.quote}</p>
          {media.testimonialImages[i]?.src && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={media.testimonialImages[i].src} alt="" className="box-border caret-transparent max-w-full outline-[3px] mb-1" />
          )}
          <p className={pClass}>{t.body}</p>
        </div>
      ))}

      {/* Closing */}
      <h2 className={h2Class}>
        <ProductLink>Derila</ProductLink> Customers Wake Up Feeling Their Best…
      </h2>
      <h2 className={h2Class}>{closing.h2_2}</h2>
      {closing.paragraphs.map((p, i) => (
        <p key={i} className={pClass}>
          {p.includes("<a>Derila</a>") ? (
            <>
              {p.split("<a>Derila</a>")[0]}
              <ProductLink>Derila</ProductLink>
              {p.split("<a>Derila</a>")[1]}
            </>
          ) : p.includes("<a>Derila</a>!") ? (
            <>
              {p.split("<a>Derila</a>!")[0]}
              <ProductLink>Derila</ProductLink>!
            </>
          ) : p}
        </p>
      ))}

      <a
        href={productUrl}
        className="text-white text-[26px] font-bold bg-[linear-gradient(rgb(75,166,20),rgb(0,140,0))] box-border caret-transparent block leading-[31.2px] text-center align-middle border border-lime-800 my-6 px-5 py-4 rounded-bl rounded-br rounded-tl rounded-tr border-solid hover:bg-lime-700 hover:border-lime-900"
      >
        {closing.ctaButton.split("\n")[0]}
        <br />
        {closing.ctaButton.split("\n")[1]}
      </a>

      <ArticleDisclosure />
    </div>
  );
};
