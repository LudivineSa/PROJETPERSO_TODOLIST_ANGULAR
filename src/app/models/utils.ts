import { Todo } from "./todo.model";

export const today = new Date()
today.setHours(0,0,0,0);


export const deleteItemFromArray = (todo:Todo, array: Todo[]) => {
  const index = array.findIndex((item => item.id === todo.id));
  if (index > -1) {
    array.splice(index, 1);
  }
}
