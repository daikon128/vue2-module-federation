import { shallowMount } from '@vue/test-utils'
import TodoList from "@/components/TodoList";

describe('TodoList', () => {
  function createWrapper(todoList) {
    return shallowMount(TodoList, {
      propsData: {
        todoList: todoList
      }
    })
  }

  it('todo listが存在しない場合に何も表示されないこと', () => {
    const todoList = []
    const wrapper = createWrapper(todoList)

    console.log(wrapper.find('[name="todo-list"]'))
  })

  it('todo listが存在する場合、全て表示されること', () => {
    const todoList = [
      { id: 1, title: 'title1', description: 'description1' },
      { id: 2, title: 'title2', description: 'description2' },
      { id: 3, title: 'title3', description: 'description3' }
    ]
    const wrapper = createWrapper(todoList)
  })

})