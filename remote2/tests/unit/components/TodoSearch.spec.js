import {mount} from "@cypress/vue";
import TodoSearch from "@/components/TodoSearch";

describe('TodoSearch', () => {
  function createWrapper() {
    return mount(TodoSearch, {
      propsData: {}
    })
  }

  it('検索ボタンを押下した際にTodoListが返却されること', () => {
    const spy = cy.spy()
    const wrapper = createWrapper().then(() => {
      Cypress.vue.$on('search-todo-list', spy)
    })

    wrapper
      .get('[name="todo-search-button"]')
      .click()
      .then(() => {
        const todoList = [
          { "id": 1, "title": "買い物をする", "description": "カレーの具材"},
          { "id": 2, "title": "本を読む", "description": "吾輩は猫である"},
          { "id": 3, "title": "昼寝をする", "description": "30分"}
        ]
        expect(spy).to.be.calledOnce.calledWith(todoList)
      })
  })
})