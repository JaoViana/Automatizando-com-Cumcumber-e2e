
Given(/^Que o usuário esteja em alguma aba de compras$/, () => {
	cy.visit("/")
    cy.contains("Women").click()    
});

And(/^Queira aplicar algum filtro$/, () => {
    
	
});

Then(/^Então aplique os filtros$/, () => {
    cy.get('input[id="layered_category_4"]').check()
    cy.get('input[id="layered_id_attribute_group_2"]').check()
    cy.get('input[id="layered_id_feature_5"]').check()
    cy.get('input[id="layered_quantity_1"]').check()
    cy.get('input[id="layered_condition_new"]').check()   
});
