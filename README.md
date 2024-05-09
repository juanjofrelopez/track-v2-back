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
- [ ] arreglar el tema de las colecciones de la base de datos los nombres y las lambda.
- [ ] add redis for ticker prices and quotes
- [ ] integrate meli payment subscription service
- [ ] implement zod validation
- [ ] Dockerize

## Portfolio output table format

DATE | TICKER | PRICE | QUANTITY | YIELD  
TOTAL YIELD

## Database collections

- portfolios
- users
- dollarQuotes
- prices
