from random import choice as rand_choice

COLOR_LETTERS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

def generate_random_color():
    color = "#"
    
    for i in range(6):
        color += rand_choice(COLOR_LETTERS)
    
    return color
