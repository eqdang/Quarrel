import gql from "graphql-tag";

export default {
    IS_LOGGED_IN: gql`
      query isUserLoggedIn {
          isLoggedIn @client
      }
    `,
    FETCH_QUESTIONS: gql`
      {
        questions {
          _id
          question
          user {
            name
          }
        }
      }
    `,
    CURRENT_USER: gql`
      query CurrentUser($token: String!) {
        currentUser(token: $token) {
          _id
          username
          name
          email
        }
      }
    `,
    SIMILAR_QUESTIONS: gql`
      query SimilarQuestions($question: String) {
        similarQuestions(question: $question) {
          _id
          question
          answers {
            _id
          }
        }
      }
    `
};