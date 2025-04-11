class Auto {
    constructor(nev, ar, teljesitmeny, motor, evjarat, km, kep) {
        this.nev = nev;
        this.ar = ar;
        this.teljesitmeny = teljesitmeny;
        this.motor = motor;
        this.evjarat = evjarat;
        this.km = km;
        this.kep = kep;
    }
}

const autok = [
    new Auto("Renault Laguna", 800000, 163, 2000, 2004, 240000, "../IMG/car1.1.jpg"),
    new Auto("ZÁZZALTÉP", 1200000, 150, 1800, 2010, 150000, "../IMG/car1.2.png"),
    new Auto("Limlomghini", 45000000, 580, 6200, 2023, 100, "../IMG/car3.jpg"),
    new Auto("Sportótó", 3000000, 90, 1400, 2008, 180000, "../IMG/car2.jpg")
];

function megjelenit(lista) {
    const container = document.getElementById("carContainer");
    container.innerHTML = "";
    lista.forEach(auto => {
        container.innerHTML += `
            <div class="card">
                <h1>${auto.nev}</h1>
                <p>Ár: ${auto.ar.toLocaleString()} Ft</p>
                <p>Teljesítmény: ${auto.teljesitmeny} LE</p>
                <p>Motortérfogat: ${auto.motor} ccm</p>
                <p>Évjárat: ${auto.evjarat}</p>
                <p>Km: ${auto.km.toLocaleString()} km</p>
                <img src="${auto.kep}">
                <button><a href="kosar.html">Kell</a></button>
            </div>
        `;
    });
}

function applyFilter() {
    const price = parseInt(document.getElementById("priceFilter").value) || Infinity;
    const power = parseInt(document.getElementById("powerFilter").value) || 0;
    const engine = parseInt(document.getElementById("engineFilter").value) || 0;

    const filtered = autok.filter(auto =>
        auto.ar <= price &&
        auto.teljesitmeny >= power &&
        auto.motor >= engine
    );

    megjelenit(filtered);
}

window.onload = () => {
    megjelenit(autok);
};