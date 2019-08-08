const Redis = require("ioredis");
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig);
const clientRedis = new Redis(process.env.REDIS_URL);

setInterval(() => {
  knex
    .select("authors.id", "name", "age")
    .from("authors")
    .leftJoin("books", "authors.id", "books.author_id")
    .where("books.pages", ">", 200)
    .groupBy("authors.id")
    .orderBy(knex.raw("COUNT(*)"), "desc")
    .limit(5)
    .then(data => clientRedis.set("top5", JSON.stringify(data)))
    .catch(e => console.log(e));
}, 60000);
