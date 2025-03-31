const planetMultipliers = {
    Pluto: 0.06,
    Neptune: 1.148,
    Uranus: 0.917,
    Saturn: 1.139,
    Jupiter: 2.640,
    Mars: 0.3895,
    Moon: 0.1655,
    Earth: 1,
    Venus: 0.9032,
    Mercury: 0.377,
    Sun: 27.9,
};

document.getElementById("calculate-button").addEventListener("click", function() {
    const weight = parseFloat(document.getElementById("user-weight").value);
    const planet = document.getElementById("planets").value;
    const multiplier = planetMultipliers[planet];
    const result = weight * multiplier;
    document.getElementById("output").textContent = `If you were on ${planet}, you would weigh ${result}lbs!`;
});
