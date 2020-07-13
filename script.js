var users=[
    {
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permisiion:"Valid"
    },{
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permisiion:"Valid"
    },{
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permisiion:"Valid"
    },{
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permisiion:"Valid"
    },{
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permisiion:"Valid"
    },{
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permisiion:"Valid"
    },{
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permisiion:"Valid"
    },{
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permisiion:"Valid"
    },{
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permisiion:"Valid"
    },{
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permisiion:"Valid"
    },{
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permisiion:"Valid"
    },{
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permisiion:"Valid"
    },{
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permisiion:"Valid"
    },{
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permisiion:"Valid"
    }]
    
    var userList=""
    for(var i=0;i<users.length;i++){
        userList+="<div class=\"user-list-item\">\n"+
        "<div class=\"name list-column\"><i class=\"flaticon-user\"></i>"+users[i].name+"</div>\n"+
        "<div class=\"email list-column\">"+users[i].email+"</div>\n";
        console.log(users[i].status);
        if(users[i].status.match("Active")){
            userList+="<div class=\"status list-column\"><div class=\"status-active\">"+users[i].status+"</div> </div>\n";
        }else{
            userList+="<div class=\"status list-column\"><div class=\"status-inactive\">"+users[i].status+"</div> </div>\n";
        }
        userList+="<div class=\"role list-column\">"+users[i].role+"</div>\n"+
        "<div class=\"last-login list-column\">"+users[i].lastLogin+"</div>\n"+
        "<div class=\"permission list-column\">"+users[i].permisiion+"</div>\n"+
        "<button class=\"option list-column\">...</button>\n"+
        "</div>";
    }
    window.document.getElementById("user-list-details").innerHTML+=userList;
    var userCount= window.document.getElementsByClassName("user-list-item").length;
    console.log(userCount);
    window.document.getElementById("user-count").innerHTML = "Users("+userCount+")";
    var authenticationSubMenuFlag=true;
    function showSubMenu(value){
        var subMenuId="sub-menu-"+value;
        var subMenu=document.getElementById(subMenuId);
        console.log(subMenu);
        if(authenticationSubMenuFlag){
            subMenu.style.display="block";
            authenticationSubMenuFlag=false;
        }else{
            subMenu.style.display="none";
            authenticationSubMenuFlag=true;
        }
    }