// Fichier: src/components/Hand.jsx

import pbn from "../utils/pbn-reader";
import { visibility } from "../stores/stores";

function Hand(props) {
	if (!props.hand) {
		return null;
	}

	const visible = () => visibility()[props.position];

	const suitSymbols = {
		S: "♠",
		H: "♥",
		D: "♦",
		C: "♣",
	};

	const cardSymbols = {
		T: "10",
		J: "V",
		Q: "D",
		K: "R",
		A: "A",
	};

	const substituteCards = (card) => {
		if (card === "") return "—";
		return cardSymbols[card] || card;
	};

	const renderSuit = (suit) => {
		if (!props.hand || !props.hand[suit]) {
			return <p>—</p>; // Affiche — si la main ou la couleur est manquante
		}

		const cards = props.hand[suit].split("");
		return (
			<p className="text-left">
				<span className="text-left pr-2">{suitSymbols[suit]}</span>
				{cards.map((card, index) => (
					<span
						key={`${props.position}-${suit}-${index}`}
						className="mr-1"
					>
						{substituteCards(card)}
					</span>
				))}
			</p>
		);
	};

	return (
		<div className="p-2 font-mono text-lg">
			{visible() ? (
				<>
					{renderSuit("S")}
					{renderSuit("H")}
					{renderSuit("D")}
					{renderSuit("C")}
				</>
			) : (
				<p>Caché</p>
			)}
		</div>
	);
}

export default Hand;
