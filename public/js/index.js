
var obj=[
    {title : "Harry potter" , author : "J.K.Rowling",publication: "Bloomsbury", edition: 2000,price:755,number:5},
    {title : "Twilight" , author : "Stephenie Meyer",publication: "Young kim", edition : 2001,price:654,number:2},
    {title : "C" , author : "Balaguruswamy",publication: "kristiana", edition : 1999,price:543,number:4}

]

var bookInfo = document.getElementById('bookInfo'); 
var data="";

//  console.log(data);
function fetch(){
    var data="";
    for(var i=0 ; i < obj.length; i++){

        data +=`<tr><td> ${obj[i].title}</td>
        <td>${obj[i].author}</td>
        <td>${obj[i].publication}</td>
        <td>${obj[i].edition}</td>
        <td>${obj[i].price}</td>
        <td>${obj[i].number}</td>
        <td><button class="btn btn-warning" onclick="showUpdate(${i})">Update</button></td>
        <td><button class="btn btn-danger" onclick="del(${i})">Delete</button></td>
        </tr>`
    }
    bookInfo.innerHTML = data;
    
}
function add(){
    var input1 = document.getElementById('title');
    var input2 = document.getElementById('author');
    var input3 = document.getElementById('publication');
    var input4 = document.getElementById('edition');
    var input5 = document.getElementById('price');
    var input6 = document.getElementById('number');
    
    var book = {
        title : input1.value,
        author : input2.value,
        publication: input3.value,
        edition : input4.value,
        price : input5.value,
        number: input6.value,
    }
    console.log(book);
    obj.push(book);
    input1.value = "" ;
    input2.value = "";
    input3.value="";
    input4.value="";
    input5.value="";
    input6.value="";
    console.log(obj);
    data ="";
    fetch();
}
function showUpdate(index){
    var update = document.getElementById("update");
    var create = document.getElementById("create");
    var updateForm = document.getElementById("updateForm");
    update.style.display = "block";
    create.style.display = "none";
    console.log(index);
    var book =obj[index];
    console.log(book);
    var updateTitle =document.getElementById("updateTitle");
    var updateAuthor = document.getElementById("updateAuthor");
    var updatePublication = document.getElementById("updatePublication");
    var updateEdition = document.getElementById("updateEdition");
    var updatePrice = document.getElementById("updatePrice");
    var updateNumber = document.getElementById("updateNumber");
    updateTitle.value=book.title;
    updateAuthor.value=book.author;
    updatePublication.value=book.publication;
    updateEdition.value=book.edition;
    updatePrice.value=book.price;
    updateNumber.value=book.number;
    updateForm.onsubmit = function(){
        console.log(`name: ${updateTitle.value} contact : ${updateAuthor.value} publication: ${updatePublication.value} edition: ${updateEdition.value} price: ${updatePrice.value} number: ${updateNumber.value}`)
        var bookobj = {
            title : updateTitle.value,
            author : updateAuthor.value,
            publication : updatePublication.value,
            edition : updateEdition.value,
            price : updatePrice.value,
            number : updateNumber.value,
        }
        
        obj.splice(index, 1 ,bookobj);
       
    
        updateTitle.value="";
        updateAuthor.value="";
        updatePublication.value="";
        updateEdition.value="";
        updatePrice.value="";
        updateNumber.value="";
        fetch();
        
    }
    // fetch();
}
function del(index){
    obj.splice(index,1);
    fetch();
}
fetch();