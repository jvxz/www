function Noise() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 h-screen before:pointer-events-none before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-full before:bg-[url('/media/noise.gif')] before:opacity-[0.015] before:content-['']"
    />
  )
}

export { Noise }
