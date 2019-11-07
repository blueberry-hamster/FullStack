# == Schema Information
#
# Table name: tags
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord
  #---------------------------------------------------------
  # VALIDATIONS
  validates :name, presence: true, uniqueness: true
  #---------------------------------------------------------

  #---------------------------------------------------------
  # ASSOCIATIONS
  has_many :product_tag
  has_many :products, through: :product_tag
  #---------------------------------------------------------
  
  #---------------------------------------------------------
  # METHODS
  #---------------------------------------------------------

end
