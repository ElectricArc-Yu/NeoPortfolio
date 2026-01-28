import re

def extract_ids():
    with open('d:/ElectricArc/Portfolio/web/src/data/projects.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    ids = re.findall(r"id:\s*'([^']+)'", content)
    for i, project_id in enumerate(ids):
        print(f"{i+1}. {project_id}")

if __name__ == "__main__":
    extract_ids()
