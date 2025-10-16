import {
  cakePrices,
  bentoPrices,
  dessertPrices,
  cakePopsPrices,
  eskimoPrices,
} from '../api/prices';

export const getFlavors = (category: string, subcategory: string) => {
  if (category === 'cakes') return Object.keys(cakePrices);
  if (category === 'bento') return Object.keys(bentoPrices);
  if (category === 'desserts') {
    if (subcategory === 'eskimo') return Object.keys(eskimoPrices);
    if (subcategory === 'cakepops') return Object.keys(cakePopsPrices);
    if (subcategory === 'cakes' || subcategory === 'trifles')
      return Object.keys(dessertPrices);
  }
  return [];
};

export const getQuantityLabel = (category: string) =>
  category === 'cakes' ? 'кг' : 'шт';

export const getMinQuantity = (category: string, subcategory: string) => {
  if (
    category === 'desserts' &&
    ['eskimo', 'cakepops', 'cakes', 'trifles'].includes(subcategory)
  ) {
    return 4;
  }
  return category === 'cakes' ? 1 : 1;
};

export const getStep = (category: string) =>
  category === 'cakes' ? 0.5 : 1;

export const scrollToOrder = () =>
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
