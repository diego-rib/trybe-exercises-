# Faça um programa que receba um nome e
# imprima o mesmo na vertical em escada invertida

nome = input('Insira o nome: ')

for i in range(len(nome), 0, -1):
    print(nome[:i])
