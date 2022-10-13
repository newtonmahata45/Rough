import datetime
def gettime():
    return datetime.datetime.now()
def take(k):
    if k == 1 :
        c = int(input("Enter 1 for food 2 for excersise\n"))
        if c == 1:
            x = input("Write food name of Newton\n")
            with open("newton.food","a") as op:
                op.write(str(gettime()) + ": " + x )
                print("Successfully Written")
        elif c == 2 :
            y = input("Write excersise name of Newton\n")
            with open("newton.ex","a") as op:
                op.write(str([str(gettime())]) + ": " + y )
                print("Successfully Written")

    elif k == 2 :
        d = int(input("Enter 1 for food 2 for excersise\n"))
        if d == 1:
            z = input("Write food name of Dalton\n")
            with open("dalton.food","a") as op:
                op.write(str([str(gettime())]) + ": " + z + "\n")
                print("Successfully Written")
        elif d == 2:
            z1 = input("Write excersise name of Dalton\n")
            with open("dalton.ex","a") as op:
                op.write(str([str(gettime())]) + ": " + z1 + "\n")
                print("Successfully Written")

def retrieve(l):
    if l == 1 :
        m = int(input("Enter 1 for food 2 for excersise\n"))
        if m == 1:
            p = open("newton.food", "rt")
            print(p.readlines())
        elif m == 2:
            q = open("newton.ex", "rt")
            print(q.readlines())
    elif l == 2:
        i = int(input("Enter 1 for food 2 for excersise\n"))
        if i == 1:
            j = open("dalton.food", "rt")
            print(j.readlines())
        elif i == 2:
            h = open("dalton.ex", "rt")
            print(h.readlines())

a = int(input("Press 1 to Log or Press 2 to retrive\n"))
if a == 1:
    b = int(input("Press 1 for Newton 2 for Dalton\n"))
    take(b)
else:
    b = int(input("Press 1 for Newton 2 for Dalton\n"))
    retrieve(b)