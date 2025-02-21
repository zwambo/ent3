// src/components/DealList.jsx

import { createSignal, For } from 'solid-js';
import Deal from './Deal';
import { deals, currentDealIndex, updateCurrentDealIndex, visibility, toggleVisibility } from '../stores/stores';

function DealList() {

  const nextDeal = () => {
    updateCurrentDealIndex(currentDealIndex() + 1);
  };

  const previousDeal = () => {
    updateCurrentDealIndex(currentDealIndex() - 1);
  };

  if (deals().length === 0) {
    return <div>Sélectionnez un système et une séquence pour afficher les donnes.</div>;
  }

  return (
    <div>
      <For each={deals()}>{(deal) => (
        <>
          <Deal deal={deal} />     
        </>

      )}
      </For>

    </div>
  );}

export default DealList;