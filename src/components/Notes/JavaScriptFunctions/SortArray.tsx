function SortArray() {
  return (
    <>
      <div>
        <h3>Alphabetic Sort</h3>
        <button
          onClick={() =>
            window.open(
              'https://www.w3schools.com/js/js_array_sort.asp#mark_sort',
              '_blank'
            )
          }
        >
          sort()
        </button>

        <button
          onClick={() =>
            window.open(
              'https://www.w3schools.com/js/js_array_sort.asp#mark_reverse',
              '_blank'
            )
          }
        >
          reverse()
        </button>

        <button
          onClick={() =>
            window.open(
              'https://www.w3schools.com/js/js_array_sort.asp#mark_tosorted',
              '_blank'
            )
          }
        >
          toSorted()
        </button>

        <button
          onClick={() =>
            window.open(
              'https://www.w3schools.com/js/js_array_sort.asp#mark_toreversed',
              '_blank'
            )
          }
        >
          toReversed()
        </button>

        <button
          onClick={() =>
            window.open(
              'https://www.w3schools.com/js/js_array_sort.asp#mark_objects',
              '_blank'
            )
          }
        >
          Sorting Objects
        </button>
      </div>
      <div>
        <h3>Numeric Sort</h3>
        <button
          onClick={() =>
            window.open(
              'https://www.w3schools.com/js/js_array_sort.asp#mark_numeric',
              '_blank'
            )
          }
        >
          Numeric Sort
        </button>

        <button
          onClick={() =>
            window.open(
              'https://www.w3schools.com/js/js_array_sort.asp#mark_random',
              '_blank'
            )
          }
        >
          Random Sort
        </button>

        <button
          onClick={() =>
            window.open(
              'https://www.w3schools.com/js/js_array_sort.asp#mark_mathmin',
              '_blank'
            )
          }
        >
          Math.min()
        </button>

        <button
          onClick={() =>
            window.open(
              'https://www.w3schools.com/js/js_array_sort.asp#mark_mathmax',
              '_blank'
            )
          }
        >
          Math.max()
        </button>

        <button
          onClick={() =>
            window.open(
              'https://www.w3schools.com/js/js_array_sort.asp#mark_homemin',
              '_blank'
            )
          }
        >
          Home made Min()
        </button>

        <button
          onClick={() =>
            window.open(
              'https://www.w3schools.com/js/js_array_sort.asp#mark_homemax',
              '_blank'
            )
          }
        >
          Home made Max()
        </button>
      </div>
    </>
  );
}

export default SortArray;
