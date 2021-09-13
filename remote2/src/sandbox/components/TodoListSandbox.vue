<template>
  <div>
    <fieldset>
      <legend>Todo Toggle</legend>
    </fieldset>
    <fieldset>
      <legend>Todo Search</legend>
      <TodoSearch />
    </fieldset>
    <fieldset>
      <legend>Todo List</legend>
      <TodoList />
    </fieldset>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import TodoSearch from "@/components/TodoSearch";
export default {
name: "TodoListSandbox",
  components: {TodoSearch, TodoList}
}
</script>

<style scoped>
fieldset {
  background-color: white;
}
</style>