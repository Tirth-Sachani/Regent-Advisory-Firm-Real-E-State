import json

transcript_path = r"C:\Users\tirth\.gemini\antigravity-ide\brain\d06f3ec5-22fa-4ffd-a662-7df150037cdb\.system_generated\logs\transcript.jsonl"

with open(transcript_path, "r", encoding="utf-8") as f:
    for line in f:
        data = json.loads(line)
        step_idx = data.get("step_index")
        
        # Check if view_file or any tool call has output in data
        tool_calls = data.get("tool_calls", []) or []
        for call in tool_calls:
            if "AISuitePanel.tsx" in str(call):
                print(f"Step {step_idx} call keys: {list(call.keys())}")
                if "response" in data:
                    resp = data["response"]
                    print(f"  Step {step_idx} response keys: {list(resp.keys()) if isinstance(resp, dict) else type(resp)}")
                    if isinstance(resp, dict):
                        for k, v in resp.items():
                            print(f"    {k}: type={type(v)}, len={len(str(v))}")
                            if isinstance(v, str) and len(v) > 2000:
                                print(f"      starts with: {v[:200]}")
                                # Let's write it to a file!
                                out_path = f"scratch/dumps/step_{step_idx}_extracted.txt"
                                with open(out_path, "w", encoding="utf-8") as out:
                                    out.write(v)
                                print(f"      Saved to {out_path}")
