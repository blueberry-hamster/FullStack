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

require 'test_helper'

class SizeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
