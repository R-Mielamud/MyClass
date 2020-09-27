def hex_to_rgb(hex_color):
    r = int(hex_color[1:3], 16)
    g = int(hex_color[3:5], 16)
    b = int(hex_color[5:7], 16)

    return r, g, b


def get_YIQ(r, g, b):
    yiq = (r * 299 + g * 587 + b * 114) / 1000
    return yiq


def get_contrast_color(bg):
    rgb = hex_to_rgb(bg)
    yiq = get_YIQ(*rgb)

    if yiq >= 128:
        return "#000000"
    else:
        return "#ffffff"
