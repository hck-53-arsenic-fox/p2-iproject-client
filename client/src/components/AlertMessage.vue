<template>
  <div class="alert alert-danger alert-fixed" v-if="show" role="alert">
    {{ message }}
    <button type="button" class="close" aria-label="Close" @click="dismiss">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    callback: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.dismiss();
    }, 3000);
  },
  methods: {
    dismiss() {
      this.show = false;
      this.callback();
    },
  },
};
</script>

<style>
.alert-fixed {
  position: fixed;
  top: 40px;
  left: 10%;
  right: 10%;
  margin: auto;
  z-index: 9999;
  transition: opacity 0.3s;
}

@media (min-width: 768px) {
  .alert-fixed {
    left: 20%;
    right: 20%;
  }
}

@media (min-width: 992px) {
  .alert-fixed {
    left: 25%;
    right: 25%;
  }
}
</style>
