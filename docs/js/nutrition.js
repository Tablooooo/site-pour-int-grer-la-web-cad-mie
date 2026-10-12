// Calculateur de Métabolisme Basal
document.getElementById("bmr-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const age = parseFloat(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  let bmr;
  if (gender === "male") {
    bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  } else {
    bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
  }

  document.getElementById(
    "bmr-result"
  ).textContent = `Votre métabolisme basal est d'environ ${bmr.toFixed(
    0
  )} kcal/jour.`;
});

// Calculateur d'IMC
document.getElementById("imc-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const weight = parseFloat(document.getElementById("imc-weight").value);
  const height = parseFloat(document.getElementById("imc-height").value) / 100; // en mètres

  const imc = weight / (height * height);
  let category;
  if (imc < 18.5) category = "Maigreur";
  else if (imc < 25) category = "Poids normal";
  else if (imc < 30) category = "Surpoids";
  else category = "Obésité";

  document.getElementById(
    "imc-result"
  ).textContent = `Votre IMC est de ${imc.toFixed(1)} (${category}).`;
});
