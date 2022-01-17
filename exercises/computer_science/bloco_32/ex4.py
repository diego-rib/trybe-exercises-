# Escreva uma função que receba o número de litros vendidos,
# o tipo de combustível (codificado da seguinte forma: A - álcool, G - gasolina),
# e retorne o valor a ser pago pelo cliente,
# o preço do litro da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90

litersSold = 10
typeSold = 'A'

def calcTotalPrice (selledLiters, type):
    priceTable = {
      "A": {
          "minDiscount": 0.03,
          "maxDiscount": 0.05,
          "price": 1.90,
      },
      "G": {
          "minDiscount": 0.04,
          "maxDiscount": 0.06,
          "price": 2.50,
      },
    }

    if selledLiters < 20:
        totalDiscount = selledLiters * priceTable[type]["minDiscount"]
    else:
        totalDiscount = selledLiters * priceTable[type]["maxDiscount"]

    totalPrice = (selledLiters * priceTable[type]["price"]) - totalDiscount

    return totalPrice

print(calcTotalPrice(litersSold, typeSold))
