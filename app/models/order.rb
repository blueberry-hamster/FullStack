# == Schema Information
#
# Table name: orders
#
#  id              :bigint           not null, primary key
#  order_number    :string           not null
#  tracking_number :string
#  total           :float
#  user_id         :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Order < ApplicationRecord
  #---------------------------------------------------------
  # VALIDATIONS
  validates :order_number, :total, :user_id, presence: true 
  validates :order_number, :tracking_number, uniqueness: true 
  #---------------------------------------------------------

  #---------------------------------------------------------
  # ASSOCIATIONS
  belongs_to :user, foreign_key: :user_id, class_name: 'User'
  #---------------------------------------------------------

  #---------------------------------------------------------
  before_validation :ensure_numbers
  
  # METHODS
  def new_order_number
    'GLO' + (SecureRandom.random_number * (10 ** 9)).floor.to_s
  end

  def new_tracking_number
    SecureRandom.hex(10)
  end

  def ensure_numbers
    self.order_number = new_order_number
    self.tracking_number = new_tracking_number
  end
  #---------------------------------------------------------
end
