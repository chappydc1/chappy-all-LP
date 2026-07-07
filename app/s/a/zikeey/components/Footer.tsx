import adv from "../copy.json";

export function Footer() {
  const { copyright, links, disclaimers } = adv.footer;

  return (
    <footer className="bg-black max-w-full mt-[25px] p-2.5 pb-16 md:pb-2.5">
      <div className="max-w-[1100px] text-center mx-auto">
        <p className="text-white text-[15px] leading-6 my-[5px]">
          {copyright}
        </p>
        {disclaimers.map((text, i) => (
          <p
            key={i}
            className="text-white text-[13px] leading-6 my-[5px] opacity-80"
          >
            {text}
          </p>
        ))}
        <div className="flex flex-wrap justify-center gap-4 mt-3">
          {links.map((link) => (
            <a
              key={link.text}
              href={link.url}
              className="text-white text-[15px] leading-6 hover:text-teal-400 transition-colors duration-150 underline"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
