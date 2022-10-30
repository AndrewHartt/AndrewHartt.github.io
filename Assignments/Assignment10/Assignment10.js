const json = {
        "Company": {
            "comapnyName": "Tech Stars",
            "website": "www.techstars.site",
            "employees": "array of employees"
    },
        "employees": [
            {
                "firstname": "Sam",
                "department": "Tech",
                "designation": "Manager",
                "salary": "40,000",
                "raise eligibility": "true",
                "wfh": true
            },
            {
                "firstname": "Mary",
                "department": "Finance",
                "designation": "Trainee",
                "salary": "18,500",
                "raise eligibility": "true",
                "wfh": false
            },
            {
                "firstname": "Bill",
                "department": "HR",
                "designation": "Executive",
                "salary": "21,200",
                "raise eligibility": "false",
                "wfh": false
            },
            {
                "firstname": "Anna",
                "department": "Tech",
                "designation": "Executive",
                "salary": "25,600",
                "raise eligibility": "false",
                "wfh": true
            }
        ]
        
     }

console.log(json["employees"]);

console.log(json["companyName"]);
console.log(json["website"]);

let totalSalary =0;
for(let i =0; i <4; i++) {
    totalSalary += json["employees"][i].salary
}
 console.log(totalSalary);

 for(let j = 0; j < 4; j++) {
    if(json["employees"][j]["raise eligibility"] ===true){
        json["employees"][j].salary = Number(json["employees"][j].salary) + Number(json["employees"][j].salary)*0.1;
    }
    console.log(json["employees"][j].salary)
 }

 for(let l =0; l<4; l++){
    console.log(json["employees"][l].wfh)
 }