# == Schema Information
#
# Table name: product_sizes
#
#  id         :bigint           not null, primary key
#  product_id :string           not null
#  size_id    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ProductSize < ApplicationRecord
  #---------------------------------------------------------
  # VALIDATIONS
  validates :product_id, :size_id, presence: true, uniqueness: true
  #---------------------------------------------------------

  #---------------------------------------------------------
  # ASSOCIATIONS
  belongs_to :product
  belongs_to :size
  #---------------------------------------------------------

  #---------------------------------------------------------
  # METHODS
  #---------------------------------------------------------
  
end
