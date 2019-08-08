<template>
  <div id="app">
    <div id="container">
      <author-form />
      <book-form />
    </div>
    <top-list />
  </div>
</template>

<script>
import AuthorForm from "./components/AuthorForm.vue";
import BookForm from "./components/BookForm.vue";
import TopList from "./components/TopList.vue";

export default {
  name: "app",
  components: {
    AuthorForm,
    BookForm,
    TopList
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.row {
  display: flex;
  flex-direction: column;
  font-size: 2em;
}

label {
  margin: 0.5em;
}
input {
  width: 100%;
  font-size: 1em;
  padding: 0.5em;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

#app {
  display: flex;
  justify-content: center;
  height: 100vh;
}

#container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.form-container {
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  justify-content: space-between;
  padding: 1em;
}

.form-button {
  align-self: flex-end;
  background-color: #4caf50;
  border: none;
  border-radius: 10px;
  color: white;
  margin: 1em 0;
  font-size: 15pt;
  outline: none;
  padding: 0.5em;
  width: 100%;
}

.form-button:hover {
  background-color: #45a049;
}
</style>