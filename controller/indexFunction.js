function sendEmailAndBdownlaod(fileUrl, fileName) {
    //Getting value form from jQuery..
    var name = $('#name').val();
    var lname = $('#lname').val();
    var email = $('#email').val();
    var contact = $('#contact').val();
    if (name == "" || lname == "" || email == "" || contact == "") {
        this.validateForm(fileUrl, fileName, name, lname, email, contact);
    } else {
        var re = /^[0-9]*$/;
        if (!re.test(contact)) {
            document.getElementById('status').innerHTML = "Contact Number should Be In Numbers";
            return false;
        }
        re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            document.getElementById('status').innerHTML = "Email format invalid";
            return false;
        }
        //this.sendEmail(name,lname,email,contact);
        this.downloadBrochure(fileUrl, fileName);
    }
    console.log("My name is ", name + "" + lname + "and my email address is" + "" + email + "" + "and my contact is" + contact);
}

function validateForm(fileUrl, fileName, name, lname, email, contact) {
    var re;
    if (name == "" && lname == "" && email == "" && contact == "") {
        document.getElementById('status').innerHTML = "Please Fill The Form Properly";
        return false;
    } else {
        if (name == "") {
            document.getElementById('status').innerHTML = "Enter Your Name";
            return false;
        }

        if (lname == "") {
            document.getElementById('status').innerHTML = "Enter Your Last Name";
            return false;
        }

        if (email == "") {
            document.getElementById('status').innerHTML = "Enter Your Email";
            return false;
        } else {
            re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(email)) {
                document.getElementById('status').innerHTML = "Email format invalid";
                return false;
            }
        }

        if (contact == "") {
            document.getElementById('status').innerHTML = "Enter Your Contact";
            return false;
        } else {
            re = /^[0-9]*$/;
            if (!re.test(contact)) {
                document.getElementById('status').innerHTML = "Contact Number should Be In Numbers";
                return false;
            }
        }
        this.downloadBrochure(fileUrl, fileName);
    }

}

function downloadBrochure(fileUrl, fileName) {
    var save = document.createElement('a');
    save.href = fileUrl;
    save.download = fileName;
    save.target = '_blank';
    document.body.appendChild(save);
    save.click();
    document.body.removeChild(save);
    //window.location.href = 'view/thankyou.html';
}

function privacy() {
    window.location.href = 'view/privacy.html'
}

function privacyThankyou() {
    window.location.href = 'privacy.html'
}

function submitcheck(element) {
    var name = $('#name').val();
    var lname = $('#lname').val();
    var email = $('#email').val();
    var contact = $('#contact').val();

    if (name == "" || lname == "" || email == "" || contact == "") {
        
        alert("The action to execute is " + element.action);
        return false;
    } else {
        var re = /^[0-9]*$/;
        if (!re.test(contact)) {
            document.getElementById('status').innerHTML = "Contact Number should Be In Numbers";
            return false;
        }
        re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            document.getElementById('status').innerHTML = "Email format invalid";
            return false;
        }
        window.open('view/thankyou.html', '_blank');
        return true;
    }

}