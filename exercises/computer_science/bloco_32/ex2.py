# Faça um programa que, dado um valor n qualquer, tal que n > 1 , imprima na tela um triângulo retângulo com n asteriscos de base

base = 7

max_range = base + 1

print('\n')

if base < 1: print('Número inválido')
else:
  for i in range(1, max_range):
      print('*' * i)
  print('\n')
