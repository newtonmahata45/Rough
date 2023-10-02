# Write a python program which will keep adding stream of numbers inputted by the user.
# The adding stops as soon as user presses q on the keyboard

a = 0
while (True):
    x = input("Enter the price of the product or q to quit\n")
    if x != "q":
        a = a + int(x)
    else:
        print("Your Total bill is:",a)
        break
