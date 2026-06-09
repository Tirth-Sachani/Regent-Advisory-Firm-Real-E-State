import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

transcript_path = r"C:\Users\tirth\.gemini\antigravity-ide\brain\d06f3ec5-22fa-4ffd-a662-7df150037cdb\.system_generated\logs\transcript.jsonl"

steps = []
with open(transcript_path, "r", encoding="utf-8") as f:
    for line in f:
        steps.append(json.loads(line))

print(f"Total steps: {len(steps)}")

# Let's inspect step index 15 and see its type, source, and fields
for idx, step in enumerate(steps):
    step_idx = step.get("step_index")
    if step_idx in [14, 15, 16]:
        print(f"\n--- Step {step_idx} ---")
        print(f"source={step.get('source')} type={step.get('type')}")
        print(f"keys={list(step.keys())}")
        if "content" in step:
            print(f"content length: {len(step['content'])}")
            print(f"content preview: {step['content'][:500]}")
        # Let's see if there is any other fields
        for k, v in step.items():
            if k not in ["content", "step_index", "type", "status", "source"]:
                print(f"field '{k}': type={type(v)}, len={len(str(v)) if hasattr(v, '__len__') else 'N/A'}")
                if isinstance(v, dict):
                    print(f"  keys: {list(v.keys())}")
