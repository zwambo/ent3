// Fichier: src/components/SequenceSelector.jsx
// =========================================
import { createMemo } from 'solid-js';
import { systems, selectedSystem, selectedSequence, updateSelectedSequence } from '../stores/stores';

function SequenceSelector() {

  const filteredSequences = createMemo(() => {
    const selectedSystemData = systems().find(system => system._id === selectedSystem()); // Correction ici
    return selectedSystemData ? selectedSystemData.sequences : [];
  });

    // initialise la séquence au chargement
  createEffect(() => {
    if (filteredSequences().length>0 && !selectedSequence())
        updateSelectedSequence(filteredSequences()[0]);
  });

  return (
    <div className="border p-2">
      <h2>Séquence</h2>
      <ul>
        {filteredSequences().map(sequence => (
          <li
            key={sequence}
            className={selectedSequence() === sequence ? 'bg-blue-200 cursor-pointer' : 'cursor-pointer'}
            onClick={() => updateSelectedSequence(sequence)}
          >
            {sequence}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SequenceSelector;