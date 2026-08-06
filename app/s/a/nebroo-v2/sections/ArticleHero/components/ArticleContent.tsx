import { ArticleHeader } from "./ArticleHeader";
import { ArticleBody } from "./ArticleBody";

type Review = { author: string; location: string; date: string; stars: number; quote: string; text: string };
type ReviewMedia = { avatarSrc: string; starsSrc: string };
type ArticleCopy = {
  breadcrumb: string; titleBold: string; titleRest: string; authorCaption: string;
  ctaUrl: string; ctaLabel: string;
  disclaimer: string;
  option1Heading: string; option2Heading: string; option3Heading: string;
  productName: string; productChipName: string;
  regularPrice: string; discountPct: string; salePrice: string;
  prescriptionAvgCost: string; untreatedCount: string;
};
type ArticleMedia = {
  authorAvatarSrc: string;
  image1Src: string; image2Src: string; image3Src: string;
  image4Src: string; image5Src: string; image6Src: string; image7Src: string;
  productInEarSrc: string; productPackagingSrc: string;
  video1ThumbnailSrc: string; video1Src: string;
  video2ThumbnailSrc: string; video2Src: string;
  video3ThumbnailSrc: string; video3Src: string;
};

type Props = {
  copy: ArticleCopy;
  media: ArticleMedia;
  reviewsCopy: Review[];
  reviewsMedia: ReviewMedia[];
};

const Br = () => <div className="box-border caret-transparent outline-[3px]"><br className="box-border caret-transparent outline-[3px]" /></div>;
const P = ({ children }: { children: React.ReactNode }) => (
  <div className="box-border caret-transparent outline-[3px]">{children}</div>
);
const B = ({ children }: { children: React.ReactNode }) => (
  <b className="font-bold box-border caret-transparent outline-[3px]">{children}</b>
);

export const ArticleContent = ({ copy, media, reviewsCopy, reviewsMedia }: Props) => {
  const { ctaUrl, ctaLabel } = copy;
  const CtaButton = ({ title }: { title: string }) => (
    <ArticleBody
      variant="link"
      linkTitle={title}
      linkText={<>{ctaLabel}</>}
    />
  );

  return (
    <div className="relative box-border caret-transparent basis-full grow max-w-full min-h-[25px] outline-[3px] w-min pb-[58px] md:basis-9/12">
      <ArticleHeader variant="breadcrumb" breadcrumbText={copy.breadcrumb} titleBoldText="" titleText="" imageTitle="" imageSrc="" imageHref="" imageAlt="" imageCaption="" />
      <ArticleHeader variant="title" breadcrumbText="" titleBoldText={copy.titleBold} titleText={copy.titleRest} imageTitle="" imageSrc="" imageHref="" imageAlt="" imageCaption="" />
      <ArticleHeader variant="" breadcrumbText="" titleBoldText="" titleText="" imageTitle="" imageSrc={media.authorAvatarSrc} imageHref="" imageAlt="" imageCaption={copy.authorCaption} />

      {/* Intro */}
      <ArticleBody className="text-zinc-800 text-[17px] box-border caret-transparent leading-[25.5px] outline-[3px] text-left mt-[15px] px-px py-2.5 font-montserrat">
        <P>You want to know <B>why your hearing has become so much worse</B> over the last few years and <B>what your options are.</B></P>
        <Br /><P>Lucky for you, I happen to be the one part of your body who knows the truth better than anyone.</P>
        <Br /><P>Hi. I&apos;m one of your stereocilia.</P>
        <Br /><P>I live inside your cochlea and I handle all your sound decoding.</P>
        <Br /><P>And lately… I&apos;ve been struggling.</P>
        <Br /><P>So let me explain exactly what happened, why I&apos;m breaking down, and <B>what you can actually do about it.</B></P>
      </ArticleBody>

      <ArticleBody variant="image" imageSrc={media.image1Src} imageTitle="" imageAlt="" imageClassName="text-black box-border caret-transparent inline max-w-full outline-[3px] w-full border border-zinc-400 rounded-[20px] border-solid" />

      <ArticleBody variant="default" className="text-zinc-800 text-[17px] box-border caret-transparent leading-[25.5px] outline-[3px] text-left mt-[15px] px-px py-2.5 font-montserrat">
        <P>Look, I can tell you from direct experience that your poor hearing has already made life much harder.</P>
        <P>Here are the most common things I see (I&apos;m here for all of it):</P>
        <Br /><P>- You are <B>more stressed</B></P>
        <Br /><P>- You <B>stay home</B> more</P>
        <Br /><P>- You get <B>frustrated or angry</B> more easily</P>
        <Br /><P>- You feel <B>lonely and isolated</B></P>
        <Br /><P>- You use <B>captions</B> for everything</P>
        <Br /><P>None of this is your fault. Hearing loss is extremely common. It&apos;s not just me, it&apos;s everyone&apos;s stereocilia!</P>
        <Br /><P>But here&apos;s what confuses a lot of people.</P>
        <Br /><P>If so many things in medicine have advanced so fast…</P>
        <Br /><P><B>Why haven&apos;t humans figured out how to fix me yet?</B></P>
      </ArticleBody>

      <ArticleBody variant="image" imageSrc={media.image2Src} imageTitle="" imageAlt="" />

      <ArticleBody variant="" className="text-zinc-800 text-[17px] box-border caret-transparent leading-[25.5px] outline-[3px] text-left mt-[15px] px-px py-2.5 font-montserrat">
        Over the last few decades, humans have made huge progress in medicine.
        <div className="box-border caret-transparent outline-[3px]">
          <Br /><P>Cancer survival rates are way up.</P>
          <Br /><P>Laser eye surgery can give almost perfect vision.</P>
          <Br /><P>Scientists at the University of Washington can literally regrow enamel on teeth.</P>
          <Br /><P>It feels like you can fix anything now.</P>
          <Br /><P>Except… me.</P>
          <Br /><P>Your stereocilia.</P>
          <Br /><P>I break and you all just shrug and say &quot;getting old&quot;. Really?</P>
          <Br /><P>Are we heading into a future where people can see perfectly and smile perfectly at 80…</P>
          <Br /><P>but still cannot hear their grandkids?</P>
          <Br /><P>Before we go further, <B>let me show you how I actually work.</B></P>
        </div>
      </ArticleBody>

      <ArticleBody variant="video" thumbnailSrc={media.video1ThumbnailSrc} videoSrc={media.video1Src} />

      <ArticleBody>
        <>
          {`Alright, here's the tour from the inside.`}
          <div className="box-border caret-transparent outline-[3px]">
            <Br /><P>Sound enters your ear canal as vibrations.</P>
            <Br /><P>These vibrations hit your eardrum.</P>
            <Br /><P>Your eardrum shakes three tiny bones.</P>
            <Br /><P>Those bones amplify the movement and the last one pushes on the side of the cochlea.</P>
            <Br /><P>That is when my job begins, because I live in there.</P>
            <Br /><P>The cochlea is a spiral shaped organ made of bone and filled with fluid.</P>
            <Br /><P>Your ear takes air vibrations and turns them into waves inside it.</P>
            <Br /><P>Then comes the important part.</P>
            <Br /><P>We are stereocilia. We cover the walls of the cochlea.</P>
            <Br /><P>And we look like tiny blades of grass.</P>
            <Br /><P>When the waves move through the cochlea, we sway back and forth.</P>
            <Br /><P>That movement creates electrical signals inside us which are sent to your brain.</P>
            <Br /><P>That is how I turn sound waves into brainwaves.</P>
            <Br /><P><B>So why do you lose hearing as you age?</B></P>
          </div>
        </>
      </ArticleBody>

      <div className="box-border caret-transparent outline-[3px] w-full mt-2.5"></div>
      <ArticleBody variant="video" thumbnailSrc={media.video2ThumbnailSrc} videoSrc={media.video2Src} />

      <ArticleBody variant="">
        <P>Because we keep breaking.</P><Br />
        <P>Us little guys do all the work.</P><Br />
        <P>And over time, <B>we break.</B></P><Br />
        <P>And that&apos;s really sad because once we break, <B>we never grow back.</B></P><Br />
        <P>We&apos;re not genetically programmed to regenerate.</P><Br />
        <P>So there&apos;s less and less of us over time, and you end up with worse and worse hearing.</P><Br />
        <P>Some people lose fewer stereocilia, so they hear fine even later in life.</P><Br />
        <P>Others lose more.</P><Br />
        <P>That is you.</P><Br />
        <P>Genetics play a big role.</P><Br />
        <P>Noise exposure does too.</P><Br />
        <P>Some drugs and toxins can also damage me further.</P><Br />
        <P><B>But why can&apos;t scientists just make us stereocilia regrow?</B></P>
      </ArticleBody>

      <ArticleBody variant="image" imageSrc={media.image3Src} imageAlt="" imageTitle="" />
      <div className="box-border caret-transparent outline-[3px] w-full mt-2.5"></div>

      <ArticleBody variant="default">
        <>
          <P>One day they might.</P><Br />
          <P>In 2023, Harvard researchers got some ear cells to divide and regenerate in mice using a special drug cocktail.</P><Br />
          <P>Cool, right?</P><Br />
          <P>But that was in mice.</P><Br />
          <P>Gene therapy takes decades to test for safety.</P><Br />
          <P>So realistically, this won&apos;t help either of us in our lifetime.</P><Br />
          <P>I know. I wish it were different too.</P><Br />
          <P>If there is no cure for hearing loss, <B>what can you do?</B></P>
        </>
      </ArticleBody>

      <ArticleBody variant="image" imageTitle="" imageSrc={media.image4Src} imageAlt="" imageClassName="text-black box-border caret-transparent inline max-w-full outline-[3px] w-full border border-zinc-400 rounded-[20px] border-solid" />

      <ArticleBody variant="text">
        <>
          <P><B>You can treat the symptoms.</B></P><Br />
          <P>And that matters. <B>A lot.</B></P><Br />
          <P>Living with hearing loss is exhausting.</P><Br />
          <P>I see how hard you work to understand people.</P><Br />
          <P>I see the stress, the isolation, the effort it takes just to follow a simple conversation.</P><Br />
          <P>And these problems compound year after year.</P><Br />
          <P>Friends and family do not mean to exclude you.</P><Br />
          <P>It just becomes harder and harder for them to communicate.</P><Br />
          <P>So what are your options to help me do my job, even when so many of my friends around me are broken and gone?</P>
        </>
      </ArticleBody>

      <ArticleBody variant="default"><P>You have <B>3 options:</B></P></ArticleBody>

      {/* Option 1 */}
      <ArticleBody variant="default" className="text-zinc-800 text-[26px] font-extrabold box-border caret-transparent leading-8 outline-[3px] text-left mt-10 px-px py-[5px] font-montserrat md:text-[33px] md:leading-[46.2px]">
        {copy.option1Heading}
      </ArticleBody>
      <ArticleBody variant="image" imageSrc={media.image5Src} imageAlt="" imageTitle="" />
      <ArticleBody className="text-zinc-800 text-[17px] box-border caret-transparent leading-[25.5px] outline-[3px] text-left mt-[15px] px-px py-2.5 font-montserrat">
        <P>Please don&apos;t.</P><Br /><P>Everything will get worse.</P>
      </ArticleBody>

      {/* Option 2 */}
      <ArticleBody className="text-zinc-800 text-[26px] font-extrabold box-border caret-transparent leading-8 outline-[3px] text-left mt-10 px-px py-[5px] font-montserrat md:text-[33px] md:leading-[46.2px]">
        {copy.option2Heading}
      </ArticleBody>
      <ArticleBody variant="image" imageSrc={media.image6Src} imageAlt="" imageTitle="" imageClassName="text-black box-border caret-transparent inline max-w-full outline-[3px] w-full rounded-[20px]" />
      <ArticleBody className="text-zinc-800 text-[17px] box-border caret-transparent leading-[25.5px] outline-[3px] text-left mt-[15px] px-px py-2.5 font-montserrat">
        <P>If your hearing loss is severe, you may need this or even a cochlear implant.</P><Br />
        <P>But for mild to moderate hearing loss, price is the problem.</P><Br />
        <P>The average cost is <B><span className="box-border caret-transparent outline-[3px]">{copy.prescriptionAvgCost}</span>.</B></P>
        <B><br className="box-border caret-transparent outline-[3px]" /></B>
        <P>Plus audiologist fees.</P><Br />
        <P>This is why almost {copy.untreatedCount} Americans walk around with untreated hearing loss.</P>
      </ArticleBody>

      {/* Option 3 */}
      <ArticleBody className="text-zinc-800 text-[26px] font-extrabold box-border caret-transparent leading-8 outline-[3px] text-left mt-10 px-px py-[5px] font-montserrat md:text-[33px] md:leading-[46.2px]">
        {copy.option3Heading}
      </ArticleBody>
      <ArticleBody variant="image" imageTitle="" imageSrc={media.image7Src} imageAlt="" imageClassName="text-black box-border caret-transparent inline max-w-full outline-[3px] w-full rounded-[20px]" />
      <ArticleBody variant="default">
        <P>There is now an <B>affordable way</B> to get clear hearing without going to a doctor.</P><Br />
        <P>It is called a {copy.productName} hearing aid.</P><Br />
        <P><B>What is a {copy.productName} hearing aid?</B></P>
      </ArticleBody>

      <ArticleBody variant="spacer" className="box-border caret-transparent block outline-[3px] w-full px-0 py-3 md:hidden md:px-2.5" />
      <ArticleBody variant="image" imageTitle="" imageSrc={media.productInEarSrc} imageAlt="" imageClassName="text-black box-border caret-transparent inline max-w-full outline-[3px] w-full" />

      <ArticleBody>
        It is a <B>small device that sits in your ear canal.</B>
        <div className="box-border caret-transparent outline-[3px]">
          <Br /><P>There is no big case behind your ear.</P>
          <Br /><P><B>Most people won&apos;t even notice</B> you are wearing one.</P>
          <Br /><P>The {copy.productName} takes the sounds around you and processes them before sending them down your ear canal.</P>
          <Br /><P>Even though many of us stereocilia are gone, a lot of us still work perfectly.</P>
          <Br /><P>To help me, you need more than volume.</P>
          <Br /><P>You need <B>clarity.</B></P>
          <Br /><P>How does {copy.productName} make conversations easy again?</P>
        </div>
      </ArticleBody>

      <ArticleBody variant="video" thumbnailSrc={media.video3ThumbnailSrc} videoSrc={media.video3Src} />

      <ArticleBody variant="default" className="text-zinc-800 text-[17px] box-border caret-transparent leading-[25.5px] outline-[3px] text-left mt-[15px] px-px py-2.5 font-montserrat">
        <div className="box-border caret-transparent outline-[3px]">
          <P>Inside the {copy.productName} is a microchip called <B>{copy.productChipName}.</B></P>
          <Br /><P>This genius little sound chip is designed and programmed to <B>improve the clarity of human speech.</B></P>
          <Br /><P>Not just amplify it… Clarify it!</P>
          <Br /><P>That means <B>clearer conversations.</B></P>
          <Br /><P>Less stress.</P>
          <Br /><P>Less confusion.</P>
          <Br /><P>And <B>you can hear people even when there is background noise.</B></P>
          <Br /><P>The {copy.productChipName} chip gives me a massive upgrade.</P>
          <Br /><P>It helps me send your brain much cleaner, sharper information.</P>
          <Br /><P><B>So how much does it cost?</B></P>
        </div>
      </ArticleBody>

      <ArticleBody variant="image" imageSrc={media.productPackagingSrc} imageAlt="" imageTitle="" imageClassName="text-black box-border caret-transparent inline max-w-full outline-[3px] w-full rounded-[20px]" />

      <ArticleBody variant="" className="text-zinc-800 text-[17px] box-border caret-transparent leading-[25.5px] outline-[3px] text-left my-[15px] px-px py-2.5 font-montserrat">
        <div className="box-border caret-transparent outline-[3px]">
          <P>Right now, there is a <B>{copy.discountPct} percent sale</B> running on the {copy.productName}.</P>
          <Br /><P><B>The usual price without a discount is <span className="box-border caret-transparent outline-[3px]">{copy.regularPrice}</span>.</B></P>
          <Br /><P>So use the green buttons on this page to make sure you take the right deal.</P>
          <Br /><P><B>This discount brings your price to under <span className="box-border caret-transparent outline-[3px]">{copy.salePrice}</span> today.</B></P>
        </div>
      </ArticleBody>

      <CtaButton title="Get Nebroo 1" />

      <ArticleBody className="text-neutral-500 text-sm box-border caret-transparent leading-[21px] outline-[3px] text-left mt-[15px] pt-2.5 px-px font-montserrat">
        <P>{copy.disclaimer}</P>
      </ArticleBody>

      {/* Reviews */}
      {reviewsCopy.map((review, i) => {
        const rm = reviewsMedia[i];
        return (
          <div key={`review-${i}`}>
            <ArticleBody variant="author" avatarSrc={rm.avatarSrc} authorName={review.author} />
            <ArticleBody variant="rating" starsSrc={rm.starsSrc} imageClassName="text-black box-border caret-transparent inline h-5 max-w-full outline-[3px] w-[100px] mr-2.5" quote={review.quote} />
            <ArticleBody variant="reviewMeta" reviewMeta={`Reviewed from ${review.location} on ${review.date}`} />
            <ArticleBody variant="verifiedPurchase" />
            <ArticleBody className="text-zinc-800 text-[17px] box-border caret-transparent leading-[27px] outline-[3px] text-left mt-[15px] p-px font-montserrat">
              {review.text}
            </ArticleBody>
          </div>
        );
      })}

      <CtaButton title="Get Nebroo 2" />
      <ArticleBody variant="section" />
    </div>
  );
};
