Feature: Automatização

    Interação com o usuário e página
    Testando de ponta a ponta

Scenario: Login invalido
    
    Given que o usuário esteja na página inicial
    And queira fazer um Login
    When ele performar o Login
    Then  uma mensagem de erro aparecerá na tela informando o login invalido

Scenario: Login valido
    Given que o usuário esteja na página inicial
    And queria fazer um login
    And que o usuário possua uma conta
    When ele performar o login
    Then uma mensagem de sucesso deve aparecer

Scenario: Adicionando itens a sacola

    Given que o usuário tenha realizado o login
    And queira adicionar itens a sua sacola
    And selecione a opção "Women"
    And escolha algum produto
    When selecionar algum produto
    Then o item deve ser adicionado a sacola

Scenario: Pesquisando produtos

    Given Que o usuário esteja na página inicial
    And queria pesquisar algum produto
    Then Pesquise produtos

Scenario: Aplicando filtros

    Given Que o usuário esteja em alguma aba de compras
    And Queira aplicar algum filtro
    Then Então aplique os filtros

Scenario: Realizando uma compra

    Given que o usuário tenha itens no carrinho
    And que deseje finalizar a compra
    Then realize a compra