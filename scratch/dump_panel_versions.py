import json
import os

transcript_path = r"C:\Users\tirth\.gemini\antigravity-ide\brain\d06f3ec5-22fa-4ffd-a662-7df150037cdb\.system_generated\logs\transcript.jsonl"

print("Scanning transcript for AISuitePanel.tsx content...")

os.makedirs("scratch/dumps", exist_ok=True)

with open(transcript_path, "r", encoding="utf-8") as f:
    for line in f:
        data = json.loads(line)
        step_idx = data.get("step_index")
        
        # 1. Search in tool_calls arguments (like write_to_file or replace_file_content)
        tool_calls = data.get("tool_calls", []) or []
        for i, call in enumerate(tool_calls):
            args = call.get("args", {}) or {}
            # If target file matches
            target_file = args.get("TargetFile", "") or args.get("AbsolutePath", "")
            if "AISuitePanel.tsx" in str(target_file) or "AISuitePanel.tsx" in str(args):
                print(f"Step {step_idx}: Tool Call {call.get('name')}")
                content = args.get("CodeContent") or args.get("ReplacementContent")
                if content and len(content) > 1000:
                    out_path = f"scratch/dumps/step_{step_idx}_tool_call_{i}.tsx"
                    with open(out_path, "w", encoding="utf-8") as out:
                        out.write(content)
                    print(f"  Saved tool call content ({len(content)} chars) to {out_path}")

        # 2. Search in response output
        response = data.get("response", {})
        if isinstance(response, dict):
            output = response.get("output", "")
            if output and isinstance(output, str) and "AISuitePanel" in output:
                if len(output) > 1000:
                    out_path = f"scratch/dumps/step_{step_idx}_response.tsx"
                    with open(out_path, "w", encoding="utf-8") as out:
                        out.write(output)
                    print(f"  Saved response content ({len(output)} chars) to {out_path}")
                    
        # 3. Search in user input or model content
        content = data.get("content", "")
        if content and isinstance(content, str) and "AISuitePanel.tsx" in content and len(content) > 5000:
            out_path = f"scratch/dumps/step_{step_idx}_content.tsx"
            with open(out_path, "w", encoding="utf-8") as out:
                out.write(content)
            print(f"  Saved content field ({len(content)} chars) to {out_path}")

print("Done scanning.")
