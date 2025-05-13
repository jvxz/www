import * as Progress from '@radix-ui/react-progress'

function ContentPercentBar({
  progress,
  ...props
}: Progress.ProgressProps & {
  progress: number
}) {
  return (
    <Progress.Root
      className="bg-muted relative h-3 w-full translate-z-0 overflow-hidden rounded-full"
      value={progress}
      {...props}
    >
      <Progress.Indicator
        className="ease-[cubic-bezier(0.76, 0, 0.24, 1)] bg-primary size-full transition-transform duration-250"
        style={{
          transform: `translateX(-${100 - progress}%)`,
        }}
      />
    </Progress.Root>
  )
}

export { ContentPercentBar }
