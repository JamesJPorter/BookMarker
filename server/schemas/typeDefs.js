const { gql } = require('apollo-server-express')

const typeDefs = gql`
type Book {
    _id: ID!
    authors: [String]
    description: String!
    bookId: String
    image: String
    link: String
    title: String!
}

type Auth {
    token: ID!
    user: User
}

type User {
    _id: ID!
    username: String!
    email: String
    password: String
    savedBooks: [Book]
}

input bookData {
    authors: [String]
    description: String!
    bookId: String
    image: String
    link: String
    title: String!
}

type Query {
    me: User
}

type Mutation {
    saveBook(bookData: bookData!): User
    removeBook(bookId: ID!): User
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
}
`

module.exports = typeDefs;