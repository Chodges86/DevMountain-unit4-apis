let button = document.querySelector("button");

button.addEventListener("click", buttonClicked);

function buttonClicked() {
  axios
    .get("https://swapi.dev/api/planets/?search=Alderaan")
    .then((res) => {
    const result = res.data.results[0];

    for (i in result.residents) {
      axios
        .get(result.residents[i])
        .then((res) => {
        const name = res.data.name
        const h2 = document.createElement("h2")
        document.body.appendChild(h2)
        h2.textContent = name
        console.log(name)
      });
    }
  });
}
