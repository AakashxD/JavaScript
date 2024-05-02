function run(){
    console.log(student);
}
student=10;// ->100
function gun(){
    console.log(student)//10
    student=100;
}
gun();
run();
// over writing
gun();
function gun(){
    console.log("h1");
}
function gun(){
    console.log("helo");
}