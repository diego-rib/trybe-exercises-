# Escreva uma função que receba o número de litros vendidos,
# o tipo de combustível (codificado da seguinte forma: A - álcool, G - gasolina),
# e retorne o valor a ser pago pelo cliente,
# o preço do litro da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90

liters_sold = 10
type_sold = 'A'

def calculate_total_price (selled_liters, type):
    price_table = {
      "A": {
          "min_discount": 0.03,
          "max_discount": 0.05,
          "price": 1.90,
      },
      "G": {
          "min_discount": 0.04,
          "max_discount": 0.06,
          "price": 2.50,
      },
    }

    if selled_liters < 20:
        total_discount = selled_liters * price_table[type]["min_discount"]
    else:
        total_discount = selled_liters * price_table[type]["max_discount"]

    total_price = (selled_liters * price_table[type]["price"]) - total_discount

    return total_price

print(calculate_total_price(liters_sold, type_sold))
