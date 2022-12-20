/**
 * Data restoran diambil dari RESTful API:
 *  https://restaurant-api.dicoding.dev/
 *
 * Silakan baca dokumentasi untuk mengetahui-
 * cara penggunaannya.
 */

const BASE_URL = 'https://restaurant-api.dicoding.dev';

async function getRestaurants() {
  try {
    const response = await fetch(`${BASE_URL}/list`);
    const { restaurants } = await response.json();
    return restaurants;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function getRestaurant(id) {
  try {
    const response = await fetch(`${BASE_URL}/detail/${id}`);
    const { restaurant } = await response.json();
    return restaurant;
  } catch (error) {
    console.log(error);
  }
}

async function postRestaurantReview(id, name, review) {
  try {
    const response = await fetch(`${BASE_URL}/review`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id,
        name,
        review
      })
    });
    const { customerReviews } = await response.json();
    return customerReviews;

    
  } catch (error) {
    console.log(error);
  }
}

export { getRestaurant, getRestaurants, postRestaurantReview };
