<template>
  <form class="form-container" @submit.prevent="onSubmit">
    <div class="row">
      <label>Name</label>
      <input type="text" v-model="name" placeholder="Author name.." required />
    </div>
    <div class="row">
      <label>Age</label>
      <input type="number" v-model="age" min="1" placeholder="Author age.." required />
    </div>
    <div class="row">
      <button class="form-button">Submit</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import { Api } from "../api/index";

export default {
  data() {
    return {
      name: null,
      age: null
    };
  },
  methods: {
    onSubmit() {
      Api.sendAuthorData(this.name, this.age);
      this.name = null;
      this.age = null;
    }
  }
};
</script>

<style scoped>
</style>
