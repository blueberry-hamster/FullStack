# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#---------------------------------------------------------
# USERS
User.destroy_all
User.create(
  first_name: 'Tomato', 
  last_name: 'Potato', 
  email: 'tomato@gmail.com', 
  password: 'password'
)
# User.create(
#   first_name: '',
#   last_name: '',
#   email: '',
#   password: ''
# )
#---------------------------------------------------------

#---------------------------------------------------------
# PRODUCTS
Product.destroy_all
Product.create(
  name: 'Milky Jelly Cleanser',
  tagline: 'conditioning face wash',
  price: 18
)
Product.create(
  name: 'Balm Dotcom',
  tagline: 'universal skin salve',
  price: 12
)
Product.create(
  name: 'Solution',
  tagline: 'exfoliating skin perfector',
  price: 24
)
Product.create(
  name: 'Generation G',
  tagline: 'sheer matte lipstick',
  price: 18
)
Product.create(
  name: 'Cloud Paint',
  tagline: 'seamless cheek color',
  price: 18
)
Product.create(
  name: 'Boy Brow',
  tagline: 'grooming pomade',
  price: 16
)
# Product.create(
#   name: '',
#   tagline: '',
#   price:
# )
#---------------------------------------------------------

# #---------------------------------------------------------
# # VARIATIONS
# Variation.destroy_all
# #---------------------------------------------------------

# #---------------------------------------------------------
# # DESCRIPTION
# Description.destroy_all
# #---------------------------------------------------------

# #---------------------------------------------------------
# # INSTRUCTIONS
# Instruction.destroy_all
# #---------------------------------------------------------

# #---------------------------------------------------------
# # SIZES
# Size.destroy_all
# #---------------------------------------------------------

# #---------------------------------------------------------
# # CATEGORIES
# Category.destroy_all
# #---------------------------------------------------------

# #---------------------------------------------------------
# # INGREDIENTS
# Ingredient.destroy_all
# #---------------------------------------------------------

# #---------------------------------------------------------
# # TAGS
# Tag.destroy_all
# #---------------------------------------------------------

# #---------------------------------------------------------
# # PRODUCT SIZES
# ProductSize.destroy_all
# #---------------------------------------------------------

# #---------------------------------------------------------
# # PRODUCT CATEGORIES
# ProductCategory.destroy_all
# #---------------------------------------------------------

# #---------------------------------------------------------
# # PRODUCT INGREDIENTS
# ProductIngredient.destroy_all
# #---------------------------------------------------------

# #---------------------------------------------------------
# # PRODUCT TAGS
# ProductTag.destroy_all
# #---------------------------------------------------------