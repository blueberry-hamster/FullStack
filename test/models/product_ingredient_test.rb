# == Schema Information
#
# Table name: product_ingredients
#
#  id            :bigint           not null, primary key
#  product_id    :integer          not null
#  ingredient_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class ProductIngredientTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
