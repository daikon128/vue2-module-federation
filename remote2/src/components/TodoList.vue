<template>
  <div name="todo-list">
    <div v-for="todo in this.todoList" :key="todo.id">
      <span>{{ todo.title }} : {{ todo.description }}</span>
    </div>
  </div>

</template>

<script>
export default {
  name: "TodoList",
  props: ['todoList']
}
</script>

<style scoped>

</style>