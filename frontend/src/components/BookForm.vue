<template>
  <form class="form-container" @submit.prevent="onSubmit">
    <div class="row">
      <label>Author ID</label>
      <input type="number" v-model="author_id" placeholder="Author ID.." required />
    </div>
    <div class="row">
      <label>Title</label>
      <input type="text" v-model="title" placeholder="Book title.." required />
    </div>
    <div class="row">
      <label>Pages</label>
      <input type="number" v-model="pages" min="1" placeholder="Pages.." required />
    </div>
    <div class="row">
      <button class="form-button">Submit</button>
    </div>
  </form>
</template>

<script>
import { Api } from "../api/index";

export default {
  data() {
    return {
      author_id: null,
      title: null,
      pages: null
    };
  },
  methods: {
    onSubmit() {
      Api.sendBookData(this.author_id, this.title, this.pages);
      this.author_id = null;
      this.title = null;
      this.pages = null;
    }
  }
};
</script>
