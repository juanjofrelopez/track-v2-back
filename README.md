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
- [x] rollback del nombre de las colecciones de precios de stock y dolares
- [x] arreglar el tema de las colecciones de la base de datos los nombres y las lambda.
- [x] integrate real quote pricing
- [ ] implement trading history concept
- [ ] Cant create user if email exits
- [ ] implement zod validation

- [ ] add redis for ticker prices and quotes
- [ ] integrate MercadoPago payment subscription service

## UI TODO

- [x] add tabs for panel and trade history
- [ ] export portfolio as csv. in the same row as the portfolio title
- [ ] on hover on each row, three dots. "edit" and "delete"

## Portfolio output table format

| date       | ticker | price  | quantity | cost | yield |
| ---------- | ------ | ------ | -------- | ---- | ----- |
| 09/12/2018 | AAPL   | 123,23 | 5        | f2   | f1    |
| 09/12/2018 | SPY    | 453,23 | 9        | f2   | f1    |

f1 = (pt/pb)-1
f2 = price \* qty

sum all costs = cost
sum all profits = pt\*qty

TOTAL YIELD = (sum all profits / sum all costs) - 1

the backend serves the portfolio and the frontend makes the request for each stock price.

# Useful commands

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

## reorganization

v0.1:

total yield withouth acccounting for the ars-usd rate

prices -> last stock prices in usd
quotes -> ars-usd rates (unusable for now)

v0.2:

- [ ] implement trade history
