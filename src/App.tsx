import reactLogo from './assets/react.svg';
import './App.css';
import Notes from './components/Notes';
import YmmyExpert from './components/YmmyExpert';
import ApiDesign from './components/ApiDesign';
import { useState } from 'react';

const TABS = ['Notes', 'YmmyExpert', 'ApiDesign'] as const;
type Tab = typeof TABS[number];

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('Notes');

  const cycleTab = () => {
    const next = (TABS.indexOf(activeTab) + 1) % TABS.length;
    setActiveTab(TABS[next]);
  };

  return (
    <div className='container'>
      <div>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <span>
        <h1 onClick={cycleTab}>{activeTab}</h1>
      </span>
      {activeTab === 'Notes' && <Notes />}
      {activeTab === 'YmmyExpert' && <YmmyExpert />}
      {activeTab === 'ApiDesign' && <ApiDesign />}
      <span></span>
    </div>
  );
}

export default App;
