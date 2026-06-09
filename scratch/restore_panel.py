import json

transcript_path = r"C:\Users\tirth\.gemini\antigravity-ide\brain\d06f3ec5-22fa-4ffd-a662-7df150037cdb\.system_generated\logs\transcript.jsonl"

with open(transcript_path, "r", encoding="utf-8") as f:
    for line in f:
        data = json.loads(line)
        # Check if this step has tool_calls
        tool_calls = data.get("tool_calls", [])
        for call in tool_calls:
            # Look for view_file on AISuitePanel.tsx
            args = call.get("args", {})
            if "AISuitePanel.tsx" in str(args):
                print(f"Step {data.get('step_index')}: {call.get('name')}")
                # If there's content in response/output
                # Let's print out if it looks like the full file read
        
        # Check if the output/response contains code of AISuitePanel
        response = data.get("response", {})
        if isinstance(response, dict) and "output" in response:
            output = response["output"]
            if "AISuitePanel" in output and "bookingVerification" in output and "bookingChatHistory" in output and len(output) > 20000:
                print(f"Found large content in response of step {data.get('step_index')}, len: {len(output)}")
                with open("scratch/restored_panel_raw.txt", "w", encoding="utf-8") as out:
                    out.write(output)
                print("Written to scratch/restored_panel_raw.txt")
