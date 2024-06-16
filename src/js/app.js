const shareBtn = document.getElementById('shareBtn')

shareBtn.addEventListener('click', event => {

  // Verifique la compatibilidad con la API Web Share
  if (navigator.share) {
    // El navegador admite API compartida nativa
    navigator.share({
      text: 'Por favor lea este gran artículo: ',
      url: 'https://www.google.com/'
    }).then(() => {
      console.log('¡Gracias por compartir!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("El navegador actual no admite la función de compartir. Por favor, comparte manualmente el enlace.")
  }
});