import bcrypt

def hash_password(password):
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt(14)).decode()

def check_password(actual, expected_hash):
    return bcrypt.checkpw(actual.encode(), expected_hash.encode())
