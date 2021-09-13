<template>
  <form>
    <input v-model="searchText" type="text"/> <button v-on:input="search">search</button>
  </form>
</template>

<script>
export default {
  name: "TodoSearch",
  data() {
    return {
      searchText: ""
    }
  },
  methods: {
    search: function () {
      console.log(`search: ${this.searchText}`)
      return { todoLists: [
          { "id": 1, "title": "買い物をする", "description": "カレーの具材"},
          { "id": 2, "title": "本を読む", "description": "吾輩は猫である"},
          { "id": 3, "title": "昼寝をする", "description": "30分"}
        ]}

    }
  }


}
</script>

<style scoped>

</style>