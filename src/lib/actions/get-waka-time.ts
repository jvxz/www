import { ArkErrors, type } from 'arktype'

const todaySchema = type({
  data: {
    username: '\'jamie\'',
    status: '\'ok\'',
    total_seconds: 'number',
    languages: type({
      name: 'string',
      percent: 'number',
      total_seconds: 'number',
    }).array(),
    projects: type({
      name: 'string',
      percent: 'number',
      total_seconds: 'number',
    }).array(),
  },
})

const periodSchema = type({
  data: {
    username: '\'jamie\'',
    status: '\'ok\'',
    total_seconds: 'number',
    daily_average: 'number',
    languages: type({
      name: 'string',
      percent: 'number',
      total_seconds: 'number',
    }).array(),
    projects: type({
      name: 'string',
      percent: 'number',
      total_seconds: 'number',
    }).array(),
  },
})

export async function getWakaTime() {
  const res = await fetch('https://wakapi.dev/api/compat/wakatime/v1/users/jamie/stats/7_days', {
    headers: {
      Authorization: `Bearer ${btoa(process.env.WAKA_API_KEY ?? '')}`,
    },
  })
  const data = await res.json()

  const parsed = periodSchema(data)

  if (parsed instanceof ArkErrors) {
    throw new TypeError(parsed.summary)
  }

  return parsed.data
}
