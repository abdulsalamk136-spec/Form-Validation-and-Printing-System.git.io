//getting data from previous page and setting that data
const showName = localStorage.getItem('nm_1');
const showFName = localStorage.getItem('fname_1');
const showGen = localStorage.getItem('gen_1');
const showAge = localStorage.getItem('age_1');
const showCnic = localStorage.getItem('cnic_1');
const showEmail = localStorage.getItem('email_1');
const showAddress = localStorage.getItem('address_1');
const showCity = localStorage.getItem('city_1');
const showProvince = localStorage.getItem('province_1');
const showEdu = localStorage.getItem('edu_1');
const showPhNum = localStorage.getItem('ph_num_1');
const showDOB = localStorage.getItem('dob_1');

//printing all the data in the spans
document.getElementById("name_print").textContent = showName;
document.getElementById("fname_print").textContent=showFName;
document.getElementById("age_print").textContent=showAge;
document.getElementById("cnic_print").textContent=showCnic;
document.getElementById("num_print").textContent=showPhNum;
document.getElementById("province_print").textContent=showProvince;
document.getElementById("gen_print").textContent=showGen;
document.getElementById("emale_print").textContent=showEmail;
document.getElementById("dob_print").textContent=showDOB;
document.getElementById("address_print").textContent=showAddress;
document.getElementById("edu_print").textContent=showEdu;

// Second page (receiving page)

 window.onload = function() {
            // Retrieve the image data from sessionStorage
            const imageData = sessionStorage.getItem('imageData');
            
            if (imageData) {
                // Set the image source to the retrieved Base64 string
                document.getElementById('profile_img').src = imageData;
            } else {
                console.log('No image found.');
            }
        };
