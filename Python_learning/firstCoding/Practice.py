a = int(input("Enter how many number you want:\n"))

def func(n):
    if n <= 2: return
    print(n)
    return  func(n-1)

func(a)