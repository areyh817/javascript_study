"use strict";

let group = {
    title : "1모둠",
    students : ["선호", "준호", "혜라"],

    showList(){
        this.students.forEach(
            students => console.log(this.title + " : "+students)
        );
    }
};
