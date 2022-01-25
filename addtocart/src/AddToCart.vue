<template>
  <button
    v-if="loggedIn"
    v-on:click="handleClick"
    class="bg-yellow-500 text-white py-2 px-5 rounded-md text-sm mt-5"
  >
    Add To Cart
  </button>
</template>

<script>
import { ref, onMounted } from "vue";
import { jwt } from "auth/auth";
import { addToCart } from "cart/cart";
export default {
  props: ["id"],

  setup() {
    let loggedIn = ref(false);

    onMounted(() => {
      const observable$ = jwt.subscribe(
        (value) => {
          loggedIn.value = !!value;
        },
        () => observable$.unsubscribe()
      );
    });
  
    return {
      loggedIn,
    };
  },

  methods: {
    handleClick() {
      addToCart(this.id);
    },
  },
};
</script>
