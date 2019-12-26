# == Schema Information
#
# Table name: orders
#
#  id              :bigint           not null, primary key
#  order_number    :string           not null
#  tracking_number :string
#  total           :float
#  user_id         :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class OrderTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
