import { mount } from '@cypress/vue'
import TodoList from "@/components/TodoList";

describe('TodoList', () => {
  function createWrapper(todoList) {
    return mount(TodoList, {
      propsData: {
        todoList: todoList
      }
    })
  }

  it('todo listが存在しない場合に何も表示されないこと', () => {
    const todoList = []
    const wrapper = createWrapper(todoList)

    wrapper.get('[name="todo-list"]').should('have.text', "")
  })

  it('todo listが存在する場合、全て表示されること', () => {
    const todoList = [
      { id: 1, title: 'title1', description: 'description1' },
      { id: 2, title: 'title2', description: 'description2' },
      { id: 3, title: 'title3', description: 'description3' }
    ]
    const wrapper = createWrapper(todoList)

    const todoListElement = wrapper.get('[name="todo-list"] div')
    todoListElement.should('have.length', 3)
    todoListElement.first().should('have.text', 'title1 : description1')
                   .next().should('have.text', 'title2 : description2')
                   .next().should('have.text', 'title3 : description3')

  })

})