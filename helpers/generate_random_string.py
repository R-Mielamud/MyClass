from random import choice as rand_choice

LETTERS = list("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890")

def generate_random_string(length):
    rand_string = ""

    for i in range(length):
        rand_string += rand_choice(LETTERS)

    return rand_string
