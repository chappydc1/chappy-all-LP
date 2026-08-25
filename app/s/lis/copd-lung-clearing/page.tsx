"use client";

import { CopdAccessibilityWidgets } from "./components/CopdAccessibilityWidgets";
import { CopdMainContent } from "./sections/MainContent";
import { CopdHeroTopBar } from "./sections/Hero/components/CopdHeroTopBar";
import { CopdCartDrawer } from "./components/CopdCartDrawer";
import { CopdModals } from "./components/CopdModals";
import { CopdCookieConsent } from "./components/CopdCookieConsent";

export default function CopdLandingPage() {
  return (
    <>
      <CopdAccessibilityWidgets
        variant="icon"
        src="/images/gruns/icon-1.svg"
        alt="Icon"
        href=""
        linkText=""
      />
      <CopdAccessibilityWidgets
        variant="default"
        src=""
        alt=""
        href=""
        linkText=""
      />
      <CopdAccessibilityWidgets
        variant="link"
        src=""
        alt=""
        href="https://accessibe.com/blog/knowledgebase/screen-reader-guide"
        linkText="Accessibility Screen-Reader Guide, Feedback, and Issue Reporting | New window"
      />
      <CopdAccessibilityWidgets
        variant="skipLinks"
        src=""
        alt=""
        href=""
        linkText=""
      />
      <CopdAccessibilityWidgets variant="empty" src="" alt="" href="" linkText="" />
      <CopdAccessibilityWidgets
        variant="default"
        src=""
        alt=""
        href=""
        linkText=""
      />
      <CopdHeroTopBar />
      <CopdMainContent />
      <div className="box-border caret-transparent grow max-w-full outline-[3px]">
        <span className="box-border caret-transparent outline-[3px]"></span>
      </div>
      <div className="box-border caret-transparent outline-[3px]"></div>
      <div className="box-border caret-transparent outline-[3px]"></div>
      <CopdCartDrawer />
      <div className="box-border caret-transparent outline-[3px]"></div>
      <div className="box-border caret-transparent outline-[3px]"></div>
      <CopdModals variant="default" />
      <CopdModals variant="default" />
      <CopdModals variant="truemed" />
      <iframe
        src="https://app.thefrontrowhealth.com/api/widgets/storage_setter?visitor_token=17581cb8-1ecc-4b0c-a01a-0870520f9671&visit_token=88f4892f-64f1-44bc-9b31-e26001889ad8"
        className="absolute box-border caret-transparent hidden h-0 outline-[3px] w-0"
      ></iframe>
      <div className="box-border caret-transparent outline-[3px]">
        <iframe
          src="https://app.thefrontrowhealth.com/api/widgets/modal?presentation_type=sticker&product_id=987"
          className="fixed box-border caret-transparent hidden h-full outline-[3px] w-full z-[99999998] inset-0"
        ></iframe>
        <iframe
          src="https://app.thefrontrowhealth.com/api/widgets/v1/provider_profiles?widget_id=711"
          className="fixed box-border caret-transparent hidden h-full outline-[3px] w-full z-[99999999] inset-0"
        ></iframe>
      </div>
      <CopdCookieConsent />
      <div
        role="button"
        className="fixed bg-blue-600 box-border caret-transparent hidden leading-5 z-[2147483647] rounded-[50%] left-5 bottom-5"
      ></div>
      <CopdModals variant="hark" />
      <div className="box-border caret-transparent outline-[3px]"></div>
      <div
        role="region"
        aria-label="Live chat"
        className="fixed text-sm items-end box-border caret-transparent flex flex-col grow justify-end leading-[22.4px] max-h-[985px] outline-[3px] z-[2147483000] mb-0 mx-0 bottom-0 font-helvetica_neue md:[align-items:normal] md:grow-0 md:justify-normal md:mb-[15px] md:mx-[15px]"
      ></div>
      <iframe
        src="https://sec.webeyez.com/js/a771bb34-f57a-4a52-a133-4e09bd76fd7e/wz_sw.html?wz-ver=2026.04.21.d40308b"
        className="box-border caret-transparent hidden outline-[3px]"
      ></iframe>
      <iframe className="box-border caret-transparent hidden outline-[3px]"></iframe>
      <div className="box-border caret-transparent h-px outline-[3px] w-px overflow-hidden">
        <img
          alt=""
          src="/images/gruns/92.gif"
          className="aspect-[auto_1_/_1] box-border caret-transparent max-w-full opacity-[0.01] outline-[3px] w-px"
        />
      </div>
    </>
  );
}
