class Category < ActiveRecord::Base
  default_scope order('id ASC')

  CATEGORY_KINDS = [["Product", 0],["Page", 1]]

  scope :products, where(:kind => 0)
  scope :pages, where(:kind => 1)
  
  attr_accessible   :name, 
                    :title, 
                    :kind,
                    :section, 
                    :component

  has_many          :sections
  has_many          :components

  before_save       :create_name

  private
  
  def create_name
    self.name = title.parameterize
  end
end