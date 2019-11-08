# Backend Routes
## HTML
* `GET / StaticPagesController#root`

## API Endpoints
### `users`
* `GET /api/users` - shows the user account details
* `POST /api/users` - sign up

### `session`
* `POST /api/session` - log in
* `DELETE /api/session` - log out

### `products`
* `GET /api/products` - returns all products
* `GET /api/products/:category` - return all products of a category
* `GET /api/products/:productName` - return a product

### `orders`
* `POST /api/orders/:orderId` - make an order
* `GET /api/orders/:userId` - gets all orders of a user