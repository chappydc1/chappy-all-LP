import { GenderOption, GenderOptionProps } from "./components/GenderOption"

type GenderFormProps = {
  question: string
  options: GenderOptionProps[]
}

export function GenderForm({ question, options }: GenderFormProps) {
  return (
    <main className="flex-1 flex flex-col items-center">
      <div className="w-full max-w-[520px] px-4 pt-8 pb-12">
        {/* Question */}
        <h2 className="text-center text-[26px] font-semibold text-[#0d3d2b] font-poppins mb-6 leading-snug">
          {question}
        </h2>

        {/* Options */}
        <div className="flex gap-3 justify-center">
          {options.map((opt) => (
            <GenderOption key={opt.number} {...opt} />
          ))}
        </div>
      </div>
    </main>
  )
}
