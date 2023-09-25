import getDiscountsTotalForCart from "../queries/getDiscountsTotalForCart.js";

/**
 * @summary Cart transformation function that sets `discount` on cart
 * @param {Object} context Startup context
 * @param {Object} cart The cart, which can be mutated.
 * @returns {undefined}
 */
export default async function setDiscountsOnCart(context, cart) {
  console.log("cart in setDiscountsOnCart", cart);  
  const { total } = await getDiscountsTotalForCart(context, cart);
  console.log("total in setDiscountsOnCart", total);
  cart.discount = total;
}
