export const ClickbankFooter = (): JSX.Element => {
  return (
    <footer className="mt-auto w-full">
      <div className="flex flex-col items-center bg-[#3f3d5c] px-6 py-6 text-white md:py-4">
        <div className="flex w-full max-w-[994px] flex-wrap justify-center gap-6 md:flex-nowrap md:gap-0">
          <div className="w-full md:w-1/3">
            <h3 className="mb-4 text-base font-bold">Order Guarantee</h3>
            <p className="mb-2 text-sm">
              We offer a return or replacement of any product within 90 days from the date of
              purchase. For more details see our{" "}
              <a href="#" className="underline">
                return policy
              </a>
              .
            </p>
            <p className="text-sm font-semibold">
              Your purchase will appear on your bank statement under the name CHAPPY*STORE.
            </p>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="mb-4 text-base font-bold">Need Help?</h3>
            <p className="text-sm">
              Visit our{" "}
              <a href="#" className="underline">
                Customer Support
              </a>{" "}
              page. Or email us at{" "}
              <a href="mailto:support@chappy.com" className="underline">
                support@chappy.com
              </a>
              .
            </p>
          </div>

          <div className="w-full md:w-1/3">
            <p className="text-lg font-bold">chappy</p>
          </div>
        </div>
      </div>

      <div className="flex min-h-[90px] w-full flex-wrap items-center bg-[#2f2d47] px-4 py-8 text-center text-white md:px-10 md:py-2">
        <div className="w-full">
          <p className="text-sm">
            Copyright {new Date().getFullYear()} © chappy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
