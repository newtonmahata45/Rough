s = set()
print(type(s))
l = [1, 2, 3, 4]
s_from_list = set(l)
print(s_from_list)
print(type(s_from_list))
s.add(1)
s.add(2)
s.remove(2)
s1 = {4, 6}
print(s.isdisjoint(s1))




a = {5, 'Hello', 3.2}
a.add(2)
# {2, 'Hello', 3.2, 5}
b = {5, 'Hello', 3.2}
b.discard (3.2)
# {'Hello', 5}
c = {5, 'Hello', 3.2}
c.remove(3.2)
# {'Hello', 5}
d = {5, 'Hello', 3.2}
d.pop()
# {3.2, 5}
e = {5, 2,8}
e.intersection({5, 1})
#{5}
f = {5, 2,8}
f.difference({5, 1})
#{8,2}
f1 = {1, -2}
f1.issubset({-2, 1, 3}) #True
f2 = {-2, 1, 3}
f2.issuperset({1, 2}) #True
f3 = {-2, 1,3}
f3.isdisjoint({4,6})
# True
f4 = {1, 2, 3}
f4.union({3,1})
# {1, 2, 3}
f5 = {1, 2, 3}
f5.update({'a', 'b'})
# {1, 2, 3, 'b', 'a'}
print(a,b,c,d,e,f,f1,f2,f3,f4,f5)