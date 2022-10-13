# F strings
import math

me = "Newton"
a1 = 3
surname = "fhkls"
# a = "this is %s %s"%(me, a1)
a = "This is {2} {0} {1}"
b = a.format(me, a1,surname)
print(b)
a = f"this is {me} {a1} {math.cos(45)}"

print(a)