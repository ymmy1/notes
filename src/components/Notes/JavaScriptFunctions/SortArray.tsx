function SortArray() {
  return (
    <>
      <h3>Sort Array</h3>
      <div className='notes-grid'>

        <div className='notes-card'>
          <div className='notes-card-label'>sort()  — strings</div>
          <pre>{`['b', 'a', 'c'].sort()
// → ['a', 'b', 'c']  (mutates!)`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>sort()  — numbers</div>
          <pre>{`[10, 1, 5].sort()
// → [1, 10, 5]  ← WRONG (lexicographic)

[10, 1, 5].sort((a, b) => a - b)
// → [1, 5, 10]  ✓`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>sort()  — objects</div>
          <pre>{`const users = [{ age: 30 }, { age: 20 }]
users.sort((a, b) => a.age - b.age)
// → sorted by age asc  (mutates!)`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>reverse()</div>
          <pre>{`[1, 2, 3].reverse()
// → [3, 2, 1]  (mutates!)`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>toSorted()</div>
          <pre>{`const a = [3, 1, 2]
const b = a.toSorted()
// → [1, 2, 3]
// a unchanged — [3, 1, 2]`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>toReversed()</div>
          <pre>{`const a = [1, 2, 3]
const b = a.toReversed()
// → [3, 2, 1]
// a unchanged — [1, 2, 3]`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>Math.min / max</div>
          <pre>{`Math.min(...[3, 1, 2])  // → 1
Math.max(...[3, 1, 2])  // → 3`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>random sort (shuffle)</div>
          <pre>{`[1, 2, 3, 4].sort(() => Math.random() - 0.5)
// → shuffled  (not uniform, but practical)`}</pre>
        </div>

      </div>
    </>
  );
}

export default SortArray;
