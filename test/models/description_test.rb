# == Schema Information
#
# Table name: descriptions
#
#  id              :bigint           not null, primary key
#  product_id      :integer          not null
#  title           :string           not null
#  what_it_is      :text             not null
#  why_its_special :text             not null, is an Array
#  good_to_know    :text             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class DescriptionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
