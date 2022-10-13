print("For reverse order put '-' first" )
b = int(input("Enter the number of rows :"))

if b <0:
    while b!=0:
        print("*"*(-b))
        b = b + 1

elif b > 0:
    for l in range(1,b+1):
        print("*"*l)

a = int(input("Enter the number of rows:"))
for i in range(1,a+1):
    for j in range(1,i+1):

        print(i,end="")
    print()
