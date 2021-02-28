import Component from '@glimmer/component';
import { getOwner } from '@ember/application';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LoginComponent extends Component {
  @tracked showUserMenu = false;
  @tracked showAppMenu = false;
  @tracked showNavMenu = false;

  get showUser() {
    return this.args.showUser;
  }

  get appName() {
    const env = getOwner(this).factoryFor('config:environment').class;
    return env.appName || 'IMT CS';
  }

  @action
  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }

  @action
  toggleAppMenu() {
    this.showAppMenu = !this.showAppMenu;
  }

  @action
  toggleNavMenu() {
    this.showNavMenu = !this.showNavMenu;
  }
}

