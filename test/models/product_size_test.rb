# == Schema Information
#
# Table name: product_sizes
#
#  id         :bigint           not null, primary key
#  product_id :string           not null
#  size_id    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ProductSizeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
