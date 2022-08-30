const express = require("express")
const handlebars = require("express-handlebars")
const { engine } = handlebars

const app = express()
app.engine('handlebars', engine())
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index', {
    name: "Pedro Tashima",
    cvUrl: "/cv",
    disciplinasUrl: "/disciplinas",
    midiaUrl: "/midia",
  });
});

app.get('/cv', (req, res) => {
  res.render('cv', {
    cvEmbedUrl: "https://v2.rxresu.me/r/hnmp13",
  });
});

app.get('/disciplinas', (req, res) => {
  res.render('disciplinas', {
    disciplinas: [
      { code: "IF67H", name: "Programação Para Dispositivos Moveis" },
      { code: "IF64I", name: "Gerenciamento de Projeto De Software" },
      { code: "IF67I", name: "Programação Web 2" },
    ]
  });
});

app.get('/midia', (req, res) => {
  res.render('midia', {
    midias: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/pedrotashima/" },
      { name: "Github", url: "https://github.com/tashima42/" },
      { name: "Instagram", url: "https://instagram.com/tashima42/" },
    ]
  });
});

app.listen(3000, () => console.log('listening on port 3000'))


