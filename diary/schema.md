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

## `addresses`
| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| `id`              | integer   | not null, primary key     |
| `user_id`         | string    | not null, indexed, unique, foreign_key|
| `address_1`       | string    | not null                  |
| `address_2`       | string    |                           |
| `city`            | string    | not null                  |
| `state`           | string    | not null                  |
| `zip_code`        | string    | not null                  |
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
| `description`  | blob      | not null                  |
| `directions`   | blob      | not null                  |
| `created_at`   | datetime  | not null                  |
| `updated_at`   | datetime  | not null                  |
* index on `name, unique: true`
* index on `category, unique: true`

##  `product-variations`
| column name    | data type | details                   |
|----------------|-----------|---------------------------|
| `id`           | integer   | not null, primary key     |
|`product_id`    | string    | not null, indexed, unique, foreign_key|
|`variation-type`| string    | not null                  |
| `name`         | string    | not null                  |
| `primary`      | boolean   | not null                  |
| `stock`        | integer   | not null                  |
| `created_at`   | datetime  | not null                  |
| `updated_at`   | datetime  | not null                  |
* index on `product_id, unique: true`
* index on `category, unique: true`
* `product_id` references `products`

##  `product-description`
| column name    | data type | details                   |
|----------------|-----------|---------------------------|
| `id`           | integer   | not null, primary key     |
| `product_id`   | string    | not null, indexed, unique, foreign_key|
| `title`        | string    | not null                  |
| `body`         | string    | not null                  |
| `notes`        | string    | not null                  |
| `created_at`   | datetime  | not null                  |
| `updated_at`   | datetime  | not null                  |
* index on `product_id, unique: true`
* `product_id` references `products`

##  `product-instructions`
| column name    | data type | details                   |
|----------------|-----------|---------------------------|
| `id`           | integer   | not null, primary key     |
| `product_id`   | string    | not null, indexed, unique, foreign_key|
| `steps`        | blob      | not null                  |
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

## `promotions`
| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| `id`              | integer   | not null, primary key     |
| `name`            | string    | not null, indexed, unique |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |
* index on `name, unique: true`

___


## `product-sizes-join`
| column name        | data type | details                                |
|--------------------|-----------|----------------------------------------|
| `id`               | integer   | not null, primary key                  |
| `product_id`       | string    | not null, indexed, unique, foreign_key |
| `product_sizes_id` | string    | not null, indexed, foreign_key         |
| `created_at`       | datetime  | not null                               |
| `updated_at`       | datetime  | not null                               |
* index on `product_id`
* index on `product_sizes_id`
* `product_id` references `products, unique: true`
* `product_sizes_id` references `product_sizes`

## `product-categories-join`
| column name        | data type | details                                |
|--------------------|-----------|----------------------------------------|
| `id`               | integer   | not null, primary key                  |
| `product_id`       | string    | not null, indexed, unique, foreign_key |
| `product_categories_id` | string    | not null, indexed, foreign_key         |
| `created_at`       | datetime  | not null                               |
| `updated_at`       | datetime  | not null                               |
* index on `product_id`
* index on `product_categories_id`
* `product_id` references `products, unique: true`
* `product_categories_id` references `product_categories`

## `product-ingredients-join`
| column name        | data type | details                                |
|--------------------|-----------|----------------------------------------|
| `id`               | integer   | not null, primary key                  |
| `product_id`       | string    | not null, indexed, unique, foreign_key |
| `product_ingredients_id` | string    | not null, indexed, foreign_key         |
| `created_at`       | datetime  | not null                               |
| `updated_at`       | datetime  | not null                               |
* index on `product_id`
* index on `product_ingredients_id`
* `product_id` references `products, unique: true`
* `product_ingredients_id` references `product_ingredients`

## `product-tags-join`
| column name        | data type | details                                |
|--------------------|-----------|----------------------------------------|
| `id`               | integer   | not null, primary key                  |
| `product_id`       | string    | not null, indexed, unique, foreign_key |
| `product_tags_id`  | string    | not null, indexed, foreign_key         |
| `created_at`       | datetime  | not null                               |
| `updated_at`       | datetime  | not null                               |
* index on `product_id`
* index on `product_tags_id`
* `product_id` references `products, unique: true`
* `product_tags_id` references `product_tags`

## `product-promotions-join`
| column name        | data type | details                                |
|--------------------|-----------|----------------------------------------|
| `id`               | integer   | not null, primary key                  |
| `product_id`       | string    | not null, indexed, unique, foreign_key |
| `product_promotions_id` | string    | not null, indexed, foreign_key         |
| `created_at`       | datetime  | not null                               |
| `updated_at`       | datetime  | not null                               |
* index on `product_id`
* index on `product_promotions_id`
* `product_id` references `products, unique: true`
* `product_promotions_id` references `product_promotions`

___


## `carts`
| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| `id`              | integer   | not null, primary key     |
| `user_id`         | string    | not null, indexed, unique, foreign_key|
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |
* index on `user_id, unique: true`
* `author_id` references `users`

## `carts-products-join`
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
* `product_id` references `products`


___


## `orders`
| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| `order_number`    | integer   | not null, primary key     |
| `user_id`         | string    | not null, indexed, foreign_key|
| `total`           | float     | not null                  |
| `tracking_number` | string    | not null, unique, indexed |
| `status`          | string    | not null                  |
| `address_id`      | string    | not null, indexed, foreign_key|
| `payment_id`      | string    | not null, indexed, foreign_key|
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |
* index on `user_id`
* index on `tracking_number, unique: true`
* index on `address_id`
* index on `payment_id`
* `address_id` references `address`
* `payment_id` references `payment`

## `order-product-join`
| column name        | data type | details                                |
|--------------------|-----------|----------------------------------------|
| `id`               | integer   | not null, primary key                  |
| `order_id`         | string    | not null, indexed, unique, foreign_key |
| `product_id`       | string    | not null, indexed, foreign_key         |
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
| `user_id`         | string    | not null, indexed, foreign_key     |
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
| `user_id`     | string    | not null, indexed, foreign_key |
| `title`       | string    | not null              |
| `body`        | string    | not null              |
| `product_id`  | string    | not null, indexed, foreign_key |
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

