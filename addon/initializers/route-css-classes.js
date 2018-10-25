
import Ember from 'ember';

export function initialize() {
  Ember.Route.reopen({
    activate() {
      this._super(...arguments);

      this.getBodyElement().addClass(this.getRouteCssClass());
    },

    deactivate() {
      this._super(...arguments);

      this.getBodyElement().removeClass(this.getRouteCssClass());
    },

    getRouteCssClass() {
      return `${this.get('routeName').replace(/\./g, '-').dasherize()}-content`;
    },

    getBodyElement() {
      return document.querySelector('body');
    }
  });
}
