import Component from '@glimmer/component';

export default class MenuItemsComponent extends Component {
  get showMenu() {
    return this.args.showMenu;
  }
}
