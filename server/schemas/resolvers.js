const { bookSchema, User } = require('../models');

const resolvers = {
    Query: {
        User: async () => {
            return await User.
        }
    }
}

