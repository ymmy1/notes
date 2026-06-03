import { NoteCard } from '../NoteCard'

function TypeDeclarations() {
  return (
    <>
      <h3>Type Declarations</h3>
      <div className='notes-grid'>

        <NoteCard label='type alias'>
          <pre>{`type User = {
  id: number
  name: string
  email?: string  // optional
}

const u: User = { id: 1, name: 'Ali' }`}</pre>
        </NoteCard>

        <NoteCard label='interface'>
          <pre>{`interface Animal {
  name: string
}
interface Dog extends Animal {
  breed: string
}

const d: Dog = { name: 'Rex', breed: 'Lab' }`}</pre>
        </NoteCard>

        <NoteCard label='type vs interface'>
          <pre>{`// interface → extend with extends, re-declare to merge
// type      → union/intersection, can't re-declare

// prefer interface for objects/classes
// prefer type for unions, primitives, computed`}</pre>
        </NoteCard>

        <NoteCard label='union  |'>
          <pre>{`type Status = 'idle' | 'loading' | 'error'
type Id = string | number

let id: Id = 1
id = 'abc'  // both valid`}</pre>
        </NoteCard>

        <NoteCard label='intersection  &'>
          <pre>{`type Admin = User & { role: 'admin' }
// must have ALL fields from both

const a: Admin = { id: 1, name: 'Ali', role: 'admin' }`}</pre>
        </NoteCard>

        <NoteCard label='generics  <T>'>
          <pre>{`type Box<T> = { value: T }

const n: Box<number> = { value: 42 }
const s: Box<string> = { value: 'hi' }`}</pre>
        </NoteCard>

        <NoteCard label='primitives'>
          <pre>{`let s: string   = 'hello'
let n: number   = 42
let b: boolean  = true
let u: undefined
let nu: null    = null
let x: any      = 'anything'  // avoid
let y: unknown  = getData()   // safe any`}</pre>
        </NoteCard>

        <NoteCard label='arrays'>
          <pre>{`const nums: number[]        = [1, 2, 3]
const strs: Array<string>   = ['a', 'b']
const fixed: readonly number[] = [1, 2]
// fixed.push(3)  ← compile error`}</pre>
        </NoteCard>

        <NoteCard label='object types'>
          <pre>{`// inline
const u: { id: number; name: string } = {
  id: 1, name: 'Ali'
}

// Record utility
const map: Record<string, number> = { a: 1 }`}</pre>
        </NoteCard>

      </div>
    </>
  )
}

export default TypeDeclarations
