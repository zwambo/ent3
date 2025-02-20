// src/components/BidSelector.jsx
// =========================================
import { createMemo, createEffect } from 'solid-js';
import { systems, selectedSystem, selectedBid, updateSelectedBid } from '../stores/stores';

function BidSelector() {

  const filteredBids = createMemo(() => {
    const selectedSystemData = systems().find(system => system._id === selectedSystem());
    return selectedSystemData ? selectedSystemData.bids : [];
  });

  createEffect(() => {
    if (selectedSystem() && filteredBids().length > 0 && !selectedBid()) {
      updateSelectedBid(filteredBids()[0]._id);
    }
  });

  return (
    <div className="border p-2">
      <h2>Séquence</h2>
      <ul>
        {filteredBids().map(bid => (
          <li
            key={bid._id}
            className={selectedBid() === bid._id ? 'bg-blue-200 cursor-pointer' : 'cursor-pointer'}
            onClick={() => updateSelectedBid(bid._id)}
          >
            {bid.name || bid._id} {/* Affiche bid.name s'il existe, sinon bid._id */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BidSelector;