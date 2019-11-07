# == Schema Information
#
# Table name: variations
#
#  id             :bigint           not null, primary key
#  product_id     :string           not null
#  variation_type :string           not null
#  name           :string           not null
#  primary        :boolean          default(TRUE), not null
#  stock          :integer          default(100), not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'test_helper'

class VariationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
