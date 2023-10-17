function envoyerMessageRemerciement(nom, email) {
    // Créer un objet JSON contenant le message de remerciement
    const message = {
      nom: nom,
      email: email,
      contenu: `Bonjour ${nom},
  
      Merci pour votre inscription sur notre plateforme de microservices.
  
      Nous vous souhaitons une bonne continuation dans votre carrière de freelancer.
  
      Cordialement,
      La plateforme de microservices`,
    };
  
    // Envoyer le message de remerciement par e-mail
    fetch("https://example.com/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  }
  
  // Appeler la fonction
  envoyerMessageRemerciement(nom, email);
  