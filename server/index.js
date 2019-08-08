const Redis = require("ioredis");

const clientRedis = new Redis(process.env.REDIS_URL);

const Gateway = require("micromq/gateway");

const app = new Gateway({
  microservices: ["db_writer"],
  rabbit: {
    url: process.env.RABBIT_URL
  },
  requests: {
    timeout: 5000
  }
});

app.get("/top5", (req, res) => {
  clientRedis.get("top5", (err, reply) => {
    let resBody;
    if (!err) {
      resBody = JSON.parse(reply);
    }
    res.status(200).json(resBody || []);
  });
});

app.post(["/author", "/book"], async (req, res) => {
  await res.delegate("db_writer");
});

app.listen(process.env.PORT);
