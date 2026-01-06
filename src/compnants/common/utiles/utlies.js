
  export const Price = (amount, price) => Number(amount) * Number(price);

  export const totalPrice = (counts,prices) => (counts.adult * prices.adult) + (counts.child * prices.child);