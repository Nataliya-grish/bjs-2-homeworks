
function Student(name, gender, age) {
    
  this.name = name;
  this.gender = gender;
  this.age = age;


}
let student1 = new Student("Tony", "male", 37);
let student2 = new Student("Buzz", "female", 35);

Student.prototype.setSubject = function (subjectName) {
   this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
 if(this.marks === undefined){ 
    this.marks = [mark]; 
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...marks) {
	if(this.marks === undefined){ 
    this.marks = marks;
    } else {
    	for (let i = 0; i < marks.length; i++) {
    		this.marks.push(marks[i]);
    	}
    }
}

Student.prototype.getAverage = function() {
 return this.marks.reduce((acc, x) => acc + x)/this.marks.length;
    
}

Student.prototype.exclude = function(reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}



    
    
    
    
    