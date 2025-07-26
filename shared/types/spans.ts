export const timeSpanOptions = ['today', 'yesterday', '7_days', '30_days', 'all_time'] as const

export type TimeSpan = typeof timeSpanOptions[number]
