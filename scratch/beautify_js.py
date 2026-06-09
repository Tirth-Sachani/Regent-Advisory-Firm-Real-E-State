import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open("scratch/panel_compiled_js.js", "r", encoding="utf-8") as f:
    code = f.read()

# Let's insert newlines after semicolons and braces to make it readable
# Be careful not to break inside strings or regular expressions.
# We'll do a simple formatting:
formatted = ""
indent = 0
in_str = False
str_char = None
escaped = False

i = 0
while i < len(code):
    char = code[i]
    if escaped:
        formatted += char
        escaped = False
        i += 1
        continue
    if char == '\\':
        formatted += char
        escaped = True
        i += 1
        continue
    if char in ['"', "'", '`']:
        formatted += char
        if not in_str:
            in_str = True
            str_char = char
        elif str_char == char:
            in_str = False
            str_char = None
        i += 1
        continue
    if in_str:
        formatted += char
        i += 1
        continue

    # Non-string character processing
    if char == '{':
        indent += 2
        formatted += " {\n" + " " * indent
    elif char == '}':
        indent = max(0, indent - 2)
        formatted += "\n" + " " * indent + "}"
    elif char == ';':
        formatted += ";\n" + " " * indent
    elif char == ',':
        formatted += ",\n" + " " * indent
    else:
        formatted += char
    i += 1

# Let's clean up multiple newlines
formatted = re.sub(r'\n\s*\n', '\n', formatted)

with open("scratch/panel_beautified.js", "w", encoding="utf-8") as out:
    out.write(formatted)

print("Beautified JS code successfully.")
