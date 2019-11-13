# Backend Routes
## HTML
* `GET / StaticPagesController#root`

## API Endpoints
### `users`
* `GET /api/users` - shows the user account details
* `POST /api/users` - sign up: allows users to make a new account

### `session`
* `POST /api/session` - log in: allows existing users to log in
* `DELETE /api/session` - log out: allows current user to log out

### `products`
* `GET /api/products` - returns all products, each with basic data attached
* `GET /api/products/:productName` - return a single product, with all of it's associated data attached

### `orders`
* `POST /api/orders/:orderId` - allows a user to make an order
* `GET /api/orders/:userId` - gets all the basic information of a user's orders