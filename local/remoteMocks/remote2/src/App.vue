<template>
  <div id="app">
    <todo-search></todo-search>
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from "./components/TodoList";
import TodoSearch from "@/components/TodoSearch";

export default {
  name: 'App',
  components: {
    TodoSearch,
    TodoList,
  }
}
</script>
