const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
          },
    },

    Mutation: {
        saveBook: async (parent, {bookData}, context ) => {
            if (context.user) {
                const updateUser =  await User.findByIdandUpdate(
                    { _id: context.user._id }, 
                    { $push: {savedBooks: bookData}},
                    {new: true}
                    );
              }
            },

        removeBook: async (parent, {bookId}, context) => {
            if (context.user) {
                const updateUser =  await User.findByIdandUpdate(
                    { _id: context.user._id }, 
                    { $pull: {savedBooks: bookData}},
                    {new: true}
                    );
            }
        },

        login: async (parent, {email, password }) =>{
            const loginUser = await User.findOne({ email })
            if (!loginUser) {
                throw new AuthenticationError('No profile with this email found!');
              }
        
              const correctPw = await loginUser.isCorrectPassword(password);
        
              if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
              }
        
              const token = signToken(loginUser);
              return { token, loginUser };
        },
        createUser: async (parent, { username, email, password }) => {
            const newUser = await User.create({username, email, password});
            const token = signToken(newUser);

            return { token, newUser };
        }
    }
}

module.exports = resolvers;
