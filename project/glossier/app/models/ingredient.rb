# == Schema Information
#
# Table name: ingredients
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Ingredient < ApplicationRecord
  #---------------------------------------------------------
  # VALIDATIONS
  #---------------------------------------------------------


  #---------------------------------------------------------
  # ASSOCIATIONS
  #---------------------------------------------------------
  has_many :product_ingredient
  has_many :products, through: :product_ingredient


  #---------------------------------------------------------
  # METHODS
  #---------------------------------------------------------

  
end
