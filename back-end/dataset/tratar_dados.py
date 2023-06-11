import json


file_json = open('dinheiro-em-circulacao.json')

data = json.load(file_json)

for line in data['value']:
    print(line['Categoria'])


