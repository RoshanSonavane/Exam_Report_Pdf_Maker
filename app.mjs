let a=document.querySelector('#announcement')
let form=document.querySelector("form")
let sn=document.querySelector("#school_name")
let sn2=document.querySelector("#student_name")
let year=document.querySelector("#year")
let classroom=document.querySelector("#classroom")
let teacher=document.querySelector("#teacher")
let exam=document.querySelector("#exam")
let result=document.querySelector("#result")
let placement=document.querySelector("#placement")
let placement2=document.querySelector("#placement2")
let GPA=document.querySelector("#GPA")
let total_marks=document.querySelector("#total_marks")
let percentage=document.querySelector("#percentage")



form.addEventListener("submit",(v)=>{
    let obj={
        "school_name":sn.value,
        "student_name":sn2.value,
        "year":year.value,
        "classroom":classroom.value,
        "teacher":teacher.value,
        "exam":exam.value,
        "result":result.value,
        "placement":placement.value,
        "placement2":placement2.value,
        "GPA":GPA.value,
        "total_marks":total_marks.value,
        "percentage":percentage.value
    }
    // Store data in sessionStorage or localStorage
    sessionStorage.setItem('formData', JSON.stringify(obj));

    // Redirect to the second page
    window.location.href = "result.html";

})

