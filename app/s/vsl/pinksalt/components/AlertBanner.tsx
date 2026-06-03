type AlertBannerProps = {
  city?: string;
  text?: string;
};

export const AlertBanner = ({ city = "Boardman", text }: AlertBannerProps) => {
  const displayText = text?.replace("{city}", city);

  return (
    <div className="relative box-border gap-x-5 max-w-full min-h-[auto] gap-y-5">
      <div className="items-center flex justify-center text-center w-full">
        <div className="bg-black/40 shadow-[rgba(0,0,0,0.2)_0px_4px_25px_0px] min-h-[auto] min-w-[auto] px-5 py-3 rounded-[10px]">
          <span className="text-white text-lg font-semibold leading-[25.2px] font-fredoka">
            {displayText ? displayText : (
              <>
                This video is causing a stir in
                <span className="text-black bg-white inline-block px-1.5 rounded">{city}</span>
                {" "}— watch before it&apos;s taken down
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
