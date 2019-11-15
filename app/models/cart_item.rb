# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  product_id :integer          not null
#  cart_id    :integer          not null
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CartItem < ApplicationRecord
  
  #---------------------------------------------------------
  # VALIDATIONS
  validates :product_id, :cart_id, presence: true
  #---------------------------------------------------------

  #---------------------------------------------------------
  # ASSOCIATIONS
  has_one :product
  has_one :cart
  #---------------------------------------------------------

  #---------------------------------------------------------
  # METHODS
  before_validation :set_default_quantity

  def set_default_quantity
    self.quantity = 1;
  end
  #---------------------------------------------------------
end
