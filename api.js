

function getAnimeQuotes() {
  fetch("https://animechan.vercel.app/api/quotes")
    .then(response => response.json())
    .then(quotes => {
      // Obtén las primeras 10 cotizaciones
      const randomQuotes = quotes.slice(0, 10);
      console.log(randomQuotes);
    })
    .catch(error => {
      console.log("Error al obtener las cotizaciones:", error);
    });
}
