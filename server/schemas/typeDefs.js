const { gql } = require('apollo-server-express')

const typeDefs = gql`
type Book {
    _id: ID!
    authors: String
    description: String!
    bookId: String
    image: String
    link: String
    title: String!
}

type User {
    username: String!
    email: String
    password: String
    savedBooks: type Book [bookSchema]
}
`