# == Schema Information
#
# Table name: sizes
#
#  id         :bigint           not null, primary key
#  imperial   :string           not null
#  metric     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Size < ApplicationRecord
  #---------------------------------------------------------
  # VALIDATIONS
  validates :imperial, :metric, presence: true
  validates :imperial, uniqueness: true
  #---------------------------------------------------------

  #---------------------------------------------------------
  # ASSOCIATIONS
  has_many :product_size
  has_many :product, through: :product_size
  #---------------------------------------------------------

  #---------------------------------------------------------
  # METHODS
  #---------------------------------------------------------
  
end
