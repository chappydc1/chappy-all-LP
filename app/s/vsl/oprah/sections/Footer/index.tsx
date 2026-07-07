export const OprahFooter = () => (
  <div className="w-full" style={{ background: "linear-gradient(135deg, #c4a020 0%, #b8960c 60%, #a8860a 100%)" }}>
    <div className="box-border max-w-[800px] m-auto px-6 py-10 text-center reveal">
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-5">
        <a href="#" className="text-white text-sm font-work_sans hover:underline transition-opacity duration-200 hover:opacity-80">Terms</a>
        <a href="#" className="text-white text-sm font-work_sans hover:underline transition-opacity duration-200 hover:opacity-80">Privacy</a>
        <a href="#" className="text-white text-sm font-work_sans hover:underline transition-opacity duration-200 hover:opacity-80">Return Policy</a>
        <a href="#" className="text-white text-sm font-work_sans hover:underline transition-opacity duration-200 hover:opacity-80">Contact Us</a>
      </div>
      <p className="text-white text-sm leading-relaxed mb-4 font-work_sans">
        For Product Support, please contact the vendor{" "}
        <a href="#" className="text-white underline font-semibold hover:opacity-80 transition-opacity duration-200">HERE</a>.
      </p>
      <p className="text-white text-sm font-work_sans">
        © GlycoCept Research 2026. All Rights Reserved.
      </p>
    </div>
  </div>
);
