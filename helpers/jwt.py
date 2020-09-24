import jwt
from MyClass import settings

def generate_user_token(user_id):
    return jwt.encode(
        {settings.JWT_USER_FIELD: user_id},
        settings.JWT_KEY,
        algorithm=settings.JWT_ALGORITHM
    ).decode()

def verify_user_token(token):
    payload = jwt.decode(
        token,
        settings.JWT_KEY,
        algorithms=(settings.JWT_ALGORITHM)
    )

    return payload[settings.JWT_USER_FIELD]

def extract_user_token(request):
    header = request.headers.get("Authorization", "")

    if not header.startswith(settings.JWT_PREFIX + " "):
        return None

    token = header[len(settings.JWT_PREFIX) + 1:]
    return token
