import { NoteCard } from '../NoteCard'

function IterationArray() {
  return (
    <>
      <h3>Iteration Array</h3>
      <div className='notes-grid'>

        <NoteCard label='forEach()'>
          <pre>{`[1, 2, 3].forEach(x => console.log(x))
// → undefined  (no return value)`}</pre>
        </NoteCard>

        <NoteCard label='map()'>
          <pre>{`[1, 2, 3].map(x => x * 2)
// → [2, 4, 6]`}</pre>
        </NoteCard>

        <NoteCard label='flatMap()'>
          <pre>{`[1, 2, 3].flatMap(x => [x, x * 2])
// → [1, 2, 2, 4, 3, 6]
// like .map().flat(1)`}</pre>
        </NoteCard>

        <NoteCard label='filter()'>
          <pre>{`[1, 2, 3, 4].filter(x => x % 2 === 0)
// → [2, 4]`}</pre>
        </NoteCard>

        <NoteCard label='reduce()'>
          <pre>{`[1, 2, 3, 4].reduce((acc, x) => acc + x, 0)
// → 10`}</pre>
        </NoteCard>

        <NoteCard label='reduceRight()'>
          <pre>{`[[1], [2], [3]].reduceRight((acc, x) =>
  acc.concat(x))
// → [3, 2, 1]  (right to left)`}</pre>
        </NoteCard>

        <NoteCard label='every()'>
          <pre>{`[2, 4, 6].every(x => x % 2 === 0)  // → true
[2, 3, 6].every(x => x % 2 === 0)  // → false`}</pre>
        </NoteCard>

        <NoteCard label='some()'>
          <pre>{`[1, 3, 4].some(x => x % 2 === 0)   // → true
[1, 3, 5].some(x => x % 2 === 0)   // → false`}</pre>
        </NoteCard>

        <NoteCard label='Array.from()'>
          <pre>{`Array.from('abc')
// → ['a', 'b', 'c']

Array.from({ length: 3 }, (_, i) => i)
// → [0, 1, 2]`}</pre>
        </NoteCard>

        <NoteCard label='keys()'>
          <pre>{`[...['a', 'b', 'c'].keys()]
// → [0, 1, 2]  (index iterator)`}</pre>
        </NoteCard>

        <NoteCard label='entries()'>
          <pre>{`[...['a', 'b'].entries()]
// → [[0, 'a'], [1, 'b']]`}</pre>
        </NoteCard>

        <NoteCard label='with()'>
          <pre>{`[1, 2, 3].with(1, 'x')
// → [1, 'x', 3]  (new array, original unchanged)`}</pre>
        </NoteCard>

        <NoteCard label='spread  (...)'>
          <pre>{`const a = [1, 2], b = [3, 4]
[...a, ...b]      // → [1, 2, 3, 4]
Math.max(...a)    // → 2  (spread as args)`}</pre>
        </NoteCard>

      </div>
    </>
  )
}

export default IterationArray
