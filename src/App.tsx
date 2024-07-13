import reactLogo from './assets/react.svg';
import './App.css';
import Notes from './components/Notes';
import YmmyExpert from './components/YmmyExpert';
import { useState } from 'react';

function App() {
  const DEFAULT_ACTIVE_TAB = 'Notes';
  const [activeTab, setActiveTab] = useState(DEFAULT_ACTIVE_TAB);
  const activeTabName = ['Notes', 'YmmyExpert'];

  return (
    <div className='container'>
      <div>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <span>
        <h1
          onClick={() =>
            setActiveTab(activeTab === 'Notes' ? 'YmmyExpert' : 'Notes')
          }
        >
          {activeTabName[activeTab === 'Notes' ? 0 : 1]}
        </h1>
      </span>
      {activeTab === 'Notes' ? <Notes /> : <YmmyExpert />}
      <span></span>
    </div>
  );
}

export default App;
