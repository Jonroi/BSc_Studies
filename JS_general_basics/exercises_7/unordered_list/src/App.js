import './App.css';
import { H2Header } from './components/header/h2header';
import ThreatList from './components/list/threatList';
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <H2Header />
        <ThreatList
          sqlThreats={[
            'SQL Injection',
            'Broken Authentication',
            'Sensitive Data Exposure',
            'XML External Entities (XXE)',
            'Broken Access Control',
          ]}
        />
      </header>
    </div>
  );
}

export default App;
