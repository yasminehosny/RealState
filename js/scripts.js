

document.getElementById("logout").addEventListener("click", function() {
   
    localStorage.removeItem("username"); 
    sessionStorage.removeItem("username");
    location.reload();
});
 
   
  
// //////////////////
// document.querySelectorAll(".add-to-favorite").forEach(button => {
//     button.addEventListener("click", function() {
//         let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
//         const property = {
//             id: this.getAttribute("data-id"),
//             title: this.getAttribute("data-title"),
//             image: this.getAttribute("data-image")
//         };
//         if (!favorites.some(fav => fav.id === property.id)) {
//             favorites.push(property);
//             localStorage.setItem("favorites", JSON.stringify(favorites));
//             alert("Add to favorites ✅");
//         } else {
//             alert("العقار موجود بالفعل في المفضله");
//         }
//     });
// });
