# Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N

number = 10

def sumOfTerms (x):
  max_range = x + 1
  total = 0
  for i in range(1, max_range):
      total += i
  return total


print(sumOfTerms(number))
