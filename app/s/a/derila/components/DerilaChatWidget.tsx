import media from "../media.json";

export const DerilaChatWidget = () => {
  const { icons } = media;

  return (
    <div className="fixed box-border outline-[3px] z-[999999] right-5 bottom-5">
      <div className="box-border flex justify-end outline-[3px] w-full mt-4">
        <div className="items-center bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border flex h-12 justify-center min-h-[auto] min-w-12 outline-[3px] border border-gray-200 rounded-full border-solid">
          <div className="items-center box-border flex justify-center min-h-[auto] min-w-[auto] outline-[3px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={icons.chat.src}
              alt={icons.chat.alt}
              className="absolute box-border h-6 opacity-[0.499974] outline-[3px] rotate-[-22.50114802534682deg] w-6 md:opacity-[0.056102] md:rotate-[-42.475430061445806deg]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
