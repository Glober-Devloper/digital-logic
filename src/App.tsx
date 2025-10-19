import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import UnitPage from './components/UnitPage';

function App() {
  const [currentUnit, setCurrentUnit] = useState<number | null>(null);

  const handleNavigate = (unitNumber: number | null) => {
    setCurrentUnit(unitNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onNavigate={handleNavigate} currentUnit={currentUnit} />

      {currentUnit === null ? (
        <HomePage onNavigate={handleNavigate} />
      ) : (
        <UnitPage unitNumber={currentUnit} />
      )}
    </div>
  );
}

export default App;
