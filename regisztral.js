function AutoGenerate(){//password autógenerálás
    let jelszo = "";
    for (let i = 0; i < 10; i++) {
        Math.floor(Math.random() * 10);
        //vm algoritmust
    }

    
}

function ShowPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

function AgeSliderChange(){//age kiválasztás
    document.getElementById("ageLabel").innerText = "Életkor: " + document.getElementById("age").value;
}

function NemKivalaszt(nem){ //nem kiválasztása
    if (arguments.length == 0) {
        if (document.getElementById('male').classList.contains("genderSelect")) {
            return "male";
        }
        return "female";
    }

    if (nem == "male") {
        document.getElementById("male").classList.add("genderSelect");
        document.getElementById("female").classList.remove("genderSelect");
        return;
    }

    document.getElementById("male").classList.remove("genderSelect");
    document.getElementById("female").classList.add("genderSelect");
    return nem;
}

function Submit() {
    let nev = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let gender = NemKivalaszt();
    let job = document.getElementById("job").value;
    let fields = document.getElementById("fields").value;
    let password = document.getElementById("password").value;

    if (nev == "" || email == "" || job == "" || password == "") {
        alert("Minden megadott mezőt ki kell tölteni!");
        return;
    }

    if (!validateEmail(email)) {
        alert("Nem megfelelő az email formátuma");
        return;
    }
    
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }