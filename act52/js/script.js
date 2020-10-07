function validatePassword(){
    var pass = document.forms["frm"]["password"]
    var pass1 = document.getElementById("pass1")
    var passcheck = document.getElementById("passcheck")

    var weak = /[a-z]/;
    var passable =  /\d+/;
    var strong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

    if(pass.value.length <=4 && pass.value.match(weak) || pass.value.match(passable) || pass.value.match(strong)) {
        pass.classList.add("weak");
        pass.classList.remove("passable");
        pass.classList.remove("strong");
        passcheck.style.display="block";
        passcheck.style.color="red"
        passcheck.innerHTML = "Password is too weak"
    }

    if(pass.value.length >=9 && pass.value.match(weak) || pass.value.match(passable) || pass.value.match(strong)) {
        pass.classList.add("passable");
        pass.classList.remove("weak");
        pass.classList.remove("strong");
        passcheck.style.display="block";
        passcheck.style.color="#FFCC00"
        passcheck.innerHTML = "Password is passable"
    }

    if(pass.value.length >=12 && pass.value.match(weak) || pass.value.match(passable) || pass.value.match(strong)) {
        pass.classList.add("strong");
        pass.classList.remove("weak");
        pass.classList.remove("passable");
        passcheck.style.display="block";
        passcheck.style.color="green"
        passcheck.innerHTML = "Password is strong"
    }
}