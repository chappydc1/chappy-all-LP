export type ProgressBarProps = {
  percent: number
}

export const ProgressBar = ({ percent }: ProgressBarProps): React.ReactElement => {
  return (
    <div className="box-border basis-0 grow max-w-full">
      <div className="box-border h-[3px] w-full md:h-auto">
        <div className="box-border">
          <div className="box-border">
            <div className="bg-[#E8F5E9] box-border h-[3px] w-full overflow-hidden rounded-[5px]">
              <div
                className="bg-[#285E5F] box-border h-[3px] rounded-[5px] left-0 transition-[width] duration-300"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
