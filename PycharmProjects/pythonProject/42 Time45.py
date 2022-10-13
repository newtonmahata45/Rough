import time

lt = time.asctime(time.localtime(time.time()))
print(lt)

initial = time.time()
for i in range(8):
    print("Vasudhaiva Kutumbakam")
    time.sleep(0.25)
print(f"'For' loop takes {time.time()-initial} seconds")
initial2 = time.time()
j = 0
while (j<8):
    print("Vasudhaiva Kutumbakam")
    time.sleep(0.25)
    j =j+1
print(f"'While' loop takes {time.time()-initial2} seconds")