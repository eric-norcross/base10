class LocationsController < ApplicationController
  # before_filter :find_products, :only => :show
  load_and_authorize_resource

  def admin_index
    # @locations = Location.all
    
    respond_to do |format|
      format.html
    end
  end

  def index
    if params[:retailer_search].present?
      @locations = Location.locations(params[:retailer_search], params[:radius])
    else 
      @locations = Location.all
    end

    @json = markers(@locations)

    respond_to do |format|
      format.html
    end
  end

  def show
    @locations = Location.where(id: params[:id])

    @json = markers(@locations)

    respond_to do |format|
      format.html
    end
  end

  def new
    # @location = Location.new

    respond_to do |format|
      format.html
    end
  end

  def edit
    # @location = Location.find(params[:id])
  end

  def create
    # @location = Location.new(params[:location])

    respond_to do |format|
      if @location.save
        format.html { redirect_to locations_url, notice: 'Location was successfully created.' }
      else
        format.html { render action: "new" }
      end
    end
  end

  def update
    # @location = Location.find(params[:id])

    respond_to do |format|
      if @location.update_attributes(params[:location])
        format.html { redirect_to locations_url, notice: 'Location was successfully updated.' }
      else
        format.html { render action: "edit" }
      end
    end
  end

  def destroy
    # @location = Location.find(params[:id])
    @location.destroy

    respond_to do |format|
      format.html { redirect_to locations_url }
    end
  end


  # Private methods
  private

    def markers(locations)
      @json = locations.to_gmaps4rails do |location, marker|
        marker.infowindow render_to_string(:partial => "/layouts/partials/infowindow", :locals => { :location => location})
      end

      return @json
    end
end
