class GooglereviewsController < ApplicationController
  before_action :set_googlereview, only: [:show, :update, :destroy]

  # GET /googlereviews
  def index
    @googlereviews = Googlereview.all

    render json: @googlereviews
  end

  # GET /googlereviews/1
  def show
    render json: @googlereview
  end

  # POST /googlereviews
  def create
    @googlereview = Googlereview.new(googlereview_params)

    if @googlereview.save
      render json: @googlereview, status: :created, location: @googlereview
    else
      render json: @googlereview.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /googlereviews/1
  def update
    if @googlereview.update(googlereview_params)
      render json: @googlereview
    else
      render json: @googlereview.errors, status: :unprocessable_entity
    end
  end

  # DELETE /googlereviews/1
  def destroy
    @googlereview.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_googlereview
      @googlereview = Googlereview.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def googlereview_params
      params.require(:googlereview).permit(:title, :author, :review, :rating)
    end
end
