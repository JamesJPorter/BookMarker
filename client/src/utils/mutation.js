import { gql } from '@apollo/client';

export const SAVE_BOOK = gql`
mutation Mutation($bookData: bookData!) {
    saveBook(bookData: $bookData) {
      _id
      username
      email
      password
      savedBooks {
        [Book]
      }
    }
  }
  `;

  export const REMOVE_BOOK = gql`
  mutation Mutation($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      password
      savedBooks {
        _id
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
  `;

  export const LOGIN = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
        savedBooks {
          _id
          authors
          description
          bookId
          image
          link
          title
        }
      }
    }
  }
  `;

  export const CREATE_USER = gql`
  mutation Mutation($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
        savedBooks {
          _id
          authors
          description
          bookId
          image
          link
          title
        }
      }
    }
  }
`;