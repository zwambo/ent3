// Fichier: src/stores/stores.js
// =========================================
import { createSignal } from 'solid-js';

export const [systems, setSystems] = createSignal([]);
export const [selectedSystem, setSelectedSystem] = createSignal(null);
export const [selectedSequence, setSelectedSequence] = createSignal(null);

export const updateSystems = (newSystems) => {
    setSystems(newSystems);
    if (newSystems.length > 0) {
        setSelectedSystem(newSystems[0]._id); // Correction ici : utiliser _id
    }
};

export const updateSelectedSequence = (newSequence) => {
    setSelectedSequence(newSequence);
};