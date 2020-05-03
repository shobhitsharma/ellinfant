export interface EtsyPagination {
  effective_limit: number;
  effective_offset: number;
  next_offset: null;
  effective_page: number;
  next_page: null;
}

export interface EtsyParams {
  limit: string;
  offset: number;
  page: null;
  shop_id: string;
  keywords: null;
  sort_on: string;
  sort_order: string;
  min_price: null;
  max_price: null;
  color: null;
  color_accuracy: number;
  tags: null;
  taxonomy_id: null;
  translate_keywords: string;
  include_private: number;
}

export interface EtsyListingImage {
  listing_image_id: number;
  hex_code: string;
  red: number;
  green: number;
  blue: number;
  hue: number;
  saturation: number;
  brightness: number;
  is_black_and_white: boolean;
  creation_tsz: number;
  listing_id: number;
  rank: number;
  url_75x75: string;
  url_170x135: string;
  url_570xN: string;
  url_fullxfull: string;
  full_height: number;
  full_width: number;
}

export interface EtsyListing {
  listing_id: number;
  state?: string;
  user_id: number;
  category_id: number;
  title: string;
  description: string;
  creation_tsz?: number;
  ending_tsz?: number;
  original_creation_tsz?: number;
  last_modified_tsz?: number;
  price: string;
  currency_code?: string;
  quantity?: number;
  sku?: any[];
  tags?: string[];
  materials?: any[];
  shop_section_id?: number;
  featured_rank?: number;
  state_tsz?: number;
  url?: string;
  views?: number;
  num_favorers?: number;
  shipping_template_id?: number;
  processing_min?: number;
  processing_max?: number;
  who_made?: string;
  is_supply?: string;
  when_made?: string;
  item_weight?: null;
  item_weight_unit?: string;
  item_length?: null;
  item_width?: null;
  item_height?: null;
  item_dimensions_unit?: string;
  is_private?: boolean;
  recipient?: null;
  occasion?: null;
  style?: null;
  non_taxable?: boolean;
  is_customizable?: boolean;
  is_digital?: boolean;
  file_data?: string;
  should_auto_renew?: boolean;
  language?: string;
  has_variations?: boolean;
  taxonomy_id?: number;
  taxonomy_path?: string[];
  used_manufacturer?: boolean;
  is_vintage?: boolean;
  images?: EtsyListingImage[];
}

export interface EtsyResponse {
  type: string;
  count: number;
  params: EtsyParams;
  pagination: EtsyPagination;
  results: EtsyListing[];
  images: { [key: string]: EtsyListingImage[] };
}

export const getListings = async () => {
  const listings = await import('../data/listings.json');
  const listingImages = await import('../data/listing-images.json');

  (listings as any).images = listingImages;

  return listings;
};

export const getListingById = async (listingId: string) => {
  const data = await import('../data/listings.json');
  const listingImages = await import('../data/listing-images.json');

  const listings = data.results as EtsyListing[];

  const listing = listings.find((listing: EtsyListing) => {
    return listing.listing_id.toString() === listingId.toString();
  }) as EtsyListing;

  if (listing) {
    listing.images = (listingImages as any)[listingId];
  }

  const suggestions = [
    listings[Math.floor(Math.random() * listings.length)],
    listings[Math.floor(Math.random() * listings.length)],
    listings[Math.floor(Math.random() * listings.length)]
  ];

  return { listing, suggestions };
};
