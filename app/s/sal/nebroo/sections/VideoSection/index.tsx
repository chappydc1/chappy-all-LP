export const NebrooVideoSection = () => {
  return (
    <div className="items-center flex flex-col md:flex-row-reverse flex-wrap md:flex-nowrap mt-0 md:mt-2.5 px-2.5 py-5 max-w-[1200px] mx-auto gap-5">
      {/* Video — right on desktop */}
      <div className="w-full md:flex-1">
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            src="https://fast.wistia.net/embed/iframe/wgijt6llol?seo=false&videoFoam=true"
            title="Nebroo CIC Hearing Aids"
            allow="autoplay; fullscreen"
            allowFullScreen
            frameBorder="0"
            scrolling="no"
            className="absolute inset-0 w-full h-full rounded-[9.5px]"
          />
        </div>
      </div>

      {/* Text — left on desktop */}
      <div className="w-full md:flex-1">
        <div className="text-2xl font-bold leading-[34px] font-montserrat mb-5">
          Stream Calls, Videos and Music Directly To Your Ears with Bluetooth
        </div>
        <div className="text-[17px] leading-[27px] font-montserrat space-y-4">
          <p>We have added Bluetooth functionality to make your hearing aids even more useful</p>
          <p>You simply connect to your phone, tablet or laptop and you can stream any calls or audio directly to your Nebroo</p>
          <p>No more shouting down the phone or turning the volume up to max in public because you can hear at your perfect level with Bluetooth.</p>
        </div>
      </div>
    </div>
  );
};
