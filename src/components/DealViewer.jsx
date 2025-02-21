// Fichier: src/components/DealViewer.jsx
// =========================================
import { createMemo } from 'solid-js'; // Importez createMemo
import Hand from './Hand';
import Auction from './Auction';
import { deals, currentDealIndex, updateCurrentDealIndex, visibility, toggleVisibility } from '../stores/stores';

function DealViewer() {
  // Utilisez createMemo pour créer une valeur dérivée réactive
  const currentDeal = createMemo(() => {
    if (deals() && deals().length > 0 && currentDealIndex() < deals().length) {
      return deals()[currentDealIndex()];
    }
    return null; // Important: retournez null si les données ne sont pas prêtes
  });

  const hasNextDeal = () => currentDealIndex() < deals().length - 1;
  const hasPreviousDeal = () => currentDealIndex() > 0;

  const nextDeal = () => {
    if (hasNextDeal()) {
      updateCurrentDealIndex(currentDealIndex() + 1);
    }
  };

  const previousDeal = () => {
    if (hasPreviousDeal()) {
      updateCurrentDealIndex(currentDealIndex() - 1);
    }
  };

  // Utilisez currentDeal() (comme une fonction) pour accéder à la valeur
  if (!currentDeal()) {
    return <div>Sélectionnez un système et une séquence pour afficher les donnes.</div>;
  }

    return (
    <div className="border p-2 mt-4">
      <h2>Donne {currentDealIndex() + 1} / {deals().length}</h2>
      <div className="flex space-x-4">
        <Hand position="N" />
        <Hand position="E" />
        <Hand position="S" />
        <Hand position="W" />
      </div>
      <Auction />

      <div className="mt-4">
        <button onClick={previousDeal} disabled={!hasPreviousDeal()} className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50">
          Précédente
        </button>
        <button onClick={nextDeal} disabled={!hasNextDeal()} className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 ml-2">
          Suivante
        </button>
      </div>
        <div>
            <button onClick={() => toggleVisibility('N')}>
                {visibility().N ? 'Cacher Nord' : 'Voir Nord'}
            </button>
            <button onClick={() => toggleVisibility('E')}>
                {visibility().E ? 'Cacher Est' : 'Voir Est'}
            </button>
            <button onClick={() => toggleVisibility('S')}>
                {visibility().S ? 'Cacher Sud' : 'Voir Sud'}
            </button>
            <button onClick={() => toggleVisibility('W')}>
                {visibility().W ? 'Cacher Ouest' : 'Voir Ouest'}
            </button>
        </div>
    </div>
  );
}

export default DealViewer;