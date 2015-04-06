ProductManager.Views.ProductForm = Backbone.View.extend({
  template: _.template($('#tpl-new-product').html()),

  events: {
    'submit .product-form': 'onFormSubmit'
  },

  render: function() {
    var html = this.template(_.extend(this.model.toJSON(), {
      isNew: this.model.isNew()
    }));
    this.$el.append(html);
    return this;
  },

  onFormSubmit: function(e) {
    e.preventDefault();

    this.trigger('form:submitted', {
      name: this.$('.product-name-input').val(),
      price: this.$('.product-price-input').val(),
      unit: this.$('.product-unit-input').val(),
      description: this.$('.product-description-input').val()
    });
  }
});
