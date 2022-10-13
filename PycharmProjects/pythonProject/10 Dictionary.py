# Dictionary is nothing but key value pairs
d1 = {}
# print(type(d1))
d2 = {"Harry":"Burger",
      "Rohan":"Fish",
      "SkillF":"Roti",
      "Shubham":{"B":"maggie", "L":"roti", "D":"Chicken"}}


d2["Ankit"] = "Junk Food"
d2[420] = "Kebabs"
print(d2)
del d2[420]
print(d2["Shubham"])
d3 = d2.copy()
del d3["Harry"]
d2.update({"Leena":"Toffee"})
print(d2.keys())
print(d2.items())


# Create a dictionary and take input from the user and return the meaning of the
# word from the dictionary

Dict = {"ignore":"refuse to take notice of or acknowledge", "abandon":"cease to support or look after",
        "exaggerate":"enlarged or altered beyond normal proportions", "prejudice":"preconceived opinion that is not based on reason or actual experience", "programming":"the process of writing computer programs"}
print("Enter the Word")
Data1 = input()
print(Data1, "means", Dict[Data1])

