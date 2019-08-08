const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig);
const MicroMQ = require("micromq");

const app = new MicroMQ({
  name: "db_writer",
  rabbit: {
    url: process.env.RABBIT_URL
  },
  noAck: true
});

app.post("/author", (req, res) => {
  addAuthor(req.body)
    .then(() => res.status(200).json({ ok: true }))
    .catch(err => res.status(500).json(err));
});

app.post("/book", (req, res) => {
  addBook(req.body)
    .then(() => res.status(200).json({ ok: true }))
    .catch(err => res.status(500).json(err));
});

function addAuthor({ name, age }) {
  return knex("authors").insert({ name: name, age: age });
}

function addBook({ title, pages, author_id }) {
  return knex("books").insert({
    title: title,
    pages: pages,
    author_id: author_id
  });
}

async function main() {
  console.log("starting migrations");
  await knex.migrate.latest();
  console.log("migrations done");
}

main().catch(e => console.error(e));

app.start();
