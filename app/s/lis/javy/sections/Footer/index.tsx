export const Footer = () => {
  return (
    <div className="relative text-white items-center bg-indigo-950 box-border gap-x-4 gap-y-2 border-b-white border-x-white border-t md:static">
      <div className="box-border w-full z-[999] px-4 md:px-10">
        <div className="text-xs items-center box-border flex flex-col justify-center leading-[18px] gap-y-4 py-4 md:gap-y-[normal]">
          <div className="box-border min-h-[auto] min-w-[auto]">
            <div className="text-[10.4px] box-border leading-[15.6px] mb-8 pb-4 border-b border-white">
              *Special sale discount is valid only on the first delivery of a
              new Javvy Coffee subscription created on{" "}
              <span className="font-bold box-border">
                https://try.javvycoffee.com/ps
              </span>
              {" "}by{" "}
              <span className="font-bold box-border">04/10/2026</span>
              {" "}at{" "}
              <span className="font-bold box-border">11:59pm PST</span>
              {" "}and includes the price of free gifts. Javvy Coffee subscription
              renews every 30 days at a discounted rate of the price listed at
              checkout. Max one offer per customer; cannot be combined with any
              other offers or sales.
            </div>
          </div>
          <div className="box-border min-h-[auto] min-w-[auto]">
            © 2026 Javvy Coffee Company. All right reserved.{" "}
            <a
              href="#"
              className="box-border underline hover:text-white/80 transition-colors duration-200 mx-1"
            >
              Terms of Service
            </a>
            |{" "}
            <a
              href="#"
              className="box-border underline hover:text-white/80 transition-colors duration-200 mx-1"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
