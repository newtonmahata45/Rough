# Snake Water Gun
import random
rand = ["S","W","G"]
round = 0
x = 0
y = 0
print("Write S for snake, W for water, G for gun")

while (round <= 9):
    round = round +1
    print(f"Round {round}")
    your_choice = input("Enter your choice:")

    choice = (random.choice(rand))

    if choice == your_choice:
        print("     Same")
    elif choice == "S" and your_choice == "W":
        x = x+1
        print(f"Conputer choice: {choice}, Computer wins this round, Your Score:{y}")
        print(f"                                          Computer Score:{x}")
    elif choice == "S" and your_choice == "G":
        y = y+1
        print(f"Conputer choice: {choice}, You win this round, Your Score:{y}")
        print(f"                                  Computer Score:{x}")
    elif choice == "W" and your_choice == "S":
        y = y + 1
        print(f"Conputer choice: {choice}, You win this round Your Score:{y}")
        print(f"                                  Computer Score:{x}")
    elif choice == "W" and your_choice == "G":
        x = x + 1
        print(f"Conputer choice: {choice}, Computer wins this round, Your Score:{y}")
        print(f"                                       Computer Score:{x}")
    elif choice == "G" and your_choice == "S":
        x = x + 1
        print(f"Conputer choice: {choice}, Computer wins this round, Your Score:{y}")
        print(f"                                       Computer Score:{x}")
    elif choice == "G" and your_choice == "W":
        y = y + 1
        print(f"Conputer choice: {choice}, You win this round, Your Score:{y}")
        print(f"                                       Computer Score:{x}")
    else :
        print("Worng Input")
        continue
print("You won:",y,"rounds")
print("Computer won:",x,"rounds")
if x>y:
    print("YOU LOST THE GAME ")
elif y>x:
    print("CONGRATULATIONS YOU WIN")
else:print("It's a DRAW")