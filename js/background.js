var newElement =  document.getElementById("colorlib-main-menu").childNodes[1].childNodes

for (let i = 0; i < newElement.length; i++){
    if ((newElement.item(i).classList != undefined)){
        newElement.item(i).childNodes[0].onclick = function () {
            for (let j = 0; j < newElement.length; j++)
                (newElement.item(j).classList != undefined) ? newElement.item(j).classList.remove("colorlib-active") : ""
            newElement.item(i).classList.add("colorlib-active")
        }
    }
}

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }
  