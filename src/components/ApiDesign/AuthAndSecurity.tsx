import { Tip } from './Tip'

function AuthAndSecurity() {
  return (
    <div className='api-section'>
      <h3>Auth &amp; Security</h3>

      <div className='auth-card'>
        <strong>JWT — JSON Web Token</strong>
        <p>
          Three{' '}
          <Tip text="Base64 encodes binary data as ASCII text using 64 safe characters. Not encryption — anyone can decode it. Used for transport, not secrecy.">base64</Tip>
          {' '}parts: <code>Header.Payload.Signature</code> separated by dots.<br />
          Sent as: <code>Authorization:{' '}
            <Tip text="'Bearer' means whoever holds this token gets access — no additional proof needed. Like a movie ticket: show it and get in.">Bearer</Tip>
            {' '}&lt;token&gt;</code><br />
          <Tip text="The server keeps no session in memory or database. It just validates the token's signature on every request — any server can handle any request.">Stateless</Tip>
          {' '}— server doesn't store sessions. Decode the token to get{' '}
          <Tip text="Key-value pairs in the JWT payload. Common ones: sub (user ID), exp (expiry timestamp), role (permissions). Set by the server when issuing the token.">claims</Tip>.<br />
          Common pitfall: JWTs can't be invalidated before expiry unless you maintain a{' '}
          <Tip text="A list of token IDs the server considers revoked, even if they haven't expired. Needed to support logout. Requires a database lookup on every request, which removes the 'stateless' benefit.">blocklist</Tip>.
        </p>
      </div>

      <div className='auth-card'>
        <strong>API Key</strong>
        <p>
          Simple long random string tied to a client.<br />
          Sent via header: <code>X-API-Key: abc123</code> (preferred) or query param <code>?api_key=abc123</code>{' '}
          <Tip text="Query params appear in server access logs, browser history, and referrer headers. A secret in the URL is a secret that leaks.">(avoid — shows in logs)</Tip>.<br />
          No expiry by default. Good for server-to-server, bad for browsers.
        </p>
      </div>

      <div className='auth-card'>
        <strong>OAuth 2.0</strong>
        <p>
          Authorization framework — delegates access without sharing credentials.<br />
          <strong>Authorization Code</strong> — for web apps with a backend (most secure).<br />
          <strong>
            <Tip text="Proof Key for Code Exchange. Generates a random secret per login attempt. Even if someone intercepts the authorization code, they can't exchange it for a token without the original secret.">PKCE</Tip>
          </strong>
          {' '}— Authorization Code for{' '}
          <Tip text="Single Page Applications — React, Vue, etc. They run entirely in the browser and can't safely store a client secret.">SPAs</Tip>
          /mobile (no client secret).<br />
          <strong>Client Credentials</strong> — machine-to-machine, no user involved.<br />
          Returns an{' '}
          <Tip text="Short-lived token (minutes to hours) used to make API calls. Store in memory only — never in localStorage.">access_token</Tip>
          {' '}+{' '}
          <Tip text="Long-lived token (days to weeks) used only to get a new access_token when it expires. Store securely in an httpOnly cookie — not in JavaScript memory.">refresh_token</Tip>.
        </p>
      </div>

      <div className='auth-card'>
        <strong>Basic Auth</strong>
        <p>
          <code>Authorization: Basic{' '}
            <Tip text="base64 of 'username:password'. Not encrypted — just encoded. Decode it and you have the raw credentials. Safe only over HTTPS.">base64(username:password)</Tip>
          </code><br />
          Only safe over HTTPS. Generally avoid for APIs — use for quick internal tools.
        </p>
      </div>

      <div className='auth-card'>
        <strong>Rate Limiting</strong>
        <p>
          Return <code>429 Too Many Requests</code> when exceeded.<br />
          Useful response headers: <code>X-RateLimit-Limit</code>, <code>X-RateLimit-Remaining</code>, <code>Retry-After: 60</code>.<br />
          Strategies:{' '}
          <Tip text="Counter resets at fixed intervals (e.g., top of every minute). Simple, but allows a burst at the boundary — 100 requests at 0:59 and 100 more at 1:00.">fixed window</Tip>,{' '}
          <Tip text="Tracks the exact timestamp of each request within a rolling time window. No burst at boundaries, but more memory-intensive.">sliding window</Tip>,{' '}
          <Tip text="You get a bucket of N tokens, refilled at a fixed rate. Each request costs one token. Allows short bursts up to the bucket size, then throttles.">token bucket</Tip>.
        </p>
      </div>

      <div className='auth-card'>
        <strong>CORS — Cross-Origin Resource Sharing</strong>
        <p>
          Browser security policy. Server must respond with <code>Access-Control-Allow-Origin</code>.<br />
          Browsers send a{' '}
          <Tip text="An automatic OPTIONS request the browser fires before a cross-origin request to ask: 'do you allow this method from this origin?' If the server says no, the real request never sends.">preflight</Tip>
          {' '}<code>OPTIONS</code> request first for non-simple requests.<br />
          Never use <code>*</code> with credentials — specify the exact{' '}
          <Tip text="Origin = protocol + domain + port. https://app.com and http://app.com are different origins. So are app.com:3000 and app.com:4000.">origin</Tip>.
        </p>
      </div>
    </div>
  );
}

export default AuthAndSecurity;
