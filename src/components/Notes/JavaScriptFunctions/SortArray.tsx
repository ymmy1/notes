import { NoteCard } from '../NoteCard'

function SortArray() {
  return (
    <>
      <h3>Sort Array</h3>
      <div className='notes-grid'>

        <NoteCard label='sort()  — strings'>
          <pre>{`['b', 'a', 'c'].sort()
// → ['a', 'b', 'c']  (mutates!)`}</pre>
        </NoteCard>

        <NoteCard label='sort()  — numbers'>
          <pre>{`[10, 1, 5].sort()
// → [1, 10, 5]  ← WRONG (lexicographic)

[10, 1, 5].sort((a, b) => a - b)
// → [1, 5, 10]  ✓`}</pre>
        </NoteCard>

        <NoteCard label='sort()  — objects'>
          <pre>{`const users = [{ age: 30 }, { age: 20 }]
users.sort((a, b) => a.age - b.age)
// → sorted by age asc  (mutates!)`}</pre>
        </NoteCard>

        <NoteCard label='reverse()'>
          <pre>{`[1, 2, 3].reverse()
// → [3, 2, 1]  (mutates!)`}</pre>
        </NoteCard>

        <NoteCard label='toSorted()'>
          <pre>{`const a = [3, 1, 2]
const b = a.toSorted()
// → [1, 2, 3]
// a unchanged — [3, 1, 2]`}</pre>
        </NoteCard>

        <NoteCard label='toReversed()'>
          <pre>{`const a = [1, 2, 3]
const b = a.toReversed()
// → [3, 2, 1]
// a unchanged — [1, 2, 3]`}</pre>
        </NoteCard>

        <NoteCard label='Math.min / max'>
          <pre>{`Math.min(...[3, 1, 2])  // → 1
Math.max(...[3, 1, 2])  // → 3`}</pre>
        </NoteCard>

        <NoteCard label='random sort (shuffle)'>
          <pre>{`[1, 2, 3, 4].sort(() => Math.random() - 0.5)
// → shuffled  (not uniform, but practical)`}</pre>
        </NoteCard>

      </div>
    </>
  )
}

export default SortArray
