export type GenderOptionProps = {
  number: string
  imageUrl: string
  label: string
}

export function GenderOption({ imageUrl, label }: GenderOptionProps) {
  return (
    <div className="w-[160px] shrink-0">
      <label className="block cursor-pointer">
        <div className="border border-gray-200 rounded-[10px] overflow-hidden bg-white hover:border-[#1b5e3b] transition-colors">
          <div className="w-full aspect-[4/5] overflow-hidden">
            <img
              src={imageUrl}
              alt={label}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="px-3 py-3 text-center">
            <span className="text-[15px] font-normal text-[#1a1a1a]">{label}</span>
          </div>
        </div>
      </label>
    </div>
  )
}
