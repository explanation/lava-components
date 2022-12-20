export const getFormattedNumber = (num: number, digits: number = 2) => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: ' K' },
    { value: 1e6, symbol: ' M' },
    { value: 1e9, symbol: ' B' },
  ]
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value
    })
  return item
    ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
    : '0'
}

export type IntervalMapping = {
  label: string
  seconds: number
}

export const getTimeAgo = (date: Date, intervalMapping?: IntervalMapping[]) => {
  const intervals = intervalMapping || [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'min', seconds: 60 },
    { label: 'sec', seconds: 1 },
  ]
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000)
  const interval = intervals.find((i) => i.seconds < seconds)
  const count = Math.floor(seconds / interval!.seconds)
  return `${count} ${interval!.label}${count !== 1 ? 's' : ''} ago`
}

export const getVideoDuration = (durationInSeconds: number) => {
  const h = Math.floor(durationInSeconds / 3600)
  const m = Math.floor((durationInSeconds % 3600) / 60)
  const s = Math.round(durationInSeconds % 60)
  return [h, m > 9 ? m : h ? '00' + m : m || '00', s > 9 ? s : '0' + s]
    .filter(Boolean)
    .join(':')
}
