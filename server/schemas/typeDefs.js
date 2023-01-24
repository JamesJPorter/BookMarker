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

type bookStuff {
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

type Mutations {
    saveBook(bookData: bookStuff!): User
    removeBook(bookId: ID!): User
    login(email: String!, password: String!): Auth
    createUser(name: String!, email: String!, password: String!): Auth
}
`