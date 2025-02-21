// Fichier: src/components/Hand.jsx
// =========================================
import { createMemo } from 'solid-js';
import { deals, currentDealIndex, visibility } from '../stores/stores';

function Hand(props) {

    const currentDeal = createMemo(() => { // MODIFICATION ICI
        if (deals() && deals().length > 0 && currentDealIndex() < deals().length) {
            return deals()[currentDealIndex()];
        }
        return null
    });

    const hand = createMemo(() => { // MODIFICATION ICI
        if (!currentDeal() || !currentDeal()) {
            return null;
        }
        switch (props.position) {
            case 'N': return currentDeal().north;
            case 'E': return currentDeal().east;
            case 'S': return currentDeal().south;
            case 'W': return currentDeal().west;
            default: return null
        }
    });
    const visible = () => visibility()[props.position];

    const suitSymbols = {
        S: '♠',
        H: '♥',
        D: '♦',
        C: '♣',
    };
    const cardSymbols = {
        'T': '10',
        'J': 'V',
        'Q': 'D',
        'K': 'R',
        'A': 'A'
    }
    return (
        <div className="border p-2 w-1/4">
            <h3>{props.position}</h3>
            {visible() && hand() ? (
                <div>
                    <div>{hand().S.split('').map(card => ( //Modif ici
                        <span key={card}>{cardSymbols[card] || card}</span>
                    ))}</div>
                    <div>{hand().H.split('').map(card => ( //Modif ici
                        <span key={card}>{cardSymbols[card] || card}</span>
                    ))}</div>
                    <div>{hand().D.split('').map(card => ( //Modif ici
                        <span key={card}>{cardSymbols[card] || card}</span>
                    ))}</div>
                    <div>{hand().C.split('').map(card => ( //Modif ici
                        <span key={card}>{cardSymbols[card] || card}</span>
                    ))}</div>
                </div>
            ) : (
                <p>Caché</p>
            )}
        </div>
    );
}

export default Hand;