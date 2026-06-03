import { NoteCard } from '../NoteCard'

function SearchArray() {
  return (
    <>
      <h3>Search Array</h3>
      <div className='notes-grid'>

        <NoteCard label='indexOf()'>
          <pre>{`[1, 2, 3, 2].indexOf(2)  // → 1
[1, 2, 3].indexOf(9)     // → -1  (not found)`}</pre>
        </NoteCard>

        <NoteCard label='lastIndexOf()'>
          <pre>{`[1, 2, 3, 2].lastIndexOf(2)
// → 3  (last occurrence)`}</pre>
        </NoteCard>

        <NoteCard label='includes()'>
          <pre>{`[1, 2, 3].includes(2)  // → true
[1, 2, 3].includes(9)  // → false`}</pre>
        </NoteCard>

        <NoteCard label='find()'>
          <pre>{`[1, 2, 3].find(x => x > 1)
// → 2  (first match, or undefined)`}</pre>
        </NoteCard>

        <NoteCard label='findIndex()'>
          <pre>{`[1, 2, 3].findIndex(x => x > 1)
// → 1  (index of first match, or -1)`}</pre>
        </NoteCard>

        <NoteCard label='findLast()'>
          <pre>{`[1, 2, 3, 2].findLast(x => x < 3)
// → 2  (last match)`}</pre>
        </NoteCard>

        <NoteCard label='findLastIndex()'>
          <pre>{`[1, 2, 3, 2].findLastIndex(x => x < 3)
// → 3  (index of last match)`}</pre>
        </NoteCard>

      </div>
    </>
  )
}

export default SearchArray
