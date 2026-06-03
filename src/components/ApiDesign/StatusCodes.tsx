function StatusCodes() {
  return (
    <div className='api-section'>
      <h3>Status Codes</h3>

      <div className='status-group'>
        <h4>2xx — Success</h4>
        <div className='status-row'><span className='badge s2'>200</span> OK — standard success, returns body.</div>
        <div className='status-row'><span className='badge s2'>201</span> Created — resource was created. Include <code>Location: /users/42</code> header.</div>
        <div className='status-row'><span className='badge s2'>204</span> No Content — success but no body. Common for DELETE and PATCH.</div>
      </div>

      <div className='status-group'>
        <h4>3xx — Redirect</h4>
        <div className='status-row'><span className='badge s3'>301</span> Moved Permanently — resource has a new URL forever. Update your bookmarks.</div>
        <div className='status-row'><span className='badge s3'>304</span> Not Modified — cached version is still valid. No body sent.</div>
      </div>

      <div className='status-group'>
        <h4>4xx — Client Error</h4>
        <div className='status-row'><span className='badge s4'>400</span> Bad Request — malformed syntax, invalid params, failed validation.</div>
        <div className='status-row'><span className='badge s4'>401</span> Unauthorized — not authenticated. "Who are you?" Send your token.</div>
        <div className='status-row'><span className='badge s4'>403</span> Forbidden — authenticated but no permission. "I know who you are. No."</div>
        <div className='status-row'><span className='badge s4'>404</span> Not Found — resource doesn't exist (or you're hiding it on purpose).</div>
        <div className='status-row'><span className='badge s4'>409</span> Conflict — state conflict, e.g. duplicate email on signup.</div>
        <div className='status-row'><span className='badge s4'>422</span> Unprocessable Entity — valid syntax but business logic failed (used in REST APIs over 400).</div>
        <div className='status-row'><span className='badge s4'>429</span> Too Many Requests — rate limit hit. Response should include <code>Retry-After</code> header.</div>
      </div>

      <div className='status-group'>
        <h4>5xx — Server Error</h4>
        <div className='status-row'><span className='badge s5'>500</span> Internal Server Error — unhandled exception on the server. Never intentionally return this.</div>
        <div className='status-row'><span className='badge s5'>502</span> Bad Gateway — upstream server returned an invalid response (proxy/load balancer issue).</div>
        <div className='status-row'><span className='badge s5'>503</span> Service Unavailable — server is down or overloaded. Pair with <code>Retry-After</code>.</div>
      </div>

      <p style={{ fontSize: '0.82rem', color: '#888', marginTop: '0.5rem' }}>
        Key interview distinction: <strong>401 vs 403</strong> — 401 means unauthenticated (no/bad token), 403 means authenticated but not authorized.
      </p>
    </div>
  );
}

export default StatusCodes;
