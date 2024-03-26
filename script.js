
const kryptomeny = [
    {
        nazev: "Bitcoin (BTC)",
        cena: 42000,
        trzni_kapitalizace: 800000000000,
        objem_obchodu: 20000000000,
    },
    {
        nazev: "Ethereum (ETH)",
        cena: 3000,
        trzni_kapitalizace: 300000000000,
        objem_obchodu: 10000000000,
    },
    
];


const cenyTbodyElement = document.querySelector(".ceny tbody");
for (const kryptomena of kryptomeny) {
    const radekElement = document.createElement("tr");
    radekElement.innerHTML = `
        <td>${kryptomena.nazev}</td>
        <td>${kryptomena.cena}</td>
        <td>${kryptomena.trzni_kapitalizace}</td>
        <td>${kryptomena.objem_obchodu}</td>
    `;
    cenyTbodyElement.appendChild(radekElement);
}
