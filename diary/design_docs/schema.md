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

___


##  `products`
| column name    | data type | details                   |
|----------------|-----------|---------------------------|
| `id`           | integer   | not null, primary key     |
| `name`         | string    | not null, indexed, unique |
| `tagline`      | string    | not null                  |
| `category`     | string    | not null                  |
| `price`        | integer   | not null                  |
| `created_at`   | datetime  | not null                  |
| `updated_at`   | datetime  | not null                  |
* index on `name, unique: true`

##  `variations`
| column name    | data type | details                   |
|----------------|-----------|---------------------------|
| `id`           | integer   | not null, primary key     |
| `product_id`   | integer   | not null, indexed, unique, foreign_key|
| `variation_type`| string   | not null                  |
| `name`         | string    | not null                  |
| `primary`      | boolean   | not null                  |
| `stock`        | integer   | not null                  |
| `created_at`   | datetime  | not null                  |
| `updated_at`   | datetime  | not null                  |
* index on `product_id, unique: true`
* `product_id` references `products`

##  `description`
| column name    | data type | details                   |
|----------------|-----------|---------------------------|
| `id`           | integer   | not null, primary key     |
| `product_id`   | integer   | not null, indexed, unique, foreign_key|
| `title`        | string    | not null                  |
| `what_it_is`   | string    | not null                  |
| `why_its_special`| array   | not null                  |
| `good_to_know` | string    | not null                  |
| `created_at`   | datetime  | not null                  |
| `updated_at`   | datetime  | not null                  |
* index on `product_id, unique: true`
* `product_id` references `products`

##  `instructions`
| column name    | data type | details                   |
|----------------|-----------|---------------------------|
| `id`           | integer   | not null, primary key     |
| `product_id`   | integer   | not null, indexed, unique, foreign_key|
| `steps`        | array     | not null                  |
| `created_at`   | datetime  | not null                  |
| `updated_at`   | datetime  | not null                  |
* index on `product_id, unique: true`
* `product_id` references `products`
___


## `sizes`
| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| `id`              | integer   | not null, primary key     |
| `imperial`        | string    | not null, indexed, unique |
| `metric`          | string    | not null                  |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |
* index on `imperial, unique: true`

## `categories`
| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| `id`              | integer   | not null, primary key     |
| `name`            | string    | not null, indexed, unique |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |
* index on `name, unique: true`

## `ingredients`
| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| `id`              | integer   | not null, primary key     |
| `name`            | string    | not null, indexed, unique |
| `body`            | string    | not null                  |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |
* index on `name, unique: true`

## `tags`
| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| `id`              | integer   | not null, primary key     |
| `name`            | string    | not null, indexed, unique |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |
* index on `name, unique: true`

___


## `product-sizes`
| column name        | data type | details                                |
|--------------------|-----------|----------------------------------------|
| `id`               | integer   | not null, primary key                  |
| `product_id`       | integer   | not null, indexed, unique, foreign_key |
| `size_id`          | integer   | not null, indexed, foreign_key         |
| `created_at`       | datetime  | not null                               |
| `updated_at`       | datetime  | not null                               |
* index on `product_id`
* index on `size_id`
* `product_id` references `products, unique: true`
* `size_id` references `sizes`

## `product-categories`
| column name        | data type | details                                |
|--------------------|-----------|----------------------------------------|
| `id`               | integer   | not null, primary key                  |
| `product_id`       | integer   | not null, indexed, unique, foreign_key |
| `category_id`      | integer   | not null, indexed, foreign_key         |
| `created_at`       | datetime  | not null                               |
| `updated_at`       | datetime  | not null                               |
* index on `product_id`
* index on `category_id`
* `product_id` references `products, unique: true`
* `category_id` references `categories`

## `product-ingredients`
| column name        | data type | details                                |
|--------------------|-----------|----------------------------------------|
| `id`               | integer   | not null, primary key                  |
| `product_id`       | integer   | not null, indexed, unique, foreign_key |
| `ingredient_id`    | integer   | not null, indexed, foreign_key         |
| `created_at`       | datetime  | not null                               |
| `updated_at`       | datetime  | not null                               |
* index on `product_id`
* index on `ingredient_id`
* `product_id` references `products, unique: true`
* `ingredient_id` references `ingredients`

## `product-tags`
| column name        | data type | details                                |
|--------------------|-----------|----------------------------------------|
| `id`               | integer   | not null, primary key                  |
| `product_id`       | integer   | not null, indexed, unique, foreign_key |
| `tag_id`           | integer   | not null, indexed, foreign_key         |
| `created_at`       | datetime  | not null                               |
| `updated_at`       | datetime  | not null                               |
* index on `product_id`
* index on `tag_id`
* `product_id` references `products, unique: true`
* `tag_id` references `tags`

___


## `carts`
| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| `id`              | integer   | not null, primary key     |
| `user_id`         | integer   | not null, indexed, unique, foreign_key|
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |
* index on `user_id, unique: true`
* `author_id` references `users`

## `cart-items`
| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| `id`              | integer   | not null, primary key     |
| `product_id`      | integer   | not null, indexed, foreign_key| * will eventually be the product variation
| `cart_id`         | integer   | not null, indexed, foreign_key|
| `quantity  `      | integer   | not null                  |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |
* index on `product_id`
* index on `cart_id`
* `product_id` references `products`
* `cart_id` references `carts`


___


## `orders`
| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| `order_number`    | integer   | not null, primary key     |
| `user_id`         | integer   | not null, indexed, foreign_key|
| `total`           | float     | not null                  |
| `tracking_number` | string    | not null, unique, indexed |
| `status`          | string    | not null                  |
| `address_id`      | integer   | not null, indexed, foreign_key|
| `payment_id`      | integer   | not null, indexed, foreign_key|
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |
* index on `user_id`
* index on `tracking_number, unique: true`
* index on `address_id`
* index on `payment_id`
* `address_id` references `address`
* `payment_id` references `payment`

## `order-product`
| column name        | data type | details                                |
|--------------------|-----------|----------------------------------------|
| `id`               | integer   | not null, primary key                  |
| `order_id`         | integer   | not null, indexed, unique, foreign_key |
| `product_id`       | integer   | not null, indexed, foreign_key         |
| `created_at`       | datetime  | not null                               |
| `updated_at`       | datetime  | not null                               |
* index on `product_id`
* index on `order_id`
* `product_id` references `products, unique: true`
* `order_id` references `order`

___


## `payments`
| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| `id`              | integer   | not null, primary key     |
| `user_id`         | integer   | not null, indexed, foreign_key     |
| `type`            | string    | not null                  |
| `number`          | integer   | not null, unique, indexed |
| `expiration_date` | datetime  | not null                  |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |
* index on `user_id`
* index on `expiration_date, unique: true`
* `author_id` references `users`

___


## `reviews`
| column name   | data type | details               |
|---------------|-----------|-----------------------|
| `id`          | integer   | not null, primary key |
| `user_id`     | integer   | not null, indexed, foreign_key |
| `title`       | string    | not null              |
| `body`        | string    | not null              |
| `product_id`  | integer   | not null, indexed, foreign_key |
| `description` | text      | not null              |
| `skin_type`   | string    |                       |
| `skin_shade`  | string    |                       |
| `age_range`   | string    |                       |
| `recommend`   | boolean   |                       |
| `created_at`  | datetime  | not null              |
| `updated_at`  | datetime  | not null              |
* index on `user_id`
* index on `product)id`
* `author_id` references `users`
* `product_id` references `products`

