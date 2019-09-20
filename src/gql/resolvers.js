const {
  Category,
  Location,
  Order,
  Review,
  Service,
  User,
} = require('../db/models');

module.exports = {
  Query: {
    categories: () => Category.findAll(),
    locations: () => Location.findAll(),
    orders: () => Order.findAll(),
    reviews: () => Review.findAll(),
    services: () => Service.findAll(),
    users: () => User.findAll(),
  },
  Mutation: {
    createCategory: (parent, { name, children_categories }) =>
      Category.create({
        name,
        children_categories,
      }),
  },
};
