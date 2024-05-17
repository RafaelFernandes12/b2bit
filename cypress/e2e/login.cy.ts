import { loginType } from "../support/loginType"

describe('login', () => {
  beforeEach(() => {
    cy.visit('/')
})

  it('a toast should appear at the top of the screen writen on it "Por favor, preencha todos os campos" when leaving all the fields blank', () => {
    cy.get(loginType.signInBtn).click()
    const toast = cy.get(loginType.toast).should('be.visible')
    toast.contains('Por favor, preencha todos os campos')
  })
  it('a toast should appear at the top of the screen writen on it "Email ou senha incorretos" when the email os password dont match whats in the database', () => {
    cy.get(loginType.inputEmail).type('test@gmail.com')
    cy.get(loginType.inputPassword).type('test')
    cy.get(loginType.signInBtn).click()
    const toast = cy.get(loginType.toast).should('be.visible')
    toast.contains('Email ou senha incorretos')
  })
  it('the user should be redirected to the profile page a token added to the local storage when the email and password are correct', () => {
    cy.get(loginType.inputEmail).type('cliente@youdrive.com')
    cy.get(loginType.inputPassword).type('password')
    cy.get(loginType.signInBtn).click().then(() => {
      window.localStorage.setItem('token', loginType.token)
      cy.getAllLocalStorage().then((result) => {
        expect(result).to.deep.equal({
          'http://localhost:5173': {
            token: loginType.token,
          },
        })
      })
      cy.visit('/profile')
      cy.url().should('equal' , 'http://localhost:5173/profile')
    })
  })
})