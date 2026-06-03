function NewHooks() {
  return (
    <>
      <h3>New Hooks  — React 19</h3>
      <div className='notes-grid'>

        <div className='notes-card'>
          <div className='notes-card-label'>use()</div>
          <pre>{`// suspend on promise:
const data = use(fetchUsers())
// → suspends until resolved

// read context (can be inside conditionals):
const theme = use(ThemeCtx)  // → 'dark'`}</pre>
        </div>

        <div className='notes-card notes-card-wide'>
          <div className='notes-card-label'>useActionState()</div>
          <pre>{`const [state, action, isPending] = useActionState(
  async (prevState, formData) => {
    const name = formData.get('name')
    await save(name)
    return { ok: true }
  },
  null  // initial state
)

<form action={action}>
  <input name="name" />
  <button disabled={isPending}>Save</button>
</form>
// → state is { ok: true } after submit`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>useFormStatus()</div>
          <pre>{`// must live INSIDE the <form>
function SubmitBtn() {
  const { pending } = useFormStatus()
  return (
    <button disabled={pending}>Submit</button>
  )
}
// → pending true while form submits`}</pre>
        </div>

        <div className='notes-card notes-card-wide'>
          <div className='notes-card-label'>useOptimistic()</div>
          <pre>{`const [list, addOptimistic] = useOptimistic(serverList)

async function send(text) {
  addOptimistic([...list, { text, sending: true }])
  await saveToServer(text)
  // if save fails → list automatically reverts
}
// → shows update instantly, reverts on error`}</pre>
        </div>

      </div>
    </>
  );
}

export default NewHooks;
