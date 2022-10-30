function search() {
    var input, filter, ul, li, txtValue;
    input = document.getElementById("myInput");
    console.log(input)
    filter = input.value.toUpperCase();
    console.log(filter)
    li = document.getElementsByTagName("li");
    console.log(li)
    
    for (let i = 0; i < li.length; i++) {
        txtValue = li[i].textContent
        console.log(txtValue)
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}