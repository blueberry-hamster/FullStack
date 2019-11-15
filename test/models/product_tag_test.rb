# == Schema Information
#
# Table name: product_tags
#
#  id         :bigint           not null, primary key
#  product_id :integer          not null
#  tag_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ProductTagTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
