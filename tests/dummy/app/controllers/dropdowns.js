import Controller from '@ember/controller';

export default Controller.extend({
  get options() {
    return [
      'first',
      'second',
      'third',
      'forth'
    ]
  },
});

