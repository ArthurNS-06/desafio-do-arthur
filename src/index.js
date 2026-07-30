let herois = [
    {nome: "Kratos Goat", xp: 12000 },
    {nome: "Joel Miller", xp: 4000 },
    {nome: "Arthur Morgan", xp: 8000 },
    {nome: "Nathan Drake", xp: 7000 },
    {nome: "Peter Parker", xp: 9000 },
];

for (let i = 0; i < herois.length; i++) {

    let nomeHeroi = herois[i].nome;
    let xp = herois[i].xp;
    let nivel;

    if (xp <= 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina"; 
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <=10000) {
        nivel = "Imortal";   
    } else {
        nivel = "Radiante";
    }

    console.log("O Herói de nome " + nomeHeroi + " possui " + xp + " de experiência e está classificado como " + nivel + ".");
}