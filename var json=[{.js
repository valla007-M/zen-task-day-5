var json=[{
    "name":"valla007-M",
    "msg":"for the given json itrate over all for loops(for,for in,for of,foreach)",
    "task":"zen portal task ",
    "mail":"valla003mp@gmail.com",
},
{
        "name":"valla007-M",
        "msg":"for the given json itrate over all for loops(for,for in,for of,foreach)",
        "task":"zen portal task",
        "mail":"valla003mp@gmail.com",
 }];
 //for loop
 for(var i=0;i < json.length; i++){
    var object=json[i];
    
    console.log(obj.name);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);

 }
 //foe each
 json.foreach(function(obj) {console.log(obj.msg); });

 //for in
 for (var key in json ) {
    if (json.hasownproperty(key)) {
        console.log(json[key].name);
        //console.log(json[key].msg);

    }
 }
 //for of
 let text="";
 for(let x of json[key].name) {
    text += x;

 }
console.log(Text);
