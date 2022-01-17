# Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N

number = 10

def sumOfTerms (x):
  total = 0
  for i in range(1, x):
      total += i
  return total


print(sumOfTerms(number))
