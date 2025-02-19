import './App.css';
import SystemSelector from './SystemSelector';
import SequenceSelector from './SequenceSelector';
import DealViewer from './DealViewer';

function App() {
  return (
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Mon application de bridge</h1>
      <div class="flex space-x-4">
        <SystemSelector />
        <SequenceSelector />
      </div>
      <DealViewer />
    </div>
  );
}

export default App;