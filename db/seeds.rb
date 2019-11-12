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
Description.destroy_all
milky_jelly_cleanser_description = Description.create!(
  product_id: milky_jelly_cleanser.id,
  title: 'Everything a cleanser should be.',
  what_it_is: 'A gentle-yet-effective creamy gel face wash for all skin types',
  why_its_special: [
    'A pH-balanced daily cleanser with five skin conditioners that won’t leave your skin irritated or feeling tight',
    'The same gentle cleansing agents found in contact lens solution make it safe for eyes',
    'Use it on dry skin to remove dirt and makeup, or on wet skin for a refresh'
  ],
  good_to_know: 'hypoallergenic, dermatologist tested, safe for the eye area, ophthalmologist tested, appropriate for all skin types, soap free, paraben free, sulfate free, cruelty free, non-comedogenic, vegan'
)
balm_dotcom_description = Description.create!(
  product_id: balm_dotcom.id,
  title: 'Our cult favorite do-everything skin salve.',
  what_it_is: 'A hydrating lip balm packed with antioxidants and natural emollients to nourish dry, chafed skin—in original or seven fun flavors',
  why_its_special: [
    'Choose from Original (which doubles as a skin salve) or seven flavored formulas (Mint and Coconut go on clear, while the others give a sheer tint)',
    'Formulated with nature’s heavy-duty moisturizers: Castor Oil, Beeswax, and Lanolin',
    'Dense, waxy texture stays in place to seal in moisture',
    'Leaves lips looking smooth and hydrated, not shiny'
  ],
  good_to_know: 'hypoallergenic, dermatologist tested, long-lasting moisture, cruelty free'
)
solution_description = Description.create!(
  product_id: solution.id,
  title: 'Transforms the look of skin in four weeks.',
  what_it_is: 'A gentle way to slough away dead skin to reveal a fresh, smooth complexion',
  why_its_special: [
    'Unlike physical scrubs, Solution uses a 10% blend of skincare acids to “unglue” dead skin and sweep them away, so your complexion appears smoother, softer, and glowier',
    'Includes three acid groups: Alpha Hydroxy Acid (AHA), Beta Hydroxy Acid (BHA), and Polyhydroxy Acid (PHA)',
    'Daily use helps clear up acne and blackheads while reducing visible redness and enlarged pores'
  ],
  good_to_know: 'hypoallergenic, dermatologist-tested, paraben free, appropriate for all skin types, cruelty free, vegan'
)
generation_g_description = Description.create!(
  product_id: generation_g.id,
  title: 'A new generation of lipstick.',
  what_it_is: 'A lip color that gives the look and finish of just-blotted lipstick, without the blot',
  why_its_special: [
    'Dialed-down pigment adapts to your natural lip color and gives a casual look that appears a little different on everyone',
    'Diffused, matte texture makes it easy to swipe on anywhere—no mirror needed',
    'Comes in six essential shades'
  ],
  good_to_know: 'cruelty free, vegan, paraben free, hypoallergenic, allergy tested, dermatologist tested'
)
cloud_paint_description = Description.create!(
  product_id: cloud_paint.id,
  title: 'Gel-cream blush you can’t mess up.',
  what_it_is: 'A seamless, buildable gel-cream blush that’s fun and easy to wear',
  why_its_special: [
    'Lightweight, pillowy formula that instantly blends into a natural, flushed-from-within glow',
    'If you can fingerpaint, you can Cloud Paint—simply dab it onto cheeks wherever you like, and tap into skin',
    'Comes in six shades inspired by NYC sunsets, optimized to work across a wide range of skin tones'
  ],
  good_to_know: 'hypoallergenic, dermatologist-tested, paraben free, fragrance free, cruelty free'
)
boy_brow_description = Description.create!(
  product_id: boy_brow.id,
  title: 'Fluffy, instantly groomed brows.',
  what_it_is: 'A brushable, creamy wax that visibly thickens, shapes, and grooms brows into place',
  why_its_special: [
    'Inspired by traditional hair pomade to give brows soft, flexible hold that doesn’t stiffen or flake with one easy swipe',
    'Contains Oleic Acid, Lecithin, and Atelocollagen to condition and moisturize brows',
    'Comes in three subtly tinted shades: Blond, Brown, and Black, or Clear, which doesn’t leave a trace'
  ],
  good_to_know: 'alcohol free, fragrance free, paraben free, cruelty free, appropriate for all skin types, hypoallergenic, ophthalmologist tested, dermatologist tested'
)
priming_mosturizer_rich_description = Description.create!(
  product_id: priming_mosturizer_rich.id,
  title: 'A luxurious, buttery face cream.',
  what_it_is: 'A rich, deeply moisturizing yet fast-absorbing face cream for day or night',
  why_its_special: [
    'A blend of shea and murumuru butters melt right into skin for a sumptuous feel',
    'Rich in ceramides and fatty acids that reinforce the moisture barrier and lock in moisture over time',
    'Anti-Redness Complex soothes while the Oxygenating Agent breathes life into stressed skin, improving the way its texture looks and giving it a clean, dewy, balanced finish'
  ],
  good_to_know: 'hypoallergenic, dermatologist tested, appropriate for all skin types, paraben free, cruelty free, non-comedogenic'
)
lip_gloss_description = Description.create!(
  product_id: lip_gloss.id,
  title: 'High shine without the stickiness.',
  what_it_is: 'A comfortable, long-wearing lip gloss with a glassy finish',
  why_its_special: [
    'Fuzzy doe-foot applicator scoops up just the right amount of gloss, giving you instant shine in just one swipe',
    'Vitamin E and Jojoba Oil keep lips cushiony soft and moisturized',
    'Comes in three shades: Clear for a transparent crystal finish, Holographic for an opalescent shimmer, and Red for a subtle, sheer tint'
  ],
  good_to_know: 'hypoallergenic, dermatologist tested, paraben free, alcohol free, cruelty free, vegan'
)
# productt_description = Description.create!(
#   product_id: productt.id,
#   title: '',
#   what_it_is: '',
#   why_its_special: [
#     ''
#   ],
#   good_to_know: ''
# )
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