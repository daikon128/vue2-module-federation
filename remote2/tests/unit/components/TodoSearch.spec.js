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
      .then(() =>
        expect(spy).to.be.calledOnce
      )
  })
})