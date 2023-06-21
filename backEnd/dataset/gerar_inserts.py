#/usr/bin/python3
import json


file_json = open('dinheiro-em-circulacao.json')

data = json.load(file_json)
conjunto = set()
arquivoSql = open('inserts.sql', 'w')

'''
Cria os inserts para a tabela categoria
'''
def criarInsertsCategoria():
    for linha in data['value']:
        nomeCategoria = linha['Categoria']
        conjunto.add(nomeCategoria)
    for categoria in conjunto:
        arquivoSql.write("INSERT INTO categoria (nome) VALUES ('" + categoria + "');\n")

'''
Cria os inserts para a tabela especie
'''
def criarInsertsEspecie():
    for linha in data['value']:
        nomeEspecie = linha['Especie']
        conjunto.add(nomeEspecie)
    for especie in conjunto:
        arquivoSql.write("INSERT INTO especie (nome) VALUES ('" + especie + "');\n")

'''
Cria os inserts para a tabela dinheiro
'''
def criarInsertsDinheiro():
    for linha in data['value']:
        nomeEspecie = linha['Especie']
        nomeCategoria = linha['Categoria']
        valorDenominacao = linha['Denominacao']
        conjunto.add(
            "('{}', '{}', '{}')".format(valorDenominacao, nomeEspecie, nomeCategoria)
        )

    # Convertando  "('1.00', 'Moedas', 'Moedas - 2a. Família - Natação')" -> ('1.00', 'Moedas', 'Moedas - 2a. Família - Natação')
    lista_tuplas = [eval(s) for s in conjunto] 

    for (denominacao, especie, categoria) in lista_tuplas:
        query = "WITH especie_id AS ( SELECT id, nome FROM especie WHERE nome = '{}'),".format(especie) 
        query += "categoria_id AS ( SELECT id, nome FROM categoria WHERE nome = '{}')".format(categoria)
        query += "INSERT INTO dinheiro (denominacao, id_especie, id_categoria) SELECT {},especie_id.id,categoria_id.id FROM especie_id, categoria_id;".format(denominacao)
        arquivoSql.write(query + "\n")

'''
Cria os inserts para a circulação
'''
def criarInsertsCirculacao():
    #   "Data": "2023-04-28",
    #   "Quantidade": 24996000,
    #   "Valor": 24996000.00,
    #   "Categoria": "Moedas - 2a. Família - REAL 25 anos",
    #   "Denominacao": "1.00",
    #   "Especie": "Moedas"
    for linha in data['value']:
        dataCirculacao = linha['Data'] #
        qtdCirculado = linha['Quantidade'] #
        valorCirulado = linha['Valor'] #
        nomeCategoria = linha['Categoria']
        denominacao = linha['Denominacao']
        nomeEspecie = linha['Especie']
        conjunto.add(
            "('{}', '{}', '{}', '{}', '{}', '{}')".format(dataCirculacao, qtdCirculado, valorCirulado, nomeCategoria, denominacao, nomeEspecie)
        )

    # Convertando  "('2016-07-01', '10068036', '10068036.0', 'Moedas - 2a. Família - Boxe', '1.00', 'Moedas')" -> ('2016-07-01', '10068036', '10068036.0', 'Moedas - 2a. Família - Boxe', '1.00', 'Moedas')
    lista_tuplas = [eval(s) for s in conjunto] 

    for (data_circ, quantidade_circ, valor_circ, categoria_moeda, denominacao_moeda, especie_moeda) in lista_tuplas:
        query =  "INSERT INTO circulacao (id_dinheiro, quantidade, data, valor) SELECT dd.id, {}, '{}', {}".format(quantidade_circ, data_circ, valor_circ) 
        query += " FROM dinheiro dd INNER JOIN especie e ON dd.id_especie = e.id" 
        query += " INNER JOIN categoria c ON dd.id_categoria = c.id WHERE c.nome = '{}' AND dd.denominacao = {};".format(categoria_moeda, denominacao_moeda)
        arquivoSql.write(query + "\n")