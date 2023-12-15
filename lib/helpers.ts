import { DateTime } from 'luxon'

export const getRelativeDate = (date: string) => {
  return DateTime.fromISO(date).toRelative()
}
