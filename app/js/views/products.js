ProductManager.Views.Products = Backbone.View.extend({
  template: _.template($('#tpl-products').html()),

  renderOne: function(product) {
    var itemView = new ProductManager.Views.Product({model: producct});
    this.$('.products-container').append(itemView.render().$el);
  },

  render: function() {
    var html = this.template();
    this.$el.html(html);

    this.collection.each(this.renderOne, this);

    return this;
  }
});
