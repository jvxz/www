import { ArkErrors, type } from 'arktype'

const schema = type({
  data: {
    username: '\'jamie\'',
    status: '\'ok\'',
    editors: type({
      digital: 'string',
      hours: 'number',
      minutes: 'number',
      name: 'string',
      percent: 'number',
      seconds: 'number',
      text: 'string',
      total_seconds: 'number',
    }).array(),
  },
})

export async function getWakaTime() {
  const res = await fetch('https://wakapi.dev/api/compat/wakatime/v1/users/jamie/stats/today')
  const data = await res.json()

  const parsed = schema(data)

  if (parsed instanceof ArkErrors) {
    throw new TypeError(parsed.summary)
  }

  return parsed.data
}
