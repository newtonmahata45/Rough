def f(a,b):
    if b == 0:
        print(f"The LCM of {x} and {y} is:",x*y//a)
        print(f"The GCD of {x} and {y} is:",a)
    else:f(b,a%b)
x = int(input("Enter the 1st Number\n"))
y = int(input("Enter the 2nd Number\n"))
f(x,y)

# c = int(input("Enter the 1st number\n"))
# d = int(input("Enter the 2nd number\n"))
# max1 = 1
# while (True):
#     if (max1 % c == 0 and max1 % d ==0):
#         print(f"The LCM of {c} and {d} is:", max1)
#         break
#
#     max1 = max1 + 1