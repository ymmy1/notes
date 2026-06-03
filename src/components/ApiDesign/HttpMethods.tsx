import { Tip } from './Tip'

function HttpMethods() {
  return (
    <div className='api-section'>
      <h3>HTTP Methods</h3>

      <div className='method-row'>
        <span className='badge badge-get'>GET</span>
        <span>
          Read a resource.{' '}
          <Tip text="Safe means the operation never modifies server state — calling it 1 or 1,000 times changes nothing.">Safe</Tip>
          {' '}+{' '}
          <Tip text="Calling it once or ten times has the same end result. The server ends up in the same state.">idempotent</Tip>.
          {' '}No request body. Returns <code>200</code>.
        </span>
      </div>

      <div className='method-row'>
        <span className='badge badge-post'>POST</span>
        <span>
          Create a resource. Not{' '}
          <Tip text="Each POST call creates a new record — submitting the same form twice gives two records. That's a different result each time.">idempotent</Tip>
          {' '}— calling twice creates two records. Returns <code>201</code> with{' '}
          <Tip text="A response header that tells the client where the newly created resource lives. e.g., Location: /users/42"><code>Location</code></Tip>
          {' '}header.
        </span>
      </div>

      <div className='method-row'>
        <span className='badge badge-put'>PUT</span>
        <span>
          Replace the entire resource.{' '}
          <Tip text="Sending the same full object twice leaves the resource in the exact same state — second call is a no-op effectively.">Idempotent</Tip>.
          {' '}Send the full object. Returns <code>200</code> or <code>204</code>.
        </span>
      </div>

      <div className='method-row'>
        <span className='badge badge-patch'>PATCH</span>
        <span>
          Partial update. Send only the fields that change. Not guaranteed{' '}
          <Tip text="'Set name to Ali' is idempotent. 'Increment counter by 1' is not — calling it twice gives count + 2. PATCH makes no promise either way.">idempotent</Tip>.
          {' '}Returns <code>200</code> or <code>204</code>.
        </span>
      </div>

      <div className='method-row'>
        <span className='badge badge-delete'>DELETE</span>
        <span>
          Remove a resource.{' '}
          <Tip text="Deleting an already-deleted resource still results in it being gone — the end state is the same whether you called it once or twice.">Idempotent</Tip>
          {' '}— deleting twice is still fine. Returns <code>204</code> (no body).
        </span>
      </div>

      <div className='method-row'>
        <span className='badge badge-head'>HEAD</span>
        <span>Same as GET but returns only headers, no body. Use to check if a resource exists or get its size.</span>
      </div>

      <div className='method-row'>
        <span className='badge badge-opts'>OPTIONS</span>
        <span>
          Returns the allowed methods for a URL. Browsers send this automatically before a{' '}
          <Tip text="Cross-Origin Resource Sharing. A browser security policy that blocks requests to a different domain unless the server explicitly allows it.">CORS</Tip>
          {' '}request{' '}
          <Tip text="An automatic OPTIONS request the browser fires before a cross-origin request to ask the server: 'will you accept this?'. If the server says no, the real request never goes out.">(preflight)</Tip>.
        </span>
      </div>

      <br />
      <table className='crud-table'>
        <thead>
          <tr>
            <th>Property</th>
            <th>GET</th>
            <th>POST</th>
            <th>PUT</th>
            <th>PATCH</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Tip text="The operation never modifies server state. You can call it 1,000 times and nothing on the server changes. Safe = read-only.">Safe</Tip>
            </td>
            <td><Tip text="✓ Reading data never modifies anything on the server.">✓</Tip></td>
            <td><Tip text="✗ POST creates a new resource — server state changes every single time.">✗</Tip></td>
            <td><Tip text="✗ Replacing a resource still writes to the server — state changes.">✗</Tip></td>
            <td><Tip text="✗ Modifying a resource still writes to the server — state changes.">✗</Tip></td>
            <td><Tip text="✗ Removing a resource changes server state — it's gone now.">✗</Tip></td>
          </tr>
          <tr>
            <td>
              <Tip text="Calling it once vs. calling it ten times has the same end result on the server. The response might differ (e.g., 404 on second DELETE) but the server state is the same.">Idempotent</Tip>
            </td>
            <td><Tip text="✓ Fetching a resource 10 times returns the same data — nothing on the server changes.">✓</Tip></td>
            <td><Tip text="✗ Calling POST twice creates two records. Two calls ≠ one call. Not idempotent.">✗</Tip></td>
            <td><Tip text="✓ Replacing a resource with the same full object twice leaves it in the exact same final state.">✓</Tip></td>
            <td><Tip text="✗ PATCH makes no guarantee. 'Set count to 5' is idempotent, 'increment by 1' is not. Depends on what you send.">✗</Tip></td>
            <td><Tip text="✓ Deleting an already-deleted resource still results in it being gone — same end state either way.">✓</Tip></td>
          </tr>
          <tr>
            <td>
              <Tip text="Whether the request carries a body (payload) with data to send to the server.">Body</Tip>
            </td>
            <td><Tip text="✗ GET has no body. Filters and parameters go in the URL as query params: /users?role=admin">✗</Tip></td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
            <td><Tip text="✗ DELETE rarely sends a body. If you need to pass extra data, use query params.">✗</Tip></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HttpMethods;
