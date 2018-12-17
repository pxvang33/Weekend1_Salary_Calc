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
    // $('#empShow1').append('<tr>' +
    //     '<th>  First Name  </th>' 
    //     + '<th>  Last Name  </th>'
    //    + '<th> ID</th>'
    //     + '<th>Title</th>'
    //     + '<th>Annual Salary</th>' +
    // '</tr>')
    

})

function clickSubmit(){
    console.log('button clicked');
    // declaring variable with employee constructor and swapping properities with input id's to obtian their value
    appendEmployee();

    clearInputs();

}
// function which appends input fields onto the dom, will place function inside of 'clickSubmit' function
function appendEmployee(){
    // think I can declare each id input as its own variable instead of writing it fully out
    let employee = new Employees($('#firstNameIn').val(), $('#lastNameIn').val(), $('#idIn').val(), $('#titleIn').val(), $('#annualSalaryIn').val());
    console.log(employee);
    let totalMonthly = 0
    // pushing employee into array to loop through and then display each index onto the DOM
    employeesArray.push(employee);
    // don't want to empty the whole table how to stop??
       $('#firstRow').empty();

    for( let i = 0; i < employeesArray.length; i++){
        console.log('for loop', employeesArray[i])

    $('#firstRow').append(
    '<tr>'+ '<td>' + employeesArray[i].firstName + '</td>'
    + '<td>' + employeesArray[i].lastName + '</td>' 
    + '<td>' + employeesArray[i].id + '</td>' 
    +  '<td>' + employeesArray[i].title + '</td>' 
    + '<td>' + Number(employeesArray[i].annualSalary).toFixed(2) + '</td>' + '</tr>');
        
    // totalMonthly += employee.annualSalary

    }
    
    console.log('total expense', totalMonthly);
} 

function clearInputs(){
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



