import { ContentDataDisplay, ContentDataFallback } from './filtered-content/content-data-display'
import { ContentTimeDisplay, ContentTimeDisplayFallback } from './filtered-content/content-time-display'

function FilteredContent() {
  return (
    <article className="prose flex flex-col gap-8">
      <ContentTimeDisplay />

      <ContentDataDisplay type="languages" />
      <ContentDataDisplay type="projects" />
    </article>
  )
}

function FilteredContentFallback() {
  return (
    <article className="prose flex flex-col gap-8">
      <ContentTimeDisplayFallback />

      <ContentDataFallback type="languages" />
      <ContentDataFallback type="projects" />
    </article>
  )
}

export { FilteredContent, FilteredContentFallback }
