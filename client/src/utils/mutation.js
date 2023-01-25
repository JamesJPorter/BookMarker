import { gql } from '@apollo/client';

export const SAVE_BOOK = gql`
mutation {
    saveBook($authors: String!, description: String!)
}
`