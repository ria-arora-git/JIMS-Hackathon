-- CreateTable
CREATE TABLE "properties" (
    "spid" VARCHAR(255) NOT NULL,
    "prop_id" VARCHAR(255) NOT NULL,
    "preference" VARCHAR(255),
    "description" VARCHAR(10000),
    "property_type" VARCHAR(255),
    "city" VARCHAR(255),
    "transact_type" VARCHAR(255),
    "owntype" VARCHAR(255),
    "bedroom_num" VARCHAR(255),
    "price_per_unit_area" VARCHAR(255),
    "furnish" VARCHAR(255),
    "facing" VARCHAR(255),
    "age" VARCHAR(255),
    "total_floor" VARCHAR(255),
    "features" VARCHAR(10000),
    "register_date" VARCHAR(255),
    "posting_date" VARCHAR(255),
    "update_date" VARCHAR(255),
    "class" VARCHAR(255),
    "res_com" VARCHAR(255),
    "prop_name" VARCHAR(255),
    "property_number" VARCHAR(255),
    "min_price" VARCHAR(255),
    "max_price" VARCHAR(255),
    "price_sqft" VARCHAR(255),
    "proj_id" VARCHAR(255),
    "building_id" VARCHAR(255),
    "verified" VARCHAR(255),
    "map_details" VARCHAR(5000),
    "min_area_sqft" VARCHAR(255),
    "max_area_sqft" VARCHAR(255),
    "amenities" VARCHAR(5000),
    "alt_tag" VARCHAR(5000),
    "product_type" VARCHAR(255),
    "top_usps" VARCHAR(5000),
    "expiry_date" VARCHAR(255),
    "property_type__u" VARCHAR(255),
    "area" VARCHAR(255),
    "secondary_area" VARCHAR(255),
    "price" VARCHAR(255),
    "prop_heading" VARCHAR(5000),
    "value_label" VARCHAR(255),
    "class_heading" VARCHAR(255),
    "class_label" VARCHAR(255),
    "register_date__u" VARCHAR(255),
    "registered_days" VARCHAR(255),
    "primary_tags" VARCHAR(5000),
    "secondary_tags" VARCHAR(5000),
    "total_landmark_count" VARCHAR(255),
    "formatted_landmark_details" VARCHAR(5000),
    "society_name" VARCHAR(255),
    "building_name" VARCHAR(255),
    "location" VARCHAR(5000),
    "balcony_num" VARCHAR(255),
    "floor_num" VARCHAR(255),

    CONSTRAINT "properties_pkey" PRIMARY KEY ("prop_id")
);
