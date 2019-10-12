require 'test_helper'

class GooglereviewsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @googlereview = googlereviews(:one)
  end

  test "should get index" do
    get googlereviews_url, as: :json
    assert_response :success
  end

  test "should create googlereview" do
    assert_difference('Googlereview.count') do
      post googlereviews_url, params: { googlereview: { author: @googlereview.author, rating: @googlereview.rating, review: @googlereview.review, title: @googlereview.title } }, as: :json
    end

    assert_response 201
  end

  test "should show googlereview" do
    get googlereview_url(@googlereview), as: :json
    assert_response :success
  end

  test "should update googlereview" do
    patch googlereview_url(@googlereview), params: { googlereview: { author: @googlereview.author, rating: @googlereview.rating, review: @googlereview.review, title: @googlereview.title } }, as: :json
    assert_response 200
  end

  test "should destroy googlereview" do
    assert_difference('Googlereview.count', -1) do
      delete googlereview_url(@googlereview), as: :json
    end

    assert_response 204
  end
end
