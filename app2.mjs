const formData = JSON.parse(sessionStorage.getItem('formData'));
console.log(formData)

let sn=document.querySelector('#school_name')
sn.innerText=formData.school_name

let year=document.querySelector("#year")
year.innerText+=" "+formData.year

let sn2=document.querySelector("#student_name")
sn2.innerText=formData.student_name

let classroom=document.querySelector("#classroom")
classroom.innerText=formData.classroom

let teacher=document.querySelector("#teacher")
teacher.innerText=formData.teacher

let exam=document.querySelector("#exam")
exam.innerText=formData.exam

let result=document.querySelector("#result")

let a=JSON.parse("[" + formData.result + "]")
console.log(a)
for (let i of a){
    result.innerHTML+=`<tr>
    <td>${i[0]}</td>
    <td>${i[1]}</td>
    <td>${i[2]}</td>
    <td>${i[3]}</td>
    </tr>`
    
}

let score_p1=document.querySelector("#score_p1")
score_p1.innerText=`${formData.placement}/${formData.placement2}`

let score_p2=document.querySelector("#score_p2")
score_p2.innerText=`${formData.GPA}`

let score_p3=document.querySelector("#score_p3")
score_p3.innerText=`${formData.total_marks}`

let score_p4=document.querySelector("#score_p4")
score_p4.innerText=`${formData.percentage}%`

