class ProductsController < ApplicationController
  load_and_authorize_resource

  # Admin Routes
  def manage
    # @products = Product.joins(:collection, :skus).order('collections.name ASC, skus.name ASC')
    @products = Product.all.sort_by{|e| e.collection_by_patriarch.title}
    @options = @products.map{|product| [product.collection_by_patriarch.title, product.collection_by_patriarch.name]}
    @options.unshift(["All", "all"])
    
    respond_to do |format|
      format.html
    end
  end

  def manage_product_features
    @products = Product.all
    
    respond_to do |format|
      format.html
    end
  end


  # REST Routes
  # def index
  #   # @products = Product.all

  #   respond_to do |format|
  #     format.html
  #   end
  # end

  def show
    redirect_to product_sku_path(params[:id], @product.skus.first.id)
  end

  def new
    # @product = Product.new

    1.times do
      @product.images.build
    end

    1.times do
      dimensions = @product.dimensions.build
      dimensions.images.build
    end

    1.times do
      skus = @product.skus.build
      1.times { skus.images.build }
    end

    1.times do
      @product.videos.build
    end

    respond_to do |format|
      format.html
    end
  end

  def edit
    # @product = Product.find(params[:id])
  end

  def create
    # @product = Product.new(params[:product])

    respond_to do |format|
      if @product.save
        format.html { redirect_to manage_products_path, notice: 'Product was successfully created.' }
      else
        format.html { render action: "new" }
      end
    end
  end

  def update
    # @product = Product.find(params[:id])

    respond_to do |format|
      if @product.update_attributes(params[:product])
        format.html { redirect_to manage_products_path, notice: 'Product was successfully updated.' }
      else
        format.html { render action: "edit" }
      end
    end
  end

  def destroy
    # @product = Product.find(params[:id])
    @product.destroy

    redirect_to manage_products_path
  end
end