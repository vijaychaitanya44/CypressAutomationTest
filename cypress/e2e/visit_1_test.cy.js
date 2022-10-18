describe("Cypress first suite",function () {
    
    it("TestCase 1",function(){
cy.visit("https://app-sjqe.marketo.com")
cy.xpath("//input[@id='loginUsername']").type("vj_rca_man7.qe@marketo.com")
cy.get("#loginPassword").type("Bryc3.n311ian")
cy.xpath("//input[@value='Sign in']").click()
cy.title().should("contain","Marketo")
    })
})