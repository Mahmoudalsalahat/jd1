function myFunction() {
    const txt = document.getElementById("email").value;
    console.log(txt);
    const txtLen = txt.length;
    console.log(txtLen);
    if (txtLen<3) {
        document.getElementById("error").innerHTML = "Valid email required";
        document.getElementById("email").style.backgroundColor = 'hsl(355, 52%, 81%)';
}
}