export const DiabetesFooter = () => {
  return (
    <footer className="text-white bg-yellow-600 box-border caret-transparent outline-[3px] py-12">
      <div className="box-border caret-transparent max-w-none outline-[3px] w-full mx-auto px-3 md:max-w-[1140px]">
        <ul className="text-sm box-border caret-transparent leading-[21px] list-none outline-[3px] mb-6 pl-0">
          <li className="box-border caret-transparent inline-block outline-[3px] mr-2">
            <a
              href="https://glycocept.com/terms?hopId=5f160ca7-bd6b-4c23-b55d-9b6214111f05"
              className="relative font-medium bg-no-repeat bg-size-[10000px_2px] box-border caret-transparent outline-[3px] bg-[position:-10000px_16.8px]"
            >
              Terms
            </a>
          </li>
          <li className="box-border caret-transparent inline-block outline-[3px] mr-2">
            <a
              href="https://glycocept.com/privacy?hopId=5f160ca7-bd6b-4c23-b55d-9b6214111f05"
              className="relative font-medium bg-no-repeat bg-size-[10000px_2px] box-border caret-transparent outline-[3px] bg-[position:-10000px_16.8px] hover:text-blue-700 hover:border-blue-700"
            >
              Privacy
            </a>
          </li>
          <li className="box-border caret-transparent inline-block outline-[3px] mr-2">
            <a
              href="https://glycocept.com/refunds?hopId=5f160ca7-bd6b-4c23-b55d-9b6214111f05"
              className="relative font-medium bg-no-repeat bg-size-[10000px_2px] box-border caret-transparent outline-[3px] bg-[position:-10000px_16.8px] hover:text-blue-700 hover:border-blue-700"
            >
              Return Policy
            </a>
          </li>
          <li className="box-border caret-transparent inline-block outline-[3px]">
            <a
              href="https://glycocept.com/contact-us?hopId=5f160ca7-bd6b-4c23-b55d-9b6214111f05"
              className="relative font-medium bg-no-repeat bg-size-[10000px_2px] box-border caret-transparent outline-[3px] bg-[position:-10000px_16.8px] hover:text-blue-700 hover:border-blue-700"
            >
              Contact Us
            </a>
          </li>
        </ul>
        <div className="text-[13px] box-border caret-transparent leading-[19.5px] outline-[3px]">
          <div className="box-border caret-transparent outline-[3px] my-6">
            For Product Support, please contact the vendor{" "}
            <a
              href="mailto://contact@glycocept.com"
              className="font-medium box-border caret-transparent outline-[3px] underline hover:text-blue-700 hover:border-blue-700"
            >
              HERE
            </a>
            .
            <br className="box-border caret-transparent outline-[3px]" />
          </div>
        </div>
        <p className="text-[13px] box-border caret-transparent leading-[19.5px] outline-[3px]">
          © GlycoCept Research 2026. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
