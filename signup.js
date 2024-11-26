let form =document.querySelector("form");
let fname=document.querySelectorAll("input")[0];
let lname=document.querySelectorAll("input")[1];
let email=document.querySelectorAll("input")[2];
let mob=document.querySelectorAll("input")[3];
let pass=document.querySelectorAll("input")[4];
let cpass=document.querySelectorAll("input")[5]

let efirst =document.querySelectorAll("span")[0]
let elast =document.querySelectorAll("span")[1]
let eemail =document.querySelectorAll("span")[2]
let emob =document.querySelectorAll("span")[3]
let epass =document.querySelectorAll("span")[4]
let ecpass =document.querySelectorAll("span")[5]
let storage=[];
let datafromStorage=JSON.parse(localStorage.getItem("QuizData"))
if(datafromStorage)
{
    storage=datafromStorage;
}
console.log(form,fname,lname,email,mob,pass,cpass,efirst,ecpass,eemail,elast,email,emob);


form.addEventListener("submit",(e)=>{
        



  let flag=true;
  let details={}

    let regx=/^[a-zA-Z]{1,17}$/
    //fname validation
    if(fname.value=="")
    {
        efirst.innerHTML=`* Please enter your first name`;
        e.preventDefault();
        flag=false;

    }else if(regx.test(fname.value)){
        efirst.innerHTML="";
    }else{
        efirst.innerHTML=`Invalid First Name`
        e.preventDefault();
        flag=false;

    }

    //lname validation
    if(lname.value=="")
        {
            elast.innerHTML=`* Please enter your last name`;
            e.preventDefault();
        flag=false;

        }else if(regx.test(lname.value)){
            elast.innerHTML="";
            
        }else{
            elast.innerHTML=`Invalid Last Name`;
            e.preventDefault();
        flag=false;

        }

        //email validation

        let echeck=storage.find((e)=>{
            if (e.email==email.value) {
                return e;
            }
        })
        if (echeck) {
            eemail.innerHTML=`* Email already register`;
                e.preventDefault();
        flag=false;
        }
       else if(email.value=="")
            {
                eemail.innerHTML=`* Please enter your Email`;
                e.preventDefault();
        flag=false;

                
            }else{
                eemail.innerHTML="";
                
        
    }
//mob validation
        let mregx=/^[6-9][0-9]{9}$/

        let mobileCheck=storage.find((e) =>{
            if (e.phone==mob.value) {
                return e;
            }

        });

            if (mobileCheck) {
             emob.innerHTML=`* mobile no already register`;
             e.preventDefault();
                flag=false;
                }
           else if(mob.value=="")
                {
                    emob.innerHTML=`* Please enter your Mobile No`;
                    e.preventDefault();
        flag=false;

                }else if(mregx.test(mob.value)){
                    emob.innerHTML="";
                }else{
                    emob.innerHTML=`Invalid Mobile No`;
                    e.preventDefault();
        flag=false;

                }

                //pass validATION
    let eregx=/^[a-zA-Z@0-9]{1,17}$/


                if(pass.value=="")
                    {
                        epass.innerHTML=`* Please enter your Password`;
                        e.preventDefault();
        flag=false;

                    }else if(eregx.test(pass.value)){
                        epass.innerHTML="";
                    }else{
                        epass.innerHTML=`Invalid Password`
                        e.preventDefault();
        flag=false;

                    }
//cpass validation
                    if(cpass.value=="")
                        {
                            ecpass.innerHTML=`* Please enter your Confirm Password`;
                            e.preventDefault();
        flag=false;

                        }else if(cpass.value==pass.value){
                            ecpass.innerHTML="";
                        }else{
                            ecpass.innerHTML=`Invalid Confirm Password`
                            e.preventDefault();
        flag=false;

                        }
//store data in local storage
                       if(flag){
                        let details={
                            first:fname.value,
                              last:lname.value,
                             email:email.value,
                            phone:mob.value,
                             pass:pass.value,
                             quiz:null,
                          };
                          storage.push(details);
                          localStorage.setItem("QuizData",JSON.stringify(storage));
                         console.log(details);
                       }



                        

})
