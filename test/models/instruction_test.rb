# == Schema Information
#
# Table name: instructions
#
#  id         :bigint           not null, primary key
#  product_id :integer          not null
#  steps      :text             not null, is an Array
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class InstructionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
