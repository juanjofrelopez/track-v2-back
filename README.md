## TO DO

- [x] sign in and sign up user
- [x] implement auth middleware
- [x] implement attach user middleware
- [x] create portfolio
- [x] get all portfolio for a user, get a specific portfolio
- [x] test middlewares
- [x] Update a portfolio
- [x] define format for portfolio output table (transaction data and yields)
- [x] implement quote retrieval service for stocks and usd rate (current and historical)
  - The frontend will do all the calculations from these quotes.
- [x] Dockerize
- [ ] arreglar el tema de las colecciones de la base de datos los nombres y las lambda.
- [ ] add redis for ticker prices and quotes
- [ ] integrate meli payment subscription service
- [ ] implement zod validation
- [ ] Cant create user if email exits

## Portfolio output table format

DATE | TICKER | PRICE | QUANTITY | YIELD  
TOTAL YIELD

# Useful commands because i keep forgetting them xd

```bash
sudo docker build -t node-app .
sudo docker run node-app
sudo docker compose build
sudo docker compose up
```

# Database collections

## portfolios:

- \_id
- user_id
- name
- stocks : [{
  ticker: String,
  date: Number,
  price: Number,
  quantity: Number,
  }]

## users:

- \_id
- username
- password
- email

## dollarQuotes (once called "quotes")

- \_id
- date
- quote

## prices

- stocks: [{
  ticker : String
  price : Number
  }]
