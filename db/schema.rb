# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_12_30_200508) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_admin_comments", force: :cascade do |t|
    t.string "namespace"
    t.text "body"
    t.string "resource_type"
    t.bigint "resource_id"
    t.string "author_type"
    t.bigint "author_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_type", "author_id"], name: "index_active_admin_comments_on_author_type_and_author_id"
    t.index ["namespace"], name: "index_active_admin_comments_on_namespace"
    t.index ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource_type_and_resource_id"
  end

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "admin_users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_admin_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admin_users_on_reset_password_token", unique: true
  end

  create_table "brochures", force: :cascade do |t|
    t.string "name", null: false
    t.string "language", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name", "language"], name: "index_brochures_on_name_and_language", unique: true
  end

  create_table "brochures_products", force: :cascade do |t|
    t.bigint "brochure_id", null: false
    t.bigint "product_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["brochure_id", "product_id"], name: "index_brochures_products_on_brochure_id_and_product_id", unique: true
    t.index ["brochure_id"], name: "index_brochures_products_on_brochure_id"
    t.index ["product_id"], name: "index_brochures_products_on_product_id"
  end

  create_table "datasheets", force: :cascade do |t|
    t.bigint "product_id", null: false
    t.bigint "region_id", null: false
    t.string "code", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "language", null: false
    t.index ["code"], name: "index_datasheets_on_code", unique: true
    t.index ["product_id", "region_id"], name: "index_datasheets_on_product_id_and_region_id", unique: true
    t.index ["product_id"], name: "index_datasheets_on_product_id"
    t.index ["region_id"], name: "index_datasheets_on_region_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.text "information"
    t.text "indications"
    t.text "directions"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "sku"
    t.index ["name"], name: "index_products_on_name"
  end

  create_table "regions", force: :cascade do |t|
    t.string "name"
    t.integer "code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_regions_on_name", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
