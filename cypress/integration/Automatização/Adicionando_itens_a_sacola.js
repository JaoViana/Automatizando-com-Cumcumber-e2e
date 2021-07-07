
Given(/^que o usuário tenha realizado o login$/, () => {
	cy.visit("/")
    cy.contains("Sign in").click()
    cy.get('input[id="email"]').type("joao.brisa258@gmail.com")
	cy.get('input[id="passwd"]').type('mago258')
	cy.xpath('//i[@class="icon-lock left"]').click()
});
And(/^queira adicionar itens a sua sacola$/, () => {
	return true;
});
And(/^selecione a opção "([^"]*)"$/, (args1) => {
	console.log(args1);
	cy.contains("Women").click()
});
And(/^escolha algum produto$/, () => {
	
});
When(/^selecionar algum produto$/, () => {
    cy.contains("Faded Short Sleeve T-shirts").click()	
});
Then(/^o item deve ser adicionado a sacola$/, () => {
	cy.contains("Add to cart").click()
    cy.contains("There is 1 item in your cart.")
    cy.contains("Proceed to checkout").click()
    cy.contains('Your shopping cart contains: ')
});
