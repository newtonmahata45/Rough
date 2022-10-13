# var1 = 6
# var2 = 56
# var3 = int(input())
# if var3>var2:
#     print("Greater")
# elif var3==var2:
#     print("Equal")
# else:
#     print("Lesser")

list1 = [5, 7, 3]
print(15 not in list1)
if 15 not in list1:
    print("No its not in the list")

# Quiz
print("What is your age?")
age = int(input())
if age<18:
    print("You cannot drive")

elif age==18:
    print("We will think about you")

else:
    print("You can drive")



#Short Hand if-else

a = int(input("enter a\n"))
b = int(input("enter b\n"))

# if a>b: print("A B se bada hai bhai")
print("B A se bada hai bhai") if a<b else print("A B se bada hai bhai")

