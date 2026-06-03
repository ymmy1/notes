import { NoteCard } from '../NoteCard'

function BasicArray() {
  return (
    <>
      <h3>Basic Array</h3>
      <div className='notes-grid'>

        <NoteCard label='length'>
          <pre>{`const a = [1, 2, 3]
a.length   // → 3`}</pre>
        </NoteCard>

        <NoteCard label='toString()'>
          <pre>{`[1, 2, 3].toString()
// → '1,2,3'`}</pre>
        </NoteCard>

        <NoteCard label='at()'>
          <pre>{`const a = [1, 2, 3]
a.at(0)    // → 1
a.at(-1)   // → 3  (last)`}</pre>
        </NoteCard>

        <NoteCard label='join()'>
          <pre>{`[1, 2, 3].join(' - ')
// → '1 - 2 - 3'`}</pre>
        </NoteCard>

        <NoteCard label='pop()'>
          <pre>{`const a = [1, 2, 3]
a.pop()    // → 3  (removed)
// a is now [1, 2]`}</pre>
        </NoteCard>

        <NoteCard label='push()'>
          <pre>{`const a = [1, 2]
a.push(3)  // → 3  (new length)
// a is now [1, 2, 3]`}</pre>
        </NoteCard>

        <NoteCard label='shift()'>
          <pre>{`const a = [1, 2, 3]
a.shift()  // → 1  (removed first)
// a is now [2, 3]`}</pre>
        </NoteCard>

        <NoteCard label='unshift()'>
          <pre>{`const a = [2, 3]
a.unshift(1)  // → 3  (new length)
// a is now [1, 2, 3]`}</pre>
        </NoteCard>

        <NoteCard label='delete'>
          <pre>{`const a = [1, 2, 3]
delete a[1]     // → true
// a is [1, empty, 3]
// length stays 3 — use splice instead`}</pre>
        </NoteCard>

        <NoteCard label='concat()'>
          <pre>{`[1, 2].concat([3, 4])
// → [1, 2, 3, 4]

[1].concat([2], [3])
// → [1, 2, 3]`}</pre>
        </NoteCard>

        <NoteCard label='copyWithin()'>
          <pre>{`[1, 2, 3, 4, 5].copyWithin(0, 3)
// copies from index 3 → position 0
// → [4, 5, 3, 4, 5]`}</pre>
        </NoteCard>

        <NoteCard label='flat()'>
          <pre>{`[1, [2, [3]]].flat()         // → [1, 2, [3]]
[1, [2, [3]]].flat(2)        // → [1, 2, 3]
[1, [2, [3]]].flat(Infinity) // fully flat`}</pre>
        </NoteCard>

        <NoteCard label='splice()'>
          <pre>{`const a = [1, 2, 3, 4]
a.splice(1, 2, 'x')
// → [2, 3]  (what was removed)
// a is now [1, 'x', 4]`}</pre>
        </NoteCard>

        <NoteCard label='toSpliced()'>
          <pre>{`const a = [1, 2, 3]
const b = a.toSpliced(1, 1, 'x')
// → [1, 'x', 3]
// a is unchanged — [1, 2, 3]`}</pre>
        </NoteCard>

        <NoteCard label='slice()'>
          <pre>{`[1, 2, 3, 4].slice(1, 3)
// → [2, 3]  (end not included)
[1, 2, 3].slice(-2)
// → [2, 3]  (from end)`}</pre>
        </NoteCard>

      </div>
    </>
  )
}

export default BasicArray
