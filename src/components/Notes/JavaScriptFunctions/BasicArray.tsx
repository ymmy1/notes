function BasicArray() {
  return (
    <>
      <h3>Basic Array</h3>
      <div className='notes-grid'>

        <div className='notes-card'>
          <div className='notes-card-label'>length</div>
          <pre>{`const a = [1, 2, 3]
a.length   // → 3`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>toString()</div>
          <pre>{`[1, 2, 3].toString()
// → '1,2,3'`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>at()</div>
          <pre>{`const a = [1, 2, 3]
a.at(0)    // → 1
a.at(-1)   // → 3  (last)`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>join()</div>
          <pre>{`[1, 2, 3].join(' - ')
// → '1 - 2 - 3'`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>pop()</div>
          <pre>{`const a = [1, 2, 3]
a.pop()    // → 3  (removed)
// a is now [1, 2]`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>push()</div>
          <pre>{`const a = [1, 2]
a.push(3)  // → 3  (new length)
// a is now [1, 2, 3]`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>shift()</div>
          <pre>{`const a = [1, 2, 3]
a.shift()  // → 1  (removed first)
// a is now [2, 3]`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>unshift()</div>
          <pre>{`const a = [2, 3]
a.unshift(1)  // → 3  (new length)
// a is now [1, 2, 3]`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>delete</div>
          <pre>{`const a = [1, 2, 3]
delete a[1]     // → true
// a is [1, empty, 3]
// length stays 3 — use splice instead`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>concat()</div>
          <pre>{`[1, 2].concat([3, 4])
// → [1, 2, 3, 4]

[1].concat([2], [3])
// → [1, 2, 3]`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>copyWithin()</div>
          <pre>{`[1, 2, 3, 4, 5].copyWithin(0, 3)
// copies from index 3 → position 0
// → [4, 5, 3, 4, 5]`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>flat()</div>
          <pre>{`[1, [2, [3]]].flat()         // → [1, 2, [3]]
[1, [2, [3]]].flat(2)        // → [1, 2, 3]
[1, [2, [3]]].flat(Infinity) // fully flat`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>splice()</div>
          <pre>{`const a = [1, 2, 3, 4]
a.splice(1, 2, 'x')
// → [2, 3]  (what was removed)
// a is now [1, 'x', 4]`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>toSpliced()</div>
          <pre>{`const a = [1, 2, 3]
const b = a.toSpliced(1, 1, 'x')
// → [1, 'x', 3]
// a is unchanged — [1, 2, 3]`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>slice()</div>
          <pre>{`[1, 2, 3, 4].slice(1, 3)
// → [2, 3]  (end not included)
[1, 2, 3].slice(-2)
// → [2, 3]  (from end)`}</pre>
        </div>

      </div>
    </>
  );
}

export default BasicArray;
