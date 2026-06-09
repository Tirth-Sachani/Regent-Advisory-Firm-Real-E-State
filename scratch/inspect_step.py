import json

transcript_path = r"C:\Users\tirth\.gemini\antigravity-ide\brain\d06f3ec5-22fa-4ffd-a662-7df150037cdb\.system_generated\logs\transcript.jsonl"

with open(transcript_path, "r", encoding="utf-8") as f:
    for line in f:
        data = json.loads(line)
        step_idx = data.get("step_index")
        if step_idx in [14, 593, 616]:
            print(f"--- STEP {step_idx} ---")
            print(f"Keys: {list(data.keys())}")
            for k in ["type", "status", "source"]:
                print(f"  {k}: {data.get(k)}")
            # print first 500 chars of content
            content = data.get("content", "")
            print(f"  content len: {len(content)}")
            if content:
                print(f"  content preview: {content[:300]}")
            # print tool calls
            tc = data.get("tool_calls", [])
            print(f"  tool_calls: {tc}")
            # check other fields
            for k, v in data.items():
                if k not in ["content", "tool_calls", "step_index", "type", "status", "source"]:
                    print(f"  {k}: type={type(v)}, len={len(str(v)) if hasattr(v, '__len__') else 'N/A'}")
                    if isinstance(v, str) and len(v) > 0:
                        print(f"    preview: {v[:100]}")
                    elif isinstance(v, dict):
                        print(f"    keys: {list(v.keys())}")
                        if "output" in v:
                            print(f"    output preview: {str(v['output'])[:100]}")
