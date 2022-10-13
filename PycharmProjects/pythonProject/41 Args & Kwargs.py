def func1(normal,*args,**kwargs):
    print(normal)
    for i in args:
        print(i)

    for nums,value in kwargs.items():
        print(f"The {nums} Avtar of Lord Vishnu is {value}")

nor = "There are some Adhyay of Bhagwat Geeta"
kw = {"First":"Matshya Avatar","Second":"Kurma Avatar","Third":"Varaha Avatar","Fourth":"Narshimaha Avatar","Fifth":"Vamana Avatar"}
hp = ["Bishadh Yog","Sankhya Yog","Karma Yog", "Gyan Karma Sannyash Yog","Bhakti Yog", "Atama Sanyam Yog"]
func1(nor,*hp,**kw)
