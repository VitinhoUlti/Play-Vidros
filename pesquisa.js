function apert() {
    let input = document.getElementById('ipes').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('app');
    let app = document.getElementsByClassName('appf')
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
            app[i].style.display="none";
        }
        else {
            x[i].style.display="block"; 
            app[i].style.display="block";                
        }
    }
}