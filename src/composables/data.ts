import timezoneRaw from 'timezones.json'

export const timezones = timezoneRaw.flatMap((i) => {
  return i.utc.map((u) => {
    return {
      name: u,
      offset: i.offset,
      isdst: i.isdst,
      abbr: i.abbr,
    }
  })
})
