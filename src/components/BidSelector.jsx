// Fichier: src/components/BidSelector.jsx
// =========================================
import { systems, selectedSystem, selectedBid, setSelectedBid } from '../stores/stores';

function BidSelector() {

  return (
    <div className="border p-2">
      <h2>Séquence</h2>
      <ul>
        {selectedSystem()?.bids?.map(bid => ( // Utilisation de l'opérateur ?.
          <li
            key={bid._id}
            className={selectedBid() === bid ? 'bg-blue-200 cursor-pointer' : 'cursor-pointer'}
            onClick={() => setSelectedBid(bid)}
          >
            {bid.name || bid._id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BidSelector;