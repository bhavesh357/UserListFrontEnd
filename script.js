var users=[
    {
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permission:"Valid"
    },{
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permission:"Valid"
    },{
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permission:"Valid"
    },{
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permission:"Valid"
    },{
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permission:"Valid"
    },{
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permission:"Valid"
    },{
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permission:"Valid"
    },{
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permission:"Valid"
    },{
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permission:"Valid"
    },{
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permission:"Valid"
    },{
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permission:"Valid"
    },{
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permission:"Valid"
    },{
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permission:"Valid"
    },{
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permission:"Valid"
    }]
    
    function loadUsers(users){
        var userList=""
        for(var i=0;i<users.length;i++){
            userList+="<div class=\"user-list-item\">\n"+
            "<div class=\"name list-column\"><i class=\"flaticon-user\"></i>"+users[i].name+"</div>\n"+
            "<div class=\"email list-column\">"+users[i].email+"</div>\n";
            if(users[i].status.match("Active")){
                userList+="<div class=\"status list-column\"><div class=\"status-active\">"+users[i].status+"</div> </div>\n";
            }else{
                userList+="<div class=\"status list-column\"><div class=\"status-inactive\">"+users[i].status+"</div> </div>\n";
            }
            userList+="<div class=\"role list-column\">"+users[i].role+"</div>\n"+
            "<div class=\"last-login list-column\">"+users[i].lastLogin+"</div>\n"+
            "<div class=\"permission list-column\">"+users[i].permission+"</div>\n"+
            "<button class=\"option list-column\">...</button>\n"+
            "</div>";
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
            subMenu.style.display="block";
            document.getElementById("authentication").classList.add("menu-button-highlight");
            userToggle=false;
        }else{
            subMenu.style.display="none";
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

    function addUser(){
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
    
    document.getElementById("user-search-mini").addEventListener(oninput,search);