class Collection < ActiveRecord::Base
  default_scope order('collections.title ASC')

  attr_accessible               :name, 
                                :title,
                                :description,
                                ##belongs_to##

                                ##has_many##
                                :component_ids,
                                :style_ids

  has_many                      :collection_components, :include => :component
  has_many                      :components,            :through => :collection_components
  accepts_nested_attributes_for :collection_components, :allow_destroy => true

  has_many                      :collection_styles,     :include => :style
  has_many                      :styles,                :through => :collection_styles
  accepts_nested_attributes_for :collection_styles,     :allow_destroy => true
  
  validates_presence_of         :title
  validates_presence_of         :component_ids
  # validates_presence_of         :style_ids

  before_save                   :create_name


  def self.components(collection_id = :id)
    return Collection.find(collection_id).components
  end

  def self.finishes(collection_id = :id)
    return Finish.all(:conditions => { :id => finish_ids(collection_id) })
  end

  def self.products(collection_id = :id)
    return Product.where(:collection_id => collection_id)
  end

  def self.compilations(collection_id = :id)
    return Compilation.where(:collection_id => collection_id)
  end

  def self.products_and_compilations(collection_id = :id)
    return (products(collection_id) + compilations(collection_id)).sort_by(&:name)
  end

  def self.components_and_children(collection_id = :id)
    @return = Array.new

    @arr = components(collection_id)
    @arr.each do |component|
      if !component.children.blank?
        @return.push(component.children)
      else
        @return.push(component)
      end
    end
  end


  private
  
    def create_name
      self.name = title.parameterize
    end

    def self.finish_ids(collection_id = :id)
      finish_ids = Array.new
      products(collection_id).each do |product|
        product.skus.each do |sku|
          finish_ids.push(sku.finish_id) unless finish_ids.include?(sku.finish_id)
        end
      end

      return finish_ids
    end
end
