import {mount} from "@cypress/vue"
import TodoSearch from "../../../src/components/TodoSearch.vue"

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

  it('検索文字列を入れた状態で検索ボタンを押下した際に、絞り込まれたTodoListが返却されること', () => {
    const spy = cy.spy()
    const wrapper = createWrapper().then(() => {
      Cypress.vue.$on('search-todo-list', spy)
    })

    wrapper
      .get('[name="todo-search-text-box"]')
      .type('昼')
      .get('[name="todo-search-button"]')
      .click()
      .then(() => {
        const todoList = [
          { "id": 3, "title": "昼寝をする", "description": "30分"}
        ]
        expect(spy).to.be.calledOnce.calledWith(todoList)
      })
  })
})