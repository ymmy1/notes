function SearchArray() {
  return (
    <>
      <h3>SearchArray</h3>
      <div>
        <button
          onClick={() =>
            window.open(
              'https://www.w3schools.com/js/js_array_search.asp#mark_indexof',
              '_blank'
            )
          }
        >
          indexOf()
        </button>
        <button
          onClick={() =>
            window.open(
              'https://www.w3schools.com/js/js_array_search.asp#mark_lastindexof',
              '_blank'
            )
          }
        >
          lastIndexOf()
        </button>
        <button
          onClick={() =>
            window.open(
              'https://www.w3schools.com/js/js_array_search.asp#mark_includes',
              '_blank'
            )
          }
        >
          includes()
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            window.open(
              'https://www.w3schools.com/js/js_array_search.asp#mark_find',
              '_blank'
            )
          }
        >
          find()
        </button>
        <button
          onClick={() =>
            window.open(
              'https://www.w3schools.com/js/js_array_search.asp#mark_findindex',
              '_blank'
            )
          }
        >
          findIndex()
        </button>
        <button
          onClick={() =>
            window.open(
              'https://www.w3schools.com/js/js_array_search.asp#mark_findlast',
              '_blank'
            )
          }
        >
          findLast()
        </button>
        <button
          onClick={() =>
            window.open(
              'https://www.w3schools.com/js/js_array_search.asp#mark_findlastindex',
              '_blank'
            )
          }
        >
          findLastIndex()
        </button>
      </div>
    </>
  );
}

export default SearchArray;
