function search() {
    var input, filter, li, txtValue;
    input = document.getElementById("myInput");
    console.dir(input)
    filter = input.value.toUpperCase();
    console.log(filter)
    li = document.getElementsByTagName("li");
    console.log(li)
    
    for (let i = 0; i < li.length; i++) {
        txtValue = li[i].textContent
        console.dir(txtValue)
        if (txtValue.toUpperCase().indexOf(filter) != -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

localStorage.setItem('buoi3', 'value buoi 3')