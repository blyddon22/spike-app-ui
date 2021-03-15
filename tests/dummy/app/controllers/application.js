import Controller from '@ember/controller';

export default Controller.extend({
  get appMenuItems() {
    return [
      { name: 'Test', route: 'other', svg: 'M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z'},
    ];
  },

  get headerLinks() {
    return [
      { route: 'index', name: 'Index'},
      { route: 'other', name: 'Other'},
      { route: 'dropdowns', name: 'Dropdowns'}
    ]
  }
});

