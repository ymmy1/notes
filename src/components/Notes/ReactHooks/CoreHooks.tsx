import { NoteCard } from '../NoteCard'

function CoreHooks() {
  return (
    <>
      <h3>Core Hooks</h3>
      <div className='notes-grid'>

        <NoteCard label='useState()'>
          <pre>{`const [count, setCount] = useState(0)

setCount(5)                 // direct
setCount(prev => prev + 1)  // functional
// → triggers re-render`}</pre>
        </NoteCard>

        <NoteCard label='useEffect()' wide>
          <pre>{`useEffect(() => {
  const sub = subscribe(id)
  return () => sub.unsubscribe()  // cleanup
}, [id])  // reruns when id changes

// []           = mount only
// no array     = every render
// [a, b]       = when a or b change`}</pre>
        </NoteCard>

        <NoteCard label='useContext()' wide>
          <pre>{`const ThemeCtx = createContext('light')

// wrap tree:
<ThemeCtx.Provider value="dark">
  <App />
</ThemeCtx.Provider>

// consume anywhere inside:
const theme = useContext(ThemeCtx)  // → 'dark'`}</pre>
        </NoteCard>

        <NoteCard label='useReducer()' wide>
          <pre>{`function reducer(state, action) {
  if (action.type === 'inc') return state + 1
  return state
}

const [count, dispatch] = useReducer(reducer, 0)
dispatch({ type: 'inc' })  // → count is 1

// use instead of useState when next state depends on action type`}</pre>
        </NoteCard>

        <NoteCard label='useCallback()'>
          <pre>{`const handler = useCallback(
  () => doSomething(id),
  [id]
)
// same fn ref while id is unchanged
// → prevents child re-renders`}</pre>
        </NoteCard>

        <NoteCard label='useMemo()'>
          <pre>{`const sorted = useMemo(
  () => items.sort(compareFn),
  [items]
)
// → cached, only recomputes when items changes`}</pre>
        </NoteCard>

        <NoteCard label='memo()'>
          <pre>{`const Child = memo(({ count }) => (
  <div>{count}</div>
))
// → skips re-render if props unchanged`}</pre>
        </NoteCard>

        <NoteCard label='useRef()'>
          <pre>{`const ref = useRef<HTMLInputElement>(null)

<input ref={ref} />

ref.current?.focus()
// → DOM access, no re-render on change`}</pre>
        </NoteCard>

        <NoteCard label='useId()'>
          <pre>{`const id = useId()
// → ':r0:'  (unique per instance, stable)

<label htmlFor={id}>Name</label>
<input id={id} />`}</pre>
        </NoteCard>

        <NoteCard label='useLayoutEffect()'>
          <pre>{`useLayoutEffect(() => {
  // sync — fires after DOM, before paint
  const h = ref.current.offsetHeight
  setHeight(h)
}, [])
// → use for DOM measurements`}</pre>
        </NoteCard>

        <NoteCard label='useImperativeHandle()' wide>
          <pre>{`const Input = forwardRef((props, ref) => {
  const innerRef = useRef(null)
  useImperativeHandle(ref, () => ({
    focus: () => innerRef.current.focus()
  }))
  return <input ref={innerRef} />
})

// parent:
ref.current.focus()  // calls the exposed method`}</pre>
        </NoteCard>

      </div>
    </>
  )
}

export default CoreHooks
