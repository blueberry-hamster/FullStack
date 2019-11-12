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
  has_one :instruction, dependent: :destroy
  
  has_one :product_size
  has_one :size, through: :product_size
  
  has_one :product_category
  has_one :category, through: :product_category
  
  has_many :product_ingredient
  has_many :ingredients, through: :product_ingredient
  
  has_many :product_tag
  has_many :tags, through: :product_tag

  has_many_attached :photos
  has_one_attached :primary_photo
  #---------------------------------------------------------

  #---------------------------------------------------------
  # METHODS
  
  #---------------------------------------------------------

end
