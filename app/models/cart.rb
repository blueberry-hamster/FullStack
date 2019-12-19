# == Schema Information
#
# Table name: carts
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Cart < ApplicationRecord
  #---------------------------------------------------------
  # VALIDATIONS
  validates :user_id, presence: true, uniqueness: true
  #---------------------------------------------------------

  #---------------------------------------------------------
  # ASSOCIATIONS
  has_many :cart_items, foreign_key: :cart_id, class_name: 'CartItem'
  belongs_to :user
  #---------------------------------------------------------

  #---------------------------------------------------------
  # METHODS
  #---------------------------------------------------------
end
