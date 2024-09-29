function AutoGenerate(){//password autógenerálás
    let password = "";
    let letter = "qwertzuiopasdfghjklyxcvbnm";
    let symbol = "+!%/=()?:_,.-;*<>#&@{}[]|+";

    for (let i = 0; i < 20; i++) {
        
        if (Math.floor(Math.random() * 2)) {
            password += Math.floor(Math.random() * 10);
            continue;
        }

        if (Math.floor(Math.random() * 3)) {
            if (Math.floor(Math.random() * 2)) {
                password += letter[Math.floor(Math.random() * letter.length)].toUpperCase();
                continue;
            }
            password += letter[Math.floor(Math.random() * letter.length)]
            continue;
        }

        password += symbol[Math.floor(Math.random() * symbol.length)]

    }

    document.getElementById("password").value = password;
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
    document.getElementById("ageValue").innerText = document.getElementById("age").value;
}

function NemKivalaszt(gender){ //nem kiválasztása
    if (arguments.length == 0) {
        if (document.getElementById('male').classList.contains("genderSelect")) {
            return "male";
        }
        return "female";
    }

    if (gender == "male") {
        document.getElementById("male").classList.add("genderSelect");
        document.getElementById("female").classList.remove("genderSelect");
        return;
    }

    document.getElementById("male").classList.remove("genderSelect");
    document.getElementById("female").classList.add("genderSelect");
    return gender;
}

function Submit() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let gender = NemKivalaszt();
    let job = document.getElementById("job").value;
    let fields = document.getElementById("fields").value;
    let password = document.getElementById("password").value;

    if (name == "" || email == "" || job == "" || password == "") {
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


  function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        name: params.get('name'),
        age: params.get('age'),
        job: params.get('job'),
        email: params.get('email')
    };
}

// Display the submitted data
window.onload = function() {
    const data = getQueryParams();
    if (data.name || data.age || data.job || data.email) {
        alert(`Submitted Data:\nName: ${data.name}\nAge: ${data.age}\nJob: ${data.job}\nEmail: ${data.email}`);
    }
};