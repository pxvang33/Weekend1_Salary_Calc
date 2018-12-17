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
    console.log('button clicked');
    // declaring variable with employee constructor and swapping properities with input id's to obtian their value
    appendEmployee();
    clearnInputs();

}

function appendEmployee(){
    let employee = new Employees($('#firstNameIn').val(), $('#lastNameIn').val(), $('#idIn').val(), $('#titleIn').val(), $('#annualSalaryIn').val());
    console.log(employee);
    // pushing employee into array to loop through and then display each index onto the DOM
    employeesArray.push(employee);
    $('#empShow').append(
    '<tr>'+ '<td>' + employee.firstName + '</td>'
    + '<td>' + employee.lastName + '</td>' 
    + '<td>' + employee.id + '</td>' 
    +  '<td>' + employee.title + '</td>' 
    + '<td>' + employee.annualSalary + '</td>' + '</tr>');

} 

function clearnInputs(){
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#annualSalaryIn').val('');

}


// create array of employees
//  push employees to array, go through array and append employees to the dom through a loop,



