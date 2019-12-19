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
  validates :product_id, :cart_id, :quantity, presence: true
  #---------------------------------------------------------

  #---------------------------------------------------------
  # ASSOCIATIONS
  belongs_to :product, foreign_key: :product_id, class_name: 'Product'
  belongs_to :cart, foreign_key: :cart_id, class_name: 'Cart'
  #---------------------------------------------------------

  #---------------------------------------------------------
  # METHODS
  before_validation :set_default_quantity

  def set_default_quantity
    self.quantity ||= 1;
  end
  #---------------------------------------------------------
end
