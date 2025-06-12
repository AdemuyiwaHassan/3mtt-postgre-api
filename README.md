# Express.js + PostgreSQL CRUD API

## Setup Instructions

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Create PostgreSQL database**

```bash
   CREATE TABLE users (
   id SERIAL PRIMARY KEY,
   name VARCHAR(100),
   email VARCHAR(100),
   age INTEGER
   );
```

3. **Configure DB credentials in `db.js`**
4. **Run the server**
   ```bash
   node src/index.js
   ```
5. **Test using Postman**

- GET `/users`
- GET `/users/:id`
- POST `/users`
- PUT `/users/:id`
- DELETE `/users/:id`
