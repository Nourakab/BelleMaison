function confirmer(formulaire) {
  var nom = formulaire.nom.value;
  var prenom = formulaire.prenom.value;
  var email = formulaire.email.value;
  var adresse = formulaire.adresse.value;
  var datenaissance = formulaire.date_de_naissance.value;
  confirm(
    "Nom :" +
      nom +
      " Prenom " +
      prenom +
      "Email :" +
      email +
      " Adresse " +
      adresse +
      "Date de naissance" +
      date_de_naissance +
      "Confirmé! Le client est enregistré "
  );
  alert("Vos informations sont enregistrées");
}
