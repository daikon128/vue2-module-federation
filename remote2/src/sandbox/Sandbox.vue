<template>
  <div id="app" class="background-stripe">
    <TodoListSandbox/>
  </div>
</template>

<script>
import TodoListSandbox from "@/sandbox/components/TodoListSandbox";

export default {
  name: 'Sandbox',
  components: {
    TodoListSandbox,
  }
}
</script>

<style scoped>
.background-stripe {
  background:repeating-linear-gradient(
      45deg,
      #ffffff,
      #ffffff 28.75px,
      #dddddd 28.75px,
      #dddddd 57.5px
  );
}
</style>
