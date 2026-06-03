function IterationArray() {
  return (
    <>
      <h3>Iteration Array</h3>
      <div className='notes-grid'>

        <div className='notes-card'>
          <div className='notes-card-label'>forEach()</div>
          <pre>{`[1, 2, 3].forEach(x => console.log(x))
// → undefined  (no return value)`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>map()</div>
          <pre>{`[1, 2, 3].map(x => x * 2)
// → [2, 4, 6]`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>flatMap()</div>
          <pre>{`[1, 2, 3].flatMap(x => [x, x * 2])
// → [1, 2, 2, 4, 3, 6]
// like .map().flat(1)`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>filter()</div>
          <pre>{`[1, 2, 3, 4].filter(x => x % 2 === 0)
// → [2, 4]`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>reduce()</div>
          <pre>{`[1, 2, 3, 4].reduce((acc, x) => acc + x, 0)
// → 10`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>reduceRight()</div>
          <pre>{`[[1], [2], [3]].reduceRight((acc, x) =>
  acc.concat(x))
// → [3, 2, 1]  (right to left)`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>every()</div>
          <pre>{`[2, 4, 6].every(x => x % 2 === 0)  // → true
[2, 3, 6].every(x => x % 2 === 0)  // → false`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>some()</div>
          <pre>{`[1, 3, 4].some(x => x % 2 === 0)   // → true
[1, 3, 5].some(x => x % 2 === 0)   // → false`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>Array.from()</div>
          <pre>{`Array.from('abc')
// → ['a', 'b', 'c']

Array.from({ length: 3 }, (_, i) => i)
// → [0, 1, 2]`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>keys()</div>
          <pre>{`[...[' a', 'b', 'c'].keys()]
// → [0, 1, 2]  (index iterator)`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>entries()</div>
          <pre>{`[...['a', 'b'].entries()]
// → [[0, 'a'], [1, 'b']]`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>with()</div>
          <pre>{`[1, 2, 3].with(1, 'x')
// → [1, 'x', 3]  (new array, original unchanged)`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>spread  (...)</div>
          <pre>{`const a = [1, 2], b = [3, 4]
[...a, ...b]      // → [1, 2, 3, 4]
Math.max(...a)    // → 2  (spread as args)`}</pre>
        </div>

      </div>
    </>
  );
}

export default IterationArray;
