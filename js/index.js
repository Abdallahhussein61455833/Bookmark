var webSiteNameInput = document.getElementById("webSiteName")
var webSiteURLInput = document.getElementById("webSiteURL")
var boxModal = document.querySelector(".box-info");




var websiteList=[];

if(localStorage.getItem("container")!=null){
websiteList=JSON.parse(localStorage.getItem("container"))
displayData();
}




function closeModal() {
   boxModal.classList.add("d-none");
 }
 document.addEventListener("click", function (click) {
   if (click.target.classList.contains("box-info")) {
     closeModal();
   }
 });


function addWebsite(){
   if(validationName() && validationURL()){
      var webSite={
         webName:webSiteNameInput.value,
         url:webSiteURLInput.value,
      
         
         
      }
      websiteList.push(webSite)
      localStorage.setItem("container",JSON.stringify(websiteList) )
      displayData();
      clearForm();
      webSiteNameInput.classList.remove('is-valid')
      webSiteURLInput.classList.remove('is-valid')

   }
   else{
      console.log("wrong ")
      boxModal.classList.remove("d-none");
   }
   
     

   
   
   
   
   
   

}



function clearForm(){
   webSiteNameInput.value=null;  
   webSiteURLInput.value=null;
   


}






function displayData(){
   var cartoona="";

   for (var i=0 ; i<websiteList.length ; i++){
      cartoona+=`
      <tr>
            <td>${i+1}</td>
            <td>${websiteList[i].webName}</td>
            <td><a target=”_blank” href='https://${websiteList[i].url}'><button class="btn btn-success"><i class="fa-solid fa-eye pe-2"></i>Visit</button></a></td>
            

            <td>

              <button onclick="deleteItem(${i});" class="btn btn-danger "><i class="fa-solid fa-trash-can"></i> Delete</button>
            </td>
      </tr>

      `;



   }
   document.getElementById("tableData").innerHTML=cartoona;


}





function deleteItem(indexItem){

   websiteList.splice(indexItem,1)
   localStorage.setItem("container",JSON.stringify(websiteList) )
   displayData();
   

}


function validationName(){
   var text =webSiteNameInput.value;
   var regex = /^\w{3,}(\s+\w+)*$/;

   if(regex.test(text)==true ){
      webSiteNameInput.classList.add('is-valid')
      webSiteNameInput.classList.remove('is-invalid')
      return true;
      

   }
   else{
      webSiteNameInput.classList.add('is-invalid')
      webSiteNameInput.classList.remove('is-valid')
      return false;
   }
}
function validationURL(){
   var text =webSiteURLInput.value;
   var regex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;

   if(regex.test(text)==true ){
      webSiteURLInput.classList.add('is-valid')
      webSiteURLInput.classList.remove('is-invalid')
      return true;
      

   }
   else{
      webSiteURLInput.classList.add('is-invalid')
      webSiteURLInput.classList.remove('is-valid')
      return false;
   }
}

   