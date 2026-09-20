import Image from "next/image"

export type ImageOptionProps = {
  label: string
  imageSrc: string
  selected: boolean
  onClick: () => void
}

export const ImageOption = ({ label, imageSrc, selected, onClick }: ImageOptionProps): React.ReactElement => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex w-[calc(50%-6px)] flex-col overflow-hidden rounded-[5px] border-2 border-solid transition-colors duration-200 ${
        selected ? "border-[#A45B2C]" : "border-transparent"
      }`}
    >
      <div className="relative aspect-square w-full">
        <Image
          src={imageSrc}
          alt={label}
          fill
          className="object-cover"
        />
      </div>
      <div className="bg-[#A45B2C] px-2 py-2 text-center text-[15.84px] font-semibold text-white">
        {label}
      </div>
    </button>
  )
}
