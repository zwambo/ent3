// Fichier: src/App.jsx
// =========================================
import {  onMount } from 'solid-js'; // Plus besoin de createEffect ici
import './App.css';
import SystemSelector from './components/SystemSelector';
import BidSelector from './components/BidSelector';
import DealViewer from './components/DealViewer';
import { systems, updateSystems } from './stores/stores';

function App() {
  onMount(() => {
    fetch('/systemes.json')
      .then(response => response.json())
      .then(data => {
        updateSystems(data);
      });
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Mon application de bridge</h1>
      <div className="flex space-x-4">
        <SystemSelector />
        <BidSelector />
      </div>
      <DealViewer />
    </div>
  );
}

export default App;