const form = document.querySelector("form"), statustxt = form.querySelector(".submit-cta span");

form.onsubmit = (e)=> {
    e.preventDefault();
    statustxt.style.color = "#0D6EFD";
    statustxt.style.display = "block";

    let xrh = new XMLHttpRequest();
    xrh.open("POST","mini.php","true");
    
    xrh.onload = () =>{
        if (xrh.readyState == 4 && xrh.status == 200){
            let response = xrh.response;
            if (response.indexOf("Verify your email!") == 0 || response.indexOf("Enter Your Name And Email") == 0 ){
                statustxt.style.color = "red";
            }
            else
            {
                form.reset();
                setTimeout(() => {statustxt.style.display = "none";}, 3000);
            }
            
            statustxt.innerText = response;
        }
    }
    let formdata = new FormData(form);
    xrh.send(formdata);

}
