# a = int(input("Enter the number:\n"))

for a in range(1,100000):
    num = a
    result = 0
    b =len(str(a))
    # df = (a // 10)
    # w = (df // 10)
    # s = w//10

    # n = (a % 10) ** b + (df % 10) ** b + (w % 10) **b + (s % 10) **b + (s//10)**b
    while (a!=0):
        df = a%10
        result = result + (df)**b
        a = a//10
    if num == result:

        print(num)
