export const HipaaModal = () => {
  return (
    <div className="fixed items-center caret-transparent hidden h-[1000px] justify-center outline-[3px] w-screen z-[99999] overflow-scroll left-0 top-0">
      <div className="absolute bg-black caret-transparent h-full opacity-[0.56] outline-[3px] w-full left-0 top-0"></div>
      <div className="relative bg-white box-border caret-transparent max-w-[550px] outline-[3px] w-[90%] my-auto pt-[46px] pb-[30px] px-[30px] rounded-[10px] md:max-w-[712px] md:w-full md:p-[50px]">
        <div className="relative caret-transparent outline-[3px] mb-[30px]">
          <div className="text-[13px] caret-transparent h-[250px] leading-[19.5px] outline-[3px] overflow-x-auto overflow-y-scroll text-left p-[11px]">
            <p className="caret-transparent outline-[3px] mb-3">
              <strong className="font-bold caret-transparent outline-[3px]">
                AUTHORIZATION FOR USE AND DISCLOSURE OF HEALTH INFORMATION
              </strong>
            </p>
            <p className="caret-transparent outline-[3px] mb-3">
              Hear.com LLC (“Hear.com”) respects the privacy of its customers.
              Accordingly, Hear.com seeks your permission to release certain
              information about you as detailed below. We ask that you carefully
              review and sign this Authorization.
            </p>
            <p className="caret-transparent outline-[3px] mb-3">
              <strong className="font-bold caret-transparent outline-[3px]">
                Section 1
              </strong>
              : I voluntarily authorize Hear.com to release solely for the
              purposes set forth in Section 2 below: some of (a) my contact
              information (e.g., IP address, Facebook ID, Google ID email
              address and/or phone number); (b) other information related to
              products or services I will receive or have received from
              Hear.com.
            </p>
            <p className="caret-transparent outline-[3px] mb-3">
              <strong className="font-bold caret-transparent outline-[3px]">
                Section 2
              </strong>
              : I agree that Hear.com may use and disclose the information about
              me listed in Section 1 above to certain third parties for purposes
              optimizing and improving marketing messages to me and others.
            </p>
            <p className="caret-transparent outline-[3px] mb-3">
              <strong className="font-bold caret-transparent outline-[3px]">
                Section 3
              </strong>
              : I understand that I have the right to revoke this Authorization
              at any time by notifying Hear.com in writing at the address below.
              Revoking this Authorization will not have any effect on actions
              that Hear.com took in reliance on the Authorization before it
              received notice of my revocation.
            </p>
            <p className="caret-transparent outline-[3px] mb-3">
              <strong className="font-bold caret-transparent outline-[3px]">
                Section 4
              </strong>
              : I understand that if I do not revoke this Authorization, this
              Authorization will expire one (1) year from the date that I sign
              it.
            </p>
            <p className="caret-transparent outline-[3px] mb-3">
              <strong className="font-bold caret-transparent outline-[3px]">
                Section 5
              </strong>
              : I understand that my health information may be protected by law.
              I understand that Hear.com may be compensated as a result of the
              release of my health information to third parties for the purposes
              described in Section 2 above. I understand that the health
              information that is disclosed under this Authorization may be
              re-disclosed by the recipient, and no longer protected by federal
              privacy regulations. However, California law prohibits the
              recipient from making further disclosure of it, unless another
              authorization for such disclosure is obtained from me or unless
              such disclosure is specifically required or permitted by law. I
              understand that I do not need to sign this Authorization in order
              to receive products or services from Hear.com. I understand that I
              may receive a copy of this Authorization if I ask for it in
              writing addressed to Hear.com’s Privacy Officer at the address
              listed at the bottom of this page.
            </p>
            <p className="caret-transparent outline-[3px]">
              Hear.com LLC
              <br className="caret-transparent outline-[3px]" />
              Attn: Privacy Officer
              <br className="caret-transparent outline-[3px]" />
              396 Alhambra Circle, Suite 1200
              <br className="caret-transparent outline-[3px]" />
              Coral Gables, Florida 33134
              <br className="caret-transparent outline-[3px]" />
            </p>
          </div>
        </div>
        <button className="text-white text-lg font-bold bg-sky-700 caret-transparent block leading-[23.4px] max-w-[345px] outline-[3px] text-center w-full mx-auto py-5 rounded-[20px] font-arial hover:bg-sky-900">
          Close
        </button>
      </div>
    </div>
  );
};
