
                                // Bài 1
sanpham = [
    {id: 1, name: "Điện thoại 1", image:"1.jpg", price: 1500000},
    {id: 2, name: "Điện thoại 2", image:"2.jpg", price: 1500000},
    {id: 3, name: "Điện thoại 3", image:"3.jpg", price: 1500000},
]

function hienSP() {
    var sp_html = sanpham.map((item) => {
        return `
            <div class="boxsp">
                <img src="images/${item.image}" alt="">
                <p>${item.name}</p>
                <p>Giá: <span>${item.price}</span> đồng</p>
            </div>`;
    });

   
    document.getElementById("sp").innerHTML = sp_html.join('');
}

// function hienSP() {
//     var sp_html = sanpham.map(function sp(item) {
//         return `
//             <div class="boxsp">
//                 <img src="images/${item.image}" alt="">
//                 <p>${item.name}</p>
//                 <p>Giá: <span>${item.price}</span> đồng</p>
//             </div>`;
//     });

   
//     document.getElementById("sp").innerHTML = sp_html.join('');
// }
                        // Bài 2
poeple = [
    {name: "Hùng", age: "36"},
    {name: "Tuấn", age: "27"},
    {name: "Minh", age: "19"},
]

function loadName() {
    var poeple_html = poeple.map((item) =>{
        return`
            <div>
                <p>I'm ${item.name}</li>
                <p>I'm ${item.age} years old</li>
            </div>
        `;
    }) .join('');
    document.getElementById("tt").innerHTML = poeple_html;
}

//                         bài 3

    function signup() {
        
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var pass = document.getElementById("pass").value;
        var confirm = document.getElementById("confirm").value;
        var user = {
            username: username,
            email: email,
            pass: pass,
            confirm: confirm
        };
        var all = JSON.stringify(user);
        localStorage.setItem(username, all);
        if(user.username != ""){
            if(user.username.lenght < 8){
                alert('Vui lòng nhập nhiều hơn 8 ký tự')
            };
        }else{
            alert('Vui lòng nhập username');
            user.username.focus();
            return false; 
        };
        if(email != ""){
            
        }else{
            alert('Vui lòng nhập email');
            email.focus();
            return false; 
        };
        
        if(pass != ""){
            
        }else{
            alert('Vui lòng nhập pass');
            pass.focus(); 
            return false; ; 
        };
        
        if(confirm != ""){
            if(confirm != pass ){
                alert('Mật khẩu không trùng khớp');
                confirm.focus
                return false; 
            }
        }else{
            alert('Vui lòng xác nhận lại pass');
            confirm.focus();
            return false;  
        };
        alert('Đăng ký thành công')
        
       
        
    }

    function login(){  
        var username = document.getElementById("username").value;
        var pass = document.getElementById("pass").value;   
        var user = localStorage.getItem(username);
        var data = JSON.parse(user);
            if( user == null){
                alert('Vui lòng nhập user ');
            }else if(username == data.username && pass == data.pass){
               alert('Đăng nhập thành công')
                
            }
            else{
                alert('Vui lòng nhập pass');
            }
       window.location.href ="https://giphy.com/embed/G96zgIcQn1L2xpmdxi/video"; 
}