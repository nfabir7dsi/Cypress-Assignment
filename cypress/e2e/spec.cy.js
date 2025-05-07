const { faker } = require('@faker-js/faker')

describe('End to End Testing for OrangeHRM', () => {
  const adminUsername = "Admin"
  const adminPassword = "admin123"

  function generatePassword() {
    const smallChars = "abcdefghijklmnopqrstuvwxyz"
    const capChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const nums = "1234567890"
    const specials = "~!@#$%^&*()_+"

    // const empData = "empData.json"

    let password = ""

    password += capChars.charAt(Math.floor(Math.random() * capChars.length))

    let i = 10
    while (i--){
      password += smallChars.charAt(Math.floor(Math.random() * smallChars.length))
    }
    password += nums.charAt(Math.floor(Math.random() * nums.length))
    password += specials.charAt(Math.floor(Math.random() * specials.length))

    return password
  }

  it('OrangeHRM Admin Flow', () => {

    // Scenario 1
    cy.visit('/')

    cy.get("input[name='username']").type(adminUsername)
    cy.get("input[name='password']").type(adminPassword)
    cy.get("button[type='submit']").click()

    cy.get('h6').should('have.text', "Dashboard")

    // Scenario 2
    cy.get("li[class='oxd-main-menu-item-wrapper']:nth-child(2) > a").click()
    // cy.get("a[class='oxd-main-menu-item']:nth-child(2)").click()
    cy.get("button[type='button']").contains("Add").click()

    const firstName = faker.person.firstName('male')
    const middleName = faker.person.middleName('male')
    const lastName = faker.person.lastName('male')

    const fullName = firstName + " " + lastName
    const userName = firstName + lastName
    const password = generatePassword()
    const empId = Math.floor(Math.random() * 10)

    cy.get("input[name='firstName']").type(firstName)
    cy.get("input[name='middleName']").type(middleName)
    cy.get("input[name='lastName']").type(lastName)
    cy.get('label').contains('Employee Id').parent().siblings().children('input').type(empId)

    cy.get("input[type='checkbox']").click({force: true})

    cy.get('label').contains('Username').parent().siblings().children('input').type(userName)
    cy.get('label').contains('Password').parent().siblings().children('input').type(password)
    cy.get('label').contains('Confirm Password').parent().siblings().children('input').type(password)

    cy.get("button[type='submit']").click()

    let employeeId
    cy.get('label').contains('Employee Id').parent().siblings().children('input').invoke('val')
    .then((val) => {
      employeeId = val
      cy.log(employeeId)

      cy.writeFile('cypress/fixtures/empData.json', {
        userName,
        password,
        employeeId
      })
    })

    cy.log(employeeId)

    cy.get("#oxd-toaster_1").should('have.text', "SuccessSuccessfully Saved×")
    cy.get('h6').should("contain.text", fullName)

    // Scenario 3
    cy.get("li[class='oxd-main-menu-item-wrapper']:nth-child(2) > a").click()
    cy.fixture('empData').then((emp) => {
      cy.get('label').contains('Employee Id').parent().siblings().children('input').type(emp.employeeId)
      cy.get("button[type='submit']").click()
    })

    cy.get(".orangehrm-header-container").siblings('div').children('div').children('span').should('have.text', "(1) Record Found")

    // Scenario 4
    cy.get("li[class='oxd-main-menu-item-wrapper']:nth-child(9) > a").click()
    // cy.get("input[placeholder='Type for hints...']").type(firstName)
    // //
    // cy.get("button[type='submit']").click()

    // cy.get('.orangehrm-paper-container span').should('have.text', "(1) Record Found")

    // Scenario 5
    cy.get('.oxd-userdropdown-tab').click()
    cy.get(".oxd-dropdown-menu").contains("Logout").click()

    // Scenario 6
    cy.fixture('empData').then((emp) => {
      cy.get("input[name='username']").type(emp.userName)
      cy.get("input[name='password']").type(emp.password)
      cy.get("button[type='submit']").click()

      cy.get('.oxd-userdropdown-tab > p').should('contain.text', fullName)

      // Scenarion 7
      cy.get("li[class='oxd-main-menu-item-wrapper']:nth-child(3) > a").click()

      cy.get('label').contains("Male").click()

      cy.get('p').contains('* Required').siblings('button').click()
      // cy.get("#oxd-toaster_1").should('have.text', "Successfully Updated")

      // cy.get('label').contains('Blood Type').parent().siblings('div').click()
      //
      // cy.get("#oxd-toaster_1").should('have.text', "Successfully Saved")

      // Scenario 8
      cy.get('.oxd-userdropdown-tab').click()
      cy.get(".oxd-dropdown-menu").contains("Logout").click()
    })

  })

  after(() => {
    cy.writeFile('cypress/fixtures/empData.json',{})
  })
})