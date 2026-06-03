function SearchArray() {
  return (
    <>
      <h3>Search Array</h3>
      <div className='notes-grid'>

        <div className='notes-card'>
          <div className='notes-card-label'>indexOf()</div>
          <pre>{`[1, 2, 3, 2].indexOf(2)  // → 1
[1, 2, 3].indexOf(9)     // → -1  (not found)`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>lastIndexOf()</div>
          <pre>{`[1, 2, 3, 2].lastIndexOf(2)
// → 3  (last occurrence)`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>includes()</div>
          <pre>{`[1, 2, 3].includes(2)  // → true
[1, 2, 3].includes(9)  // → false`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>find()</div>
          <pre>{`[1, 2, 3].find(x => x > 1)
// → 2  (first match, or undefined)`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>findIndex()</div>
          <pre>{`[1, 2, 3].findIndex(x => x > 1)
// → 1  (index of first match, or -1)`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>findLast()</div>
          <pre>{`[1, 2, 3, 2].findLast(x => x < 3)
// → 2  (last match)`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>findLastIndex()</div>
          <pre>{`[1, 2, 3, 2].findLastIndex(x => x < 3)
// → 3  (index of last match)`}</pre>
        </div>

      </div>
    </>
  );
}

export default SearchArray;
