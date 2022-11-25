var obj ={
    name: "dhurai",
    age: 25,
    gender:"male",
    attendance:["mon","tue","wed","thur","fri"]
}
for(var i in obj.attendance)
{
    console.log(i , obj.attendance[i]);
}