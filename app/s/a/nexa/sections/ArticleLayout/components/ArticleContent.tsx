// @ts-nocheck
import adv from "../../../copy.json";
import media from "../../../media.json";
import { ArticleHeader } from "./ArticleHeader";
import { ArticleSection } from "./ArticleSection";
import { Testimonials } from "./Testimonials";
import { OfferSection } from "./OfferSection";
import { Comments } from "./Comments";

export const ArticleContent = () => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-[845px] pr-0 py-3 md:pr-2.5">
      <ArticleHeader
        variant="breadcrumb"
        breadcrumbText={adv.article.breadcrumb}
        expertLabel=""
        expertText=""
        headlineText=""
        subheadlineText=""
        ratingsImageSrc=""
        ratingsText=""
        mainImageSrc=""
        authorImageSrc=""
        authorText=""
        verifiedImageSrc=""
        dateText=""
      />
      <div className="text-[32px] font-bold box-border caret-transparent leading-8 outline-[3px] mt-[15px] font-helvetica">
        <div className="text-[39px] box-border caret-transparent leading-[48px] outline-[3px] font-montserrat">
          <ul className="box-border caret-transparent list-none outline-[3px] pl-0"></ul>
        </div>
      </div>
      <ArticleHeader
        variant="expert"
        breadcrumbText=""
        expertLabel={adv.article.expert.label}
        expertText={adv.article.expert.text}
        headlineText=""
        subheadlineText=""
        ratingsImageSrc=""
        ratingsText=""
        mainImageSrc=""
        authorImageSrc=""
        authorText=""
        verifiedImageSrc=""
        dateText=""
      />
      <ArticleHeader
        variant="headline"
        breadcrumbText=""
        expertLabel=""
        expertText=""
        headlineText={adv.article.headline}
        subheadlineText={adv.article.subheadline}
        ratingsImageSrc=""
        ratingsText=""
        mainImageSrc=""
        authorImageSrc=""
        authorText=""
        verifiedImageSrc=""
        dateText=""
      />
      <div className="text-[32px] font-bold box-border caret-transparent leading-8 outline-[3px] mt-[15px] font-helvetica"></div>
      <ArticleHeader
        variant="ratings"
        breadcrumbText=""
        expertLabel=""
        expertText=""
        headlineText=""
        subheadlineText=""
        ratingsImageSrc={media.header.ratingsStars}
        ratingsText={adv.article.ratingsText}
        mainImageSrc=""
        authorImageSrc=""
        authorText=""
        verifiedImageSrc=""
        dateText=""
      />
      <ArticleHeader
        variant="mainImage"
        mainImageSrc={media.header.mainImage}
      />
      <ArticleHeader
        variant="author"
        breadcrumbText=""
        expertLabel=""
        expertText=""
        headlineText=""
        subheadlineText=""
        ratingsImageSrc=""
        ratingsText=""
        mainImageSrc=""
        authorImageSrc={media.header.authorImage}
        authorText={adv.article.author.name}
        verifiedImageSrc={media.header.verifiedIcon}
        dateText={adv.article.author.date}
      />
      <ArticleSection
        variant="paragraph"
        className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left pt-[15px] font-montserrat md:text-lg md:leading-[25px]"
      >
        {adv.article.intro.p1}
      </ArticleSection>
      <ArticleSection
        variant="paragraph"
        className="text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] text-left pt-[15px] font-montserrat md:text-lg md:leading-[25px] md:pt-[25px]"
      >
        {adv.article.intro.p2}
      </ArticleSection>
      <ArticleSection
        variant="paragraph"
        className="text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] text-left pt-[15px] font-montserrat md:text-lg md:leading-[25px] md:pt-[25px]"
      >
        {adv.article.intro.p3}
      </ArticleSection>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <ArticleSection
        variant="statText"
        className="text-2xl font-bold box-border caret-transparent leading-[30px] outline-[3px] text-left mt-[30px] font-montserrat md:text-[37px] md:leading-[45px]"
      >
        {adv.article.problemSection.statHeadline}
      </ArticleSection>
      <ArticleSection
        variant="image"
        className="box-border caret-transparent flex outline-[3px] w-full pr-px pt-0 pb-2.5 md:pr-2.5 md:pt-[5px]"
        imageClassName="text-black items-center self-center box-border caret-transparent h-[151px] justify-start max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-screen mt-4 rounded-[25px] md:h-[331px] md:w-[811px]"
        src={media.article.spendStats}
      />
      <ArticleSection
        variant="paragraph"
        className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left pt-[15px] font-montserrat md:text-lg md:leading-[25px]"
      >
        {adv.article.problemSection.p1}
      </ArticleSection>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-[19px] box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        <span className="text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          {adv.article.problemSection.p2}
        </span>
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        {adv.article.problemSection.p3}
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        {adv.article.problemSection.p4}
      </div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <ArticleSection
        variant="calloutTitle"
        className="text-black text-[28px] font-bold box-border caret-transparent leading-[34px] outline-[3px] text-left mt-[30px] font-montserrat md:text-neutral-800 md:text-[33px] md:leading-[43px]"
        title={adv.article.solutionSection.heading}
      />
      <ArticleSection
        variant="image"
        className="box-border caret-transparent flex outline-[3px] w-full pr-px pt-0 pb-2.5 md:pr-2.5 md:pt-[5px]"
        imageClassName="text-black items-center self-center box-border caret-transparent h-[157px] justify-start max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-screen mt-4 rounded-[25px] md:h-[387px] md:w-[810px]"
        src={media.article.saveCar}
      />
      <div className="box-border caret-transparent outline-[3px] text-left"></div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <ArticleSection
        variant="paragraph"
        className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left pt-[15px] font-montserrat md:text-lg md:leading-[25px]"
      >
        {adv.article.solutionSection.p1}
      </ArticleSection>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        {adv.article.solutionSection.p2}
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        {adv.article.solutionSection.p3}
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        {adv.article.solutionSection.p4}
      </div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <div className="box-border caret-transparent outline-[3px]"></div>
      <div className="box-border caret-transparent outline-[3px]"></div>
      <div className="box-border caret-transparent outline-[3px]"></div>
      <div className="box-border caret-transparent outline-[3px]"></div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <ArticleSection
        variant="calloutTitle"
        className="text-[28px] font-bold box-border caret-transparent leading-[34px] outline-[3px] mt-[30px] font-montserrat md:text-[33px] md:leading-[43px]"
        title={adv.article.productIntro.heading}
      />
      <ArticleSection
        variant="video"
        className="box-border caret-transparent flex justify-start outline-[3px]"
        poster="video"
        src={adv.meta.videoUrl}
      />
      <p className="box-border caret-transparent outline-[3px]"></p>
      <ArticleSection
        variant="paragraph"
        className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left pt-[25px] font-montserrat md:text-lg md:leading-[25px]"
      >
        {adv.article.productIntro.p1}
      </ArticleSection>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        {adv.article.productIntro.p2}
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        {adv.article.productIntro.p3}
      </div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <ArticleSection
        variant="calloutTitle"
        className="text-[28px] font-bold box-border caret-transparent leading-[34px] outline-[3px] mt-[30px] font-montserrat md:text-[33px] md:leading-[43px]"
        title={adv.article.cleanPolishSection.heading}
      />
      <ArticleSection
        variant="image"
        className="box-border caret-transparent flex outline-[3px] w-full pr-px pt-0 pb-2.5 md:pr-2.5 md:pt-[5px]"
        src={media.article.cleanPolish}
        imageClassName="text-black items-center self-center box-border caret-transparent h-[134px] justify-start max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-screen mt-4 rounded-[25px] md:h-[243px] md:w-[825px]"
      />
      <p className="box-border caret-transparent outline-[3px]"></p>
      <ArticleSection
        variant="paragraph"
        className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left pt-[15px] font-montserrat md:text-lg md:leading-[25px]"
      >
        {adv.article.cleanPolishSection.p1}
      </ArticleSection>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        {adv.article.cleanPolishSection.p2}
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        {adv.article.cleanPolishSection.p3}
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        {adv.article.cleanPolishSection.p4}
      </div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <ArticleSection
        variant="nestedCalloutTitle"
        className="text-[28px] font-bold box-border caret-transparent leading-[34px] outline-[3px] mt-[30px] font-montserrat md:text-[33px] md:leading-[43px]"
      >
        {adv.article.rustScratchesSection.heading}
        <br className="text-2xl box-border caret-transparent leading-[30px] outline-[3px] md:text-[37px] md:leading-[45px]" />
      </ArticleSection>
      <ArticleSection
        variant="image"
        className="box-border caret-transparent flex outline-[3px] w-full pr-px pt-0 pb-2.5 md:pr-2.5 md:pt-[5px]"
        imageClassName="text-black items-center self-center box-border caret-transparent h-[133px] justify-start max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[350px] mt-4 rounded-[25px] md:h-[298px] md:w-[809px]"
        src={media.article.rustScratches}
      />
      <ArticleSection
        variant="paragraph"
        className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left pt-[15px] font-montserrat md:text-lg md:leading-[25px]"
      >
        {adv.article.rustScratchesSection.p1}
      </ArticleSection>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        {adv.article.rustScratchesSection.p2}
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        {adv.article.rustScratchesSection.p3}
      </div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <div className="text-lg box-border caret-transparent leading-[23px] outline-[3px] text-left mt-[15px]"></div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <div className="text-lg box-border caret-transparent leading-[23px] outline-[3px] text-left mt-[15px]"></div>
      <ArticleSection
        variant="nestedCalloutTitle"
        className="text-[28px] font-bold box-border caret-transparent leading-[34px] outline-[3px] mt-[30px] font-montserrat md:text-[33px] md:leading-[43px]"
      >
        {adv.article.featuresSection.heading}
      </ArticleSection>
      <ArticleSection
        variant="standaloneImage"
        className="text-black items-center self-center box-border caret-transparent inline h-[163px] justify-start max-w-full outline-[3px] align-baseline w-screen mt-[21px] rounded-[25px] md:h-[312px] md:w-[812px]"
        src={media.article.whyChoose}
      />
      <div className="box-border caret-transparent flex outline-[3px] w-full pr-2.5 pt-0 pb-2.5 md:pt-[5px]"></div>
      {adv.article.featuresSection.items.map((item, i) => (
        <div key={i}>
          <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
            ✅ <b>{item.label}</b> {item.text}
          </div>
          <div className="box-border caret-transparent outline-[3px]">
            <br className="box-border caret-transparent outline-[3px]" />
          </div>
        </div>
      ))}
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        {adv.article.featuresSection.closingP1}
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        {adv.article.featuresSection.closingP2}
      </div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <Testimonials />
      <div className="bg-gray-200 box-border caret-transparent block outline-[3px] w-full mt-[22px] pt-0 pb-[5px] px-0 md:flex md:pt-3 md:px-2.5">
        <div className="box-border caret-transparent basis-[30%] shrink-0 min-h-0 min-w-0 outline-[3px] w-full pt-0 pb-3 px-0 md:min-h-[auto] md:min-w-[auto] md:pt-3 md:px-[5px]">
          <img
            title=""
            src={media.testimonials.images[0]}
            href=""
            alt=""
            className="text-black box-border caret-transparent inline h-auto max-w-full outline-[3px] align-baseline w-auto md:h-[120px] md:w-[244px]"
          />
        </div>
        <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] w-full pl-2.5 pr-[5px] pb-3 md:min-h-[auto] md:min-w-[auto] md:pr-2.5">
          <div className="items-center self-center box-border caret-transparent flex outline-[3px] w-full pt-3 pb-[5px] px-2.5">
            <img
              title=""
              src={media.testimonials.userApproveIcon}
              href=""
              alt=""
              className="text-black box-border caret-transparent h-[25px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[25px] md:h-[35px] md:w-[35px]"
            />
            <div className="text-base font-bold box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] pl-[7px] pr-px py-px font-montserrat md:text-lg md:leading-[18px] md:pl-2.5">
              {adv.testimonialsSection.items[0].name}
            </div>
            <div className="text-base font-bold box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] outline-[3px] pl-3 pr-px py-px font-montserrat md:text-lg md:hidden md:leading-[18px] md:min-h-0 md:min-w-0 md:pl-2.5">
              ⭐️⭐️⭐️⭐️⭐️
            </div>
            <div className="text-sm box-border caret-transparent hidden leading-[14px] min-h-0 min-w-0 outline-[3px] pl-[7px] pr-px py-px font-montserrat md:text-lg md:block md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:pl-2.5">
              |
            </div>
            <div className="text-sm box-border caret-transparent hidden leading-[14px] min-h-0 min-w-0 outline-[3px] pl-[7px] pr-px py-px font-montserrat md:text-lg md:block md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:pl-2.5">
              Rating: ⭐️⭐️⭐️⭐️⭐️
            </div>
          </div>
          <div className="text-base box-border caret-transparent leading-[21px] outline-[3px] pl-2.5 pr-[9px] pt-[5px] pb-2.5 font-montserrat md:text-[17px] md:leading-[22px] md:pr-[5px]">
            <div className="text-base box-border caret-transparent leading-5 outline-[3px] text-left pr-0 md:text-[17px] md:leading-6 md:pr-2.5">
              <span className="text-red-600 text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-[17px] md:leading-6">
                <span className="text-black text-base box-border caret-transparent leading-[22px] outline-[3px] pr-px md:text-[17px] md:leading-6 md:pr-[3px]">
                  {adv.testimonialsSection.items[0].text}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 box-border caret-transparent block outline-[3px] w-full mt-5 pt-0 pb-[5px] px-0 md:flex md:pt-3 md:px-2.5">
        <div className="box-border caret-transparent basis-[30%] shrink-0 min-h-0 min-w-0 outline-[3px] w-full pt-0 pb-3 px-0 md:min-h-[auto] md:min-w-[auto] md:pt-3 md:px-[5px]">
          <img
            title=""
            src={media.testimonials.images[1]}
            href=""
            alt=""
            className="text-black box-border caret-transparent inline h-[261px] max-w-full outline-[3px] align-baseline w-[348.5px] md:h-[169px] md:w-[246px]"
          />
        </div>
        <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] w-full pl-2.5 pr-[5px] pb-3 md:min-h-[auto] md:min-w-[auto] md:pr-2.5">
          <div className="items-center self-center box-border caret-transparent flex outline-[3px] w-full pt-3 pb-[5px] px-2.5">
            <img
              title=""
              src={media.testimonials.userApproveIcon}
              href=""
              alt=""
              className="text-black box-border caret-transparent h-[25px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[25px] md:h-[35px] md:w-[35px]"
            />
            <div className="text-base font-bold box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] pl-[7px] pr-px py-px font-montserrat md:text-lg md:leading-[18px] md:pl-2.5">
              {adv.testimonialsSection.items[1].name}
            </div>
            <div className="text-base font-bold box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] outline-[3px] pl-3 pr-px py-px font-montserrat md:text-lg md:hidden md:leading-[18px] md:min-h-0 md:min-w-0 md:pl-2.5">
              ⭐️⭐️⭐️⭐️⭐️
            </div>
            <div className="text-sm box-border caret-transparent hidden leading-[14px] min-h-0 min-w-0 outline-[3px] pl-[7px] pr-px py-px font-montserrat md:text-lg md:block md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:pl-2.5">
              |
            </div>
            <div className="text-sm box-border caret-transparent hidden leading-[14px] min-h-0 min-w-0 outline-[3px] pl-[7px] pr-px py-px font-montserrat md:text-lg md:block md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:pl-2.5">
              Rating: ⭐️⭐️⭐️⭐️⭐️
            </div>
          </div>
          <div className="text-[17px] box-border caret-transparent leading-[21px] outline-[3px] pt-[5px] pb-2.5 px-2.5 font-montserrat md:leading-6 md:pr-[5px]">
            <div className="text-base box-border caret-transparent leading-6 outline-[3px] text-left pr-px md:text-[17px] md:pr-2.5">
              <span className="text-red-600 text-base box-border caret-transparent outline-[3px] md:text-[17px]">
                <span className="text-black text-base box-border caret-transparent leading-[22px] outline-[3px] pr-px md:text-[17px] md:leading-6 md:pr-[3px]">
                  {adv.testimonialsSection.items[1].text}
                  <br className="text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-[17px] md:leading-6" />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 box-border caret-transparent block outline-[3px] w-full mt-5 pt-0 pb-[5px] px-0 md:flex md:pt-3 md:px-2.5">
        <div className="box-border caret-transparent basis-[30%] shrink-0 min-h-0 min-w-0 outline-[3px] w-full pt-0 pb-3 px-0 md:min-h-[auto] md:min-w-[auto] md:pt-3 md:px-[5px]">
          <img
            title=""
            src={media.testimonials.images[2]}
            href=""
            alt=""
            className="text-black box-border caret-transparent inline h-[232px] max-w-full outline-[3px] align-baseline w-[352.594px] md:h-[139px] md:w-[246px]"
          />
        </div>
        <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] w-full pl-2.5 pr-[7px] pb-3 md:min-h-[auto] md:min-w-[auto] md:pr-2.5">
          <div className="items-center self-center box-border caret-transparent flex outline-[3px] w-full pt-3 pb-[5px] px-2.5">
            <img
              title=""
              src={media.testimonials.userApproveIcon}
              href=""
              alt=""
              className="text-black box-border caret-transparent h-[25px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[25px] md:h-[35px] md:w-[35px]"
            />
            <div className="text-base font-bold box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] pl-[7px] pr-px py-px font-montserrat md:text-lg md:leading-[18px] md:pl-2.5">
              {adv.testimonialsSection.items[2].name}
            </div>
            <div className="text-base font-bold box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] outline-[3px] pl-3 pr-px py-px font-montserrat md:text-lg md:hidden md:leading-[18px] md:min-h-0 md:min-w-0 md:pl-2.5">
              ⭐️⭐️⭐️⭐️⭐️
            </div>
            <div className="text-sm box-border caret-transparent hidden leading-[14px] min-h-0 min-w-0 outline-[3px] pl-[7px] pr-px py-px font-montserrat md:text-lg md:block md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:pl-2.5">
              |
            </div>
            <div className="text-sm box-border caret-transparent hidden leading-[14px] min-h-0 min-w-0 outline-[3px] pl-[7px] pr-px py-px font-montserrat md:text-lg md:block md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:pl-2.5">
              Rating: ⭐️⭐️⭐️⭐️⭐️
            </div>
          </div>
          <div className="text-[17px] box-border caret-transparent leading-[21px] outline-[3px] pt-[5px] pb-2.5 px-2.5 font-montserrat md:leading-6 md:pr-[5px]">
            <div className="box-border caret-transparent leading-6 outline-[3px] text-left pr-px md:pr-2.5">
              <span className="text-red-600 box-border caret-transparent outline-[3px]">
                <span className="text-black text-base box-border caret-transparent leading-[22px] outline-[3px] pr-[3px] md:text-[17px] md:leading-6">
                  {adv.testimonialsSection.items[2].text}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <div className="text-[28px] font-bold box-border caret-transparent leading-[34px] outline-[3px] mt-[30px] font-montserrat md:text-[33px] md:leading-[43px]">
        <div className="text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-[33px] md:leading-[43px]">
          <span className="text-red-600 text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-[33px] md:leading-[43px]">
            <span className="text-black text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]">
              <div className="text-black text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]">
                <span className="text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-[33px] md:leading-[43px]">
                  <span className="text-black text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]"></span>
                </span>
              </div>
            </span>
          </span>
        </div>
      </div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <div className="text-[28px] font-bold box-border caret-transparent leading-[34px] outline-[3px] mt-[30px] font-montserrat md:text-[33px] md:leading-[43px]">
        <div className="text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-[33px] md:leading-[43px]">
          <span className="text-red-600 text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-[33px] md:leading-[43px]">
            <span className="text-black text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]">
              <div className="text-black text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]">
                <span className="text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-[33px] md:leading-[43px]">
                  <span className="text-black text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]"></span>
                </span>
              </div>
            </span>
          </span>
        </div>
      </div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <div className="text-[28px] font-bold box-border caret-transparent leading-[34px] outline-[3px] text-left mt-[30px] font-montserrat md:text-[33px] md:leading-[43px]">
        <div className="text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-[33px] md:leading-[43px]">
          <span className="text-red-600 text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-[33px] md:leading-[43px]">
            <span className="text-black text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]">
              <div className="text-black text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]">
                <span className="text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-[33px] md:leading-[43px]">
                  <span className="text-black text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]">
                    <div className="text-black text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]">
                      <span className="text-[28px] box-border caret-transparent leading-[34px] outline-[3px] md:text-[33px] md:leading-[43px]"></span>
                    </div>
                  </span>
                </span>
              </div>
            </span>
          </span>
        </div>
      </div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <OfferSection
        variant=""
        buttonText={adv.offerSection.buttons.getYour50Off}
        buttonTitle=""
        href=""
        linkTitle=""
        productName=""
      />
      <OfferSection
        variant=""
        buttonText={adv.offerSection.buttons.get50Off}
        buttonTitle=""
        href=""
        linkTitle=""
        productName=""
      />
      <div className="text-[28px] font-bold box-border caret-transparent leading-[34px] outline-[3px] mt-10 font-montserrat md:text-[33px] md:leading-[43px]">
        <div className="text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-[33px] md:leading-[43px]">
          <span className="text-red-600 text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-[33px] md:leading-[43px]">
            <span className="text-black text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]"></span>
          </span>
        </div>
      </div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <OfferSection
        variant="stockWarning"
        buttonText=""
        buttonTitle=""
        href=""
        linkTitle=""
        productName=""
      />
      <p className="box-border caret-transparent outline-[3px]"></p>
      <OfferSection
        variant=""
        buttonText={adv.offerSection.buttons.get50Off}
        buttonTitle=""
        href=""
        linkTitle=""
        productName=""
      />
      <OfferSection
        variant="salesParagraph"
        href={adv.meta.ctaUrl}
        productName={adv.meta.productName}
      />
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        {adv.offerSection.priceText}
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[23px]">
        <span className="text-red-600 text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[23px]">
          <b className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[23px]">
            <a
              title="L5"
              loop="none"
              href={adv.meta.ctaUrl}
              className="text-blue-600 text-base box-border caret-transparent leading-[22px] max-w-full outline-[3px] text-center underline md:text-lg md:leading-[25px]"
            >
              {adv.offerSection.buttons.claimDiscounted}
            </a>
          </b>
        </span>
      </div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <OfferSection
        variant="secondaryButton"
        buttonTitle="9th"
        buttonText={adv.offerSection.buttons.getYour50Off}
      />
      <OfferSection
        variant="whereToGet"
        buttonText=""
        buttonTitle=""
        href=""
        linkTitle=""
        productName={adv.meta.productName}
      />
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <OfferSection variant="description" />
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        {adv.offerSection.authenticityP1}
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        {adv.offerSection.bulkOrderP1}
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        {adv.offerSection.bulkOrderP2}
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        {adv.offerSection.knockoffWarning}
      </div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <OfferSection
        variant="linkCta"
        buttonText={adv.offerSection.buttons.get50OffProduct}
        buttonTitle="GET 50% OFF Car Scratch Remover Nexa™ Now!"
        href={adv.meta.ctaUrl}
        linkTitle="GET 50% OFF Car Scratch Remover Nexa™ Now!"
        productName={adv.meta.productName}
      />
      <OfferSection
        variant="offerDetails"
        buttonText={adv.offerSection.buttons.getYour50Off}
        buttonTitle="8th"
        href={adv.meta.ctaUrl}
        linkTitle="GET 50% OFF Now!"
        productName={adv.meta.productName}
      />
      <p className="box-border caret-transparent outline-[3px]"></p>
      <div className="bg-orange-100 box-border caret-transparent outline-[3px] w-full pt-px pb-3"></div>
      <OfferSection
        variant="badges"
        buttonText=""
        buttonTitle=""
        href=""
        linkTitle=""
        productName=""
      />
      <OfferSection
        variant="badgeLabelsDesktop"
        buttonText=""
        buttonTitle=""
        href=""
        linkTitle=""
        productName=""
      />
      <OfferSection
        variant="badgeLabelsMobile"
        buttonText=""
        buttonTitle=""
        href=""
        linkTitle=""
        productName=""
      />
      <OfferSection
        variant="ctaGroup"
        buttonText={adv.offerSection.buttons.getYour50Off}
        buttonTitle="7th"
        href={adv.meta.ctaUrl}
        linkTitle="GET 50% OFF Now!"
        productName={adv.meta.productName}
      />
      <Comments />
      {adv.comments.items.map((item, idx) => (
        <div key={idx} className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] p-px md:flex-nowrap">
          <div className="relative box-border caret-transparent flex basis-full grow max-w-full min-h-[25px] outline-[3px] w-min mt-5 p-px md:basis-0">
            <img title="" src={item.image} href="" alt="" className="text-black box-border caret-transparent h-[55px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[55px] mt-0.5" />
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pb-3 px-2.5">
              <div className="text-indigo-800 text-sm font-bold box-border caret-transparent leading-[14px] outline-[3px] p-px font-helvetica">{item.author}</div>
              <div className="text-sm box-border caret-transparent leading-[18px] outline-[3px] mt-[5px] p-px font-helvetica">
                <div className="box-border caret-transparent outline-[3px] text-left">
                  {item.mention && <div className="box-border caret-transparent outline-[3px] pb-[5px]"><span className="text-indigo-800 font-bold box-border caret-transparent outline-[3px]">{item.mention}</span></div>}
                  <span className="box-border caret-transparent outline-[3px] font-montserrat">{item.text}</span>
                </div>
              </div>
              <div className="box-border caret-transparent flex outline-[3px] w-full pr-2.5 pt-2.5 pb-3">
                <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">Like</div>
                <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">·</div>
                <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">Reply</div>
                <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">·</div>
                <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] ml-[3px] p-px font-helvetica">{item.time}</div>
              </div>
              {item.reply && (
                <div className="box-border caret-transparent flex outline-[3px] w-full pr-2.5 pt-[5px]">
                  <img title="" src={item.reply.image} href="" alt="" className="text-black box-border caret-transparent h-[45px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[45px] mt-0.5" />
                  <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full pb-3 px-2.5">
                    <div className="text-indigo-800 text-sm font-bold box-border caret-transparent leading-[14px] outline-[3px] p-px font-helvetica">{item.reply.author}</div>
                    <div className="text-sm box-border caret-transparent leading-[18px] outline-[3px] mt-[5px] p-px font-helvetica">
                      <div className="box-border caret-transparent outline-[3px] text-left">
                        <span className="box-border caret-transparent outline-[3px] font-montserrat">{item.reply.text}</span>
                      </div>
                    </div>
                    <div className="box-border caret-transparent flex outline-[3px] w-full pr-2.5 pt-2.5 pb-3">
                      <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">Like</div>
                      <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">·</div>
                      <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">Reply</div>
                      <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">·</div>
                      <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] ml-[3px] p-px font-helvetica">{item.reply.time}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
