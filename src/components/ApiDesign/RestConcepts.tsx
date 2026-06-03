import { Tip } from './Tip'

function RestConcepts() {
  return (
    <div className='api-section'>
      <h3>REST Constraints</h3>
      <div className='concept-grid' style={{ marginBottom: '1.5rem' }}>
        <div className='concept-card'>
          <strong>Stateless</strong>
          <p>Server stores no client session state. Each request carries everything it needs (token, params). Scales horizontally — any server can handle any request.</p>
        </div>
        <div className='concept-card'>
          <strong>Uniform Interface</strong>
          <p>Consistent resource identification (URLs), manipulation via representations (JSON/XML), self-descriptive messages, and{' '}
            <Tip text="Hypermedia as the Engine of Application State. Responses include links to related actions so clients don't need to hardcode URLs. e.g., a user response includes a link to their posts.">HATEOAS</Tip>.
          </p>
        </div>
        <div className='concept-card'>
          <strong>Client-Server</strong>
          <p>UI and data storage are decoupled. Client doesn't care how data is stored. Server doesn't care how it's displayed.</p>
        </div>
        <div className='concept-card'>
          <strong>Cacheable</strong>
          <p>Responses must label themselves as cacheable or not. Use{' '}
            <Tip text="HTTP header that tells browsers and proxies how to cache the response. Examples: max-age=3600 (cache 1 hour), no-store (never cache), no-cache (revalidate before using cache)."><code>Cache-Control</code></Tip>,{' '}
            <Tip text="A fingerprint (hash) of the resource. Client sends it back as If-None-Match on the next request. If unchanged, server returns 304 with no body — saves bandwidth."><code>ETag</code></Tip>,{' '}
            <Tip text="Timestamp of when the resource last changed. Client sends If-Modified-Since on the next request. If unchanged, server returns 304 with no body."><code>Last-Modified</code></Tip>.
            {' '}GET is always a candidate.
          </p>
        </div>
        <div className='concept-card'>
          <strong>Layered System</strong>
          <p>Client can't tell if it's talking to the actual server or a{' '}
            <Tip text="An intermediary server that forwards requests. Enables load balancing, caching, and SSL termination without the client knowing.">proxy</Tip>
            /load balancer/cache in between. Enables CDNs, gateways, etc.</p>
        </div>
        <div className='concept-card'>
          <strong>
            <Tip text="Hypermedia as the Engine of Application State. The API response tells you what actions are available next, via links — instead of the client having to know all URLs upfront.">HATEOAS</Tip>
          </strong>
          <p>Responses include links to next actions. Rarely implemented fully in practice but good to know.</p>
        </div>
      </div>

      <h3>Pagination</h3>
      <div className='concept-grid' style={{ marginBottom: '1.5rem' }}>
        <div className='concept-card'>
          <strong>Offset Pagination</strong>
          <p><code>?page=2&limit=20</code><br />Simple. Can skip or duplicate items if data changes between requests.{' '}
            <Tip text="SELECT * FROM users OFFSET 10000 LIMIT 20 forces the database to count 10,000 rows before returning 20. Gets slower the deeper you go.">Bad at scale (deep offsets are slow on DBs)</Tip>.
          </p>
        </div>
        <div className='concept-card'>
          <strong>Cursor Pagination</strong>
          <p><code>?cursor=eyJpZCI6NDJ9&limit=20</code><br />
            <Tip text="An opaque value the client sends back but shouldn't try to decode or construct. The server knows what it means — usually the ID or timestamp of the last item seen.">Cursor</Tip>
            {' '}={' '}
            <Tip text="base64 encodes the ID so clients treat it as a black box, not a number they can manipulate. Signals: 'don't build your own cursors.'">opaque pointer</Tip>
            {' '}(often base64 of last item ID). Stable, efficient at scale. Can't jump to page 5 directly.
          </p>
        </div>
        <div className='concept-card'>
          <strong>Response envelope</strong>
          <p>Always wrap paginated results:<br /><code>{'{ data: [], total: 100, page: 2, limit: 20, nextCursor: "..." }'}</code></p>
        </div>
      </div>

      <h3>Error Response Format</h3>
      <div className='code-container' style={{ marginBottom: '1.5rem' }}>
        <code>{`// Consistent error shape — agree on this team-wide
{
  "status": 422,
  "error": "VALIDATION_FAILED",
  "message": "Email is already in use.",
  "details": [
    { "field": "email", "issue": "duplicate" }
  ],
  "timestamp": "2024-01-15T10:30:00Z",
  "requestId": "req_abc123"
}`}</code>
      </div>

      <h3>Common Headers</h3>
      <table className='crud-table'>
        <thead>
          <tr>
            <th>Header</th>
            <th>Direction</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>Content-Type</code></td><td>Both</td><td>Format of the body — <code>application/json</code></td></tr>
          <tr><td><code>Accept</code></td><td>Request</td><td>Format the client wants — <code>application/json</code></td></tr>
          <tr><td><code>Authorization</code></td><td>Request</td><td><code>Bearer &lt;token&gt;</code> or <code>Basic &lt;b64&gt;</code></td></tr>
          <tr>
            <td><code>Cache-Control</code></td>
            <td>Response</td>
            <td>
              <Tip text="Instructs browsers and proxies how to cache the response. no-cache = revalidate before using. no-store = never cache. max-age=3600 = cache for 1 hour."><code>no-cache</code></Tip>,{' '}
              <code>max-age=3600</code>, <code>no-store</code>
            </td>
          </tr>
          <tr>
            <td><code><Tip text="Entity Tag. A hash/fingerprint of the resource content. Client sends it back as If-None-Match; if the resource hasn't changed, server returns 304 with no body — saves bandwidth.">ETag</Tip></code></td>
            <td>Response</td>
            <td>Hash of resource. Client sends back as <code>If-None-Match</code> to check freshness.</td>
          </tr>
          <tr><td><code>Location</code></td><td>Response</td><td>URL of newly created resource. Sent with <code>201</code>.</td></tr>
          <tr><td><code>Retry-After</code></td><td>Response</td><td>Seconds to wait. Sent with <code>429</code> and <code>503</code>.</td></tr>
          <tr>
            <td><code>X-Request-ID</code></td>
            <td>Both</td>
            <td>
              <Tip text="A unique ID stamped on every request. When something breaks, you search logs for that ID and trace the request across every service it touched.">Trace ID for debugging across services.</Tip>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RestConcepts;
