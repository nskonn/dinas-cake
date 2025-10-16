import { useState, useEffect } from 'react';
import {
  cakePrices,
  bentoPrices,
  dessertPrices,
  cakePopsPrices,
  eskimoPrices,
} from '../api/prices';

export const useCostCalculator = () => {
  const [category, setCategory] = useState<string>('');
  const [subcategory, setSubcategory] = useState<string>('');
  const [flavor, setFlavor] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [complexDesign, setComplexDesign] = useState<boolean>(false);
  const [toppers, setToppers] = useState<boolean>(false);
  const [berryDecoration, setBerryDecoration] = useState<boolean>(false);
  const [totalCost, setTotalCost] = useState<number>(0);

  useEffect(() => {
    setFlavor('');
    setSubcategory('');
  }, [category]);

  useEffect(() => {
    setFlavor('');
  }, [subcategory]);

  useEffect(() => {
    calculateTotal();
  }, [category, subcategory, flavor, quantity, complexDesign, toppers, berryDecoration]);

  const calculateTotal = () => {
    let baseCost = 0;
    let minQuantity = 1;

    if (category === 'cakes' && flavor) {
      baseCost = cakePrices[flavor] * quantity;
    } else if (category === 'bento' && flavor) {
      baseCost = bentoPrices[flavor] * quantity;
    } else if (category === 'desserts') {
      if (subcategory === 'eskimo' && flavor) {
        baseCost = eskimoPrices[flavor] * quantity;
        minQuantity = 4;
      } else if (subcategory === 'cakepops' && flavor) {
        baseCost = cakePopsPrices[flavor] * quantity;
        minQuantity = 4;
      } else if ((subcategory === 'cakes' || subcategory === 'trifles') && flavor) {
        baseCost = dessertPrices[flavor] * quantity;
        minQuantity = 4;
      }
    }

    let additionalCost = 0;
    if (complexDesign) additionalCost += category === 'bento' ? 250 : 200;
    if (toppers) additionalCost += 150;
    if (berryDecoration) {
      if (subcategory === 'eskimo' || subcategory === 'cakepops') {
        additionalCost += 50 * quantity;
      } else {
        additionalCost += 50;
      }
    }

    if (quantity < minQuantity) return setQuantity(minQuantity);

    setTotalCost(baseCost + additionalCost);
  };

  console.log(category, 'category1');

  return {
    category,
    setCategory,
    subcategory,
    setSubcategory,
    flavor,
    setFlavor,
    quantity,
    setQuantity,
    complexDesign,
    setComplexDesign,
    toppers,
    setToppers,
    berryDecoration,
    setBerryDecoration,
    totalCost,
  };
};
