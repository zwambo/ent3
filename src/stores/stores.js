// Fichier: src/stores/stores.js
// =========================================
import { createSignal } from 'solid-js';

export const [systems, setSystems] = createSignal([]);
export const [selectedSystem, setSelectedSystem] = createSignal(null);
export const [selectedBid, setSelectedBid] = createSignal(null); // Changement : selectedBid au lieu de selectedSequence

export const updateSystems = (newSystems) => {
    setSystems(newSystems);
    if (newSystems.length > 0) {
        setSelectedSystem(newSystems[0]._id);
    }
};

export const updateSelectedBid = (newBid) => { // Changement : updateSelectedBid
    setSelectedBid(newBid);
};