// src/components/SystemSelector.jsx
// =========================================
import { createEffect } from 'solid-js';
import { systems, selectedSystem, setSelectedSystem } from '../stores/stores';

function SystemSelector() {

  createEffect(() => {
      if (systems().length>0 && !selectedSystem())
          setSelectedSystem(systems()[0]._id);
  });

  return (
    <div className="border p-2">
      <h2>Système</h2>
      <ul>
        {systems().map(system => (
          <li
            key={system._id}
            className={selectedSystem() === system._id ? 'bg-blue-200 cursor-pointer' : 'cursor-pointer'} // Correction ici
            onClick={() => setSelectedSystem(system._id)}
          >
            {system._id} {/* Affiche l'_id.  Vous pourrez remplacer par un autre champ (s'il y en a un) qui contient le nom "affichable" du système */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SystemSelector;