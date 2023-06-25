  //التحقق من الصحة 
  function ChechFormValues(frm) {
    var name = frm.name.value;
    var id = frm.id.value;
    var birth = frm.birth.value;
    var phone = frm.phone.value;
    var email = frm.mail.value;
  
    // تحقق من صحة الاسم
    if (!isValidName(name)) {
      alert("الاسم غير صحيح.");
      frm.name.focus();
      return false;
    }
  
    // تحقق من صحة الرقم الوطني
    if (!isValidNationalID(id)) {
      alert("الرقم الوطني غير صحيح.");
      frm.id.focus();
      return false;
    }
  
    // تحقق من صحة تاريخ الميلاد
    if (!isValidDateOfBirth(birth)) {
      alert("تاريخ الميلاد غير صحيح.");
      frm.birth.focus();
      return false;
    }
  
    // تحقق من صحة رقم الجوال
    if (!isValidMobileNumber(phone)) {
      alert("رقم الجوال غير صحيح.");
      frm.phone.focus();
      return false;
    }
  
    // تحقق من صحة البريد الإلكتروني
    if (!isValidEmail(email)) {
      alert("البريد الإلكتروني غير صحيح.");
      frm.mail.focus();
      return false;
    }
    submitForm()
    return true;
  }
  
  function isValidName(name) {
    // تحقق من صحة الاسم باستخدام regex
    var nameRegex = /^[أ-ي ]+$/;
    return nameRegex.test(name);
  }
  
  function isValidNationalID(id) {
    // تحقق من صحة الرقم الوطني باستخدام regex
    var idRegex = /^(0[1-9]|1[0-4])\d{9}$/;
    return idRegex.test(id);
  }
  
  function isValidDateOfBirth(birth) {
    // تحقق من صحة تاريخ الميلاد باستخدام regex
    var birthRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!birthRegex.test(birth)) {
      return false;
    }
  
    // تحقق من أن تاريخ الميلاد يسمح بالحد الأدنى والأقصى للعمر
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1;
    var currentDay = currentDate.getDate();
  
    var birthYear = parseInt(birth.substring(0, 4));
    var birthMonth = parseInt(birth.substring(5, 7));
    var birthDay = parseInt(birth.substring(8, 10));
  
    var age = currentYear - birthYear;
    if (currentMonth < birthMonth || (currentMonth == birthMonth && currentDay < birthDay)) {
      age--;
    }
  
    var minAge = 18;
    var maxAge = 120;
    return age >= minAge && age <= maxAge;
  }
  
  function isValidMobileNumber(phone) {
    // تحقق من صحة رقم الجوال باستخدام regex
    var phoneRegex = /^09[3-689]\d{7}$/;
    return phoneRegex.test(phone);
  }
  
  function isValidEmail(email) {
    // تحقق من صحة البريد الإلكتروني باستخدام regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

//Captcha انشاء رمز 
var code;
function createCaptcha() {

    var charsArray = "01234578ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var captcha = "";
    for (var i = 0; i < 4; i++) {
        captcha += charsArray[Math.floor(Math.random() * charsArray.length)];
    }
    document.getElementById("captcha").innerHTML = captcha;
    code = captcha;
}

    const myButton = document.getElementById("myButton");
const myForm = document.getElementById("myForm");

myButton.addEventListener("click", function() {
  myForm.style.display = "block";
});

function submitForm() {


  // عرض رسالة تأكيد
  alert("تم الإرسال بنجاح!");
}
//لفتح معلومات تفصيلية عن السيارة 
function openCarDetails() {
  // Get the clicked table row
  var row = event.target.parentNode.parentNode;

  // Get the values of the cells in the row
  var type = row.cells[0].innerHTML;
  var manufactureDate = row.cells[1].innerHTML;
  var rentalType = row.cells[2].innerHTML;
  var rentalValue = row.cells[3].innerHTML;

  // Calculate the final rental value
  var rentalValueNum = parseInt(rentalValue.replace(/,/g, ''));
  var reconstructionFee = rentalValueNum * 0.01;
  var tax = rentalValueNum * 0.05;
  var totalRentalValue = rentalValueNum + reconstructionFee + tax;

  // Set the values of the cells in the second page
  document.getElementById("rental-type").innerHTML = rentalType;
  document.getElementById("rental-value").innerHTML = rentalValue;
  document.getElementById("reconstruction-fee").innerHTML = reconstructionFee.toLocaleString('en-US');
  document.getElementById("tax").innerHTML = tax.toLocaleString('en-US');
  document.getElementById("total-rental-value").innerHTML = totalRentalValue.toLocaleString('en-US');
  document.getElementById("car-image").src = row.cells[4].querySelector('img').src;
}