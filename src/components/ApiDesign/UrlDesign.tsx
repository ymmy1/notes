import { Tip } from './Tip'

function UrlDesign() {
  return (
    <div className='api-section'>
      <h3>URL Design</h3>

      <div className='concept-grid' style={{ marginBottom: '1.5rem' }}>
        <div className='concept-card'>
          <strong>Nouns, not verbs</strong>
          <p><code>/users</code> ✓ &nbsp; <code>/getUsers</code> ✗<br />The HTTP method is the verb. The URL is the resource.</p>
        </div>
        <div className='concept-card'>
          <strong>Plural collections</strong>
          <p><code>/users</code> ✓ &nbsp; <code>/user</code> ✗<br />Consistent plurals for all collections.</p>
        </div>
        <div className='concept-card'>
          <strong>Nested resources</strong>
          <p><code>/users/42/posts</code><br />Max 2 levels deep. Deeper = use{' '}
            <Tip text="Key-value pairs after the ? in a URL. Used for optional data like filters and pagination: /users?role=admin&page=2">query params</Tip>
            {' '}instead.</p>
        </div>
        <div className='concept-card'>
          <strong>Versioning</strong>
          <p><code>/api/v1/users</code><br />URL versioning is the most common. Alternatives: header (<code>Accept-Version: v1</code>) or subdomain (<code>v1.api.com</code>).</p>
        </div>
        <div className='concept-card'>
          <strong>
            <Tip text="Key-value pairs after the ? in a URL. Separated by & for multiple. Used for filtering, sorting, and pagination — not for resource identity.">Query params</Tip>
          </strong>
          <p>Filter, sort, paginate:<br /><code>/users?role=admin&sort=name&page=2&limit=20</code></p>
        </div>
        <div className='concept-card'>
          <strong>
            <Tip text="Words separated by hyphens: blog-posts. Preferred in URLs because they're readable, URL-safe, and case-insensitive. camelCase and snake_case are both worse choices for URLs.">Kebab-case</Tip>
          </strong>
          <p><code>/blog-posts</code> ✓ &nbsp; <code>/blogPosts</code> ✗<br />URLs are case-insensitive. Use lowercase + hyphens.</p>
        </div>
      </div>

      <h3>
        <Tip text="Create, Read, Update, Delete — the four basic operations on any resource. Maps directly to POST, GET, PUT/PATCH, DELETE.">CRUD</Tip>
        {' '}Mapping
      </h3>
      <table className='crud-table'>
        <thead>
          <tr>
            <th>Method</th>
            <th>URL</th>
            <th>Action</th>
            <th>Success</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span className='badge badge-get'>GET</span></td>
            <td><code>/users</code></td>
            <td>List all users</td>
            <td>200</td>
          </tr>
          <tr>
            <td><span className='badge badge-post'>POST</span></td>
            <td><code>/users</code></td>
            <td>Create a user</td>
            <td>201</td>
          </tr>
          <tr>
            <td><span className='badge badge-get'>GET</span></td>
            <td><code>/users/<Tip text="A dynamic path segment — replaced with the actual ID at runtime. e.g., /users/42 gets user number 42.">:id</Tip></code></td>
            <td>Get one user</td>
            <td>200</td>
          </tr>
          <tr>
            <td><span className='badge badge-put'>PUT</span></td>
            <td><code>/users/:id</code></td>
            <td>Replace user</td>
            <td>200</td>
          </tr>
          <tr>
            <td><span className='badge badge-patch'>PATCH</span></td>
            <td><code>/users/:id</code></td>
            <td>Partial update</td>
            <td>200</td>
          </tr>
          <tr>
            <td><span className='badge badge-delete'>DELETE</span></td>
            <td><code>/users/:id</code></td>
            <td>Delete user</td>
            <td>204</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UrlDesign;
