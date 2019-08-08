<template>
  <div class="top-list-container">
    <button class="top-list-button" @click="getTop">Get top 5 authors</button>
    <div v-if="authors.length === 0">
      <p>There is no authors in local database.</p>
      <p>Click the button to get updates.</p>
    </div>
    <div v-else class="list">
      <div v-for="(author, index) in authors" :key="index" class="list-item">
        <span>{{index + 1}}.</span>
        <span class="author-info">{{author.name}}, {{author.age}}y.o.</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TopList",
  data() {
    return {
      authors: []
    };
  },
  methods: {
    getTop() {
      axios.get("http://localhost:80/api/top5").then(({ data }) => {
        this.authors = data || [];
      });
    }
  }
};
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
}

.list-item {
  display: flex;
  justify-content: flex-start;
}

.author-info {
  padding: 0 1em;
}

.top-list-container {
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: flex-start;
  padding: 0 2em;
  font-size: 30pt;
  height: 100%;
}

.top-list-button {
  background-color: #fff;
  border: 1px solid blue;
  border-radius: 10px;
  color: blue;
  font-size: 1em;
  margin: 1em;
  outline: none;
  padding: 0.25em 1em;
}
.top-list-button:hover {
  background-color: #aeddf8;
}
</style>
