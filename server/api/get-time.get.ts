import { ArkErrors, type } from 'arktype'

export const edge = true

const WakapiSchema = type({
  data: {
    daily_average: 'number | null',
    human_readable_total: 'string',
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
    start: 'string',
    status: '\'ok\'',
    total_seconds: 'number',
    username: '\'jamie\'',
  },
})

export default defineCachedEventHandler(async (event) => {
  const query = getQuery<{ span: TimeSpan }>(event)

  const { wakatimeKey } = useRuntimeConfig()
  if (!wakatimeKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Wakapi API key is not set',
    })
  }

  const res = await $fetch<typeof WakapiSchema.t>(`https://wakapi.dev/api/compat/wakatime/v1/users/jamie/stats/${query.span}`, {
    headers: {
      Authorization: `Bearer ${btoa(wakatimeKey)}`,
    },
  })

  if (WakapiSchema(res) instanceof ArkErrors) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Wakapi API returned an invalid response',
    })
  }

  return res.data
}, {
  getKey(event) {
    return event.path
  },
  maxAge: 60,
})
