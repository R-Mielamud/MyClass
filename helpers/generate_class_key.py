def generate_class_key(class_name):
    name_words = class_name.split(" ")[:2]
    map_key_letters = map(lambda word: word[:1], name_words)
    key_letters = list(map_key_letters)
    key = "".join(key_letters)
    return key
