const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => res.type('html').send(html));

app.get('/req', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.get('/meunome', (req, res) => {
    console.log("Just got a request!")
    res.send('teco')
})

app.get('/tico', (req, res) => {
    console.log("Just got a request!")
    res.send('teco')
})

app.get('/pokemons', (req, res) => {
    console.log("Just got a request!")
    res.json([
    {
      "numero": 25,
      "nome": "Pikachu",
      "tipo": ["Elétrico"],
      "capturado_em": "Pallet Town"
    },
    {
      "numero": 16,
      "nome": "Pidgeotto",
      "tipo": ["Normal", "Voador"],
      "capturado_em": "Viridian Forest"
    },
    {
      "numero": 19,
      "nome": "Rattata",
      "tipo": ["Normal"],
      "capturado_em": "Viridian Forest"
    },
    {
      "numero": 12,
      "nome": "Butterfree",
      "tipo": ["Inseto", "Voador"],
      "capturado_em": "Viridian Forest"
    },
    {
      "numero": 23,
      "nome": "Ekans",
      "tipo": ["Veneno"],
      "capturado_em": "Viridian Forest"
    },
    {
      "numero": 4,
      "nome": "Charmander",
      "tipo": ["Fogo"],
      "capturado_em": "Route 3"
    },
    {
      "numero": 7,
      "nome": "Squirtle",
      "tipo": ["Água"],
      "capturado_em": "Route 24"
    },
    {
      "numero": 13,
      "nome": "Weedle",
      "tipo": ["Inseto", "Veneno"],
      "capturado_em": "Viridian Forest"
    },
    {
      "numero": 14,
      "nome": "Kakuna",
      "tipo": ["Inseto", "Veneno"],
      "capturado_em": "Viridian Forest"
    },
    {
      "numero": 3,
      "nome": "Venusaur",
      "tipo": ["Planta", "Veneno"],
      "capturado_em": "Kanto"
    }
  ]
)
})

app.get("/series", (req, res) => {
  console.log("Just got a request!")
  res.json({
  "meus_3_seriados_favoritos": [
    {
      "titulo": "Breaking Bad",
      "genero": ["Crime", "Drama", "Suspense"],
      "ano_inicial": 2008,
      "ano_final": 2013,
      "sinopse": "A história de Walter White, um professor de química que, ao ser diagnosticado com câncer terminal, decide se envolver no tráfico de drogas para garantir o futuro financeiro de sua família."
    },
    {
      "titulo": "Game of Thrones",
      "genero": ["Fantasia", "Drama", "Ação"],
      "ano_inicial": 2011,
      "ano_final": 2019,
      "sinopse": "Em um mundo medieval fictício, várias famílias lutam pelo controle do Trono de Ferro e pela supremacia em Westeros, enquanto forças sobrenaturais ameaçam a humanidade."
    },
    {
      "titulo": "Stranger Things",
      "genero": ["Ficção científica", "Mistério", "Terror"],
      "ano_inicial": 2016,
      "ano_final": "Em andamento",
      "sinopse": "Um grupo de crianças tenta desvendar os mistérios e confrontar criaturas sobrenaturais na cidade de Hawkins, onde eventos estranhos estão acontecendo após o desaparecimento de um amigo."
    }
  ]
}
)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello Express API 
    </section>
  </body>
</html>
`
