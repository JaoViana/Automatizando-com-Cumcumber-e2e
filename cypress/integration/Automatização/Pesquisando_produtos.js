
Given(/^Que o usuário esteja na página inicial$/, () => {
	cy.visit("/")
});

And(/^queria pesquisar algum produto$/, () => {
	return true;
});

Then(/^Pesquise produtos$/, () => {
	cy.xpath('//input[@id="search_query_top"]').type("Shirt")
    cy.contains('Search').click()

});
