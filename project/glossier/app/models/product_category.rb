# == Schema Information
#
# Table name: product_categories
#
#  id          :bigint           not null, primary key
#  product_id  :string           not null
#  category_id :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class ProductCategory < ApplicationRecord
  #---------------------------------------------------------
  # VALIDATIONS
  validates :product_id, :category_id, presence: true, uniqueness: true
  #---------------------------------------------------------

  #---------------------------------------------------------
  # ASSOCIATIONS
  belongs_to :product
  belongs_to :category
  #---------------------------------------------------------

  #---------------------------------------------------------
  # METHODS
  #---------------------------------------------------------

end
