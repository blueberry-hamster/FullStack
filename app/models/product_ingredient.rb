# == Schema Information
#
# Table name: product_ingredients
#
#  id            :bigint           not null, primary key
#  product_id    :integer          not null
#  ingredient_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class ProductIngredient < ApplicationRecord
  #---------------------------------------------------------
  # VALIDATIONS
  validates :product_id, :ingredient_id, presence: true
  #---------------------------------------------------------

  #---------------------------------------------------------
  # ASSOCIATIONS
  belongs_to :product
  belongs_to :ingredient
  #---------------------------------------------------------

  #---------------------------------------------------------
  # METHODS
  #---------------------------------------------------------

end
