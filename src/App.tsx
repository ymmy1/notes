import reactLogo from './assets/react.svg';
import './App.css';
import ApiNotes from './components/ApiNotes';
import ReactHooks from './components/ReactHooks';
import JavaScriptFunctions from './components/JavaScriptFunctions';
import TypeScriptFunctions from './components/TypeScriptFunctions';

function App() {
  return (
    <div className='container'>
      <div>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Notes</h1>
      <ApiNotes />
      <ReactHooks />
      <JavaScriptFunctions />
      <TypeScriptFunctions />
    </div>
  );
}

export default App;
