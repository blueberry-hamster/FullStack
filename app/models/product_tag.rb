# == Schema Information
#
# Table name: product_tags
#
#  id         :bigint           not null, primary key
#  product_id :string           not null
#  tag_id     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ProductTag < ApplicationRecord
  #---------------------------------------------------------
  # VALIDATIONS
  validates :product_id, :tag_id, presence: true, uniqueness: true
  #---------------------------------------------------------

  #---------------------------------------------------------
  # ASSOCIATIONS
  belongs_to :product
  belongs_to :tag
  #---------------------------------------------------------

  #---------------------------------------------------------
  # METHODS
  #---------------------------------------------------------



end
