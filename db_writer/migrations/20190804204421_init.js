exports.up = async knex => {
  await knex.schema.createTable("authors", table => {
    table.increments();
    table.string("name").notNullable();
    table.integer("age").notNullable();
  });
  await knex.schema.createTable("books", table => {
    table.increments();
    table.string("title").notNullable();
    table.integer("pages").notNullable();
    table.integer("author_id").notNullable();
    table.foreign("author_id").references("authors.id");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("authors");
  await knex.schema.dropTable("books");
};
