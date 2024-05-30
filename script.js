function formvali() {
    var name = document.contactForm.name.value;
    var gender = document.contactForm.gradio.value;
    var email = document.contactForm.email.value;
    var age = document.contactForm.age.value;
    var phone = document.contactForm.mobilen.value;
    var classz=document.contactForm.c.value;
    var hobbies = [];
    var checkboxes = document.getElementsByName("hobbies");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            hobbies.push(checkboxes[i].value);
        }
    }
    var nameErr = genderErr = emailErr = ageErr = mobileErr = classErr = true;

    if (name == "") {
        alert("Please enter your name...");
    }
    else {
        var regex = /^[a-zA-Z\s]+.$/;
        if (regex.test(name) == false) {
            alert("Please Enter a Valid name...");
        }else{
            nameErr=false;
        }
    }

    if (email == "") {
        alert("Please enter your email...");
    }
    else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) == false) {
            alert("Please Enter a Valid email...");
        }else{
            emailErr=false;
        }
    }

    if (phone == "") {
        alert("Please enter your mobile number...");
    }
    else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(phone) == false) {
            alert("Please Enter a Valid Number...");
        }else{
            mobileErr=false;
        }
    }

    if(gender==""){
        alert("Please Select your gender...");
    }else{
        genderErr=false;
    }

    if(age==""){
        alert("Please Enter your age...");
    }else{
        ageErr=false;
    }

    if(classz==""){
        alert("Please Select the class...");
    }else{
        classErr=false;
    }

    if((nameErr||genderErr|| emailErr|| ageErr || mobileErr || classErr)==true){
        return false;
    }else{
        data="You Entered the following data:\n"+
        "Name:"+name+"\n"+
        "Gender:"+gender+"\n"+
        "Email:"+email+"\n"+
        "Age:"+age+"\n"+
        "Phone Number:"+phone+"\n"+
        "Class:"+classz+"\n";

        if(hobbies.length){
            data+="Hobbies:"+hobbies.join(", ");
        }
        alert(data);
    }

}