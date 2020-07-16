var users=[
    {
        id:1,
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permission:"Valid"
    },{
        id:2,
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permission:"Valid"
    },{
        id:3,
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permission:"Valid"
    },{
        id:4,
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permission:"Valid"
    },{
        id:5,
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permission:"Valid"
    },{
        id:6,
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permission:"Valid"
    },{
        id:7,
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permission:"Valid"
    },{
        id:8,
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permission:"Valid"
    },{
        id:9,
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permission:"Valid"
    },{
        id:10,
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permission:"Valid"
    },{
        id:11,
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permission:"Valid"
    },{
        id:12,
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permission:"Valid"
    },{
        id:13,
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permission:"Valid"
    },{
        id:14,
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permission:"Valid"
    }]
    
    function loadUsers(users){
        var userList=""
        if(users.length==0){
            userList="<div class=\"no-user-list-item\">No User Found</div>"
        }else{
            for(var i=0;i<users.length;i++){
                userList+="<div class=\"user-list-item\">\n"+
                "<div class=\"name list-column\"><i class=\"flaticon-user\"></i>"+users[i].name+"</div>\n"+
                "<div class=\"email list-column\">"+users[i].email+"</div>\n";
                if(users[i].status.match("Active")){
                    userList+="<div class=\"status list-column\"><button onclick=\"toggleStatus("+users[i].id+")\" class=\"status-button status-active\">"+users[i].status+"</button> </div>\n";
                }else{
                    userList+="<div class=\"status list-column\"><button onclick=\"toggleStatus("+users[i].id+")\" class=\"status-button status-inactive\">"+users[i].status+"</button> </div>\n";
                }
                userList+="<div class=\"role list-column\">"+users[i].role+"</div>\n"+
                "<div class=\"last-login list-column\">"+users[i].lastLogin+"</div>\n"+
                "<div class=\"permission list-column\">"+users[i].permission+"</div>\n"+
                "<button class=\"option list-column\">...</button>\n"+
                "</div>";
            }
        }
        window.document.getElementById("user-list-items").innerHTML=userList;
        var userCount= window.document.getElementsByClassName("user-list-item").length;
        window.document.getElementById("user-count").innerHTML = "Users("+userCount+")";
    }
    
    
    loadUsers(users);
    //code to hide/show sub menu
    var userToggle=true;
    function showSubMenu(value){
        var subMenuId="sub-menu-"+value;
        var subMenu=document.getElementById(subMenuId);
        console.log(subMenu);
        if(userToggle){
            subMenu.style.left="0%";
            document.getElementById("authentication").classList.add("menu-button-highlight");
            userToggle=false;
        }else{
            subMenu.style.left="-100%";
            document.getElementById("authentication").classList.remove("menu-button-highlight");
            userToggle=true;
        }
    }
    
    
    //code to toggle users
    var userListToggle=true;
    function showUsers(){
        var userList=document.getElementById("user-list");
        console.log(userListToggle);
        console.log(userList);
        if(userListToggle){
            userList.style.display="block";
            document.getElementById("users-sub-button").classList.add("menu-button-extra-highlight");
            userListToggle=false;
        }else{
            userList.style.display="none";
            document.getElementById("users-sub-button").classList.remove("menu-button-extra-highlight");
            userListToggle=true;
        }
        if(window.innerWidth<1000){
            toggleNavBar();
        }
    }
    
    //code to toggle new user
    var newUserToggle=true;
    function toggleNewUser(){
        var newUserForm=document.getElementById("bg-modal");
        console.log(newUserToggle);
        console.log(newUserForm);
        if(newUserToggle){
            newUserForm.style.display="flex";
            newUserToggle=false;
        }else{
            newUserForm.style.display="none";
            newUserToggle=true;
        }
    }
    
    
    //code to search
    function search(){
        var word=document.getElementById("user-search-mini").value.toLowerCase();
        console.log(word);
        var searchUsers=[];
        if(word.trim()==""){
            searchUsers=users;
        }else{
            for(var i=0;i<users.length;i++){
                if(users[i].name.toLowerCase().indexOf(word)>-1 || users[i].email.toLowerCase().indexOf(word)>-1 || users[i].status.toLowerCase().indexOf(word)==0 || users[i].role.toLowerCase().indexOf(word)>-1 ){
                    searchUsers.push(users[i]);
                }
            }
        }
        console.log(searchUsers);
        loadUsers(searchUsers);
        
    }
    //code to validate form
    function validateForm(){
        var nameRegex = /([A-Z]{1}[a-z]{1,10} [A-Z]{1}[a-z]{1,10})\w+/;
        var emailRegex =/[\w\d]{1,}[.\-#!]?[\w\d]{1,}@[\w\d]{1,}.[a-z]{2,3}.?([a-z]{2})?/;
        var error="";
        if(document.getElementById("last-login").value<0){
            error="Enter positive last Login day";
        }else if(emailRegex.test(document.getElementById("new-email").value)==false){
            error="Enter proper email id";
        }else if(nameRegex.test(document.getElementById("new-name").value)==false){
            error="Enter proper name";
        }
        if(error.length==0){
            return true;
        }
        document.getElementById("new-error-message").innerHTML=error;
        return false;
    }


    function addUser(){
        var validationFlag=validateForm();
        if(validationFlag==true){
            var form=document.getElementById("new-user-form");
            console.log(form);
            var newUser={
                name: "",
                email:"",
                status:"",
                role:"",
                lastLogin:"",
                permission:""
            }
            newUser.name=document.getElementById("new-name").value;
            newUser.email=document.getElementById("new-email").value;
            newUser.status=document.getElementById("new-status").value;
            newUser.role=document.getElementById("new-role").value;
            newUser.lastLogin=document.getElementById("last-login").value+"d ago";
            newUser.permission=document.getElementById("new-permission").value;
            console.log(newUser);
            users.push(newUser);
            loadUsers(users);
            toggleNewUser();
        }
    }
    
    
    //code to toggle status
    function toggleStatus(idNumber){
        for(let i=0;users.length>i;i++){
            if(users[i].id==idNumber){
                console.log(users[i]);
                if(users[i].status.localeCompare("Active")==0){
                    users[i].status="Inactive";
                }else{
                    users[i].status="Active";
                }
                console.log(users[i]);
            }
        }
        
        loadUsers(users);
    }

    var navbarFlag=true;
    function toggleNavBar(){
        if(navbarFlag){
            document.getElementById("menu-user").style.display=  "flex";
            
            document.getElementById("menu-options").style.display=  "flex";
            document.getElementById("side-menu").style.minHeight=  "100%";
            navbarFlag=false;
        }else{
            document.getElementById("menu-user").style.display=  "none";
            
            document.getElementById("menu-options").style.display=  "none";
            document.getElementById("side-menu").style.minHeight=  "10%";
            navbarFlag=true;
        }
        document.getElementById("hamburger").classList.toggle("make-x");
    }
    
    document.getElementById("user-search-mini").addEventListener(oninput,search);