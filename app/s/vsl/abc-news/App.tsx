import { ArticlePage } from "./sections/ArticlePage";

export const App = () => {
  return (
    <body className="text-black text-base not-italic normal-nums font-normal accent-auto box-border caret-transparent block h-full tracking-[normal] leading-[18.4px] list-outside list-disc min-h-full outline-[3px] pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sansseriffont">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="box-border caret-transparent outline-[3px]">
          <div className="box-border caret-transparent outline-[3px]">
            <ArticlePage />
          </div>
        </div>
      </div>
      <div className="fixed box-border caret-transparent hidden h-px outline-[3px] w-px left-0 top-0">
        <iframe
          src="https://login.disney.com/en-US/us/DATG-ABCNEWSWEB.WEB/v5/bridge/web"
          className="box-border caret-transparent h-full max-w-full outline-[3px] align-baseline w-full border-zinc-100 mx-auto"
        ></iframe>
      </div>
      <iframe
        src="https://cdn-gl.imrworldwide.com/novms/html/ls.html"
        className="box-border caret-transparent hidden h-0 max-w-full outline-[3px] align-baseline w-0 border-zinc-100 mx-auto"
      ></iframe>
      <div className="box-border caret-transparent outline-[3px]">
        <div className="box-border caret-transparent outline-[3px]">
          <div className="box-border caret-transparent outline-[3px]"></div>
        </div>
      </div>
      <iframe
       
        className="box-border caret-transparent hidden h-0 max-w-full outline-[3px] align-baseline w-0 border-zinc-100 mx-auto"
      ></iframe>
      <iframe className="box-border caret-transparent hidden max-w-full outline-[3px] align-baseline border-zinc-100 mx-auto"></iframe>
      <iframe className="box-border caret-transparent hidden max-w-full outline-[3px] align-baseline border-zinc-100 mx-auto"></iframe>
      <iframe className="box-border caret-transparent hidden max-w-full outline-[3px] align-baseline border-zinc-100 mx-auto"></iframe>
      <div className="box-border caret-transparent outline-[3px]"></div>
      <iframe
        src="https://www.google.com/recaptcha/api2/aframe"
        className="box-border caret-transparent hidden h-0 max-w-full outline-[3px] align-baseline w-0 border-zinc-100 mx-auto"
      ></iframe>
      <iframe
        title="Criteo GUM iframe"
        className="box-border caret-transparent hidden h-0 max-w-full outline-[3px] align-baseline w-0"
      ></iframe>
      <iframe
       
        className="fixed box-border caret-transparent hidden h-0 left-[-999px] max-w-full outline-[3px] top-[-999px] align-baseline w-0 border-zinc-100 mx-auto"
      ></iframe>
    </body>
  );
};
