import { NoteCard } from '../NoteCard'

function EnhancedHooks() {
  return (
    <>
      <h3>Enhanced Hooks  — React 19</h3>
      <div className='notes-grid'>

        <NoteCard label='useTransition()  — now supports async' wide>
          <pre>{`const [isPending, startTransition] = useTransition()

startTransition(async () => {   // async is new in React 19
  const data = await fetchData()
  setResults(data)
})
// → UI stays responsive, isPending is true during transition`}</pre>
        </NoteCard>

        <NoteCard label='useDeferredValue()  — now accepts initial value' wide>
          <pre>{`const [query, setQuery] = useState('')
const deferred = useDeferredValue(query, '')
//                                       ↑ initial value (new in React 19)

// deferred lags behind query while typing
// → renders expensive list with stale value, keeps input snappy
// deferred !== query means a new render is in flight`}</pre>
        </NoteCard>

        <NoteCard label='useRef()  — no argument required (React 19 types)' wide>
          <pre>{`// React 19: useRef<T>() — no null needed when you provide a type
const ref = useRef<HTMLInputElement>()

// callback ref now supports cleanup:
<div ref={node => {
  setup(node)
  return () => cleanup(node)  // cleanup on unmount (new)
}} />`}</pre>
        </NoteCard>

      </div>
    </>
  )
}

export default EnhancedHooks
