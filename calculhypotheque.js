function calculer(formulaire) {
  var montant = formulaire.montant.value;
  var taux = formulaire.taux.value;
  var terme = formulaire.terme.value;

  console.log("montant!!!!:", montant);
  console.log("montant!!!!:", taux);
  console.log("montant!!!!:", terme);
  var paye_mensuel = trouve_paiement(montant, taux / 12, terme * 12);

  setTimeout(() => {
    alert(
      "Montant de l'emprunt :\t$" +
        montant +
        "\n" +
        "Taux d'intérêt annuel :\t" +
        taux * 100 +
        "%\n" +
        "Amortissement :\t\t" +
        terme +
        " années\n\n" +
        "Paiement mensuel :\t$" +
        paye_mensuel
    );
  }, 1000);
}
function trouve_paiement(montant, taux, terme) {
  var PAY = (montant * taux) / (1 - Math.pow(1 + taux, -terme));
  console.log("PAY!!!!:", PAY);
  return PAY;
}
