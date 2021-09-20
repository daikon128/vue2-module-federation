<template>
  <div>
    <input name="todo-search-text-box" v-model="searchText" type="text"/> <button name="todo-search-button" v-on:click="search">search</button>
  </div>
</template>

<script>
export default {
  name: "TodoSearch",
  data() {
    return {
      searchText: "",
      todoList: []
    }
  },
  methods: {
    search: function () {
      // 外部からとってきているつもり
      this.todoList = [
        { "id": 1, "title": "買い物をする", "description": "カレーの具材"},
        { "id": 2, "title": "本を読む", "description": "吾輩は猫である"},
        { "id": 3, "title": "昼寝をする", "description": "30分"}
      ]
      this.$emit('search-todo-list', this.filterdTodoList)
    }
  },
  computed: {
    filterdTodoList() {
      return this.todoList.filter(todo => (todo.title.match(this.searchText) || todo.description.match(this.searchText)))
    }
  }


}
</script>

<style scoped>

</style>