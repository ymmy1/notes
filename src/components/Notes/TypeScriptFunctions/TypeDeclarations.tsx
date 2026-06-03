function TypeDeclarations() {
  return (
    <>
      <h3>Type Declarations</h3>
      <div className='notes-grid'>

        <div className='notes-card'>
          <div className='notes-card-label'>type alias</div>
          <pre>{`type User = {
  id: number
  name: string
  email?: string  // optional
}

const u: User = { id: 1, name: 'Ali' }`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>interface</div>
          <pre>{`interface Animal {
  name: string
}
interface Dog extends Animal {
  breed: string
}

const d: Dog = { name: 'Rex', breed: 'Lab' }`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>type vs interface</div>
          <pre>{`// interface → extend with extends, re-declare to merge
// type      → union/intersection, can't re-declare

// prefer interface for objects/classes
// prefer type for unions, primitives, computed`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>union  |</div>
          <pre>{`type Status = 'idle' | 'loading' | 'error'
type Id = string | number

let id: Id = 1
id = 'abc'  // both valid`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>intersection  &</div>
          <pre>{`type Admin = User & { role: 'admin' }
// must have ALL fields from both

const a: Admin = { id: 1, name: 'Ali', role: 'admin' }`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>generics  {'<T>'}</div>
          <pre>{`type Box<T> = { value: T }

const n: Box<number> = { value: 42 }
const s: Box<string> = { value: 'hi' }`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>primitives</div>
          <pre>{`let s: string   = 'hello'
let n: number   = 42
let b: boolean  = true
let u: undefined
let nu: null    = null
let x: any      = 'anything'  // avoid
let y: unknown  = getData()   // safe any`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>arrays</div>
          <pre>{`const nums: number[]        = [1, 2, 3]
const strs: Array<string>   = ['a', 'b']
const fixed: readonly number[] = [1, 2]
// fixed.push(3)  ← compile error`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>object types</div>
          <pre>{`// inline
const u: { id: number; name: string } = {
  id: 1, name: 'Ali'
}

// Record utility
const map: Record<string, number> = { a: 1 }`}</pre>
        </div>

      </div>
    </>
  );
}

export default TypeDeclarations;
