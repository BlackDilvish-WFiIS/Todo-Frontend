import { TodoPresenter } from './todo-presenter';

describe('TodoPresenter', () => {
  it('should create an instance', () => {
    expect(new TodoPresenter()).toBeTruthy();
  });

  it('should add item',()=>{
    let presenter = new TodoPresenter();
    presenter.addItem("test","test");
    expect(presenter.Items.length).toEqual(4);
  });

  it('should delete item',()=>{
    let presenter = new TodoPresenter();
    presenter.removeItem(0);
    expect(presenter.Items.length).toEqual(3);
  });

  it('should mark item',()=>{
    let presenter = new TodoPresenter();
    presenter.setCompleted(0, true);
    expect(presenter.Items[0].completed).toEqual(true);
  });
});