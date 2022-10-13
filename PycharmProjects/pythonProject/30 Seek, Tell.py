f = open("harry.txt")
f.seek(121)
print(f.tell())
print(f.readline())
print(f.tell())
print(f.readline())
print(f.tell())
f.close()

