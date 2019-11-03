# Database Schema
## `users`
| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| `id`              | integer   | not null, primary key     |
| `first_name`      | string    |                           |
| `last_name`       | string    |                           |
| `email`           | string    | not null, indexed, unique |
| `password_digest` | string    | not null                  |
| `session_token`   | string    | not null, indexed, unique |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |
* index on `email, unique: true`
* index on `session_token, unique: true`

##  `products`
| column name    | data type | details                   |
|----------------|-----------|---------------------------|
| `id`           | integer   | not null, primary key     |
| `name`         | string    | not null, indexed, unique |
| `category`     | string    | not null, indexed         |
| `tagline`      | text      | not null                  |
| `description`  | text      | not null                  |
| `ingredients`  | blob      | not null                  |
| `instructions` | text      | not null                  |
| `variations`   | blob      |                           |
| `created_at`   | datetime  | not null                  |
| `updated_at`   | datetime  | not null                  |
* index on `name, unique: true`
* index on `category, unique: true`

## `product-descriptions`
| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| `id`              | integer   | not null, primary key     |
| `product_id`      | string    | not null, indexed, unique, foreign_key|
| `title`           | string    | not null                  |
| `body`            | string    | not null                  |
| `notes`           | string    | not null                  |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |
* index on `product_id, unique: true`
* `product_id` references `products`

## `product-ingredients`
| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| `id`              | integer   | not null, primary key     |
| `product_id`      | string    | not null, indexed, foreign_key|
| `title`           | string    | not null                  |
| `body`            | string    | not null                  |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |
* index on `product_id, unique: true`
* `product_id` references `products`

## `product-directions`
| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| `id`              | integer   | not null, primary key     |
| `product_id`      | string    | not null, indexed, foreign_key|
| `body`            | string    | not null                  |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |
* index on `product_id, unique: true`
* `product_id` references `products`

## `carts`
| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| `id`              | integer   | not null, primary key     |
| `user_id`         | string    | not null, indexed, unique, foreign_key|
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |
* index on `user_id, unique: true`
* `author_id` references `users`

## `carts-products`
| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| `id`              | integer   | not null, primary key     |
| `user_id`         | string    | not null, indexed, foreign_key|
| `cart_id`         | string    | not null, indexed, foreign_key|
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |
* index on `user_id`
* index on `cart_id`
* `user_id` references `user`
* `cart_id` references `carts`

## `product-tags`
| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| `id`              | integer   | not null, primary key     |
| `product_id`      | string    | not null, indexed, foreign_key|
| `description`     | string    | not null                  |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |
* index on `product_id`
* `product_id` references `products`

## `product-promotions`
| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| `id`              | integer   | not null, primary key     |
| `product_id`      | string    | not null, indexed, foreign_key|
| `description`     | string    | not null                  |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |
* index on `product_id`
* `product_id` references `products`

## `reviews`
| column name   | data type | details               |
|---------------|-----------|-----------------------|
| `id`          | integer   | not null, primary key |
| `user_id`     | string    | not null, indexed, foreign_key |
| `title`       | string    | not null              |
| `body`        | string    | not null              |
| `product_id`  | string    | not null, indexed, foreign_key |
| `description` | text      | not null              |
| `skin_type`   | string    | not null              |
| `skin_shade`  | string    | not null              |
| `age_range`   | string    | not null              |
| `recommend`   | boolean   | not null              |
| `created_at`  | datetime  | not null              |
| `updated_at`  | datetime  | not null              |
* index on `user_id`
* index on `product)id`
* `author_id` references `users`
* `product_id` references `products`

## orders
| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| `order_number`    | integer   | not null, primary key     |
| `user_id`         | string    | not null, indexed, foreign_key|
| `total`           | integer   | not null                  |
| `tracking_number` | string    | not null, unique, indexed |
| `status`          | string    | not null                  |
| `address`         | string    | not null                  |
| `billing`         | blob      | not null                  |
| `products`        | blob      | not null                  |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |
* index on `user_id`
* index on `tracking_number, unique: true`

## payments
| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| `id`              | integer   | not null, primary key     |
| `user_id`         | string    | not null, indexed, foreign_key     |
| `type`            | string    | not null                  |
| `number`          | integer   | not null, unique, indexed |
| `expiration_date` | datetime  | not null                  |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |
* index on `user_id`
* index on `expiration_date, unique: true`
* `author_id` references `users`


