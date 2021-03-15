import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MenuComponent extends Component {
  @tracked showMenu = false;

  @action
  hideMenu() {
    this.showMenu = false;
  }

  @action
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
