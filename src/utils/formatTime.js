import dayjs from 'dayjs'

export function formatMonthDay(date, formatStr = 'MM月DD日') {
  return dayjs(date).format(formatStr)
}

export function getDiffDays(endDate, startDay) {
  return dayjs(endDate).diff(startDay, 'day')
}
