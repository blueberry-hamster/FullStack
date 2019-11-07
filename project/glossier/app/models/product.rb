# == Schema Information
#
# Table name: products
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  tagline    :string           not null
#  price      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Product < ApplicationRecord
  #---------------------------------------------------------
  # VALIDATIONS
  validates :name, :tagline, :price, presence: true
  validates :name, uniqueness: true
  #---------------------------------------------------------

  #---------------------------------------------------------
  # ASSOCIATIONS
  has_many :variations, dependent: :destroy
  has_one :description, dependent: :destroy
  has_one :intruction, dependent: :destroy
  
  has_one :product_size
  has_one :size, through: :product_size
  
  has_one :product_category
  has_one :category, through: :product_category
  
  has_many :product_ingredient
  has_many :ingredients, through: :product_ingredient
  
  has_many :product_tag
  has_many :tag, through: :product_tag
  #---------------------------------------------------------

  #---------------------------------------------------------
  # METHODS
  #---------------------------------------------------------

end
