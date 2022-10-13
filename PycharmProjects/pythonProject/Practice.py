a = int(input("Enter how many number you want:\n"))
re = 0
def func(n):
    for i in range(0,a):
        re = re + func(n+1)
    print("akrgjh")