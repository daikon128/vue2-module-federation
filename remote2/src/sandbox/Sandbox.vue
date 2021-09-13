<template>
  <div id="app">
    <CustomHeader/>
    <TodoSearch />
    <TodoList />
  </div>
</template>

<script>
import CustomHeader from '@/components/CustomHeader.vue'
import TodoSearch from "@/components/TodoSearch";
import TodoList from "@/components/TodoList";

export default {
  name: 'Sandbox',
  components: {
    CustomHeader,
    TodoList,
    TodoSearch
  }
}
</script>
