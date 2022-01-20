import json
from random import choice

pokemons = []

with open('pokemons.json', mode='r') as pokemons_file:
    pokemon_list = json.load(pokemons_file)["results"]
    for pokemon in pokemon_list:
        pokemons.append(pokemon["name"].lower())


def play_pokemons_game(pokemons):
    play_again = guess = None

    play = True

    while play:
        tries = 1
        pokemon = choice(pokemons)

        while True:
            guess = input('Quem é esse pokemon? ')

            if guess == pokemon:
                print('Voce acertou!!!!!!!!!!')
                break
            else:
                print(pokemon[:tries])
                tries += 1

        play_again = input('Voce deseja jogar novamente? (y/n)')

        if play_again == 'n':
            break


play_pokemons_game(pokemons)
