"use client";

import React, { createContext, useContext } from "react";
import Image from "next/image";

type CommentReplyData = {
  author: string;
  mention?: string;
  content: string;
  meta: string;
};

type CommentData = {
  author: string;
  content: string;
  meta: string;
  rootClassName?: string;
  avatarClassName?: string;
  likeIconSrc?: string;
  attachmentSrc?: string;
  replies?: CommentReplyData[];
};

type SidebarTestimonial = {
  name: string;
  quote: string;
};

type Noor2Content = {
  ctaUrl: string;
  meta: { pageTitle: string; description: string };
  header: { siteName: string };
  article: {
    breadcrumbs: string;
    exclusiveLabel: string;
    title: string;
    date: string;
    timeAndViews: string;
    author: { name: string; role: string };
  };
  sidebar: {
    paragraphs: string[];
    testimonials: SidebarTestimonial[];
  };
  offer: {
    limitedTimeLabel: string;
    claimLabel: string;
    noteText: string;
    stockStatus: string;
    stockDate: string;
    ctaLabel: string;
    dealLabel: string;
    secureDealText: string;
    exclusiveDealText: string;
    freegiftsText: string;
  };
  offerCallout: {
    ctaText: string;
    updateDate: string;
    productName: string;
    restockDate: string;
  };
  stockBanner: { prefix: string; date: string };
  stickyCta: { label: string };
  footer: {
    copyrightYear: string;
    brand: string;
    references: string[];
    links: {
      privacy: { href: string; label: string };
      contact: { href: string; label: string };
    };
    legal: {
      advertisement: string;
      efficacy: string;
      trademarks: string;
      disclaimer: string;
    };
  };
  comments: CommentData[];
};

type Noor2Media = {
  article: {
    calendarIcon: string;
    socialIcons: {
      facebook: string;
      twitter: string;
      linkedin: string;
      pinterest: string;
      email: string;
    };
    heroImage: string;
    asSeenOn: { src: string; alt: string }[];
    bodyImages: string[];
    likeIcon: string;
  };
  sidebar: { images: string[] };
  offer: { productImage: string; checkIcon: string };
  comments: { defaultAvatar: string };
};

type Noor2Data = { content: Noor2Content; media: Noor2Media };
const Noor2Context = createContext<Noor2Data | null>(null);

function useNoor2(): Noor2Data {
  const ctx = useContext(Noor2Context);
  if (!ctx) throw new Error("useNoor2 must be used inside Noor2TopBar");
  return ctx;
}

const p = "box-border caret-transparent outline-[3px] no-underline font-open_sans";
const br = <br className="box-border caret-transparent outline-[3px] no-underline" />;
const gap = <div className={p}>{br}</div>;

function Noor2Header(): React.ReactElement {
  const { content } = useNoor2();
  return (
    <div className="items-stretch bg-blue-600 box-border caret-transparent flex flex-wrap justify-center max-w-full outline-[3px] no-underline font-open_sans md:flex-nowrap">
      <div className="box-border caret-transparent basis-full grow max-w-[1170px] min-h-[25px] outline-[3px] relative no-underline w-min px-[15px] md:basis-0">
        <div className="items-center box-border caret-transparent flex justify-center outline-[3px] text-center no-underline w-full my-2.5 md:justify-between md:text-left">
          <div className="box-border caret-transparent text-white text-[23px] font-black leading-[32.2px] min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline font-georgia md:text-[28px] md:leading-[39.2px]">
            {content.header.siteName}
          </div>
        </div>
      </div>
    </div>
  );
}

function Noor2AsSeenOn(): React.ReactElement {
  const { media } = useNoor2();
  return (
    <div className="items-center box-border caret-transparent block flex-col outline-[3px] no-underline mt-2.5 mb-5 md:hidden md:mb-0">
      <div className="box-border caret-transparent text-neutral-500 text-sm font-bold leading-[18.2px] outline-[3px] text-center no-underline mt-px mb-2.5 md:text-[22px] md:leading-[28.6px]">
        <i className="box-border caret-transparent text-sm italic leading-[18.2px] outline-[3px] no-underline md:text-[22px] md:leading-[28.6px]">
          AS SEEN ON
        </i>
      </div>
      <div className="box-border caret-transparent gap-x-2.5 grid grid-cols-[repeat(6,1fr)] grid-rows-[repeat(1,1fr)] justify-items-center outline-[3px] gap-y-2.5 no-underline w-full">
        {media.article.asSeenOn.map((item, i) => (
          <div
            key={i}
            className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] no-underline"
          >
            <Image
              alt={item.alt}
              src={item.src}
              width={100}
              height={60}
              className="box-border caret-transparent max-w-full object-contain outline-[3px] no-underline w-full"
              style={{ height: "auto" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Noor2OfferCallout(): React.ReactElement {
  const { content } = useNoor2();
  const { offerCallout, ctaUrl } = content;
  return (
    <div className="items-center box-border caret-transparent flex flex-col justify-center outline-[3px] no-underline w-full">
      <a
        href={ctaUrl}
        className="items-center bg-sky-600 box-border caret-transparent text-blue-700 flex justify-center max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline w-[600px] px-2.5 py-3 rounded-[10px]"
      >
        <div className="box-border caret-transparent text-white text-[22px] font-bold leading-[30.8px] min-h-[auto] min-w-[auto] outline-[3px] no-underline ml-0 p-px md:text-2xl md:font-semibold md:leading-[31.2px] md:ml-[5px]">
          {offerCallout.ctaText}
        </div>
      </a>
      <div className="bg-yellow-100 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full mt-5 px-2.5 py-3 rounded-[3px]">
        <div className="box-border caret-transparent text-neutral-800 leading-7 outline-[3px] no-underline">
          <i className="box-border caret-transparent italic outline-[3px] no-underline">
            <b className="box-border caret-transparent font-bold outline-[3px] no-underline">
              <span className="box-border caret-transparent outline-[3px] no-underline">
                {offerCallout.updateDate}
              </span>
              {" Update: "}
            </b>
            Due to recent high demand and media coverage, {offerCallout.productName}
            {" supplies are running extremely low. As of today it's still in stock, but if you miss out it won't be back in stock until "}
            <span className="box-border caret-transparent outline-[3px] no-underline">
              {offerCallout.restockDate}
            </span>
            .
          </i>
        </div>
      </div>
    </div>
  );
}

function Noor2CommentItem(props: CommentData & { defaultAvatar: string }): React.ReactElement {
  return (
    <div
      className={
        props.rootClassName ??
        "items-start box-border caret-transparent flex outline-[3px] no-underline w-full"
      }
    >
      <Image
        alt=""
        src={props.defaultAvatar}
        width={50}
        height={50}
        className={
          props.avatarClassName ??
          "box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] no-underline w-[50px]"
        }
      />
      <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full px-2.5 py-px">
        <div className="box-border caret-transparent text-indigo-800 text-sm font-bold leading-[19.6px] min-h-[auto] min-w-[auto] outline-[3px] no-underline ml-px">
          {props.author}
        </div>
        <div className="box-border caret-transparent text-base leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] no-underline mt-1">
          {props.content}
        </div>
        {props.attachmentSrc && (
          <img
            alt=""
            src={props.attachmentSrc}
            className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] no-underline w-[400px] mt-2.5"
          />
        )}
        <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full mt-1 p-px">
          <div className="box-border caret-transparent text-slate-500 text-sm leading-[19.6px] min-h-[auto] min-w-[auto] outline-[3px] no-underline ml-px mt-px">
            Like · Reply ·{" "}
          </div>
          <div className="box-border caret-transparent text-zinc-400 text-sm leading-[19.6px] min-h-[auto] min-w-[auto] outline-[3px] no-underline ml-px mt-px">
            {props.meta}
          </div>
        </div>
        {props.replies?.map((reply, index) => (
          <div
            className="items-start box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full mt-5"
            key={`${reply.author}-${index}`}
          >
            <Image
              alt=""
              src={props.defaultAvatar}
              width={50}
              height={50}
              className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] no-underline w-[50px]"
            />
            <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full px-2.5 py-px">
              <div className="box-border caret-transparent text-indigo-800 text-sm font-bold leading-[19.6px] min-h-[auto] min-w-[auto] outline-[3px] no-underline ml-px">
                {reply.author}
              </div>
              <div className="box-border caret-transparent text-base leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] no-underline mt-1">
                {reply.mention !== undefined && (
                  <span className="box-border caret-transparent text-blue-800 font-semibold outline-[3px] no-underline">
                    {reply.mention}
                  </span>
                )}
                {reply.content}
              </div>
              <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full mt-1 p-px">
                <div className="box-border caret-transparent text-slate-500 text-sm leading-[19.6px] min-h-[auto] min-w-[auto] outline-[3px] no-underline ml-px mt-px">
                  Like · Reply ·{" "}
                </div>
                <div className="box-border caret-transparent text-zinc-400 text-sm leading-[19.6px] min-h-[auto] min-w-[auto] outline-[3px] no-underline ml-px mt-px">
                  {reply.meta}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Noor2ArticleMain(): React.ReactElement {
  const { content, media } = useNoor2();
  const { article, ctaUrl } = content;
  const imgs = media.article.bodyImages;
  const defaultAvatar = media.comments.defaultAvatar;

  return (
    <div className="bg-white box-border caret-transparent basis-full grow text-xl leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full pt-2.5 pb-10 px-[15px] md:basis-[70%]">
      <div className="box-border caret-transparent outline-[3px] no-underline text-blue-600 text-lg font-bold leading-[23.4px] mt-5 md:text-xl md:leading-[26px]">
        {article.breadcrumbs}
      </div>

      <div className="box-border caret-transparent outline-[3px] no-underline text-[26px] font-bold leading-[33.8px] mt-5 pt-2.5 pb-[5px] font-roboto">
        <span className="bg-red-600 box-border caret-transparent text-white outline-[3px] no-underline mr-2.5 px-2 py-0.5">
          {article.exclusiveLabel}
        </span>
        {article.title}
      </div>

      <div className="box-border caret-transparent outline-[3px] no-underline items-center flex w-full py-2.5">
        <img
          alt=""
          src={media.article.calendarIcon}
          className="aspect-square box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] no-underline w-3.5 mr-2"
        />
        <div className="box-border caret-transparent text-xs min-h-[auto] min-w-[auto] outline-[3px] no-underline font-roboto text-slate-500 leading-[16.8px] md:text-base md:leading-[22.4px]">
          <span className="box-border caret-transparent text-xs leading-[16.8px] outline-[3px] no-underline md:text-base md:leading-[22.4px]">
            {article.date}
          </span>
          {article.timeAndViews ? ` | ${article.timeAndViews}` : ""}
        </div>
      </div>

      <div className="box-border caret-transparent outline-[3px] no-underline items-center border-b-zinc-300 border-t-zinc-300 flex justify-between w-full mt-1.5 mb-2.5 px-px py-[5px] border-b border-t md:mb-0 md:py-2">
        <div className="box-border caret-transparent text-xs min-h-[auto] min-w-[auto] outline-[3px] no-underline font-roboto leading-[15.6px] md:text-sm md:leading-[18.2px]">
          By&#160;
          <b className="box-border caret-transparent text-xs font-bold leading-[15.6px] outline-[3px] no-underline md:text-sm md:leading-[18.2px]">
            {article.author.name}
          </b>
          <div className="box-border caret-transparent text-xs leading-[15.6px] outline-[3px] no-underline md:text-sm md:leading-[18.2px]">
            {article.author.role}
          </div>
        </div>
        <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] no-underline mt-px">
          {[
            media.article.socialIcons.facebook,
            media.article.socialIcons.twitter,
            media.article.socialIcons.linkedin,
            media.article.socialIcons.pinterest,
            media.article.socialIcons.email,
          ].map((src, i) => (
            <img
              key={i}
              alt=""
              src={src}
              className="box-border caret-transparent h-[22px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] no-underline w-[22px] mx-0.5 md:h-[35px] md:w-[35px]"
            />
          ))}
        </div>
      </div>

      <img
        alt=""
        src={media.article.heroImage}
        className="aspect-[auto_789_/_433] border-t-blue-600 box-border caret-transparent inline max-w-full outline-[3px] no-underline w-full my-0 border-t-[5px] md:mt-[15px] md:mb-[30px]"
      />

      <Noor2AsSeenOn />

      <div className="box-border caret-transparent outline-[3px] no-underline my-5 font-roboto">
        <div className={p}>Last week, a TSA agent at the airport made me cry in an airport bathroom.</div>
        {gap}
        <div className={p}>She wasn&#39;t being mean... Just the opposite.</div>
        {gap}
        <div className={p}>I was in line going through security when I gave the agent my ID…</div>
        {gap}
        <div className={p}>The TSA agent looked at my ID, then back at me, then at my ID again. Her eyes went wide.</div>
        {gap}
        <div className={p}>&quot;Miss, this can&#39;t be right.&quot;</div>
        {gap}
        <div className={p}>&quot;What&#39;s not right?&quot; I asked.</div>
        {gap}
        <div className={p}>She turned the ID over in her hand, then looked at me again.</div>
        {gap}
        <div className={p}>&quot;It says you&#39;re 63. But I would have put you in your forties. Easy.</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">You look incredible!&quot;</b></div>
        {gap}
        <div className={p}>I said thank you, got my carry-on, and went to the women&#39;s restroom.</div>
        {gap}
        <div className={p}>I stood at the sink for a full minute trying not to regain my composure…</div>
        {gap}
        <div className={p}>Because a year ago that same TSA agent would have glanced at my license, at my face, and waved me through without comment.</div>
        {gap}
        <div className={p}>She would&#39;ve thought: &quot;Yeah, she looks her age.&quot;</div>
        {gap}
        <div className={p}>Maybe even older…</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">But six months ago something shifted.</b></div>
        {gap}
        <div className={p}>It wasn&#39;t surgery.</div>
        {gap}
        <div className={p}>It wasn&#39;t fillers or getting work done...</div>
        {gap}
        <div className={p}>And it wasn&#39;t some $200 cream that an influencer sold me on.</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">No, it was something I do for under a minute, twice a day.</b></div>
        {gap}
        <div className={p}>It costs less than what I used to waste on skincare.</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">And it works so well strangers don&#39;t believe my real age anymore…</b></div>
        {gap}
        <div className={p}>I want to tell you what works for me.</div>
        {gap}
        <div className={p}>Not because I&#39;m bragging. Not because I&#39;m getting paid (I&#39;m not).</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">I&#39;m telling you because I spent four years and thousands of dollars looking for a solution to my deep set wrinkles…</b></div>
        {gap}
        <div className={p}>If anything in this article spares another woman from that same frustrating loop…</div>
        {gap}
        <div className={p}>And helps them feel less invisible…</div>
        {gap}
        <div className={p}>Then the time I spent writing it will be worth the effort.</div>
        {gap}
        <div className={p}>So pour yourself something warm and settle in…</div>
        {gap}
        <div className={p}>What follows is the truth about what happened to my face this past year…</div>
        {gap}
        <div className={p}>And what made it possible.</div>
        <div className={p}>
          <div className="box-border caret-transparent text-[34px] font-bold leading-[44.2px] outline-[3px] no-underline mt-[25px] mb-5">
            The Eerie Moment I Realized My Face Had Aged a Decade Overnight
          </div>
        </div>
      </div>

      {imgs[0] && (
        <Image
          alt="Before and after skin transformation"
          src={imgs[0]}
          width={789}
          height={500}
          className="border-t-blue-600 box-border caret-transparent inline max-w-full outline-[3px] no-underline w-full my-0 border-t-[5px] md:my-5"
          style={{ height: "auto" }}
        />
      )}

      <div className="box-border caret-transparent outline-[3px] no-underline my-5 font-roboto">
        <div className={p}>Let&#39;s rewind to last year.&#160;</div>
        {gap}
        <div className={p}>I&#39;d just turned 63 and I felt like my face had aged a decade overnight.&#160;</div>
        {gap}
        <div className={p}>Every morning was the same routine…&#160;</div>
        {gap}
        <div className={p}>Wash my face. Look up. Wince.&#160;</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">The woman in the mirror was someone I didn&#39;t quite recognize anymore.&#160;</b></div>
        {gap}
        <div className={p}>The lines around my mouth had carved themselves deep enough that I looked unhappy even when I wasn&#39;t.&#160;</div>
        {gap}
        <div className={p}>My jawline had slipped lower and lower…&#160;</div>
        {gap}
        <div className={p}>Brown patches had appeared across my cheeks…&#160;</div>
        {gap}
        <div className={p}>And don&#39;t get me started on my neck.&#160;</div>
        {gap}
        <div className={p}>It had gone thin and papery, the kind of texture no collar height can hide.&#160;</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">My skin looked old, drained, and tired.</b>&#160;</div>
      </div>

      {imgs[1] && (
        <Image
          alt="Skin aging concern"
          src={imgs[1]}
          width={789}
          height={500}
          className="border-t-blue-600 box-border caret-transparent inline max-w-full outline-[3px] no-underline w-full my-0 border-t-[5px] md:my-5"
          style={{ height: "auto" }}
        />
      )}

      <div className="box-border caret-transparent outline-[3px] no-underline my-5 font-roboto">
        <div className="bg-white box-border caret-transparent outline-[3px] no-underline font-open_sans">
          <b className="box-border caret-transparent font-bold outline-[3px] no-underline">I bought those $180 boutique serums my dermatologist pushed on me…</b>
        </div>
        <div className="bg-white box-border caret-transparent outline-[3px] no-underline font-open_sans">{br}</div>
        <div className="bg-white box-border caret-transparent outline-[3px] no-underline font-open_sans">Burned through six different brands.</div>
        <div className="bg-white box-border caret-transparent outline-[3px] no-underline font-open_sans">{br}</div>
        <div className="bg-white box-border caret-transparent outline-[3px] no-underline font-open_sans">No real results.</div>
        <div className="bg-white box-border caret-transparent outline-[3px] no-underline font-open_sans">{br}</div>
        <div className="bg-white box-border caret-transparent outline-[3px] no-underline font-open_sans"><b className="box-border caret-transparent font-bold outline-[3px] no-underline">Prescription retinol everyone treats like gospel?</b></div>
        <div className="bg-white box-border caret-transparent outline-[3px] no-underline font-open_sans">{br}</div>
        <div className="bg-white box-border caret-transparent outline-[3px] no-underline font-open_sans">My face reacted like I&#39;d applied paint thinner. Red. Flaking. Itchy for weeks.</div>
        <div className="bg-white box-border caret-transparent outline-[3px] no-underline font-open_sans">{br}</div>
        <div className="bg-white box-border caret-transparent outline-[3px] no-underline font-open_sans">LED masks and other strange devices the influencers swear by?</div>
        <div className="bg-white box-border caret-transparent outline-[3px] no-underline font-open_sans">{br}</div>
        <div className="bg-white box-border caret-transparent outline-[3px] no-underline font-open_sans">I owned two. They&#39;ve been sitting in my closet for over a year, untouched.</div>
        <div className="bg-white box-border caret-transparent outline-[3px] no-underline font-open_sans">{br}</div>
        <div className="bg-white box-border caret-transparent outline-[3px] no-underline font-open_sans">I&#39;d even considered more advanced clinical treatments…</div>
        <div className="bg-white box-border caret-transparent outline-[3px] no-underline font-open_sans">{br}</div>
        <div className="bg-white box-border caret-transparent outline-[3px] no-underline font-open_sans"><b className="box-border caret-transparent font-bold outline-[3px] no-underline">But I really wanted an easy, effective, at-home solution.</b></div>
        <div className="bg-white box-border caret-transparent outline-[3px] no-underline font-open_sans">{br}</div>
        <div className="bg-white box-border caret-transparent outline-[3px] no-underline font-open_sans">And $600 per session every few weeks is something I couldn&#39;t afford long term.</div>
        <div className="bg-white box-border caret-transparent outline-[3px] no-underline font-open_sans">{br}</div>
        <div className="bg-white box-border caret-transparent outline-[3px] no-underline font-open_sans">In fact, my friend Diane got some work done two years ago…</div>
        <div className="bg-white box-border caret-transparent outline-[3px] no-underline font-open_sans">{br}</div>
        <div className="bg-white box-border caret-transparent outline-[3px] no-underline font-open_sans">She spent $8,000 for her lower face alone!</div>
        <div className="bg-white box-border caret-transparent outline-[3px] no-underline font-open_sans">{br}</div>
        <div className="bg-white box-border caret-transparent outline-[3px] no-underline font-open_sans"><b className="box-border caret-transparent font-bold outline-[3px] no-underline">And she couldn&#39;t move her face properly for months.</b></div>
        <div className="bg-white box-border caret-transparent outline-[3px] no-underline font-open_sans">{br}</div>
        <div className="bg-white box-border caret-transparent outline-[3px] no-underline font-open_sans">That&#39;s not what I wanted… To be honest, I felt completely hopeless.</div>
        <div className={p}>
          <div className="box-border caret-transparent outline-[3px] no-underline">
            <div className="box-border caret-transparent text-[34px] font-bold leading-[44.2px] outline-[3px] no-underline">
              The Problem Wasn&#39;t Just About My Face, It Was About How I Felt…
            </div>
          </div>
        </div>
      </div>

      {imgs[2] && (
        <Image
          alt="Feeling invisible and frustrated"
          src={imgs[2]}
          width={789}
          height={500}
          className="border-t-blue-600 box-border caret-transparent inline max-w-full outline-[3px] no-underline w-full my-0 border-t-[5px] md:my-5"
          style={{ height: "auto" }}
        />
      )}

      <div className="box-border caret-transparent outline-[3px] no-underline my-5 font-roboto">
        <div className={p}>And I felt invisible all the time…</div>
        {gap}
        <div className={p}>At parties, eyes slid past me toward whoever was younger in the room.</div>
        {gap}
        <div className={p}>My husband stopped commenting on my appearance years ago…</div>
        {gap}
        <div className={p}>Not out of unkindness, just because there was nothing new to say.</div>
        {gap}
        <div className={p}>I looked at a recent family photo I took and just stopped cold…</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">Who was that woman in the photo?</b></div>
        {gap}
        <div className={p}>I knew. I just didn&#39;t want to admit it.</div>
        {gap}
        <div className={p}>I didn&#39;t want to admit I barely knew the face in those pictures.</div>
        {gap}
        <div className={p}>That&#39;s when I knew something had to change.</div>
        {gap}
        <div className={p}>I didn&#39;t want to just accept &quot;looking old&quot; and give up.</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">I wanted to find a solution, something that actually works for women like me.</b></div>
        {gap}
        <div className={p}>And I won&#39;t lie to you…</div>
        {gap}
        <div className={p}>I did start researching facelift surgeons, printing out consultation forms, weighing my options…</div>
        {gap}
        <div className={p}>It&#39;s true, I was desperate.</div>
        {gap}
        <div className={p}> Then, on a random Sunday night a few months ago…</div>
        {gap}
        <div className={p}>I saw something that left me speechless…</div>
        {gap}
        <div className={p}>And finally gave me some hope.</div>
        <div className="box-border caret-transparent text-[34px] font-bold leading-[44.2px] outline-[3px] no-underline mt-[25px] mb-5 font-open_sans">
          How a Random Thursday Night Led Me to Discover What Dermatologists Have Been Hiding
        </div>
      </div>

      <div className="box-border caret-transparent outline-[3px] no-underline my-5 font-roboto">
        I was scrolling Facebook half-awake…&#160;
        <div className={p}>{br}</div>
        <div className={p}>The aimless late-night scroll everyone does nowadays.&#160;</div>
        <div className={p}>{br}</div>
        <div className={p}>But then a photo stopped my thumb. It was from my old college roommate, Beverly.</div>
      </div>

      {imgs[3] && (
        <Image
          alt="Beverly's stunning transformation"
          src={imgs[3]}
          width={789}
          height={500}
          className="border-t-blue-600 box-border caret-transparent inline max-w-full outline-[3px] no-underline w-full my-0 border-t-[5px] md:my-5"
          style={{ height: "auto" }}
        />
      )}

      <div className="box-border caret-transparent outline-[3px] no-underline my-5 font-roboto">
        <div className={p}>We&#39;ve been friends for forty-two years. She&#39;s ten months older than me.</div>
        {gap}
        <div className={p}>But the woman in this photo wasn&#39;t the Beverly I&#39;d seen at our last reunion three years back.</div>
        {gap}
        <div className={p}>Not &quot;looks great for her age&quot; different.</div>
        {gap}
        <div className={p}>Not &quot;must be a filter&quot; different.</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">She looked twenty years younger than she had the last time I&#39;d seen her.</b></div>
        {gap}
        <div className={p}>Her wrinkles were gone, her face was smooth, and her skin was tight.</div>
        {gap}
        <div className={p}>She looked natural, not like she&#39;d gotten work done…</div>
        {gap}
        <div className={p}>So I dropped her a comment: &quot;WOW! Looking amazing!!&quot;</div>
        {gap}
        <div className={p}>And then I sent her a message…</div>
        {gap}
        <div className={p}><i className="box-border caret-transparent italic outline-[3px] no-underline">&quot;Hey Bev! It&#39;s been a while since we caught up. I saw that pic you posted, am I too old to be jealous? You need to tell me what you&#39;ve done! You&#39;re looking great.&quot;</i></div>
        {gap}
        <div className={p}>The three dots came right back.</div>
        {gap}
        <div className={p}><i className="box-border caret-transparent italic outline-[3px] no-underline">&quot;Margaret! It&#39;s been too long,&quot;</i> she replied.</div>
        {gap}
        <div className={p}><i className="box-border caret-transparent italic outline-[3px] no-underline">&quot;I swear I didn&#39;t get work done. But EVERYONE thinks that! It&#39;s not a facelift either. It&#39;s a cream. Called WonderLift. I&#39;ve been using it for about three months. I&#39;m honestly shocked by how well it works.&quot;</i></div>
        {gap}
        <div className={p}>I read the message twice.</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">A cream? After all the creams I&#39;d tried…</b></div>
        {gap}
        <div className={p}><i className="box-border caret-transparent italic outline-[3px] no-underline">&quot;I&#39;ve tried EVERY cream,&quot;</i> I typed back.</div>
        {gap}
        <div className={p}><i className="box-border caret-transparent italic outline-[3px] no-underline">&quot;I know. I know, me too,&quot;</i> she said. <i className="box-border caret-transparent italic outline-[3px] no-underline">&quot;My friend Jill actually put me on to it last fall. She found them online.</i></div>
        {gap}
        <div className={p}><i className="box-border caret-transparent italic outline-[3px] no-underline"><b className="box-border caret-transparent font-bold outline-[3px] no-underline">They use some kind of Korean peptide that actually targets the root cause of deep wrinkles.</b></i></div>
        {gap}
        <div className={p}><i className="box-border caret-transparent italic outline-[3px] no-underline">I didn&#39;t believe it either. Then I tried it.&quot;</i></div>
        {gap}
        <div className={p}>Beverly sent me two photos of her. Her before and after.</div>
        {gap}
        <div className={p}>When I tell you my jaw hit the floor I&#39;m not kidding…</div>
      </div>

      {imgs[4] && (
        <Image
          alt="Beverly's before and after results with WonderLift Cream"
          src={imgs[4]}
          width={789}
          height={500}
          className="border-t-blue-600 box-border caret-transparent inline max-w-full outline-[3px] no-underline w-full my-0 border-t-[5px] md:my-5"
          style={{ height: "auto" }}
        />
      )}

      <div className="box-border caret-transparent outline-[3px] no-underline my-5 font-roboto">
        <div className={p}><span className="bg-white box-border caret-transparent outline-[3px] no-underline">The difference was unbelievable.</span></div>
        <div className={p}>{br}</div>
        <div className={p}><span className="bg-white box-border caret-transparent outline-[3px] no-underline"><b className="box-border caret-transparent font-bold outline-[3px] no-underline">In just three short months, Beverly&#39;s face was completely rejuvenated.</b></span></div>
        {gap}
        <div className={p}>So I asked for more information.</div>
        {gap}
        <div className={p}>Beverly sent me a link to this medical report…</div>
        {gap}
        <div className={p}>It was something from a Korean dermatology lab…</div>
        {gap}
        <div className={p}>The report was filled with clinical trials, ingredient comparisons, and information on a little-known Korean peptide…</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">It&#39;s a peptide that&#39;s making waves in the skincare industry.</b></div>
        {gap}
        <div className={p}>So I spent the next hour reading through the whole report.</div>
        {gap}
        <div className={p}>There were tons of women in their 50s, 60s, and 70s with incredible transformations.</div>
        {gap}
        <div className={p}>One study in particular caught my eye…</div>
        {gap}
        <div className={p}>It was published in a journal called <i className="box-border caret-transparent italic outline-[3px] no-underline">Cosmetics</i>.</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">The study showed women who used this Korean peptide saw 52% wrinkle reduction in just 28 days.</b></div>
        {gap}
        <div className={p}>The before-and-afters from the study looked staged at first…</div>
        {gap}
        <div className={p}>And here&#39;s the thing: I knew this song and dance.</div>
        {gap}
        <div className={p}>I&#39;ve been the woman dropping $80+ on a serum because the testimonial photos looked legitimate..</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">I was skeptical.</b></div>
        {gap}
        <div className={p}>I almost closed my laptop and went to sleep.</div>
        {gap}
        <div className={p}>But something stopped me:</div>
        {gap}
        <div className={p}><i className="box-border caret-transparent italic outline-[3px] no-underline">I&#39;ve wasted thousands on treatments that didn&#39;t work. What if this is the real deal?</i></div>
        {gap}
        <div className={p}>Plus, there was no risk…</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">There was a 180-day money-back guarantee right there on the page.</b></div>
        {gap}
        <div className={p}>If it didn&#39;t work, then I&#39;d get my money back. There was nothing to lose.</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">I picked the 3-jar option.</b></div>
        {gap}
        <div className={p}>I thought: <i className="box-border caret-transparent italic outline-[3px] no-underline">if I was actually going to test this, I figured I needed enough product to commit.</i></div>
        {gap}
        <div className={p}>Free shipping took my last excuse off the table.</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">So I decided to give this WonderLift Cream a try, and clicked Order.</b></div>
        {gap}
        <div className={p}>As I was getting ready for bed, I said to myself: <i className="box-border caret-transparent italic outline-[3px] no-underline">&quot;Margaret, when are you just gonna accept it?&quot;</i></div>
        {gap}
        <div className={p}>I had absolutely no idea my life was about to change completely...</div>
        <div className="box-border caret-transparent outline-[3px] no-underline my-5">
          <div className="box-border caret-transparent text-[34px] font-bold leading-[44.2px] outline-[3px] no-underline mt-[25px] mb-5 font-open_sans">
            Week 1: The Cream Did Something Almost Immediately That I Couldn&#39;t Quite Name
          </div>
        </div>
      </div>

      <div className="box-border caret-transparent outline-[3px] no-underline my-5 font-roboto">
        <div className={p}>The package showed up a few days later.&#160;</div>
        {gap}
        <div className={p}>I remember opening it up right at the door…&#160;</div>
        {gap}
        <div className={p}>The packaging was clean and chic.&#160;</div>
        {gap}
        <div className={p}>Minimalist. Matte. Not like the clutter of a drugstore shelf.&#160;</div>
        {gap}
        <div className={p}>I opened the jar, took a small amount, and applied it like Bev told me.&#160;</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">The texture was unlike anything I&#39;d used before.</b>&#160;</div>
        {gap}
        <div className={p}>Not heavy. Not greasy. It melted right in.&#160;</div>
        {gap}
        <div className={p}>First night, nothing dramatic. I didn&#39;t expect anything yet.&#160;</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">By day three, something felt different.</b>&#160;</div>
        {gap}
        <div className={p}>My skin felt more... present. Firmer. Like there was something underneath it again.&#160;</div>
        {gap}
        <div className={p}>I didn&#39;t say anything to my husband. I didn&#39;t want to jinx it.&#160;</div>
        {gap}
        <div className={p}>By day seven, the nasolabial folds — the deep lines running from my nose to my mouth that I&#39;d been fighting for years — were softer.&#160;</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">Not gone. But softer. Visibly softer.</b>&#160;</div>
        {gap}
        <div className={p}>That&#39;s when I started paying close attention.&#160;</div>
        <div className={p}>
          <br />
          <span className="box-border caret-transparent text-[34px] font-bold leading-[51px] outline-[3px] no-underline">
            Week 2: I Couldn&#39;t Wait to Look in The Mirror in the Morning
          </span>
        </div>
      </div>

      <div className="box-border caret-transparent outline-[3px] no-underline my-5 font-roboto">
        <div className={p}>By the end of week two, I was doing something I hadn&#39;t done in years…&#160;</div>
        {gap}
        <div className={p}>Rushing to the bathroom mirror in the morning.&#160;</div>
        {gap}
        <div className={p}>Not to dread what I&#39;d see — but because I was genuinely curious.&#160;</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">The crow&#39;s feet at the corners of my eyes had started to fade.&#160;</b></div>
        {gap}
        <div className={p}>The texture on my cheeks — that uneven, rough, slightly crepe-y surface — was smoother.&#160;</div>
        {gap}
        <div className={p}>And the skin under my jaw? The part I&#39;d given up on entirely?&#160;</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">It was… firmer.</b>&#160;</div>
        {gap}
        <div className={p}>I was seeing changes I hadn&#39;t seen from retinol, from professional peels, from anything.&#160;</div>
        {gap}
        <div className={p}>On day 11, my husband looked at me across the kitchen table and said:</div>
        {gap}
        <div className={p}><i className="box-border caret-transparent italic outline-[3px] no-underline">&quot;You look different. Did you do something to your hair?&quot;</i>&#160;</div>
        {gap}
        <div className={p}>I almost spit out my coffee.&#160;</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">He wasn&#39;t wrong. Something was different. Just not my hair.</b></div>
        <div className="box-border caret-transparent outline-[3px] no-underline my-5">
          <div className="box-border caret-transparent text-[34px] font-bold leading-[44.2px] outline-[3px] no-underline mt-[25px] mb-5 font-open_sans">
            Week 4: People Started Complimenting Me On My Skin, And I Knew The Changes Were Real
          </div>
        </div>
      </div>

      <div className="box-border caret-transparent outline-[3px] no-underline my-5 font-roboto">
        <div className={p}>By the end of week four, things had shifted dramatically.&#160;</div>
        {gap}
        <div className={p}>My skin had that quality I used to see in women ten years younger than me.&#160;</div>
        {gap}
        <div className={p}>That luminous, plump, hydrated glow.&#160;</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">My jawline had returned. Not completely, but enough that I could see it again when I turned sideways in the mirror.</b>&#160;</div>
        {gap}
        <div className={p}>The brown patches on my cheeks were lighter.&#160;</div>
        {gap}
        <div className={p}>The lines around my mouth had softened to the point where I no longer looked perpetually unhappy.&#160;</div>
        {gap}
        <div className={p}>Three different people — two friends and my sister-in-law — commented on my skin in a single week.&#160;</div>
        {gap}
        <div className={p}>&quot;You&#39;re glowing.&quot;&#160;</div>
        {gap}
        <div className={p}>&quot;What are you doing differently?&quot;&#160;</div>
        {gap}
        <div className={p}>&quot;You look so rested!&quot;&#160;</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">I&#39;d flip back and forth between them. Same lighting. Same face. No makeup. Two different women.</b>&#160;</div>
        {gap}
        <div className={p}>I sat on the edge of my bed one afternoon, staring at those two photos.&#160;</div>
        {gap}
        <div className={p}>And I started to cry. Happy tears, this time.&#160;</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">Because for the first time in two decades, I felt like ME again.</b>&#160;</div>
        {gap}
        <div className={p}>That sounds silly when I write it out. But it&#39;s the truth.&#160;</div>
        {gap}
        <div className={p}>I felt like me.</div>
        <div className={p}>
          <br />
          <span className="box-border caret-transparent text-[34px] font-bold leading-[51px] outline-[3px] no-underline">
            What Actually Makes WonderLift Work (The Science Nobody Talks About)
          </span>
        </div>
      </div>

      <div className="box-border caret-transparent outline-[3px] no-underline my-5 font-roboto">
        <div className={p}>After all of this, I had to understand the &quot;why.&quot;&#160;</div>
        {gap}
        <div className={p}>I&#39;m not someone who just accepts &quot;it works&quot; without understanding the mechanism.&#160;</div>
        {gap}
        <div className={p}>So I went back to that Korean dermatology report Beverly had sent me.&#160;</div>
        {gap}
        <div className={p}>I read it more carefully this time. All of it.&#160;</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">The active compound is called Palmitoyl Tripeptide-5. Also known as Syn-Coll.</b>&#160;</div>
        {gap}
        <div className={p}>It&#39;s a synthetic peptide — a short chain of amino acids — that mimics the segment of the body&#39;s own collagen that signals the skin to produce more collagen.&#160;</div>
        {gap}
        <div className={p}>Think of it like this:&#160;</div>
        {gap}
        <div className={p}>When you&#39;re young, your skin produces collagen constantly.&#160;</div>
        {gap}
        <div className={p}>When collagen breaks down, fragments of it float around and tell your skin to make more.&#160;</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">But as we age, this signal chain weakens. The skin stops hearing the message to replenish.</b>&#160;</div>
        {gap}
        <div className={p}>Palmitoyl Tripeptide-5 steps in and essentially sends that signal again. Artificially.&#160;</div>
        {gap}
        <div className={p}>It tells aging skin: <i className="box-border caret-transparent italic outline-[3px] no-underline">make collagen. Now. Like you used to.</i>&#160;</div>
        {gap}
        <div className={p}>And the clinical data showed that it works.&#160;</div>
        {gap}
        <div className={p}>The study in <i className="box-border caret-transparent italic outline-[3px] no-underline">Cosmetics</i> showed a 52% reduction in wrinkle depth. Not improvement. Reduction. In 28 days.&#160;</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">Another study showed skin firmness improved by 45% over six weeks.&#160;</b></div>
        {gap}
        <div className={p}>Those numbers sound made-up. I understand if you&#39;re skeptical.&#160;</div>
        {gap}
        <div className={p}>I was too.&#160;</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">But I&#39;ve now seen it in my own mirror. Every single morning.</b></div>
        <div className="box-border caret-transparent text-[34px] font-bold leading-[44.2px] outline-[3px] no-underline mt-[25px] mb-5 font-open_sans">
          Current Availability
        </div>
      </div>

      <Noor2OfferCallout />

      <div className="box-border caret-transparent outline-[3px] no-underline my-5 font-roboto">
        <div className="box-border caret-transparent text-[34px] font-bold leading-[44.2px] outline-[3px] no-underline mt-[25px] mb-5 font-open_sans">
          <span className="box-border caret-transparent text-red-600 outline-[3px] no-underline">
            Warning: Due to the Rare Peptide in Noor WonderLift Cream Production is Quite Limited
          </span>
        </div>
        <div className={p}>WonderLift keeps selling out. Consistently.</div>
        {gap}
        <div className={p}>I&#39;m not saying this to freak you out.</div>
        {gap}
        <div className={p}>I&#39;m saying it because it&#39;s the thing I almost got wrong six months ago.</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">The Syn-Ake peptide isn&#39;t a mass-market ingredient.</b></div>
        {gap}
        <div className={p}>It comes from a handful of specialized labs in South Korea.</div>
        {gap}
        <div className={p}>So supply is inherently limited.</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">If you&#39;re reading this, take it as your sign to act.</b></div>
      </div>

      <Noor2OfferCallout />

      <div className="box-border caret-transparent outline-[3px] no-underline my-5 font-roboto">
        <div className="box-border caret-transparent text-[34px] font-bold leading-[44.2px] outline-[3px] no-underline mt-[25px] mb-5 font-open_sans">
          My Final Verdict After 6 Months of Daily Use
        </div>
        <div className={p}>I&#39;ve now been using WonderLift for just over six months.&#160;</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">The results have held. And in some areas, they&#39;ve kept improving.&#160;</b></div>
        {gap}
        <div className={p}>My skin today is the best it&#39;s looked in twenty years.&#160;</div>
        {gap}
        <div className={p}>I&#39;m not exaggerating. I don&#39;t have reason to.&#160;</div>
        {gap}
        <div className={p}>I get compliments from strangers. From my children. From women half my age who want to know my routine.&#160;</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">And at 63, a TSA agent couldn&#39;t believe my ID was real.&#160;</b></div>
        {gap}
        <div className={p}>So: yes. I recommend WonderLift.&#160;</div>
        {gap}
        <div className={p}>Not because I&#39;m being paid. Not because it&#39;s perfect.&#160;</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">But because it&#39;s the only skincare product in four years of trying that has actually delivered what it promised.</b>&#160;</div>
        {gap}
        <div className={p}>If you&#39;re where I was a year ago — frustrated, invisible, convinced nothing would ever work — please try this.&#160;</div>
        {gap}
        <div className={p}>You have 180 days to decide if it&#39;s working. There&#39;s no risk.&#160;</div>
        {gap}
        <div className={p}><b className="box-border caret-transparent font-bold outline-[3px] no-underline">Just the chance — finally — to feel like yourself again.</b></div>
      </div>

      <Noor2OfferCallout />

      <div className="box-border caret-transparent outline-[3px] no-underline text-[22px] font-bold leading-[30.8px] mt-5 md:text-2xl md:leading-[33.6px] md:mt-7">
        COMMENTS
      </div>
      <div className="box-border caret-transparent outline-[3px] no-underline w-full mt-[30px]">
        <div className="bg-neutral-100 box-border caret-transparent mt-[-5px] outline-[3px] text-center no-underline border border-neutral-200 mb-5 px-4 py-3 rounded-lg border-solid">
          <span className="box-border caret-transparent text-neutral-400 text-sm leading-[21px] outline-[3px] no-underline">
            Commenting has been turned off for this post.
          </span>
        </div>
        {content.comments.map((comment, i) => (
          <Noor2CommentItem
            key={`${comment.author}-${i}`}
            defaultAvatar={defaultAvatar}
            {...comment}
          />
        ))}
      </div>
      <hr className="bg-black caret-transparent text-zinc-500 h-0 max-w-full outline-[3px] no-underline w-full border-gray-200 overflow-visible mt-[30px] mb-[15px] border-solid" />
      <div className="box-border caret-transparent basis-[0%] grow outline-[3px] text-center no-underline mt-[30px] md:text-left" />
    </div>
  );
}

function Noor2Sidebar(): React.ReactElement {
  const { content, media } = useNoor2();
  const { paragraphs, testimonials } = content.sidebar;
  const { images } = media.sidebar;

  return (
    <div className="box-border caret-transparent basis-[30%] grow min-h-[25px] min-w-[auto] outline-[3px] no-underline pl-2.5">
      <div className="bg-white box-border caret-transparent outline-[3px] no-underline w-full pt-[5px] pb-[25px] px-2.5">
        <div className="box-border caret-transparent text-xl leading-7 outline-[3px] no-underline mt-[30px]">
          {paragraphs[0]}
        </div>
        {images[0] && (
          <img
            alt=""
            src={images[0]}
            className="aspect-[321_/_241] box-border caret-transparent inline max-w-full outline-[3px] no-underline w-[321px] mt-[30px]"
          />
        )}
        <div className="box-border caret-transparent text-xl leading-7 outline-[3px] no-underline mt-[30px]">
          {paragraphs[1]}
        </div>
        {images[1] && (
          <img
            alt=""
            src={images[1]}
            className="box-border caret-transparent inline max-w-full outline-[3px] no-underline w-full mt-[30px]"
          />
        )}
        <div className="box-border caret-transparent text-xl leading-7 outline-[3px] no-underline mt-[30px]">
          {paragraphs[2]}
        </div>
        {images[2] && (
          <img
            alt=""
            src={images[2]}
            className="aspect-[321_/_212] box-border caret-transparent inline max-w-full outline-[3px] no-underline w-full mt-[30px]"
          />
        )}
        {testimonials[0] && (
          <div className="box-border caret-transparent text-xl leading-7 outline-[3px] no-underline mt-[30px]">
            <div className="box-border caret-transparent outline-[3px] no-underline">
              <b className="box-border caret-transparent font-bold outline-[3px] no-underline">
                {testimonials[0].name}
              </b>
            </div>
            <div className="box-border caret-transparent outline-[3px] no-underline">
              <b className="box-border caret-transparent font-bold outline-[3px] no-underline">
                <br />
              </b>
            </div>
            <i className="box-border caret-transparent italic outline-[3px] no-underline">
              {testimonials[0].quote}
            </i>
          </div>
        )}
        {images[3] && (
          <img
            alt=""
            src={images[3]}
            className="box-border caret-transparent inline max-w-full outline-[3px] no-underline w-full mt-[30px]"
          />
        )}
        {testimonials[1] && (
          <div className="box-border caret-transparent text-xl leading-7 outline-[3px] no-underline mt-[30px]">
            <div className="box-border caret-transparent outline-[3px] no-underline">
              <b className="box-border caret-transparent font-bold outline-[3px] no-underline">
                {testimonials[1].name}
              </b>
            </div>
            <div className="box-border caret-transparent outline-[3px] no-underline">
              <b className="box-border caret-transparent font-bold outline-[3px] no-underline">
                <br />
              </b>
            </div>
            <i className="box-border caret-transparent italic outline-[3px] no-underline">
              {testimonials[1].quote}
            </i>
          </div>
        )}
      </div>
    </div>
  );
}

function Noor2ArticleLayout(): React.ReactElement {
  return (
    <div className="items-stretch box-border caret-transparent flex flex-wrap justify-center max-w-full outline-[3px] no-underline mt-0 font-open_sans md:flex-nowrap md:mt-[30px]">
      <div className="box-border caret-transparent basis-full grow max-w-[1170px] min-h-[25px] outline-[3px] relative no-underline w-min md:basis-0">
        <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start outline-[3px] no-underline md:flex-nowrap">
          <Noor2ArticleMain />
          <Noor2Sidebar />
        </div>
      </div>
    </div>
  );
}

function Noor2LimitedTimeOffer(): React.ReactElement {
  const { content, media } = useNoor2();
  const { offer } = content;

  return (
    <div className="items-stretch box-border caret-transparent hidden flex-wrap justify-center max-w-full outline-[3px] no-underline font-open_sans md:flex-nowrap">
      <div className="bg-white box-border caret-transparent basis-full grow max-w-[1170px] min-h-[25px] outline-[3px] relative no-underline w-min px-[15px] md:basis-0 md:px-[30px]">
        <div className="box-border caret-transparent hidden text-lg leading-[25.2px] outline-[3px] relative no-underline mt-[30px] md:block">
          <b className="bg-white box-border caret-transparent text-[15px] font-bold outline-[3px] relative no-underline z-[2] px-[15px] md:text-lg">
            {offer.limitedTimeLabel}
          </b>
        </div>
        <div className="box-border caret-transparent block text-lg font-bold leading-[25.2px] outline-[3px] no-underline mt-[30px] md:hidden">
          {offer.limitedTimeLabel}
        </div>
        <div className="box-border caret-transparent text-sky-900 text-sm font-bold leading-[19.6px] outline-[3px] text-center no-underline mt-2.5">
          {offer.claimLabel}
        </div>
        <div className="box-border caret-transparent text-xl leading-7 outline-[3px] no-underline mt-5">
          <span className="bg-yellow-400 box-border caret-transparent outline-[3px] no-underline">
            <i className="box-border caret-transparent italic outline-[3px] no-underline">
              Note: {offer.noteText}
            </i>
          </span>
        </div>
        <div className="box-border caret-transparent outline-[3px] no-underline w-full">
          <div className="bg-green-50 box-border caret-transparent text-xl leading-7 outline-[3px] no-underline border mt-5 px-2 py-[5px] border-dotted">
            √{" "}
            <b className="box-border caret-transparent font-bold outline-[3px] no-underline">
              Stock Update:{" "}
            </b>
            <span className="box-border caret-transparent text-sky-900 outline-[3px] no-underline">
              {offer.stockStatus}
            </span>
            : LIMITED Discounted Supply AVAILABLE as of:{" "}
            <b className="box-border caret-transparent font-bold outline-[3px] no-underline">
              {offer.stockDate}
            </b>
          </div>
        </div>
        <div className="box-border caret-transparent outline-[3px] no-underline w-full pt-[30px]">
          <div className="items-center bg-green-50 box-border caret-transparent flex flex-col justify-center outline-[3px] no-underline w-full border pb-[25px] px-[15px] border-dotted md:flex-row md:justify-normal">
            <Image
              alt="Noor WonderLift Cream product"
              src={media.offer.productImage}
              width={400}
              height={400}
              className="box-border caret-transparent max-w-full outline-[3px] no-underline w-[300px] mt-[25px] md:w-[400px]"
              style={{ height: "auto" }}
            />
            <div className="box-border caret-transparent basis-[0%] grow outline-[3px] text-center no-underline px-2.5 md:text-left">
              <div className="items-center box-border caret-transparent flex justify-center max-w-full outline-[3px] text-center no-underline mt-[25px] mb-[15px] md:text-left">
                <img
                  alt=""
                  src={media.offer.checkIcon}
                  className="box-border caret-transparent h-[25px] max-w-full outline-[3px] text-center no-underline md:text-left"
                />
                <div className="box-border caret-transparent text-sky-900 text-lg font-bold leading-[25.2px] outline-[3px] no-underline">
                  {offer.dealLabel}
                </div>
              </div>
              <a
                href={content.ctaUrl}
                className="bg-green-500 box-border caret-transparent text-white inline-block text-2xl font-bold leading-[31.2px] max-w-full outline-[3px] text-center no-underline px-5 py-[15px] rounded-[10px] md:text-3xl md:leading-[39px]"
              >
                {offer.ctaLabel}
              </a>
              <div className="box-border caret-transparent flex-wrap justify-center max-w-full outline-[3px] text-center no-underline mt-[15px] md:text-left">
                <div className="box-border caret-transparent text-sm font-bold leading-[19.6px] outline-[3px] text-center no-underline">
                  LIMITED Discounted Supply AVAILABLE as of:
                </div>
                <div className="box-border caret-transparent text-sm font-bold leading-[19.6px] outline-[3px] text-center no-underline">
                  {offer.stockDate}
                </div>
              </div>
              <div className="box-border caret-transparent text-xl leading-7 outline-[3px] no-underline mt-2.5">
                <span className="bg-yellow-400 box-border caret-transparent outline-[3px] no-underline">
                  {offer.secureDealText}{" "}
                  <b className="box-border caret-transparent font-bold outline-[3px] no-underline">
                    <span className="box-border caret-transparent text-sky-900 outline-[3px] no-underline">
                      {offer.exclusiveDealText}
                    </span>
                  </b>{" "}
                  With{" "}
                  <b className="box-border caret-transparent font-bold outline-[3px] no-underline">
                    {offer.freegiftsText}
                  </b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Noor2StockUpdateBanner(): React.ReactElement {
  const { content } = useNoor2();
  return (
    <div className="items-stretch box-border caret-transparent hidden flex-wrap justify-center max-w-full outline-[3px] no-underline font-open_sans md:flex-nowrap">
      <div className="bg-white box-border caret-transparent basis-full grow max-w-[1170px] min-h-[25px] outline-[3px] relative no-underline w-min px-[15px] md:basis-0 md:px-[30px]">
        <div className="bg-yellow-100 box-border caret-transparent outline-[3px] no-underline w-full mt-5 px-2.5 py-3 rounded-[3px]">
          <div className="box-border caret-transparent text-xl leading-[29px] outline-[3px] no-underline p-px">
            <i className="box-border caret-transparent italic outline-[3px] no-underline">
              <b className="box-border caret-transparent font-bold outline-[3px] no-underline">
                Stock Update: {content.stockBanner.prefix}{" "}
                <span className="box-border caret-transparent outline-[3px] no-underline">
                  {content.stockBanner.date}
                </span>
              </b>
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}

function Noor2Footer(): React.ReactElement {
  const { content } = useNoor2();
  const { footer } = content;

  return (
    <div className="items-stretch box-border caret-transparent flex flex-wrap justify-center max-w-full outline-[3px] no-underline pb-10 font-open_sans md:flex-nowrap">
      <div className="box-border caret-transparent basis-full grow max-w-[1170px] min-h-[25px] outline-[3px] relative no-underline w-min px-[15px] md:basis-0">
        <div className="box-border caret-transparent outline-[3px] no-underline w-full" />
        <div className="box-border caret-transparent text-xs leading-[16.8px] outline-[3px] no-underline mt-20 md:text-lg md:leading-[25.2px]">
          REFERENCES:
        </div>
        <div className="box-border caret-transparent text-xs leading-[16.8px] outline-[3px] no-underline break-all mt-2.5 md:text-base md:leading-[22.4px]">
          {footer.references.map((ref, i) => (
            <span key={i}>
              {ref}
              {i < footer.references.length - 1 && <br />}
            </span>
          ))}
        </div>
        <div className="box-border caret-transparent outline-[3px] no-underline mt-[30px] text-xs leading-[16.8px] md:text-sm md:leading-[19.6px]">
          <a
            href={footer.links.privacy.href}
            className="box-border caret-transparent text-sky-900 text-xs leading-[16.8px] max-w-full outline-[3px] text-center underline md:text-sm md:leading-[19.6px]"
          >
            {footer.links.privacy.label}
          </a>
          {" | "}
          <a
            href={footer.links.contact.href}
            className="box-border caret-transparent text-sky-900 text-xs leading-[16.8px] max-w-full outline-[3px] text-center underline md:text-sm md:leading-[19.6px]"
          >
            {footer.links.contact.label}
          </a>
        </div>
        <div className="box-border caret-transparent outline-[3px] no-underline mt-[30px] text-xs leading-[16.8px] md:text-sm md:leading-[19.6px]">
          {footer.legal.advertisement}
        </div>
        <div className="box-border caret-transparent outline-[3px] no-underline mt-[30px] text-xs leading-[16.8px] md:text-sm md:leading-[19.6px]">
          {footer.legal.efficacy}
        </div>
        <div className="box-border caret-transparent outline-[3px] no-underline mt-[30px] text-xs leading-[16.8px] md:text-sm md:leading-[19.6px]">
          {footer.legal.trademarks}
        </div>
        <div className="box-border caret-transparent outline-[3px] no-underline mt-[30px] text-[11px] leading-[15.4px] md:text-sm md:leading-[19.6px]">
          {footer.legal.disclaimer.split("\n\n").map((block, i) => (
            <div key={i} className="box-border caret-transparent outline-[3px] no-underline">
              {i > 0 && <br />}
              {block}
            </div>
          ))}
        </div>
        <div className="box-border caret-transparent outline-[3px] no-underline mt-[30px] text-xs leading-[16.8px] md:text-xl md:leading-7">
          © {footer.copyrightYear} {footer.brand}. All rights reserved.
        </div>
      </div>
    </div>
  );
}

function Noor2StickyCta(): React.ReactElement {
  const { content } = useNoor2();
  return (
    <div className="items-stretch bg-neutral-300 box-border caret-transparent flex flex-wrap justify-center max-w-full outline-[3px] relative text-center no-underline w-full font-open_sans md:flex-nowrap">
      <div className="box-border caret-transparent basis-full grow max-w-[850px] min-h-[25px] outline-[3px] relative no-underline w-min md:basis-0">
        <div className="box-border caret-transparent outline-[3px] no-underline w-full py-1.5 md:py-2.5">
          <a
            href={content.ctaUrl}
            className="bg-stone-500 box-border caret-transparent text-white inline-block text-2xl font-bold leading-[31.2px] max-w-full outline-[3px] text-center no-underline w-[350px] px-2.5 py-3 rounded-[10px]"
          >
            {content.stickyCta.label}
          </a>
        </div>
      </div>
    </div>
  );
}

export type Noor2TopBarProps = {
  content: Noor2Content;
  media: Noor2Media;
};

export function Noor2TopBar({ content, media }: Noor2TopBarProps): React.ReactElement {
  return (
    <Noor2Context.Provider value={{ content, media }}>
      <Noor2Header />
      <Noor2ArticleLayout />
      <Noor2LimitedTimeOffer />
      <Noor2StockUpdateBanner />
      <Noor2Footer />
      <Noor2StickyCta />
    </Noor2Context.Provider>
  );
}
