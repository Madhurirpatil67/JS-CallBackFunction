function notificationTodevice(strmsg,funcCallBack)
{
      funcCallBack(strmsg);
}
function Android(strmsg)
{
 console.log(strmsg);
} 

 notificationTodevice("Welcome to Android",Android);

notificationTodevice("Welcome to IOS",function(strmsg){
    console.log(strmsg);
});

notificationTodevice("Welcome to Window",(strmsg)=>console.log(strmsg));


