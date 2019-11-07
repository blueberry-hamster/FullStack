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

require 'test_helper'

class DescriptionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
