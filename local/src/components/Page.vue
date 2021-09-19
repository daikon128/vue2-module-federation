<template>
  <div>
    page
    <custom-button></custom-button>
    <custom-header></custom-header>
    <todo-list></todo-list>
  </div>
</template>

<script>
import CustomHeader from "@/components/CustomHeader"

export default {
  name: "Page",
  components: {
    CustomHeader
  }
}
</script>
