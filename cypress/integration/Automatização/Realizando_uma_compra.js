
Given(/^que o usuário tenha itens no carrinho$/, () => {
	cy.visit("/")
    cy.contains("Sign in").click()
    cy.get('input[id="email"]').type("joao.brisa258@gmail.com")
	cy.get('input[id="passwd"]').type('mago258')
	cy.xpath('//i[@class="icon-lock left"]').click()
    cy.contains("Women").click()
    cy.contains("Faded Short Sleeve T-shirts").click()
    cy.contains("Add to cart").click()
});

And(/^que deseje finalizar a compra$/, () => {
	
    cy.contains('Proceed to checkout').click()
    //Menu flutante
    cy.get('.cart_navigation > .button > span').click()
    //Página 1
    cy.contains('Proceed to checkout').click()
    cy.get('input[id="cgv"]').check()
    cy.contains('Proceed to checkout').click()

});

Then(/^realize a compra$/, () => {
	return true;
});
