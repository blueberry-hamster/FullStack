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
milky_jelly_cleanser = Product.create!(
  name: 'Milky Jelly Cleanser',
  tagline: 'conditioning face wash',
  price: 18
)
balm_dotcom = Product.create!(
  name: 'Balm Dotcom',
  tagline: 'universal skin salve',
  price: 12
)
solution = Product.create!(
  name: 'Solution',
  tagline: 'exfoliating skin perfector',
  price: 24
)
generation_g = Product.create!(
  name: 'Generation G',
  tagline: 'sheer matte lipstick',
  price: 18
)
cloud_paint = Product.create!(
  name: 'Cloud Paint',
  tagline: 'seamless cheek color',
  price: 18
)
boy_brow = Product.create!(
  name: 'Boy Brow',
  tagline: 'grooming pomade',
  price: 16
)
priming_mosturizer_rich = Product.create!(
  name: 'Priming Moisturizer Rich',
  tagline: 'ultrarich moisturizer',
  price: 35
)
lip_gloss = Product.create!(
  name: 'Lip Gloss',
  tagline: 'all shine, no ick',
  price: 14
)
# name = Product.create!(
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
Category.destroy_all
skincare = Category.create!(
  name: 'Skincare'
)
makeup = Category.create!(
  name: 'Makeup'
)
body = Category.create!(
  name: 'Body'
)
fragrance = Category.create!(
  name: 'Fragrance'
)
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
ProductCategory.destroy_all
ProductCategory.create!(
  product_id: milky_jelly_cleanser.id,
  category_id: skincare.id
)
ProductCategory.create!(
  product_id: balm_dotcom.id,
  category_id: skincare.id
)
ProductCategory.create!(
  product_id: solution.id,
  category_id: skincare.id
)
ProductCategory.create!(
  product_id: generation_g.id,
  category_id: makeup.id
)
ProductCategory.create!(
  product_id: cloud_paint.id,
  category_id: makeup.id
)
ProductCategory.create!(
  product_id: boy_brow.id,
  category_id: makeup.id
)
ProductCategory.create!(
  product_id: priming_mosturizer_rich.id,
  category_id: skincare.id
)
ProductCategory.create!(
  product_id: lip_gloss.id,
  category_id: makeup.id
)
# ProductCategory.create!(
#   product_id: product.id,
#   category_id: skincare.id
# )
# #---------------------------------------------------------

# #---------------------------------------------------------
# # PRODUCT INGREDIENTS
# ProductIngredient.destroy_all
# #---------------------------------------------------------

# #---------------------------------------------------------
# # PRODUCT TAGS
# ProductTag.destroy_all
# #---------------------------------------------------------