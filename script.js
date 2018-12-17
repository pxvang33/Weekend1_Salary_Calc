let employeesArray = [];

class Employees {
    constructor( firstName, lastName, id, title, annualSalary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.annualSalary = annualSalary

    } // ends constructor
} // ends employee clsass

$(document).ready(function(){
    console.log('ready');
    $('#clicker').on('click', clickSubmit );
    

})

function clickSubmit(){
    console.log('works'); // button works when clicked
    // declaring variable with employee constructor and swapping properities with input id's to obtian their value
    let employee = new Employees( $('#firstNameIn').val());
    console.log(employee);
    // let employee = new Employees($('#firstNameIn').val(), $('#lastNameIn').val(), $('#idIn').val(), $('#titleIn').val(), $('#annualSalaryIn').val() );
    // pushing employee into array to loop through and then display each index onto the DOM
    employeesArray.push(employee);
    $('#empShow').append('<li>' + employee.firstName + '</li>');

}

// create array of employees
//  push employees to array, go through array and append employees to the dom through a loop,



