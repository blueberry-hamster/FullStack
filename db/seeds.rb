require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#---------------------------------------------------------
ProductTag.destroy_all
ProductSize.destroy_all
ProductCategory.destroy_all
ProductIngredient.destroy_all
Size.destroy_all
Category.destroy_all
Ingredient.destroy_all
Tag.destroy_all
Description.destroy_all
Instruction.destroy_all
Variation.destroy_all
User.destroy_all
Product.destroy_all

# USERS
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
priming_moisturizer_rich = Product.create!(
  name: 'Priming Moisturizer Rich',
  tagline: 'ultrarich moisturizer',
  price: 35
)
lip_gloss = Product.create!(
  name: 'Lip Gloss',
  tagline: 'all shine, no ick',
  price: 14
)
body_hero_daily_oil_wash = Product.create!(
  name: 'Body Hero Daily Oil Wash',
  tagline: 'oil-froth body cleanser',
  price: 18
)
body_hero_daily_perfecting_cream = Product.create!(
  name: 'Body Hero Daily Perfecting Cream',
  tagline: 'skin-enhancing body moisturizer',
  price: 22
)
pro_tip = Product.create!(
  name: 'Pro Tip',
  tagline: 'brush point liquid eyeliner',
  price: 16
)
futuredew = Product.create!(
  name: 'Futuredew',
  tagline: 'oil serum hybrid',
  price: 24
)
lash_stick = Product.create!(
  name: 'Lash Stick',
  tagline: 'film form mascara',
  price: 16
)
brow_flick = Product.create!(
  name: 'Brow Flick',
  tagline: 'microfine detailing pen',
  price: 18
)
haloscope = Product.create!(
  name: 'Haloscope',
  tagline: 'dew effect highlighter',
  price: 22
)
super_bounce = Product.create!(
  name: 'Super Bounce',
  tagline: 'hyaluronic acid + vitamin b5 serum',
  price: 28
)
super_glow = Product.create!(
  name: 'Super Glow',
  tagline: 'vitamin c + magnesium serum',
  price: 28
)
priming_moisturizer = Product.create!(
  name: 'Priming Moisturizer',
  tagline: 'buildable hydrating creme',
  price: 22
)
# name = Product.create!(
#   name: '',
#   tagline: '',
#   price: 
# )
#---------------------------------------------------------

# #---------------------------------------------------------
# # VARIATIONS
# 
# #---------------------------------------------------------

# #---------------------------------------------------------
# # DESCRIPTION

Description.create!(
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
Description.create!(
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
Description.create!(
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
Description.create!(
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
Description.create!(
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
Description.create!(
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
Description.create!(
  product_id: priming_moisturizer_rich.id,
  title: 'A luxurious, buttery face cream.',
  what_it_is: 'A rich, deeply moisturizing yet fast-absorbing face cream for day or night',
  why_its_special: [
    'A blend of shea and murumuru butters melt right into skin for a sumptuous feel',
    'Rich in ceramides and fatty acids that reinforce the moisture barrier and lock in moisture over time',
    'Anti-Redness Complex soothes while the Oxygenating Agent breathes life into stressed skin, improving the way its texture looks and giving it a clean, dewy, balanced finish'
  ],
  good_to_know: 'hypoallergenic, dermatologist tested, appropriate for all skin types, paraben free, cruelty free, non-comedogenic'
)
Description.create!(
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
body_hero_daily_oil_wash_description = Description.create!(
  product_id: body_hero_daily_oil_wash.id,
  title: 'Body wash goes luxe.',
  what_it_is: 'An oil cleanser inspired by the ones for your face, made for your body',
  why_its_special: [
    'Seven-oil blend attracts grime and sweat like a magnet, lifting it from your skin',
    'Turns frothy when it mixes with water, then washes away without drying out skin',
    'Antioxidant-rich mix of Cactus Flower Extract, Prickly Pear Extract, and Yucca Extract leaves skin visibly soft and supremely clean'
  ],
  good_to_know: 'hypoallergenic, dermatologist tested, gynecologist tested, soap free, paraben free, cruelty free, vegan'
)
body_hero_daily_perfecting_cream_description = Description.create!(
  product_id: body_hero_daily_perfecting_cream.id,
  title: 'A skincare-grade body lotion.',
  what_it_is: 'A body cream inspired by face products—that does more than just moisturize',
  why_its_special: [
    'An antioxidant-rich mix of Cactus Flower Extract, Prickly Pear Extract, and Yucca Extract keeps skin moisturized all day with zero residue and zero stickiness (so you can put your clothes on now)',
    'Tiny light-reflecting particles and brightening plant extracts give skin an instant, radiant glow',
    'Orange Blossom Neroli Blend gives a subtle, baby-fresh scent'
  ],
  good_to_know: 'hypoallergenic, dermatologist tested, paraben free, cruelty free'
)
pro_tip_description = Description.create!(
  product_id: pro_tip.id,
  title: 'Get a smooth, precise line every time.',
  what_it_is: 'Pro Tip is everything you want in a liquid liner.',
  why_its_special: [
    'It draws the sharpest line, comes in the truest black, and doesn’t budge.',
    'The pen’s brush tip was designed with flexible fibers that hug the curve of the lash line, allowing for precise definition.',
    'Its densely-pigmented, buildable formula dries quickly so it’s smudge resistant and stays put for up to 12 hours.',
    'Plus, an internal ball shaker lets the formula flow through evenly, giving you a smooth line that doesn’t drag, every time.'
  ],
  good_to_know: 'Dries quickly, smudge-resistant, longwearing (up to 12 hours), ophthalmologist tested, safe for contact lens wearers, hypoallergenic, dermatologist tested, vegan, cruelty free'
)
futuredew_description = Description.create!(
  product_id: futuredew.id,
  title: 'An instant dewy glow that lasts.',
  what_it_is: 'A shortcut to the way your skin looks after a full skincare routine—dewy, glowing, cared-for—in one long-wearing product',
  why_its_special: [
    'Nourishing oils (that don’t feel greasy) immediately give you a gleamy, well-moisturized look that lasts up to 12 hours',
    'Powerful plant-based extracts work to make your skin look brighter, instantly and over time',
    'Use it as the last step in your skincare routine after moisturizer, serums, and sunscreen',
    'Doesn’t interfere with makeup—just makes skin dewier',
  ],
  good_to_know: 'hypoallergenic, dermatologist tested, cruelty free, vegan, non-comedogenic, good for all skin types'
)
lash_stick_description = Description.create!(
  product_id: lash_stick.id,
  title: 'Extensions without the extensions.',
  what_it_is: 'The perfect everyday black mascara',
  why_its_special: [
    'Curls and sculpts as it lengthens, creating a natural “baby extension” effect without clumping',
    'Teeny-tiny fibers coat lashes from root to tip, while flexible film-forming polymers lift and lock each fiber into place',
    'Water-resistant (not waterproof), so it washes off easily with warm water or Milky Oil at the end of your day'
  ],
  good_to_know: 'cruelty free, paraben free, fragrance free, hypoallergenic, allergy tested, dermatologist tested, ophthalmologist tested, suitable for sensitive eyes and contact lens wearers, non-irritating'
)
brow_flick_description = Description.create!(
  product_id: brow_flick.id,
  title: 'More brow for your brow.',
  what_it_is: 'A brush-tip detailing pen that fills in and defines brows',
  why_its_special: [
    'Fills and defines the brow arch, extends the tail, and adds depth to sparse areas',
    'The pen’s brush-tip creates featherlight strokes that actually look real',
    'Comes in three sheer shades: Blond, Brown, and Black'
  ],
  good_to_know: 'ophthalmologist tested, smudge-proof, longwearing, vegan, paraben free, cruelty free, dairy-free, soy-free, gluten-free, hypoallergenic, dermatologist tested'
)
haloscope_description = Description.create!(
  product_id: haloscope.id,
  title: 'Find your light.',
  what_it_is: 'A crystal-infused highlighter with skin conditioning benefits',
  why_its_special: [
    'The stick’s outer core (the “halo”) is formulated with genuine crystal extracts for an all-day glow that’s not glittery',
    'The solid, oil-based inner core is made from vitamin-rich moisturizers for a hydrated, dewy finish',
    'Comes in three blendable shades that work on everyone'
  ],
  good_to_know: 'hypoallergenic, dermatologist-tested, paraben free, fragrance free, cruelty free'
)
super_bounce_description = Description.create!(
  product_id: super_bounce.id,
  title: 'Heavyweight hydration, featherweight feel.',
  what_it_is: 'A daily serum for mega hydration on all levels',
  why_its_special: [
    'Made with three molecular weights of Hyaluronic Acid that soak into skin without any stickiness or residue',
    'Soothing Pro-Vitamin B5 helps keep skin soft, smooth and healthy looking',
    'Ideal for long haul flights, dry conditions, or anything else that zaps skin of its “bounce” (also great under makeup)'
  ],
  good_to_know: 'hypoallergenic, dermatologist-tested, paraben free, fragrance free, appropriate for all skin types, cruelty free'
)
super_glow_description = Description.create!(
  product_id: super_glow.id,
  title: 'Brighter skin, bottled.',
  what_it_is: 'A daily serum that gives your skin that lit-from-within look, all the time',
  why_its_special: [
    'Vitamin C and Magnesium visibly energizes skin and makes it look even',
    'Milky emulsion soaks in immediately with no sticky residue',
    'Skin looks radiant and feels recharged, like a fresh battery at 100%'
  ],
  good_to_know: 'hypoallergenic, dermatologist-tested, paraben free, fragrance free, appropriate for all skin types, cruelty free'
)
priming_moisturizer_description = Description.create!(
  product_id: priming_moisturizer.id,
  title: 'Light and buildable moisture for a dewy, smooth canvas.',
  what_it_is: 'A moisturizer that instantly brings out the best in your skin, making it fresh and glowing',
  why_its_special: [
    'Anti-Redness Complex soothes while the Oxygenating Agent breathes life into stressed skin, giving it a clean, dewy, balanced finish',
    'Lightweight, buildable texture means you can apply one or more layers depending on the climate, season, or how your skin’s feeling',
    'The ideal base for Perfecting Skin Tint, this creme visibly evens out skin texture and minimizes the look of pores'
  ],
  good_to_know: 'hypoallergenic, dermatologist tested, appropriate for all skin types, long-lasting moisture, paraben free, fragrance free, cruelty free, non-comedogenic'
)
# productt _description = Description.create!(
#   product_id: productt .id,
#   title: '',
#   what_it_is: '',
#   why_its_special: [
#     '',
#     '',
#     ''
#   ],
#   good_to_know: ''
# )
# #---------------------------------------------------------

# #---------------------------------------------------------
# # INSTRUCTIONS
# 
# #---------------------------------------------------------

# #---------------------------------------------------------
# # SIZES
# 
# #---------------------------------------------------------

# #---------------------------------------------------------
# # CATEGORIES

skincare = Category.create!(
  name: 'Skincare'
)
makeup = Category.create!(
  name: 'Makeup'
)
body = Category.create!(
  name: 'Body'
)
# fragrance = Category.create!(
#   name: 'Fragrance'
# )
# #---------------------------------------------------------

# #---------------------------------------------------------
# # INGREDIENTS
#
# #---------------------------------------------------------

# #---------------------------------------------------------
# # TAGS

brightening = Tag.create!(
  name: 'brightening'
)
buildable = Tag.create!(
  name: 'buildable'
)
clearing = Tag.create!(
  name: 'clearing'
)
conditioning = Tag.create!(
  name: 'conditioning'
)
easy = Tag.create!(
  name: 'easy'
)
enhancing = Tag.create!(
  name: 'enhancing'
)
flexible = Tag.create!(
  name: 'flexible'
)
intense_hydration = Tag.create!(
  name: 'intense hydration'
)
long_lasting = Tag.create!(
  name: 'long lasting'
)
moisturizing = Tag.create!(
  name: 'moisturizing'
)
nourishing = Tag.create!(
  name: 'nourishing'
)
oxygenating = Tag.create!(
  name: 'oxygenating'
)
plumping = Tag.create!(
  name: 'plumping'
)
purifying = Tag.create!(
  name: 'purifying'
)
redness_reducing = Tag.create!(
  name: 'redness reducing'
)
smoothing = Tag.create!(
  name: 'smoothing'
)
soothing = Tag.create!(
  name: 'soothing'
)
thickening = Tag.create!(
  name: 'thickening'
)
gynecologist_tested = Tag.create!(
  name: 'gynecologist tested'
)
softening = Tag.create!(
  name: 'softening'
)
fast_absorbtion = Tag.create!(
  name: 'fast absorbtion'
)
smudge_resistant = Tag.create!(
  name: 'smudge resistant'
)
lengthening = Tag.create!(
  name: 'lengthening'
)
sheer = Tag.create!(
  name: 'sheer'
)
energizing = Tag.create!(
  name: 'energizing'
)
illuminating = Tag.create!(
  name: 'illuminating'
)
hydrating = Tag.create!(
  name: 'hydrating'
)
# #---------------------------------------------------------

# #---------------------------------------------------------
# # PRODUCT SIZES
# 
# #---------------------------------------------------------

# #---------------------------------------------------------
# # PRODUCT CATEGORIES

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
  product_id: priming_moisturizer_rich.id,
  category_id: skincare.id
)
ProductCategory.create!(
  product_id: lip_gloss.id,
  category_id: makeup.id
)
ProductCategory.create!(
  product_id: futuredew.id,
  category_id: skincare.id
)
ProductCategory.create!(
  product_id: pro_tip.id,
  category_id: makeup.id
)
ProductCategory.create!(
  product_id: body_hero_daily_oil_wash.id,
  category_id: body.id
)
ProductCategory.create!(
  product_id: body_hero_daily_perfecting_cream.id,
  category_id: body.id
)
ProductCategory.create!(
  product_id: lash_stick.id,
  category_id: makeup.id
)
ProductCategory.create!(
  product_id: brow_flick.id,
  category_id: makeup.id
)
ProductCategory.create!(
  product_id: haloscope.id,
  category_id: makeup.id
)
ProductCategory.create!(
  product_id: super_bounce.id,
  category_id: skincare.id
)
ProductCategory.create!(
  product_id: super_glow.id,
  category_id: skincare.id
)
ProductCategory.create!(
  product_id: priming_moisturizer.id,
  category_id: skincare.id
)
# ProductCategory.create!(
#   product_id: product.id,
#   category_id: skincare.id
# )
# #---------------------------------------------------------

# #---------------------------------------------------------
# # PRODUCT INGREDIENTS
# 
# #---------------------------------------------------------

# #---------------------------------------------------------
# # PRODUCT TAGS

ProductTag.create!(
  product_id: milky_jelly_cleanser.id,
  tag_id: smoothing.id
)
ProductTag.create!(
  product_id: milky_jelly_cleanser.id,
  tag_id: purifying.id
)
ProductTag.create!(
  product_id: milky_jelly_cleanser.id,
  tag_id: nourishing.id
)
ProductTag.create!(
  product_id: balm_dotcom.id,
  tag_id: smoothing.id
)
ProductTag.create!(
  product_id: balm_dotcom.id,
  tag_id: moisturizing.id
)
ProductTag.create!(
  product_id: balm_dotcom.id,
  tag_id: conditioning.id
)
ProductTag.create!(
  product_id: solution.id,
  tag_id: clearing.id
)
ProductTag.create!(
  product_id: solution.id,
  tag_id: brightening.id
)
ProductTag.create!(
  product_id: solution.id,
  tag_id: smoothing.id
)
ProductTag.create!(
  product_id: generation_g.id,
  tag_id: buildable.id
)
ProductTag.create!(
  product_id: generation_g.id,
  tag_id: enhancing.id
)
ProductTag.create!(
  product_id: generation_g.id,
  tag_id: easy.id
)
ProductTag.create!(
  product_id: cloud_paint.id,
  tag_id: easy.id
)
ProductTag.create!(
  product_id: cloud_paint.id,
  tag_id: enhancing.id
)
ProductTag.create!(
  product_id: cloud_paint.id,
  tag_id: plumping.id
)
ProductTag.create!(
  product_id: boy_brow.id,
  tag_id: thickening.id
)
ProductTag.create!(
  product_id: boy_brow.id,
  tag_id: conditioning.id
)
ProductTag.create!(
  product_id: boy_brow.id,
  tag_id: flexible.id
)
ProductTag.create!(
  product_id: priming_moisturizer_rich.id,
  tag_id: intense_hydration.id
)
ProductTag.create!(
  product_id: priming_moisturizer_rich.id,
  tag_id: redness_reducing.id
)
ProductTag.create!(
  product_id: priming_moisturizer_rich.id,
  tag_id: nourishing.id
)
ProductTag.create!(
  product_id: priming_moisturizer_rich.id,
  tag_id: oxygenating.id
)
ProductTag.create!(
  product_id: lip_gloss.id,
  tag_id: long_lasting.id
)
ProductTag.create!(
  product_id: lip_gloss.id,
  tag_id: enhancing.id
)
ProductTag.create!(
  product_id: lip_gloss.id,
  tag_id: nourishing.id
)
ProductTag.create!(
  product_id: futuredew.id,
  tag_id: enhancing.id
)
ProductTag.create!(
  product_id: futuredew.id,
  tag_id: nourishing.id
)
ProductTag.create!(
  product_id: futuredew.id,
  tag_id: moisturizing.id
)
ProductTag.create!(
  product_id: pro_tip.id,
  tag_id: smudge_resistant.id
)
ProductTag.create!(
  product_id: pro_tip.id,
  tag_id: buildable.id
)
ProductTag.create!(
  product_id: pro_tip.id,
  tag_id: long_lasting.id
)
ProductTag.create!(
  product_id: body_hero_daily_perfecting_cream.id,
  tag_id: enhancing.id
)
ProductTag.create!(
  product_id: body_hero_daily_perfecting_cream.id,
  tag_id: fast_absorbtion.id
)
ProductTag.create!(
  product_id: body_hero_daily_perfecting_cream.id,
  tag_id: intense_hydration.id
)
ProductTag.create!(
  product_id: body_hero_daily_oil_wash.id,
  tag_id: gynecologist_tested.id
)
ProductTag.create!(
  product_id: body_hero_daily_oil_wash.id,
  tag_id: purifying.id
)
ProductTag.create!(
  product_id: body_hero_daily_oil_wash.id,
  tag_id: softening.id
)
ProductTag.create!(
  product_id: lash_stick.id,
  tag_id: conditioning.id
)
ProductTag.create!(
  product_id: lash_stick.id,
  tag_id: lengthening.id
)
ProductTag.create!(
  product_id: lash_stick.id,
  tag_id: smudge_resistant.id
)
ProductTag.create!(
  product_id: brow_flick.id,
  tag_id: smudge_resistant.id
)
ProductTag.create!(
  product_id: brow_flick.id,
  tag_id: sheer.id
)
ProductTag.create!(
  product_id: brow_flick.id,
  tag_id: buildable.id
)
ProductTag.create!(
  product_id: haloscope.id,
  tag_id: enhancing.id
)
ProductTag.create!(
  product_id: haloscope.id,
  tag_id: nourishing.id
)
ProductTag.create!(
  product_id: haloscope.id,
  tag_id: easy.id
)
ProductTag.create!(
  product_id: super_bounce.id,
  tag_id: softening.id
)
ProductTag.create!(
  product_id: super_bounce.id,
  tag_id: hydrating.id
)
ProductTag.create!(
  product_id: super_bounce.id,
  tag_id: soothing.id
)
ProductTag.create!(
  product_id: super_glow.id,
  tag_id: enhancing.id
)
ProductTag.create!(
  product_id: super_glow.id,
  tag_id: energizing.id
)
ProductTag.create!(
  product_id: super_glow.id,
  tag_id: illuminating.id
)
ProductTag.create!(
  product_id: priming_moisturizer.id,
  tag_id: soothing.id
)
ProductTag.create!(
  product_id: priming_moisturizer.id,
  tag_id: redness_reducing.id
)
ProductTag.create!(
  product_id: priming_moisturizer.id,
  tag_id: oxygenating.id
)
ProductTag.create!(
  product_id: priming_moisturizer.id,
  tag_id: buildable.id
)
# ProductTag.create!(
#   product_id: product.id,
#   tag_id: tag.id
# )
# #---------------------------------------------------------
# SEED IMAGES
# #---------------------------------------------------------
milky_jelly_cleanser.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/milky_jelly_cleanser/0.jpg'), filename: '0.jpg')
milky_jelly_cleanser.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/milky_jelly_cleanser/1.jpg'), filename: '1.jpg')
milky_jelly_cleanser.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/milky_jelly_cleanser/2.jpg'), filename: '2.jpg')

balm_dotcom.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/balm_dotcom/0.png'), filename: '0.png')
balm_dotcom.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/balm_dotcom/1.png'), filename: '1.png')
balm_dotcom.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/balm_dotcom/2.png'), filename: '2.png')

solution.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/solution/0.jpg'), filename: '0.jpg')
solution.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/solution/1.jpg'), filename: '1.jpg')
solution.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/solution/2.jpg'), filename: '2.jpg')

generation_g.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/generation_g/0.jpg'), filename: '0.jpg')
generation_g.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/generation_g/1.jpg'), filename: '1.jpg')
generation_g.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/generation_g/2.jpg'), filename: '2.jpg')

cloud_paint.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/cloud_paint/0.jpg'), filename: '0.jpg')
cloud_paint.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/cloud_paint/1.jpg'), filename: '1.jpg')
cloud_paint.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/cloud_paint/2.jpg'), filename: '2.jpg')

boy_brow.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/boy_brow/0.jpg'), filename: '0.jpg')
boy_brow.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/boy_brow/1.jpg'), filename: '1.jpg')
boy_brow.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/boy_brow/2.jpg'), filename: '2.jpg')

priming_moisturizer_rich.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/priming_moisturizer_rich/0.jpg'), filename: '0.jpg')
priming_moisturizer_rich.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/priming_moisturizer_rich/1.jpg'), filename: '1.jpg')
priming_moisturizer_rich.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/priming_moisturizer_rich/2.jpg'), filename: '2.jpg')

lip_gloss.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/lip_gloss/0.jpg'), filename: '0.jpg')
lip_gloss.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/lip_gloss/1.jpg'), filename: '1.jpg')
lip_gloss.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/lip_gloss/2.jpg'), filename: '2.jpg')

futuredew.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/futuredew/0.png'), filename: '0.png')
futuredew.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/futuredew/1.jpg'), filename: '1.jpg')
futuredew.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/futuredew/2.png'), filename: '2.png')

pro_tip.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/pro_tip/0.jpg'), filename: '0.jpg')
pro_tip.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/pro_tip/1.jpg'), filename: '1.jpg')
pro_tip.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/pro_tip/2.jpg'), filename: '2.jpg')

body_hero_daily_oil_wash.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/body_hero_daily_oil_wash/0.jpg'), filename: '0.jpg')
body_hero_daily_oil_wash.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/body_hero_daily_oil_wash/1.jpg'), filename: '1.jpg')
body_hero_daily_oil_wash.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/body_hero_daily_oil_wash/2.jpg'), filename: '2.jpg')

body_hero_daily_perfecting_cream.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/body_hero_daily_perfecting_cream/0.jpg'), filename: '0.jpg')
body_hero_daily_perfecting_cream.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/body_hero_daily_perfecting_cream/1.jpg'), filename: '1.jpg')
body_hero_daily_perfecting_cream.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/body_hero_daily_perfecting_cream/2.jpg'), filename: '2.jpg')

lash_stick.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/lash_stick/0.jpg'), filename: '0.jpg')
lash_stick.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/lash_stick/1.jpg'), filename: '1.jpg')
lash_stick.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/lash_stick/2.jpg'), filename: '2.jpg')

haloscope.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/haloscope/0.jpg'), filename: '0.jpg')
haloscope.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/haloscope/1.jpg'), filename: '1.jpg')
haloscope.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/haloscope/2.jpg'), filename: '2.png')

brow_flick.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/brow_flick/0.jpg'), filename: '0.jpg')
brow_flick.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/brow_flick/1.jpg'), filename: '1.jpg')
brow_flick.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/brow_flick/2.jpg'), filename: '2.jpg')

super_bounce.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/super_bounce/0.jpg'), filename: '0.jpg')
super_bounce.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/super_bounce/1.jpg'), filename: '1.jpg')
super_bounce.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/super_bounce/2.jpg'), filename: '2.jpg')

super_glow.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/super_glow/0.jpg'), filename: '0.jpg')
super_glow.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/super_glow/1.jpg'), filename: '1.jpg')
super_glow.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/super_glow/2.jpg'), filename: '2.jpg')

priming_moisturizer.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/priming_moisturizer/0.jpg'), filename: '0.jpg')
priming_moisturizer.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/priming_moisturizer/1.jpg'), filename: '1.jpg')
priming_moisturizer.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/priming_moisturizer/2.jpg'), filename: '2.jpg')
# #---------------------------------------------------------
# CLEAR SEED IMAGES
# #---------------------------------------------------------
milky_jelly_cleanser.clear_photo.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/_clear_bg/milky_jelly_cleanser.webp'), filename: 'milky_jelly_cleanser.jpg')

balm_dotcom.clear_photo.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/_clear_bg/balm_dotcom.webp'), filename: 'balm_dotcom.jpg')

solution.clear_photo.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/_clear_bg/solution.webp'), filename: 'solution.jpg')

generation_g.clear_photo.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/_clear_bg/generation_g.webp'), filename: 'generation_g.jpg')

cloud_paint.clear_photo.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/_clear_bg/cloud_paint.webp'), filename: 'cloud_paint.jpg')

boy_brow.clear_photo.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/_clear_bg/boy_brow.webp'), filename: 'boy_brow.jpg')

lip_gloss.clear_photo.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/_clear_bg/lip_gloss.webp'), filename: 'lip_gloss.jpg')

futuredew.clear_photo.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/_clear_bg/futuredew.webp'), filename: 'futuredew.jpg')

body_hero_daily_oil_wash.clear_photo.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/_clear_bg/body_hero_daily_oil_wash.webp'), filename: 'body_hero_daily_oil_wash.jpg')

body_hero_daily_perfecting_cream.clear_photo.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/_clear_bg/body_hero_daily_perfecting_cream.webp'), filename: 'body_hero_daily_perfecting_cream.jpg')

lash_stick.clear_photo.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/_clear_bg/lash_stick.webp'), filename: 'lash_stick.jpg')

brow_flick.clear_photo.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/_clear_bg/brow_flick.webp'), filename: 'brow_flick.jpg')

priming_moisturizer_rich.clear_photo.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/_clear_bg/priming_moisturizer_rich.png'), filename: 'priming_moisturizer_rich.png')

super_bounce.clear_photo.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/_clear_bg/super_bounce.png'), filename: 'super_bounce.png')

super_glow.clear_photo.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/_clear_bg/super_glow.png'), filename: 'super_glow.png')

lash_stick.clear_photo.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/_clear_bg/lash_stick.png'), filename: 'lash_stick.png')

haloscope.clear_photo.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/_clear_bg/haloscope.png'), filename: 'haloscope.png')
# #---------------------------------------------------------
# #---------------------------------------------------------

# all_products = ['milky_jelly_cleanser', 'balm_dotcom', 'solution', 'generation_g', 'cloud_paint', 'boy_brow', 'priming_moisturizer_rich', 'lip_gloss', 'futuredew', 'pro_tip', 'body_hero_daily_oil_wash', 'body_hero_daily_perfecting_cream', 'lash_stick', 'haloscope', 'brow_flick', 'super_bounce', 'super_glow', 'priming_moisturizer']

# clear_photo_products = ['priming_moisturizer', 'priming_moisturizer_rich', 'super_bounce', 'super_glow', 'lash_stick', 'haloscope']
# def seed_clear_images(products)
#   products.each do |product|
#     puts "#{ product }.clear_photo.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/_clear_bg/#{ product }.png'), filename: '#{ product }.png')"
#     puts ""
#   end
# end
# seed_clear_images(clear_photo_products)

# def seed_images(products)
#   products.each do |product|
#     (0..2).each do |num|
#       puts "#{ product }.photos.attach(io: open('https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/#{ product }/#{ num }.jpg'), filename: '#{ num }.jpg')"
#     end
#     puts ""
#   end
# end
# seed_images(all_products)

# def mkdir_script(prodArr)
#   prodArr.each do |prod|
#     puts "mkdir -p #{prod}/{main,variations}"
#   end
#   return
# end
# mkdir_script(all_products)

# all_tags = 'brightening buildable clearing conditioning conditioning easy enhancing enhancing flexible intense_hydration long_lasting moisturizing nourishing oxygenating plumping redness_reducing smoothing soothing thickening'

# def seed_tags_script(all_tags) 
#   all_tags = all_tags.split(" ") #.map(|tag| tag.sub!('_', ' '))
#   all_tags.each do |tag|
#     var_name = tag.downcase
#     tag_name = tag.gsub('_', ' ')

#     puts (
#       "#{ var_name } = Tag.create!(
#   name: '#{ tag_name }'
# )"
#     )
#   end
# end
# seed_tags_script(all_tags)

# #sort tags
# puts all_tags.split(" ").sort.join(" ")

# product_tags = [
#   "milky_jelly_cleanser smoothing purifying nourishing", 
#   "balm_dotcom smoothing moisturizing conditioning", 
#   "solution clearing brightening smoothing", 
#   "generation_g buildable enhancing easy", 
#   "cloud_paint easy enhancing plumping", 
#   "boy_brow thickening conditioning flexible", 
#   "priming_moisturizer_rich intense_hydration redness_reducing nourishing oxygenating", 
#   "lip_gloss long_lasting enhancing nourishing",
#   "futuredew enhancing nourishing moisturizing",
#   "pro_tip smudge_resistant buildable long_lasting",
#   "body_hero_daily_perfecting_cream enhancing fast_absorbtion intense_hydration",
#   "body_hero_daily_oil_wash gynecologist_tested purifying softening",
#   "lash_stick conditioning lengthening smudge_resistant",
#   "brow_flick smudge_resistant sheer buildable",
#   "haloscope enhancing nourishing easy",
#   "super_bounce softening hydrating soothing",
#   "super_glow enhancing energizing illuminating",
#   "priming_moisturizer soothing redness_reducing oxygenating buildable",
# ]

# new_product_tags = [
#   ""
# ]

# def make_product_tag(product_name, tag_name)
#   puts (
#     "ProductTag.create!(
#   product_id: #{ product_name }.id,
#   tag_id: #{ tag_name }.id
# )"
#   )
# end

# def mass_make_product_tag(arr)
#   arr.each do |set|
#     set = set.split(" ")
#     product_name = set.first
#     tags = set[1..-1]
#     tags.each do |tag_name|
#       make_product_tag(product_name, tag_name)
#     end
#   end
# end
# mass_make_product_tag(new_product_tags)

# https://www.glossier.com/products/boy-brow
# https://www.glossier.com/products/milky-jelly-cleanser
# https://www.glossier.com/products/lip-gloss
# https://www.glossier.com/products/solution
# https://www.glossier.com/products/balm-dotcom
# https://www.glossier.com/products/generation-g
# https://www.glossier.com/products/priming-moisturizer-rich