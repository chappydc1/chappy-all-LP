// eslint-disable-next-line @next/next/no-img-element
export function Header({ logoUrl, logoAlt }: { logoUrl: string; logoAlt: string }) {
  return (
    <header className="sticky top-0 bg-white z-10 border-b border-gray-200">
      <div className="flex items-center justify-center h-[52px] md:h-[60px]">
        {/* Using <img> since this is a static export with unoptimized images */}
        <img
          src={logoUrl}
          alt={logoAlt}
          className="h-[32px] w-auto object-contain"
        />
      </div>
    </header>
  )
}
