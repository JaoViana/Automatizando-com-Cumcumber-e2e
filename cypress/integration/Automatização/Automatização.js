
Given(/^que o usuário esteja na página inicial$/, () => {
	cy.visit("/");
});

And(/^queira fazer um Login$/, () => {
	cy.contains("Sign in").click()	
});

When(/^ele performar o Login$/, () => {
	cy.get('input[id="email"]').type("joao.brisa258@gmail.com")
	cy.get('input[id="passwd"]').type('mago')
	cy.xpath('//i[@class="icon-lock left"]').click()
});

Then(/^uma mensagem de erro aparecerá na tela informando o login invalido$/, () => {
	cy.contains("There is 1 error")
});
