const MONTH_FORMATTER = new Intl.DateTimeFormat("en-US", { month: "long" })

export const formatMonth = (date: Date): string => MONTH_FORMATTER.format(date)

export const monthsFromNow = (months: number, from: Date = new Date()): Date => {
  const result = new Date(from)
  result.setMonth(result.getMonth() + months)
  return result
}

export const formatMonthYear = (date: Date): string => `${formatMonth(date)} ${date.getFullYear()}`
