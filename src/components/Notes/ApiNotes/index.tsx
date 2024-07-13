import { useState } from 'react';

import GetNotes from './GetNotes';
import PostNotes from './PostNotes';
import PutNotes from './PutNotes';
import DeleteNotes from './DeleteNotes';

type ApiCallType = 'GET' | 'POST' | 'PUT' | 'DELETE';

function ApiNotes() {
  const [showCode, setShowCode] = useState<ApiCallType | null>(null);

  const toggleCode = (component: ApiCallType) => {
    setShowCode(component === showCode ? null : component);
  };
  return (
    <>
      <hr />
      <h2>Call API</h2>
      <button className='button-get' onClick={() => toggleCode('GET')}>
        GET
      </button>
      <button className='button-post' onClick={() => toggleCode('POST')}>
        POST
      </button>
      <button className='button-put' onClick={() => toggleCode('PUT')}>
        PUT
      </button>
      <button className='button-delete' onClick={() => toggleCode('DELETE')}>
        DELETE
      </button>
      {showCode && (
        <div className='code-container'>
          {showCode === 'GET' && <GetNotes />}
          {showCode === 'POST' && <PostNotes />}
          {showCode === 'PUT' && <PutNotes />}
          {showCode === 'DELETE' && <DeleteNotes />}
        </div>
      )}
    </>
  );
}

export default ApiNotes;
