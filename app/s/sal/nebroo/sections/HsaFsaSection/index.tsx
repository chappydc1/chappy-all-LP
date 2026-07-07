export const NebrooHsaFsaSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center flex-wrap md:flex-nowrap max-w-[1200px] mx-auto px-2.5 py-5 md:py-10 gap-8">
      {/* Image — left */}
      <div className="w-full md:flex-1 shrink-0">
        <img
          src="/images/nebroo/1756189641488_HSA_FSA_Eligible_Squared_v4_1_.webp"
          alt="HSA/FSA Eligible"
          className="w-full rounded-[10px] object-cover"
        />
      </div>

      {/* Text — right */}
      <div className="w-full md:flex-1">
        <div className="text-2xl font-bold leading-[34px] font-montserrat mb-5">
          The Nebroo PRO Bluetooth Are HSA &amp; FSA Eligible
        </div>
        <div className="text-[17px] leading-6 font-montserrat md:leading-[26px] space-y-4">
          <p>
            That little badge isn&apos;t just decoration—it means you can{" "}
            <b className="font-bold">grab your Nebroo PRO Bluetooth Hearing Aids using your pre-tax HSA or FSA dollars,</b>{" "}
            making this upgrade feel completely <b className="font-bold">effortless.</b>
          </p>
          <p>
            After placing your order, you&apos;ll be guided right on the thank-you page to complete a quick, secure step.
          </p>
          <p>
            Within hours, a licensed medical professional will provide the Letter of Medical Necessity you need for reimbursement.
          </p>
          <p>No complicated forms. No extra hassle.</p>
          <p>Just an easier way to use your benefits for better hearing.</p>
        </div>
      </div>
    </div>
  );
};
