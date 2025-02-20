// Fichier: src/components/SequenceSelector.jsx
// =========================================
import { createMemo, createEffect } from 'solid-js';
import { systems, selectedSystem, selectedSequence, updateSelectedSequence } from '../stores/stores';

function SequenceSelector() {

  const filteredSequences = createMemo(() => {
    const selectedSystemData = systems().find(system => system._id === selectedSystem());
    return selectedSystemData ? selectedSystemData.sequences : [];
  });

  createEffect(() => {
    if (selectedSystem() && filteredSequences().length > 0 && !selectedSequence()) {
      updateSelectedSequence(filteredSequences()[0]);
    }
  });

  return (
    <div className="border p-2">
      <h2>Séquence</h2>
      <ul>
        {filteredSequences().map(sequence => (
          <li
            key={sequence._id}
            className={selectedSequence() === sequence._id ? 'bg-blue-200 cursor-pointer' : 'cursor-pointer'}
            onClick={() => updateSelectedSequence(sequence._id)}
          >
            {sequence._id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SequenceSelector;