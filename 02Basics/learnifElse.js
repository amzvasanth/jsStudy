
var whoIsHere = 'student'

if (whoIsHere == 'user'){
    console.log('Greeting message for user')
    console.log('Allow access to view all courses')
} else if (whoIsHere == 'teacher'){
    console.log('Greeting message for Teacher')
    console.log('Allow access to his coures')
} else {
    console.log('Message: please verify your email')
    console.log('Send user email for verificcation')
}

var marks = 10

if (marks== 10){
    console.log('Marks is Amazing')
    
} else if (marks == 5 ){
    console.log('Mark is Good')
} else if (marks == 3){
    console.log('Poor')
} else if (marks == 0){
    console.log ('fail')
}else {
    console.log ('Invalid Data')
}