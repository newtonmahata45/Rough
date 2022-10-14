// 5.
// destructure and store second like into a vaiable named myLike
const newData = {
  name: "Rahul",
  age: 20,
  gender: "male",
  address: {
    pinCode: 123455,
    city:"delhi"
  },
  likes:["music", "movies"]
}
let{likes}=newData
let[p,q]=likes
let myLikes=q
console.log(myLikes)