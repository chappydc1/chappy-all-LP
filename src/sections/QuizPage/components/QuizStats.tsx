import React from "react"
type Stats = { startingDate: string; peopleJoined: string }

export function QuizStats({ stats }: { stats: Stats }): React.JSX.Element {
  return (
    <div className="relative box-border caret-transparent outline-[3px]">
      <div className="text-black box-border caret-transparent outline-[3px] text-center p-5">
        <strong className="font-bold box-border caret-transparent outline-[3px]">
          📍 Starting date:
        </strong>
        <span className="box-border caret-transparent outline-[3px]">
          {stats.startingDate}
        </span>
        <br className="box-border caret-transparent outline-[3px]" />
        <br className="box-border caret-transparent outline-[3px]" />
        <strong className="font-bold box-border caret-transparent outline-[3px]">
          🔥 People joined:
        </strong>
        <span className="box-border caret-transparent outline-[3px]">{stats.peopleJoined}</span>
      </div>
    </div>
  )
}
