import axios from "axios"
import { loginType } from "../support/loginType"

describe('profile', () => {
  beforeEach(() => {
    cy.visit('/profile')
    window.localStorage.setItem('token', loginType.token)
})
  it('before the user sees the page content, a loading paragraph must be shown', () => {
    cy.get(loginType.loading).should('exist')
  })
  it('when the user clicks the logOut button, the token should be excluded and the user should be go back to the home page', () => {
    
      axios.get(loginType.url, {
        headers: {
          'Content-Type': "application/json",
          Accept: "application/json;version=v1_web"
        }
      })
      cy.get(loginType.logOutBtn).click().then(() => {
        window.localStorage.removeItem('token')
        cy.visit('/')
        cy.url().should('equal', 'http://localhost:5173/')
      })
  })
})