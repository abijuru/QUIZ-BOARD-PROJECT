function myQuiz(){



var a1=document.forms["mysuccess"]["answers1"].values;
var a2=document.forms["mysuccess"]["answers2"].values;
var a3=document.forms["mysuccess"]["answers3"].values;
var a4=document.forms["mysuccess"]["answers4"].values;
var a5=document.forms["mysuccess"]["answers5"].values;

var marks=0;

if(a1=="EMASCIP")
{
   marks=marks+8;
   }
if(a2=="forEach")
{
   marks=marks+8;
   }
if(a3=="concat()")
{
   marks=marks+8;
}
if(a4=="toString")
{
   marks=marks+8;
}
if(a5=="toUppercasse")
{
   marks=marks+8;
}
alert("your score is:"+marks);
}



