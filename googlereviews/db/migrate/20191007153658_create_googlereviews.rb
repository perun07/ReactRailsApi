class CreateGooglereviews < ActiveRecord::Migration[6.0]
  def change
    create_table :googlereviews do |t|
      t.string :title
      t.string :author
      t.string :review
      t.string :rating

      t.timestamps
    end
  end
end
