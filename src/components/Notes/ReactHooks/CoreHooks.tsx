function CoreHooks() {
  return (
    <>
      <h3>Core Hooks</h3>
      <div className='notes-grid'>

        <div className='notes-card'>
          <div className='notes-card-label'>useState()</div>
          <pre>{`const [count, setCount] = useState(0)

setCount(5)                 // direct
setCount(prev => prev + 1)  // functional
// → triggers re-render`}</pre>
        </div>

        <div className='notes-card notes-card-wide'>
          <div className='notes-card-label'>useEffect()</div>
          <pre>{`useEffect(() => {
  const sub = subscribe(id)
  return () => sub.unsubscribe()  // cleanup
}, [id])  // reruns when id changes

// []           = mount only
// no array     = every render
// [a, b]       = when a or b change`}</pre>
        </div>

        <div className='notes-card notes-card-wide'>
          <div className='notes-card-label'>useContext()</div>
          <pre>{`const ThemeCtx = createContext('light')

// wrap tree:
<ThemeCtx.Provider value="dark">
  <App />
</ThemeCtx.Provider>

// consume anywhere inside:
const theme = useContext(ThemeCtx)  // → 'dark'`}</pre>
        </div>

        <div className='notes-card notes-card-wide'>
          <div className='notes-card-label'>useReducer()</div>
          <pre>{`function reducer(state, action) {
  if (action.type === 'inc') return state + 1
  return state
}

const [count, dispatch] = useReducer(reducer, 0)
dispatch({ type: 'inc' })  // → count is 1

// use instead of useState when next state depends on action type`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>useCallback()</div>
          <pre>{`const handler = useCallback(
  () => doSomething(id),
  [id]
)
// same fn ref while id is unchanged
// → prevents child re-renders`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>useMemo()</div>
          <pre>{`const sorted = useMemo(
  () => items.sort(compareFn),
  [items]
)
// → cached, only recomputes when items changes`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>memo()</div>
          <pre>{`const Child = memo(({ count }) => (
  <div>{count}</div>
))
// → skips re-render if props unchanged`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>useRef()</div>
          <pre>{`const ref = useRef<HTMLInputElement>(null)

<input ref={ref} />

ref.current?.focus()
// → DOM access, no re-render on change`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>useId()</div>
          <pre>{`const id = useId()
// → ':r0:'  (unique per instance, stable)

<label htmlFor={id}>Name</label>
<input id={id} />`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>useLayoutEffect()</div>
          <pre>{`useLayoutEffect(() => {
  // sync — fires after DOM, before paint
  const h = ref.current.offsetHeight
  setHeight(h)
}, [])
// → use for DOM measurements`}</pre>
        </div>

        <div className='notes-card notes-card-wide'>
          <div className='notes-card-label'>useImperativeHandle()</div>
          <pre>{`const Input = forwardRef((props, ref) => {
  const innerRef = useRef(null)
  useImperativeHandle(ref, () => ({
    focus: () => innerRef.current.focus()
  }))
  return <input ref={innerRef} />
})

// parent:
ref.current.focus()  // calls the exposed method`}</pre>
        </div>

      </div>
    </>
  );
}

export default CoreHooks;
