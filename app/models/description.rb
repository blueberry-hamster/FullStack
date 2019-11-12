# == Schema Information
#
# Table name: descriptions
#
#  id         :bigint           not null, primary key
#  product_id :string           not null
#  title      :string           not null
#  body       :text             not null
#  notes      :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Description < ApplicationRecord
  #---------------------------------------------------------
  # VALIDATIONS
  validates :product_id, :title, :what_it_is, :why_its_special, :good_to_know, presence: true
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
