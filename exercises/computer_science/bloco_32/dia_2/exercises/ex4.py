# Dado o seguinte arquivo no formato JSON ('books.json')
# leia seu conteúdo e calcule a porcentagem de livros em cada categoria
# em relação ao número total de livros.
# O resultado deve ser escrito em um arquivo no formato CSV
import csv
import json

# lê o arquivo json e salva a lista de livros na variavel books_list
books_list = []
with open('books.json', 'r') as json_file:
    for line in json_file:
        books_list.append(json.loads(line))

# pega todas as categorias da lista de livros
books_categories = set()
for book in books_list:
    books_categories = books_categories.union(book["categories"])

# calcula quantos livros existem por categoria
books_by_category = {category: 0 for category in books_categories}
for book in books_list:
    for category in book["categories"]:
        books_by_category[category] += 1

# calcula o numero total de livros
total_of_books = len(books_list)

# calcula a porcentagem de livro em cada categoria
# em relação ao total de livros
percentage_by_category = {category: 0 for category in books_categories}
for category in percentage_by_category:
    number_of_books = books_by_category[category]
    percentage_by_category[category] = number_of_books / total_of_books

# escreve os dados salvos na variavel percentage_by_category no arquivo csv
with open('books.csv', mode='w') as csv_file:
    header = ['categoria', 'porcentagem']

    writer = csv.DictWriter(csv_file, fieldnames=header)
    writer.writeheader()

    for category, percentage in percentage_by_category.items():
        if category != '':
            row = {
                "categoria": category,
                "porcentagem": percentage
            }
            writer.writerow(row)
