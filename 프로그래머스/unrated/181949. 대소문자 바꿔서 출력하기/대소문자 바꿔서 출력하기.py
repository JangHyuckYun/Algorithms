str = input()

def refine(s):
    if s.isupper(): return s.lower()
    else: return s.upper()
print(''.join(list(map(refine, list(str.strip())))))