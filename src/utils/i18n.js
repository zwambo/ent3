export default {
    en: (str) => {
        return str
            .replace(/clubs/g, '♣')
            .replace(/diamonds/g, '♦')
            .replace(/hearts/g, '♥')
            .replace(/spades/g, '♠')
            .replace(/notrump/g, 'NT')
            .replace(/doubled/g, 'X')
            .replace(/redoubled/g, 'XX');
    },
    fr: (str) => {
        return str
            .replace(/clubs/g, '♣')
            .replace(/diamonds/g, '♦')
            .replace(/hearts/g, '♥')
            .replace(/spades/g, '♠')
            .replace(/notrump/g, 'SA')
            .replace(/north/g, 'nord')
            .replace(/east/g, 'est')
            .replace(/south/g, 'sud')
            .replace(/west/g, 'ouest')
            .replace(/doubled/g, 'X')
            .replace(/redoubled/g, 'XX');
    },
    it: (str) => {
        return str
            .replace(/clubs/g, '♣') // Fiori
            .replace(/diamonds/g, '♦') // Quadri
            .replace(/hearts/g, '♥') // Cuori
            .replace(/spades/g, '♠') // Picche
            .replace(/notrump/g, 'SA') // Senza Atout
            .replace(/north/g, 'nord')
            .replace(/east/g, 'est')
            .replace(/south/g, 'sud')
            .replace(/west/g, 'ovest')
            .replace(/doubled/g, 'X')
            .replace(/redoubled/g, 'XX');
    },
    es: (str) => {
        return str
            .replace(/clubs/g, '♣') // Tréboles
            .replace(/diamonds/g, '♦') // Diamantes / Oros
            .replace(/hearts/g, '♥') // Corazones
            .replace(/spades/g, '♠') // Espadas
            .replace(/notrump/g, 'ST') // Sin Triunfos
            .replace(/north/g, 'norte')
            .replace(/east/g, 'este')
            .replace(/south/g, 'sur')
            .replace(/west/g, 'oeste')
            .replace(/doubled/g, 'X')
            .replace(/redoubled/g, 'XX');
    },
    de: (str) => {
        return str
            .replace(/clubs/g, '♣') // Kreuz
            .replace(/diamonds/g, '♦') // Karo
            .replace(/hearts/g, '♥') // Herz
            .replace(/spades/g, '♠') // Pik
            .replace(/notrump/g, 'OA') // Ohne Atout
            .replace(/north/g, 'Nord')
            .replace(/east/g, 'Ost')
            .replace(/south/g, 'Süd')
            .replace(/west/g, 'West')
            .replace(/doubled/g, 'X')
            .replace(/redoubled/g, 'XX');
    },
    pl: (str) => {
        return str
            .replace(/clubs/g, '♣') // Trefl
            .replace(/diamonds/g, '♦') // Karo
            .replace(/hearts/g, '♥') // Kier
            .replace(/spades/g, '♠') // Pik
            .replace(/notrump/g, 'BA') // Bez Atu
            .replace(/north/g, 'północ')
            .replace(/east/g, 'wschód')
            .replace(/south/g, 'południe')
            .replace(/west/g, 'zachód')
            .replace(/doubled/g, 'X') // Kontra
            .replace(/redoubled/g, 'XX'); // Rekontra
    },
    nl: (str) => {
        return str
            .replace(/clubs/g, '♣') // Klaveren
            .replace(/diamonds/g, '♦') // Ruiten
            .replace(/hearts/g, '♥') // Harten
            .replace(/spades/g, '♠') // Schoppen
            .replace(/notrump/g, 'SA') // Sans Atout (same as French)
            .replace(/north/g, 'noord')
            .replace(/east/g, 'oost')
            .replace(/south/g, 'zuid')
            .replace(/west/g, 'west')
            .replace(/doubled/g, 'X') // Doublet
            .replace(/redoubled/g, 'XX'); // Redoublet
    },
    no: (str) => {
        return str
            .replace(/clubs/g, '♣') // Kløver
            .replace(/diamonds/g, '♦') // Ruter
            .replace(/hearts/g, '♥') // Hjerter
            .replace(/spades/g, '♠') // Spar
            .replace(/notrump/g, 'UT') // Uten Trumf
            .replace(/north/g, 'nord')
            .replace(/east/g, 'øst')
            .replace(/south/g, 'syd')
            .replace(/west/g, 'vest')
            .replace(/doubled/g, 'X') // Doblet
            .replace(/redoubled/g, 'XX'); // Redoblet
    },
    sv: (str) => {
        return str
            .replace(/clubs/g, '♣') // Klöver
            .replace(/diamonds/g, '♦') // Ruter
            .replace(/hearts/g, '♥') // Hjärter
            .replace(/spades/g, '♠') // Spader
            .replace(/notrump/g, 'UT') // Utan Trumf
            .replace(/north/g, 'norr') //Using 'norr' instead of 'nord'
            .replace(/east/g, 'öst')   // Using 'öst' instead of 'ost'
            .replace(/south/g, 'söder')// Using 'söder' instead of 'syd'
            .replace(/west/g, 'väster') // Using 'väster' insteaf of 'vast'
            .replace(/doubled/g, 'X') // Dubbelt
            .replace(/redoubled/g, 'XX'); // Redubbelt
    },
};