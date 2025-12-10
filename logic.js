//Code for retriving data
var nm = document.getElementById("name");
var fname = document.getElementById("fname");
var age = document.getElementById("age");
var cnic = document.getElementById("cnic");
var gen = document.getElementsByName('gender');
var email = document.getElementById("email");
var d_o_b = document.getElementById("dob");
var province = document.getElementById("province");
var city = document.getElementById("eduCity");
var ph_num = document.getElementById("num");
var qualification = document.getElementById("edu");
var address = document.getElementById("address");
//var profileImg = document.getElementById("profile_image");

// red text for required item (getting spans )
var name_span = document.getElementById("name_span");
var fname_span = document.getElementById("fname_span");
var age_span = document.getElementById("age_span");
var cnic_span = document.getElementById("cnic_span");
var num_span = document.getElementById("num_span");
var city_span = document.getElementById("city_span");
var gen_span = document.getElementById("gen_span");
var email_span = document.getElementById("email_span");
var dob_span = document.getElementById("dob_span");
var email_span = document.getElementById("email_span");
var add_span = document.getElementById("add_span");
var edu_span = document.getElementById("edu_span");
var province_span = document.getElementById("province_span");

//CNIC Validation Pattern
var cnic_verification = /^[0-9]{5}[-]{1}[0-9]{7}[-]{1}[0-9]{1}$/;
//variable for asking before printing the form if it is true or not
var formSubmit;

//Save button function
function info() {
   const nm1 = nm.value;
   const fname1 = fname.value;
   const gen1 = gen;
   const age1 = age.value;
   const cnic1 = cnic.value;
   const email1 = email.value;
   const address1 = address.value;
   const city1 = city.value;
   const province1 = province.value;
   const edu1 = qualification.value;
   const ph_num1 = ph_num.value;
   const d_o_b1 = d_o_b.value;


   // to get the value of gender(radio button)
   var i;
   for (i = 0; i < gen1.length; i++) {
      if (gen1[i].checked) {
         var gender = gen1[i].value;
         // console.log(gender);
      }
   }

   //validation of cnic
   var pattern = cnic_verification.test(cnic1);

   // CONDITIONS that be should followed before saving the form
   if (nm1 == "") {
      alert("name is Required");
      name_span.innerText = " */Required";
      return false;
   }
   else if (fname1 == "") {
      alert("father name is required ");
      fname_span.innerText = " */Required";
      return false;
   }
   else if (gender == null) {
      alert("you forget the Gender  ");
      gen_span.innerText = " */Required";
      return false;
   }

   else if (age1 == "") {
      alert("Age is required ");
      age_span.innerText = " */Required";
      return false;
   }
   else if (age1 <=17 ||age1 >=35) {
      alert("your Age does not meet the specific statutory age requirement");
      age_span.innerText = " */too old or too Young*/";
      return false;
   }
   else if (d_o_b1 == "") {
      alert("Date of birth is required ");
      dob_span.innerText = " */Required";
      return false;
   }
   else if (cnic1 == "") {
      alert("CNIC is Rquired ");
      cnic_span.innerText = " */Required";
      return false;
   }
   else if (email1 == "") {
      alert("Email is required ");
      email_span.innerText = " */Required";
      return false;
   }

   else if (ph_num1 == "") {
      alert("Phone number name is required ");
      num_span.innerText = " */Required";
      return false;
   }

   else if (address1 == "") {
      alert("Address is required ");
      add_span.innerText = " */Required";
      return false;
   }

   else if (province1 == "") {
      alert("Your province name is required ");
      province_span.innerText = " */Required";
      return false;
   }
   else if (city1 == "") {
      alert("Educational city name is required ");
      city_span.innerText = " */Required";
      return false;
   }

   else if (edu1 == "") {
      alert("Qualification is Required ");
      edu_span.innerText = " */Required";
      return false;
   }
   //validation of cnic pattern and email address
   else if (pattern == false) {
      alert("Invalid cnic");
      cnic_span.innerText = " */Invalid cnic";
      return true;
   }
   else if (!email1.includes("@")) {
      alert("Invalid Email address");
      email_span.innerText = " */Invalid email address";
      return false;
   }

   else {
      formSubmit = true;
      alert("SUCCESSFULLY SUBMITED\n see all your info");
      // storing form data into table

      var table = document.getElementById("table").getElementsByTagName('tbody')[0];
      var newRow = table.insertRow(table.length);
      var c1 = newRow.insertCell(0); c1.innerHTML = nm1;
      var c2 = newRow.insertCell(1); c2.innerHTML = fname1;
      var c3 = newRow.insertCell(2); c3.innerHTML = age1;
      var c4 = newRow.insertCell(3); c4.innerHTML = ph_num1;
      var c5 = newRow.insertCell(4); c5.innerHTML = email1;
      var c6 = newRow.insertCell(5); c6.innerHTML = d_o_b1;
      var c7 = newRow.insertCell(6); c7.innerHTML = province1;
      var c8 = newRow.insertCell(7); c8.innerHTML = city1;
      var c9 = newRow.insertCell(8); c9.innerHTML = gender;
      var c10 = newRow.insertCell(9); c10.innerHTML = cnic1;
      var c11 = newRow.insertCell(10); c11.innerHTML = edu1;
   }
}

const form = document.getElementById("form_border");

form.addEventListener("submit", function (e) {
  // e.preventDefault();  <- i removed that prevent default function for a try
   const nm1 = nm.value;
   const fname1 = fname.value;
   const gen1 = gen;
   const age1 = age.value;
   const cnic1 = cnic.value;
   const email1 = email.value;
   const address1 = address.value;
   const city1 = city.value;
   const province1 = province.value;
   const edu1 = qualification.value;
   const ph_num1 = ph_num.value;
   const d_o_b1 = d_o_b.value;

   // to get the value of gender(radio button)
   var i;
   for (i = 0; i < gen1.length; i++) {
      if (gen1[i].checked) {
         var gender = gen1[i].value;
      }
   }
   if (formSubmit == true) {

      //setting and sending to next page
      localStorage.setItem('nm_1', nm1);
      localStorage.setItem('fname_1', fname1);
      localStorage.setItem('gen_1', gender);
      localStorage.setItem('age_1', age1);
      localStorage.setItem('cnic_1', cnic1);
      localStorage.setItem('email_1', email1);
      localStorage.setItem('address_1', address1);
      localStorage.setItem('city_1', city1);
      localStorage.setItem('province_1', province1);
      localStorage.setItem('edu_1', edu1);
      localStorage.setItem('ph_num_1', ph_num1);
      localStorage.setItem('dob_1', d_o_b1);

      const fileInput = document.getElementById('profile_image');
      const file = fileInput.files[0];

      if (file) {
         // Convert the image to a Base64 string
         const reader = new FileReader();
         reader.onloadend = function () {
            // Store the image in sessionStorage (you can use localStorage for persistence across sessions)
            sessionStorage.setItem('imageData', reader.result);

            // Redirect to the next page
            window.location.href = '.vscode/print.html';
         };
         reader.readAsDataURL(file);
      } else{
         alert('Please select an image first.');
      }
      
   }
   else {
      alert("The form must be completed in full and correctly before printing")
   }

})

clearBtn = document.getElementById("b2");
InputTag = document.querySelectorAll('input');
clearBtn.addEventListener('click', () => {
   InputTag.forEach(input => input.value = null)
})
