// src/components/DealList.jsx

import Hand from "./Hand";
import Auction from "./Auction";
import { visibility, toggleVisibility } from "../stores/stores";

const handCSS = "pt-2 pb-0 text-black bg-emerald-100 text-xl leading-tight border border-gray-300 rounded-md"
function Deal(props) {
	// props.deal contiendra les données d'une seule donne

	if (!props.deal) {
		return <div>Aucune donne à afficher.</div>; // Ou un message plus approprié
	}

	return (
		<div className="border p-2 mt-4">
            <h2>Donne {props.deal.boardNumber}</h2>
			<div className="grid grid-cols-3">
				<div />
                <div className={handCSS}>
                    <Hand hand={props.deal.north} position="N" />
                </div>
				
				<div />

                <div className={handCSS}>
                    <Hand hand={props.deal.west} position="W" />    
                </div>
				<div />
                <div className={handCSS}>
				        <Hand hand={props.deal.east} position="E" />                    
                </div>

				<div />
                <div className={handCSS}>
				    <Hand hand={props.deal.south} position="S" />                    
                </div>
				<div />
			</div>
			<Auction auction={props.deal.auction} />

			<div>
				<button onClick={() => toggleVisibility("N")}>
					{visibility().N ? "Cacher Nord" : "Voir Nord"}
				</button>
				<button onClick={() => toggleVisibility("E")}>
					{visibility().E ? "Cacher Est" : "Voir Est"}
				</button>
				<button onClick={() => toggleVisibility("S")}>
					{visibility().S ? "Cacher Sud" : "Voir Sud"}
				</button>
				<button onClick={() => toggleVisibility("W")}>
					{visibility().W ? "Cacher Ouest" : "Voir Ouest"}
				</button>
			</div>
		</div>
	);
}

export default Deal;
