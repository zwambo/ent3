// Fichier: src/components/Auction.jsx
// =========================================
import { createMemo } from 'solid-js';
import { deals, currentDealIndex } from '../stores/stores';

function Auction() {
    const currentDeal = () => deals()[currentDealIndex()];
    const auction = createMemo(() => {
        return currentDeal()?.auction;
    });

    // if (!auction() || auction().length === 0) { // On n'a plus besoin de ce test, car votre parseur ne renvoie pas de champ "auction" vide.
    //     return (
    //         <div className="border p-2 mt-4">
    //             <h2>Enchères</h2>
    //             <p>Pas d'enchères pour cette donne.</p>
    //         </div>
    //     );
    // }
    const dealer = currentDeal()?.dealer

    return (
        <div className="border p-2 mt-4">
            <h2>Enchères</h2>
            <table className="w-full">
                <thead>
                    <tr>
                        <th>N</th>
                        <th>E</th>
                        <th>S</th>
                        <th>O</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      {currentDeal() && currentDeal().comments.map((comment, index) => { //Modif ici

                            return (
                                <td key={index}>{comment}</td>
                            )
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Auction;