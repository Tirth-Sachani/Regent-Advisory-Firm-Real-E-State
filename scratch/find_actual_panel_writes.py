import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

transcript_path = r"C:\Users\tirth\.gemini\antigravity-ide\brain\d06f3ec5-22fa-4ffd-a662-7df150037cdb\.system_generated\logs\transcript.jsonl"

steps = []
with open(transcript_path, "r", encoding="utf-8") as f:
    for line in f:
        steps.append(json.loads(line))

print(f"Total steps: {len(steps)}")

for idx, step in enumerate(steps):
    step_idx = step.get("step_index")
    # Check if this step has tool calls
    tool_calls = step.get("tool_calls", []) or []
    for call_idx, call in enumerate(tool_calls):
        args = call.get("args", {}) or {}
        target_file = args.get("TargetFile", "") or args.get("AbsolutePath", "")
        if "AISuitePanel.tsx" in target_file:
            print(f"\nStep {step_idx}: Tool Call {call.get('name')} to target {target_file}")
            # Check contents
            content = args.get("CodeContent") or args.get("ReplacementContent")
            if content:
                print(f"  Content length: {len(content)}")
                # If it contains "export default function AISuitePanel" and is long
                if "export default function AISuitePanel" in content:
                    print("  -> Found full or partial export in tool call!")
                    out_path = f"scratch/dumps/step_{step_idx}_tool_call_{call_idx}_real.tsx"
                    with open(out_path, "w", encoding="utf-8") as out:
                        out.write(content)
                    print(f"  -> Saved to {out_path}")

    # Check for view_file outputs or system messages in the next step
    if "tool_calls" in step:
        for call in step["tool_calls"]:
            args = call.get("args", {}) or {}
            target_file = args.get("TargetFile", "") or args.get("AbsolutePath", "")
            if "AISuitePanel.tsx" in target_file and call.get("name") == "view_file":
                print(f"\nStep {step_idx}: view_file tool call on {target_file}")
                # Check the next step (which contains the tool output)
                if idx + 1 < len(steps):
                    next_step = steps[idx + 1]
                    # The content of the tool output is in the next step's content or some other field
                    content = next_step.get("content", "")
                    if content and "export default function AISuitePanel" in content:
                        print(f"  -> Found export in next step ({next_step.get('step_index')}) content, length {len(content)}")
                        out_path = f"scratch/dumps/step_{next_step.get('step_index')}_output_real.tsx"
                        with open(out_path, "w", encoding="utf-8") as out:
                            out.write(content)
                        print(f"  -> Saved to {out_path}")
                    
                    # Check other fields in next_step
                    for k, v in next_step.items():
                        if isinstance(v, str) and "export default function AISuitePanel" in v:
                            print(f"  -> Found export in field {k}, length {len(v)}")
                            out_path = f"scratch/dumps/step_{next_step.get('step_index')}_field_{k}_real.tsx"
                            with open(out_path, "w", encoding="utf-8") as out:
                                out.write(v)
                            print(f"  -> Saved to {out_path}")
                            
print("Done scanning.")
