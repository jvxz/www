import { FilterTabs } from './components/filter-tabs'
import { FilteredContent } from './components/filtered-content'

export default function Page() {
  return (
    <article>
      <h1 className="mb-6 font-mono text-2xl">time</h1>
      <FilterTabs />
      <FilteredContent />
    </article>

  )
}

