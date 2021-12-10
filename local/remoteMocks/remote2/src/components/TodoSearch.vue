<template>
  <fieldset>
    <div name="todo-search">TodoSearch dummy</div>
    <button name="todo-search-button" @click="onTodoSearchButton">search todo mock</button>
  </fieldset>
</template>

<script>
export default {
  name: "TodoSearch",
  methods: {
    onTodoSearchButton() {
      this.$emit('search-todo-list', [{ id:1, name: "name1", description: "description1"}])
    }
  }
}
</script>

<style scoped>
fieldset {
  background: repeating-linear-gradient(
      45deg,
      #ffffff,
      #ffffff 28.75px,
      #dddddd 28.75px,
      #dddddd 57.5px
  );
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
}
div {
  display: block;
  background: #fffe;
  border-radius: 0.25rem;
  padding: 0.5rem;
}
</style>