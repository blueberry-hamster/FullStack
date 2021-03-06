# == Schema Information
#
# Table name: product_tags
#
#  id         :bigint           not null, primary key
#  product_id :integer          not null
#  tag_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ProductTag < ApplicationRecord
  #---------------------------------------------------------
  # VALIDATIONS
  validates :product_id, :tag_id, presence: true
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
