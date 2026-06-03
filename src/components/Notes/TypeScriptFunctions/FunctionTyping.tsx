function FunctionTyping() {
  return (
    <>
      <h3>Function Typing</h3>
      <div className='notes-grid'>

        <div className='notes-card'>
          <div className='notes-card-label'>inline params</div>
          <pre>{`function add(a: number, b: number): number {
  return a + b
}

// arrow version
const add = (a: number, b: number): number => a + b`}</pre>
        </div>

        <div className='notes-card notes-card-wide'>
          <div className='notes-card-label'>separate type  vs  inline  — the main difference</div>
          <pre>{`// separate — define the shape outside, reuse it
type ButtonProps = {
  label: string
  onClick: () => void
}
function Button({ label, onClick }: ButtonProps) { ... }

// inline — type lives inside the params, one-off
function Button({ label, onClick }: { label: string; onClick: () => void }) { ... }

// use separate when the type is reused across files or gets complex`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>optional params  ?</div>
          <pre>{`function greet(name: string, title?: string) {
  return \`Hello \${title ?? ''} \${name}\`
}

greet('Ali')          // → 'Hello  Ali'
greet('Ali', 'Dr.')   // → 'Hello Dr. Ali'`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>rest params  ...</div>
          <pre>{`function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0)
}

sum(1, 2, 3)   // → 6`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>void return</div>
          <pre>{`function log(msg: string): void {
  console.log(msg)
  // no return value
}

// if you return something → compile error`}</pre>
        </div>

        <div className='notes-card notes-card-wide'>
          <div className='notes-card-label'>overloads</div>
          <pre>{`function parse(x: string): string[]
function parse(x: number): number[]
function parse(x: any): any[] {  // implementation (not public)
  return [x]
}

parse('hi')   // → ['hi']   typed as string[]
parse(1)      // → [1]      typed as number[]`}</pre>
        </div>

        <div className='notes-card'>
          <div className='notes-card-label'>generic functions</div>
          <pre>{`function first<T>(arr: T[]): T | undefined {
  return arr[0]
}

first([1, 2, 3])   // → 1   (T = number)
first(['a', 'b'])  // → 'a' (T = string)`}</pre>
        </div>

        <div className='notes-card notes-card-wide'>
          <div className='notes-card-label'>narrowing</div>
          <pre>{`function handle(val: string | number) {
  if (typeof val === 'string') {
    return val.toUpperCase()  // TS knows it's string here
  }
  return val.toFixed(2)       // TS knows it's number here
}

// other guards:
// instanceof  →  if (err instanceof Error)
// 'key' in obj  →  if ('name' in user)
// custom type guard  →  function isUser(x): x is User { ... }`}</pre>
        </div>

      </div>
    </>
  );
}

export default FunctionTyping;
