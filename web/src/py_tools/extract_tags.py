import re
import json

def extract_tags():
    with open('d:/ElectricArc/Portfolio/web/src/data/projects.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    roles = set(re.findall(r'"role":\s*\[(.*?)\]', content))
    techs = set(re.findall(r'"techStack":\s*\[(.*?)\]', content))
    
    all_roles = set()
    for r in roles:
        items = [i.strip().strip('"').strip("'") for i in r.split(',')]
        all_roles.update(items)
        
    all_techs = set()
    for t in techs:
        items = [i.strip().strip('"').strip("'") for i in t.split(',')]
        all_techs.update(items)
        
    print("Roles:", sorted(list(all_roles)))
    print("Techs:", sorted(list(all_techs)))

if __name__ == "__main__":
    extract_tags()
