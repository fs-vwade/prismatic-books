# Seed the Database

1. Install Prisma Client, which we will use to interact with the database.\
   `npm install @prisma/client`
1. Create and export a new `PrismaClient` in `prisma/index.js`.
   ```js
   const { PrismaClient } = require("@prisma/client");
   const prisma = new PrismaClient();
   module.exports = prisma;
   ```
1. In `prisma/seed.js`, seed 10 books into the database. The book titles can be placeholders e.g. Book 1, Book 2, etc. Refer to [the docs on how to create many records](https://www.prisma.io/docs/orm/prisma-client/queries/crud#create-multiple-records).
   ```js
   const prisma = require("../prisma");
   const seed = async () => {
     // TODO: Create 10 books with placeholder titles
   };
   seed()
     .then(async () => await prisma.$disconnect())
     .catch(async (e) => {
       console.error(e);
       await prisma.$disconnect();
       process.exit(1);
     });
   ```
1. Update `package.json` to configure Prisma's integrated seeding functionality.
   ```json
   "prisma": {
     "seed": "node prisma/seed.js"
   }
   ```
1. Use Prisma Migrate to completely reset and seed the database.\
   `npx prisma migrate reset`
   - Note: this is designed to be used in _development_ only! Another option is `npx prisma db seed`, but that will not clear existing data. `reset` is simpler to use (for now).
1. Confirm that the database is correctly seeded with 10 books.\
   `npx prisma studio`
