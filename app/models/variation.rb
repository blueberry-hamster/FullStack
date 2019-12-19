# == Schema Information
#
# Table name: variations
#
#  id             :bigint           not null, primary key
#  product_id     :integer          not null
#  variation_type :string           not null
#  name           :string           not null
#  primary        :boolean          default(TRUE), not null
#  stock          :integer          default(100), not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Variation < ApplicationRecord
  #---------------------------------------------------------
  # VALIDATIONS
  validates :name, :product_id, :variation_type, :primary, :stock, presence: true
  validates :product_id, uniqueness: true
  validates :stock, :numericality => { greater_than_or_equal_to: 0}
  #---------------------------------------------------------

  #---------------------------------------------------------
  # ASSOCIATIONS
  belongs_to :product

  has_many_attached :photos
  has_one_attached :primary_photo
  #---------------------------------------------------------

  #---------------------------------------------------------
  # METHODS
  #---------------------------------------------------------
  
end
