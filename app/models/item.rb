# == Schema Information
#
# Table name: items
#
#  created_at :datetime         not null
#  id         :integer          not null, primary key
#  name       :string(255)      not null
#  section_id :integer          default(1), not null
#  updated_at :datetime         not null
#

class Item < ApplicationRecord
  # Scopes
  # ==========================================================================================================
    default_scope                   { order(id: :ASC) }


  # ItemType
  # ==========================================================================================================
    belongs_to                      :section,
                                      inverse_of:     :items


  # Link (Polymorphic)
  # ==========================================================================================================
    has_one                         :link,
                                      as:             :linkable,
                                      dependent:      :destroy

    accepts_nested_attributes_for   :link,
                                      allow_destroy:  true,
                                      reject_if:      -> (attributes) {
                                                        attributes['uri'].blank?
                                                      }


  # Validations
  # ==========================================================================================================
    validates                       :section,
                                      presence:       true

  # Callbacks
  # ==========================================================================================================

  # Public methods
  # ==========================================================================================================

  # Private methods
  # ==========================================================================================================
    private

end
