import { ArkErrors, type } from 'arktype'

export const timeFilterOptions = ['today', 'yesterday', '7_days', '30_days', 'all_time'] as const
export type TimeFilterOption = typeof timeFilterOptions[number]

const schema = type({
  data: {
    username: '\'jamie\'',
    status: '\'ok\'',
    total_seconds: 'number',
    daily_average: 'number | null',
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

export async function getWakatime(filter: TimeFilterOption) {
  const res = await fetch(`https://wakapi.dev/api/compat/wakatime/v1/users/jamie/stats/${filter}`, {
    headers: {
      Authorization: `Bearer ${btoa(process.env.WAKA_API_KEY ?? '')}`,
    },
  })
  const data = await res.json()

  const parsed = schema(data)

  if (parsed instanceof ArkErrors) {
    throw new TypeError(parsed.summary)
  }

  return parsed.data
}
