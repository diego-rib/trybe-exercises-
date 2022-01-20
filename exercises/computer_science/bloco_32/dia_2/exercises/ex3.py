# Modifique o exercício anterior para que as
# palavras sejam lidas de um arquivo.
# Considere que o arquivo terá cada palavra em uma linha
from ex2 import play_scrambled_word_game

words = []

with open('words.txt') as file:
    lines = file.readlines()
    for word in lines:
        words.append(word.replace('\n', ''))

play_scrambled_word_game(words)
