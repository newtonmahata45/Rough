import pyautogui as newt_on
import time

time.sleep(4)
x = 1
for i in range(14):
    newt_on.write(f"{x} Vasudhaiva Kutumbakam ")
    newt_on.press('enter')
    x=x+1
