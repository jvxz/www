import { ActiveLink } from '@/components/active-link'
import { Link } from 'next-view-transitions'

export default function Page() {
  return (
    <article className="prose">
      <p>
        Hi there! I'm a 21-year-old
        {' '}
        <span className="font-medium text-blue-400">TypeScript</span>
        {' '}
        developer from northern Georgia.
      </p>

      <p>
        I am currently working full-time on personal OSS projects, mostly specializing in full-stack web applications. I have a strong passion of discovering new technologies and concepts, specifically those that enhance quality of life. You can find my work
        {' '}
        <Link href="/work">here</Link>
        !
      </p>

      {/* <p>While I'm not programming, I enjoy spending my time studying art and customizing mechanical keyboards.</p> */}

      <p>
        If you'd like to get in touch, feel free to contact me via email!
        {' '}
        <Link href="mailto:hi@jamie.to">hi@jamie.to</Link>
      </p>

      <p>Thanks for stopping by!</p>

      <div className="flex items-center justify-between">
        <p>─ Jamie</p>
        <div className="flex -translate-y-3 items-center gap-2">
          <ActiveLink
            href="https://www.linkedin.com/in/jjac2004/"
            className="grid size-12 place-items-center"
            target="_blank"
          >
            <span className="icon-[mingcute--linkedin-fill] iconify size-6" />
            <span className="sr-only">LinkedIn</span>
          </ActiveLink>
          <ActiveLink
            href="https://github.com/jvxz"
            className="grid size-12 place-items-center"
            target="_blank"
          >
            <span className="icon-[mingcute--github-fill] iconify size-6" />
            <span className="sr-only">GitHub</span>
          </ActiveLink>
        </div>
      </div>
    </article>
  )
}
