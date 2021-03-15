import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MenuService extends Service {
  @tracked showMenu = false;

  @action
  hideMenu() {
    this.showMenu = false;
  }
}
