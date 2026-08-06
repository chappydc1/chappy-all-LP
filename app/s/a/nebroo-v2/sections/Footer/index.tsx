import { MedicalDisclosure } from "./components/MedicalDisclosure";
import { FooterLinks } from "./components/FooterLinks";
import { FooterAddress } from "./components/FooterAddress";

type FooterLink = { label: string; href: string };
type Props = {
  copy: {
    brandName: string;
    copyrightYear: string;
    phone: string;
    phoneHref: string;
    email: string;
    address: string;
    links: FooterLink[];
  };
  media: { paymentMethodsSrc: string };
};

export const Footer = ({ copy, media }: Props) => {
  return (
    <div className="items-stretch bg-white box-border caret-transparent flex flex-wrap justify-center max-w-full outline-[3px] border-zinc-500 mt-[100px] px-2.5 py-3 border-t border-solid md:flex-nowrap md:mt-[265px]">
      <div className="relative items-center box-border caret-transparent basis-full flex-col grow justify-between max-w-[1200px] min-h-[25px] outline-[3px] w-min px-[7px] py-2.5 md:basis-0 md:px-2.5">
        <MedicalDisclosure />
        <FooterLinks
          brandName={copy.brandName}
          copyrightYear={copy.copyrightYear}
          phone={copy.phone}
          phoneHref={copy.phoneHref}
          email={copy.email}
          links={copy.links}
        />
        <FooterAddress address={copy.address} paymentMethodsSrc={media.paymentMethodsSrc} />
      </div>
    </div>
  );
};
