// Fichier: src/components/BidSelector.jsx
// =========================================
import { createMemo } from 'solid-js'; // Plus besoin de createEffect ici
import { systems, selectedSystem, selectedBid, setSelectedBid } from '../stores/stores'; // On utilise setSelectedBid directement

function BidSelector() {

  const filteredBids = createMemo(() => {
    const selectedSystemData = systems().find(system => system._id === selectedSystem());
    return selectedSystemData ? selectedSystemData.bids : [];
  });

  return (
    <div className="border p-2">
      <h2>Séquence</h2>
      <ul>
        {filteredBids().map(bid => (
          <li
            key={bid._id}
            className={selectedBid() === bid._id ? 'bg-blue-200 cursor-pointer' : 'cursor-pointer'}
            onClick={() => setSelectedBid(bid._id)} // On utilise setSelectedBid directement
          >
            {bid.name || bid._id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BidSelector;