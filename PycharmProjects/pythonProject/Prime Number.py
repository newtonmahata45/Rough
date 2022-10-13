x=int(input("Enter a Number\n"))
for i in range(2,x):
    if x%i==0 :
        i=i+1
        print("It is not a Prime Number")
        break
else:print(" It is a Prime Number")
