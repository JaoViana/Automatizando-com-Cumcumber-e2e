
Given(/^que o usuário esteja na página inicial$/, () => {
	cy.get("http://automationpractice.com/index.php")
});

And(/^queria fazer um login$/, () => {
	cy.contains("Sign in").click()
});
And(/^que o usuário possua uma conta$/, () => {
	return true;
});

When(/^ele performar o login$/, () => {
	cy.get('input[id="email"]').type("joao.brisa258@gmail.com")
	cy.get('input[id="passwd"]').type('mago258')
	cy.xpath('//i[@class="icon-lock left"]').click()
});

Then(/^uma mensagem de sucesso deve aparecer$/, () => {
	cy.contains("João Brisa")
});
