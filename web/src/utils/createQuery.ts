import { CategoryTypes, FilterTypes } from '@/context/FilterProvider/types';

function getCategoryByType(type: CategoryTypes) {
  if (type === CategoryTypes.MUGS) return 'mugs';
  if (type === CategoryTypes.SHIRTS) return 't-shirts';
  return '';
}

function getOrderByByType(orderBy: FilterTypes) {
  if (orderBy === FilterTypes.NEWNESS)
    return { field: 'created_at', order: 'DSC' };
  if (orderBy === FilterTypes['HIGH-PRICE-TO-LOW-PRICE'])
    return { field: 'price_in_cents', order: 'DSC' };
  if (orderBy === FilterTypes['LOW-PRICE-TO-HIGH-PRICE'])
    return { field: 'price_in_cents', order: 'ASC' };
  if (orderBy === FilterTypes['BEST-SELLER'])
    return { field: 'sales', order: 'DSC' };
}

export function createQuery(type: CategoryTypes, orderBy: FilterTypes): string {
  if (type === CategoryTypes.ALL && orderBy === FilterTypes.NEWNESS) {
    return `query {
    allProducts(sortField: "created_at", sortOrder: "DSC") {
        id,
        name,
        image_url,
        price_in_cents,
    }
  }`;
  }

  const category = getCategoryByType(type);
  const order = getOrderByByType(orderBy);

  if (type === CategoryTypes.ALL) {
    return `query {
    allProducts(sortField: "${order?.field}", sortOrder: "${order?.order}") {
        id,
        name,
        image_url,
        price_in_cents,
    }
  }`;
  }

  return `query {
    allProducts(sortField: "${order?.field}", sortOrder: "${order?.order}", filter: {category: "${category}"}) {
        id,
        name,
        image_url,
        price_in_cents,
    }
  }`;
}
