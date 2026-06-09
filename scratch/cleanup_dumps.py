import shutil
import os

dumps_path = "scratch/dumps"

if os.path.exists(dumps_path):
    shutil.rmtree(dumps_path)
    print(f"Removed temporary dumps folder: {dumps_path}")
else:
    print("Dumps folder already removed.")
