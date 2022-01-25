import { createApp } from 'vue';
import AddToCart from './AddToCart.vue';

export default function mountAddToCart(el, id) {
  const app = createApp(AddToCart, { id });
  app.mount(el);
}