import json
import sys

# Reconfigure stdout to use utf-8
sys.stdout.reconfigure(encoding='utf-8')

transcript_path = r"C:\Users\tirth\.gemini\antigravity-ide\brain\d06f3ec5-22fa-4ffd-a662-7df150037cdb\.system_generated\logs\transcript.jsonl"

steps = []
with open(transcript_path, "r", encoding="utf-8") as f:
    for line in f:
        steps.append(json.loads(line))

print(f"Total steps: {len(steps)}")

# Let's search for steps that contain the word "AISuitePanel.tsx" in any way, print details, and check the next step
for idx, step in enumerate(steps):
    step_str = json.dumps(step)
    if "AISuitePanel.tsx" in step_str:
        step_idx = step.get("step_index")
        print(f"\nMatch at step index {step_idx} (index {idx} in list): source={step.get('source')}, type={step.get('type')}")
        
        # Check if next step in the list is the tool result
        if idx + 1 < len(steps):
            next_step = steps[idx + 1]
            print(f"  Next step (Step {next_step.get('step_index')}): source={next_step.get('source')} type={next_step.get('type')} keys={list(next_step.keys())}")
            
            # Look for any large string in next_step's fields
            for k, v in next_step.items():
                if isinstance(v, str) and len(v) > 2000:
                    print(f"    found large string in field '{k}', length {len(v)}")
                    # Write it
                    out_path = f"scratch/dumps/step_{next_step.get('step_index')}_field_{k}.tsx"
                    with open(out_path, "w", encoding="utf-8") as out:
                        out.write(v)
                    print(f"    Saved field '{k}' to {out_path}")
                elif isinstance(v, dict):
                    for sk, sv in v.items():
                        if isinstance(sv, str) and len(sv) > 2000:
                            print(f"      found large string in dict field '{k}.{sk}', length {len(sv)}")
                            out_path = f"scratch/dumps/step_{next_step.get('step_index')}_field_{k}_{sk}.tsx"
                            with open(out_path, "w", encoding="utf-8") as out:
                                out.write(sv)
                            print(f"      Saved dict field to {out_path}")
                            
            # Check if there is output/response data
            response = next_step.get("response", {})
            if isinstance(response, dict):
                for rk, rv in response.items():
                    if isinstance(rv, str) and len(rv) > 2000:
                        print(f"    found large string in response field '{rk}', length {len(rv)}")
                        out_path = f"scratch/dumps/step_{next_step.get('step_index')}_response_{rk}.tsx"
                        with open(out_path, "w", encoding="utf-8") as out:
                            out.write(rv)
                        print(f"    Saved response field to {out_path}")
print("Done scanning.")
