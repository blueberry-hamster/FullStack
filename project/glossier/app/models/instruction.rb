# == Schema Information
#
# Table name: instructions
#
#  id         :bigint           not null, primary key
#  product_id :string           not null
#  steps      :text             not null, is an Array
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Instruction < ApplicationRecord
  #---------------------------------------------------------
  # VALIDATIONS
  validates :product_id, :steps, presence: true
  validates :product_id, uniqueness: true
  #---------------------------------------------------------

  #---------------------------------------------------------
  # ASSOCIATIONS
  belongs_to :product
  #---------------------------------------------------------

  #---------------------------------------------------------
  # METHODS
  #---------------------------------------------------------

end
