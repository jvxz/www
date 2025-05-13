import { Link } from 'next-view-transitions'

export default function Page() {
  return (
    <article className="prose">
      <p>
        Hi there! I'm a 20-year-old
        {' '}
        <span className="font-medium text-blue-400">TypeScript</span>
        {' '}
        developer from Blue Ridge, Georgia.
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
        <Link href="mailto:jamie@wisp.bio">jamie@wisp.bio</Link>
      </p>

      <p>Thanks for stopping by!</p>

      <p>~ Jamie</p>
    </article>
  )
}
