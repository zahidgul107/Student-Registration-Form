var currentTab = 0;
showTab(currentTab);

function showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 2)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    if (n == 3) {
        document.getElementById("prevBtn").style.display = "none";
        document.getElementById("nextBtn").style.display = "none";

     }
    fixStepIndicator(n)
}

function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
        document.getElementById("regForm").submit();
        return false;
    }
    showTab(currentTab);
}

function validateForm() {
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    for (i = 0; i < y.length; i++) {
        if (y[i].value == "") {
            console.log("failure");
            y[i].className += " invalid";
            // valid = false;
        }
    }
    // if (valid) {
        // document.getElementsByClassName("step")[currentTab].className += " finish";
    //     acceptData();
    // }
    // return valid;
    if (next.innerHTML == "Next") {
        document.getElementsByClassName("step")[currentTab].className += " finish";
        return valid;
    } else {
        acceptData();
        return valid;
    }
}

function fixStepIndicator(n) {
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    x[n].className += " active";
}




let form = document.querySelector("#regForm");
let fName = document.querySelector(".fName");
let lName = document.querySelector(".lName");
let email = document.querySelector(".email");
let dob = document.querySelector(".dob");
let gender = document.querySelector(".gender");
let address1 = document.querySelector(".address1");
let address2 = document.querySelector(".address2");
let city = document.querySelector(".city");
let state = document.querySelector(".state");
let zipCode = document.querySelector(".zipCode");
let country = document.querySelector(".country");
let telePhone = document.querySelector(".telePhone");
let university = document.querySelector(".university")
let passedYear = document.querySelector(".passed-year");
let subject1 = document.querySelector(".subject-1");
let subject2 = document.querySelector(".subject-2");
let subject3 = document.querySelector(".subject-3");
let subject4 = document.querySelector(".subject-4");
let subject5 = document.querySelector(".subject-5");
let gpa = document.querySelector(".gpa");
let studentsDetails = document.querySelector("#studentsDetail");
let next = document.getElementById("nextBtn");




form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('button clicked');
    // if (document.getElementById("nextBtn").innerHTML = "Next") {
    //     return false;
    // } else {
    //     validateForm();
    // }
    validateForm();
});

// let formValidation = () => {
//     if (input.value === "") {
//         console.log('failure');
//     } else {
//         console.log('success');
//     }
// };

let data = {};

let acceptData = () => {
    data["fName"] = fName.value;
    data["lName"] = lName.value;
    data["email"] = email.value;
    data["dob"] = dob.value;
    data["gender"] = gender.value;
    data["address1"] = address1.value;
    data["address2"] = address2.value;
    data["city"] = city.value;
    data["state"] = state.value;
    data["zipCode"] = zipCode.value;
    data["country"] = country.value;
    data["telePhone"] = telePhone.value;
    data["university"] = university.value;
    data["passedYear"] = passedYear.value;
    data["subject1"] = subject2.value;
    data["subject2"] = subject2.value;
    data["subject3"] = subject3.value;
    data["subject4"] = subject4.value;
    data["subject5"] = subject5.value;
    data["gpa"] = gpa.value;
    submittedDetails();
};

let submittedDetails = () => {
    studentsDetails.innerHTML += `
                <tbody>
                    <tr>
                        <td>${data.fName}</td>
                        <td>${data.lName}</td>
                        <td>${data.email}</td>
                        <td>${data.dob}</td>
                        <td>${data.gender}</td>
                        <td>${data.address2}</th>
                        <td>${data.address1}</td>
                        <td>${data.city}</td>
                        <td>${data.state}</td>
                        <td>${data.zipCode}</td>
                        <td>${data.country}</td>
                        <td>${data.telePhone}</td>
                        <td>${data.university}</td>
                        <td>${data.passedYear}</td>
                        <td>${data.subject1}</td>
                        <td>${data.subject2}</td>
                        <td>${data.subject3}</td>
                        <td>${data.subject4}</td>
                        <td>${data.subject5}</td>
                        <td>${data.gpa}</td>

                    </tr>
                </tbody>    
    `;
};