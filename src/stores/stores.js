// Fichier: src/stores/stores.js
// =========================================
import { createSignal, createEffect, on } from "solid-js";
import pbn from "../utils/pbn-reader";

// Constants
const POSITIONS = ["N", "E", "S", "W"];
const FETCH_TIMEOUT = 5000; // 5 secondes
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 seconde

// État global
export const [systems, setSystems] = createSignal([]);
export const [selectedSystem, setSelectedSystem] = createSignal(null);
export const [selectedBid, setSelectedBid] = createSignal(null);
export const [deals, setDeals] = createSignal([]);
export const [currentDealIndex, setCurrentDealIndex] = createSignal(0);
export const [isLoading, setIsLoading] = createSignal(false);
export const [error, setError] = createSignal(null);
export const [visibility, setVisibility] = createSignal({
	N: true,
	E: true,
	S: true,
	W: true,
});

// Validation helpers
const isValidSystem = (system) => {
	return system && typeof system._id === "string" && Array.isArray(system.bids);
};

const isValidBid = (bid) => {
	return bid && typeof bid._id === "string";
};

const sanitizePath = (path) => {
	return path.replace(/[^a-zA-Z0-9-_\./]/g, ""); // Plus strict, pour la sécurité
};

// Fetch avec timeout et retry
const fetchWithRetry = async (url, retries = MAX_RETRIES) => {
	try {
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT);

		const response = await fetch(url, { signal: controller.signal });
		clearTimeout(timeoutId);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return response;
	} catch (error) {
		if (retries > 0 && error.name !== "AbortError") {
			console.warn(`Fetch failed (${retries} retries remaining):`, error); // Ajout d'un warning
			await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
			return fetchWithRetry(url, retries - 1);
		}
		throw error;
	}
};

// Chargement des deals
const loadDeals = async () => {
	const currentSystem = selectedSystem();
	const currentBid = selectedBid();

	if (!currentSystem || !currentBid) {
		setDeals([]);
		return;
	}

	setIsLoading(true);
	setError(null);

	try {
		const system = systems().find((sys) => sys._id === selectedSystem()._id); // system est un objet
		if (!isValidSystem(system)) {
			throw new Error(`Système invalide: ${currentSystem}`);
		}

		const bid = system.bids.find((b) => b._id === selectedBid()._id); // bid est un objet
		if (!isValidBid(bid)) {
			throw new Error(`Bid invalide: ${currentBid}`);
		}

		const filePath = sanitizePath(`/systemes/${system._id}/${bid._id}.pbn`);
		const response = await fetchWithRetry(filePath);
		const pbnString = await response.text();

		const parsedData = pbn.parseDeals(pbnString);
		if (!parsedData?.deals || !Array.isArray(parsedData.deals)) {
			throw new Error("Données PBN invalides ou vides");
		}

		setDeals(parsedData.deals);
	} catch (error) {
		console.error("Erreur lors du chargement des deals:", error);
		setError(error.message);
		setDeals([]);
	} finally {
		setIsLoading(false);
	}
};

// Effets
createEffect(
	on(selectedSystem, (sys) => {
		// (sys) est l'objet,
		console.log("selectedSystem a change: %O", selectedSystem()?._id);
		if (sys) {
			// On teste si sys est defini
			const system = systems().find((s) => s._id === sys._id); // system est un objet
			if (system && system.bids && system.bids.length > 0) {
				setSelectedBid(system.bids[0]); // On selectionne l'objet
			} else {
				setSelectedBid(null);
			}
		} else setSelectedBid(null);
	}),
);

createEffect(
	on(selectedBid, () => {
		// Utilisation de on
		console.log("selectedBid a change:", selectedBid()?._id);
		if (selectedBid()) {
			setCurrentDealIndex(0);
			loadDeals();
		}
	}),
);

// Fonctions exportées
export const updateSystems = (newSystems) => {
	if (!Array.isArray(newSystems)) {
		console.error("updateSystems: argument invalide");
		return;
	}

	setSystems(newSystems);
	if (newSystems.length > 0) {
		setSelectedSystem(newSystems[0]); // On selectionne l'objet
	} else {
		setSelectedSystem(null);
	}
};

export const updateCurrentDealIndex = (newIndex) => {
	const dealsLength = deals().length;
	if (dealsLength > 0) {
		const boundedIndex = Math.max(0, Math.min(newIndex, dealsLength - 1));
		setCurrentDealIndex(boundedIndex);
	}
};

export const toggleVisibility = (position) => {
	if (!POSITIONS.includes(position)) {
		console.error("Position invalide:", position);
		return;
	}

	setVisibility((prev) => ({
		...prev,
		[position]: !prev[position],
	}));
};

export const resetVisibility = () => {
	setVisibility(
		POSITIONS.reduce(
			(acc, pos) => ({
				...acc,
				[pos]: true,
			}),
			{},
		),
	);
};

// Helper pour les tests et réinitialisation
export const resetStores = () => {
	setSystems([]);
	setSelectedSystem(null);
	setSelectedBid(null);
	setDeals([]);
	setCurrentDealIndex(0);
	setIsLoading(false);
	setError(null);
	resetVisibility();
};
