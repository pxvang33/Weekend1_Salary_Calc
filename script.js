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
// function which appends input fields onto the dom, will place function inside of 'clickSubmit' function
function appendEmployee(){
    // think I can declare each id input as its own variable instead of writing it fully out
    let employee = new Employees($('#firstNameIn').val(), $('#lastNameIn').val(), $('#idIn').val(), $('#titleIn').val(), $('#annualSalaryIn').val());
    console.log(employee);
    let totalMonthly = 0
    // pushing employee into array to loop through and then display each index onto the DOM
    employeesArray.push(employee);
    $('#firstRow').empty();

    for( person of employeesArray){
    $('#firstRow').append(
    '<tr>'+ '<td>' + employee.firstName + '</td>'
    + '<td>' + employee.lastName + '</td>' 
    + '<td>' + employee.id + '</td>' 
    +  '<td>' + employee.title + '</td>' 
    + '<td>' + Number(employee.annualSalary).toFixed(2) + '</td>' + '</tr>');
        
    totalMonthly += employee.annualSalary

    }
    
    console.log('total expense', totalMonthly);
} 

function clearnInputs(){
    // created function to clear input fields after clicking button
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#annualSalaryIn').val('');

}

function updateTotalMonthly(){

}


// create array of employees
//  push employees to array, go through array and append employees to the dom through a loop,



