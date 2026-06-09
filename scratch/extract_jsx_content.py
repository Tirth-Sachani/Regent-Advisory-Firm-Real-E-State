import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open("scratch/panel_compiled_js.js", "r", encoding="utf-8") as f:
    js_content = f.read()

# Find the start index
start_str = 'return(0,t.jsxs)("div",{className:"fixed bottom-6 right-6 z-50 font-sans flex items-end gap-4"'
idx = js_content.find(start_str)

if idx == -1:
    print("Could not find start_str.")
    sys.exit(1)

print(f"Start index: {idx}")

# Let's extract the next 35000 characters which contains the JSX rendering tree.
jsx_part = js_content[idx:idx+35000]

# Let's run a simple formatter on it to make it readable
formatted = ""
indent = 0
in_str = False
str_char = None
escaped = False

i = 0
while i < len(jsx_part):
    char = jsx_part[i]
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

    if char == '{':
        indent += 2
        formatted += " {\n" + " " * indent
    elif char == '}':
        indent = max(0, indent - 2)
        formatted += "\n" + " " * indent + "}"
    elif char == ',':
        formatted += ",\n" + " " * indent
    elif char == ';':
        formatted += ";\n" + " " * indent
    else:
        formatted += char
    i += 1

with open("scratch/panel_jsx_formatted.js", "w", encoding="utf-8") as out:
    out.write(formatted)

print("Saved formatted JSX to scratch/panel_jsx_formatted.js")
