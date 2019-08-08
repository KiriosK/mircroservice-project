<template>
  <form class="form-container" @submit.prevent="submitAuthorData">
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

export default {
  data() {
    return {
      name: null,
      age: null
    };
  },
  methods: {
    submitAuthorData() {
      axios({
        method: "post",
        url: "http://localhost:80/api/author",
        data: {
          name: this.name,
          age: this.age
        }
      }).catch(err => console.log(err));
      this.name = null;
      this.age = null;
    }
  }
};
</script>

<style scoped>
</style>
