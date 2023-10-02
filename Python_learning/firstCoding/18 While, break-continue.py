i=0;
while(True):
    print(f"The value of i is : {i}")
    i=i+1
    if(i>10):
        print("Breaking the loop. ")
        break

while(True):
    inp = int(input("Enter a Number\n"))
    if inp>100:
        print("Congrats you have entered a number greater than 100\n")
        break
    else:
        print("Try again!\n")
        continue
