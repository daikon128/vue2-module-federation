<template>
  <div>
    <div v-for="todo in this.filterdTodoList" :key="todo.id">
      {{ todo.title }} : {{ todo.description }}
    </div>
  </div>

</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      todoLists: [
        { "id": 1, "title": "買い物をする", "description": "カレーの具材"},
        { "id": 2, "title": "本を読む", "description": "吾輩は猫である"},
        { "id": 3, "title": "昼寝をする", "description": "30分"},
      ],
      searchText: ""
    }
  },
  computed: {
    filterdTodoList: function() {
      return this.todoLists.filter(it => it.title.includes(this.searchText) || it.description.includes(this.searchText))
    }

  }

}
</script>

<style scoped>

</style>