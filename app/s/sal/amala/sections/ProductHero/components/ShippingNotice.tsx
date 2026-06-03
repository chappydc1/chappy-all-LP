function getShipByDate(): string {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const date = new Date();
  date.setUTCDate(date.getUTCDate() + 2);
  // Skip weekends
  while (date.getUTCDay() === 0 || date.getUTCDay() === 6) {
    date.setUTCDate(date.getUTCDate() + 1);
  }
  return `${days[date.getUTCDay()]}, ${months[date.getUTCMonth()]} ${date.getUTCDate()}`;
}

export const ShippingNotice = () => {
  const shipDate = getShipByDate();
  return (
    <div
      className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
    >
      <div
        className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
      >
        <div
          className="items-center box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] mt-5 md:mt-[25px]"
        >
          <div
            className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit min-h-[auto] min-w-2.5 outline-[3px] w-2.5"
          >
            <div
              className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
            >
              <div
                className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full"
              >
                <div
                  className="box-border caret-transparent outline-[3px]"
                >
                  <div
                    className="relative bg-green-500 box-border caret-transparent h-2.5 outline-[3px] w-2.5 rounded-[50%] before:accent-auto before:bg-green-500 before:box-border before:caret-transparent before:text-zinc-800 before:text-sm before:not-italic before:normal-nums before:font-normal before:h-2.5 before:tracking-[normal] before:leading-[21px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-2.5 before:rounded-[50%] before:border-separate before:font-libre_franklin after:accent-auto after:bg-green-500 after:box-border after:caret-transparent after:text-zinc-800 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-2.5 after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-2.5 after:rounded-[50%] after:border-separate after:top-0 after:font-libre_franklin"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit min-h-[auto] outline-[3px]"
          >
            <div
              className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
            >
              <div
                className="text-green-500 text-[15px] font-semibold box-border caret-transparent leading-[19.5px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full ml-2.5"
              >
                <div
                  className="box-border caret-transparent outline-[3px] w-full"
                >
                  <p
                    className="box-border caret-transparent outline-[3px]"
                  >
                    <span
                      className="box-border caret-transparent outline-[3px]"
                    >
                      Ships by{" "}
                    </span>
                    <span
                      className="box-border caret-transparent outline-[3px]"
                    >
                      {shipDate}
                    </span>
                    <span
                      className="box-border caret-transparent outline-[3px]"
                    >
                      {" "}
                      from our Ohio warehouse
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
