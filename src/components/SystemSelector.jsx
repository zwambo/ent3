// Fichier: src/components/SystemSelector.jsx
// =========================================
import { systems, selectedSystem, setSelectedSystem } from '../stores/stores';

function SystemSelector() {
  return (
    <div className="border p-2">
      <h2>Système</h2>
      <ul>
        {systems().map(system => (
          <li
            key={system._id}
            className={selectedSystem() === system ? 'bg-blue-200 cursor-pointer' : 'cursor-pointer'}
            onClick={() => setSelectedSystem(system)}
          >
            {system.name || system._id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SystemSelector;