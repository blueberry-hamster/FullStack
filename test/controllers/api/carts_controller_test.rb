require 'test_helper'

class Api::CartsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_carts_create_url
    assert_response :success
  end

  test "should get update" do
    get api_carts_update_url
    assert_response :success
  end

  test "should get show" do
    get api_carts_show_url
    assert_response :success
  end

end
