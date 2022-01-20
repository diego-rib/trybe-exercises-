# Jogo da palavra embaralhada.
# Desenvolva um jogo em que a pessoa usuária tenha que
# adivinhar uma palavra que será mostrada com as letras embaralhadas.
# O programa terá uma lista de palavras e escolherá uma aleatoriamente.
# O jogador terá três tentativas para adivinhar a palavra.
# Ao final a palavra deve ser mostrada na tela,
# informando se a pessoa ganhou ou perdeu o jogo
from random import sample, choice

words = ['batata', 'paralelepipedo', 'aracaju']


def play_scrambled_word_game(words):
    play = True
    max_tries = 3

    while play:
        # reseta o valor das variáveis
        guess = playAgain = None

        word = choice(words)
        scrambled_word = "".join(sample(word, len(word)))
        player_tries = 0

        print(f'\n{scrambled_word}\n')

        while player_tries < max_tries:
            guess = input('Qual a palavra secreta? ')
            if guess == word:
                print('Voce Ganhou!!!!!!!!!!')
                break
            else:
                player_tries += 1
                tries_left = max_tries - player_tries
                print(f'Errou, voce tem mais {tries_left} tentativas')

        if player_tries == max_tries:
            print('Voce Perdeu.... :(\n')

        playAgain = input('Voce deseja jogar novamente? (y/n)')
        if playAgain == 'n':
            play = False


play_scrambled_word_game(words)
