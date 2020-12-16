var System=require("../system")
class TestApi{
   async test(name,age,obj){
     console.log(obj);
     return name+"xxx"+age;
   }
}
module.exports=TestApi;
