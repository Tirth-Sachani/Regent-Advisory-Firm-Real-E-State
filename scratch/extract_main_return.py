import sys

sys.stdout.reconfigure(encoding='utf-8')

with open("scratch/panel_compiled_js.js", "r", encoding="utf-8") as f:
    js_content = f.read()

# Look for the last return statement which returns the JSX children of the component.
# Usually, it starts with: return(0,t.jsxs)("div",{className:"fixed bottom-6 right-6 z-50 font-sans flex items-end gap-4",children:[
start_str = 'return(0,t.jsxs)("div",{className:"fixed bottom-6 right-6 z-50 font-sans flex items-end gap-4"'
idx = js_content.find(start_str)
if idx == -1:
    print("Could not find main return statement starts with the standard class name.")
    # Try generic return
    idx = js_content.rfind("return(0,t.jsxs)")

if idx == -1:
    print("Could not find return(0,t.jsxs)")
    sys.exit(1)

print(f"Main return starts at index {idx}")

# Let's extract from idx onwards.
# Count parenthesis and brackets to find matching closing.
paren_count = 0
end_idx = -1
in_string = False
string_char = None
escaped = False

# We'll skip over string characters to avoid mismatching paren in string literals
for i in range(idx + len("return"), len(js_content)):
    char = js_content[i]
    if escaped:
        escaped = False
        continue
    if char == '\\':
        escaped = True
        continue
    if char in ['"', "'", '`']:
        if not in_string:
            in_string = True
            string_char = char
        elif string_char == char:
            in_string = False
            string_char = None
        continue
    if not in_string:
        if char == '(':
            paren_count += 1
        elif char == ')':
            paren_count -= 1
            if paren_count == 0:
                end_idx = i + 1
                break

if end_idx == -1:
    print("Could not find matching closing parenthesis for return.")
    return_code = js_content[idx:idx+30000]
else:
    return_code = js_content[idx:end_idx]

print(f"Extracted return code length: {len(return_code)}")

with open("scratch/panel_return_code.js", "w", encoding="utf-8") as out:
    out.write(return_code)

print("Saved to scratch/panel_return_code.js")
