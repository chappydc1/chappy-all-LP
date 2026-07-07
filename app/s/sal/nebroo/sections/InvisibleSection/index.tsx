export const NebrooInvisibleSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center flex-wrap md:flex-nowrap max-w-[1200px] mx-auto px-2.5 py-5 md:py-10 gap-8">
      {/* Text — left */}
      <div className="w-full md:flex-1">
        <div className="text-2xl font-bold leading-[34px] font-montserrat mb-5">
          Nearly Invisible, No One Will Notice
        </div>
        <div className="text-[17px] leading-6 font-montserrat md:leading-[26px] space-y-4">
          <p>
            With our hearing aids being CIC (completely-in-canal), they&apos;re{" "}
            <b className="font-bold">nearly invisible from the outside.</b>
          </p>
          <p>
            Making them so discreet{" "}
            <b className="font-bold">no one will ever know you&apos;re wearing hearing aids!</b>
          </p>
          <p>
            And the ear domes are made of <b className="font-bold">ultra-soft</b> silicone, which is gentle &amp; comfy even with sensitive skin.
          </p>
          <p>
            Plus, you will also receive 10 sizes of ear domes, completely for free with your order, to ensure that they are not just comfortable to wear, but most importantly to ensure that they will fit you well.
          </p>
        </div>
      </div>

      {/* Image — right */}
      <div className="w-full md:flex-1">
        <img
          src="/images/nebroo/1739407843738_Nearly_Invisible_1_.webp"
          alt="Nearly Invisible hearing aid in ear"
          className="w-full rounded-[10px] object-cover"
        />
      </div>
    </div>
  );
};
