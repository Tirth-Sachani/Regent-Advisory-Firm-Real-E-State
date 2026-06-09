import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

chunk_path = r"e:\Real-State-Advisory-Firm-Demo\.next\static\chunks\0d.wl~whoswzi.js"

with open(chunk_path, "r", encoding="utf-8") as f:
    js_content = f.read()

# Let's search for "66980,e=>" which was in our grep search
# Or look for where "Olivia Advisor Chat" is located
pattern = r"66980,\s*e\s*=>\s*\{"
matches = list(re.finditer(pattern, js_content))
if not matches:
    print("Could not find the module start pattern in JS.")
    sys.exit(1)

start_idx = matches[0].start()
print(f"Found module 66980 starting at index {start_idx}")

# Let's extract from start_idx onwards. We'll count braces to find the end of the module.
brace_count = 0
end_idx = -1
in_string = False
string_char = None
escaped = False

# We'll skip over string characters to avoid mismatching braces in string literals
for i in range(start_idx + len("66980,e=>") - 1, len(js_content)):
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
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0:
                end_idx = i + 1
                break

if end_idx == -1:
    print("Could not find matching closing brace for the module.")
    # Fallback: just dump 50000 characters
    module_code = js_content[start_idx:start_idx+100000]
else:
    module_code = js_content[start_idx:end_idx]

print(f"Extracted {len(module_code)} characters of compiled JS.")

with open("scratch/panel_compiled_js.js", "w", encoding="utf-8") as out:
    out.write(module_code)
print("Saved to scratch/panel_compiled_js.js")
