class Finish < ActiveRecord::Base
  default_scope order('finishes.title ASC')
  attr_accessible               :name,
                                :title,

                                ## belongs_to ##

                                ## has_many ##
                                :sku_ids,
                                :compilation_ids,

                                ## nested attributes ##
                                :image_attributes


  has_many                      :skus
  has_many                      :compilations

  has_many                      :image, as: :imageable, :dependent => :destroy
  accepts_nested_attributes_for :image, reject_if: proc { |attrs| attrs['asset'].blank? && attrs['asset_cache'].blank? }, allow_destroy: true

  validates_presence_of         :image
  validates_presence_of         :title

  before_save                   :create_name

  def self.skus(finish_id = :id)
    @skus = Sku.where(:finish_id => finish_id)
    return @skus
  end

  private
  
  def create_name
    self.name = title.parameterize
  end
end