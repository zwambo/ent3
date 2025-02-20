// src/components/App.jsx

import { createEffect, onMount } from 'solid-js';
import './App.css'; //le point est important
import SystemSelector from './components/SystemSelector';
import BidSelector from './components/BidSelector';
import DealViewer from './components/DealViewer';
import { systems, updateSystems } from './stores/stores';

function App() {

  onMount(() => {
    fetch('/systemes.json') // Assurez-vous que le chemin est correct
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