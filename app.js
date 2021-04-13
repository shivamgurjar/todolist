
$(document).ready(function () {
    
  
    $("#add_btn").click(function () {
      // console.log("button clicked");
      $('#add_items').modal(); // open a new form take a name and add it to the new list
    });
  
    // function to take values from the pop-up page and display the values to our task list.
    $("#addclick").click(function () { 
      var task_title = document.getElementById("icon_title").value.toString();
      var task_descrip = document.getElementById("icon_descrip").value.toString();
      //console.log(task_title);

      if(task_title != ""){
        var t = '<li class="collection-item avatar"><i class="material-icons circle">event</i><div>' + task_title +'<p>'+task_descrip+ '</p><a href="#!" class="secondary-content"> <i data-target="edit_items" class="material-icons modal-trigger edel" id="edit_task">edit</i>    <i class="material-icons cdel" id="delete_task">delete</i> </a></div></li>';
        $(".collection").append(t);
        //console.log(task_title);
      }
      task_title = "";
      task_descrip = "";
    });

   
    // $("#delete_task").click(function () {
    // //  console.log("Delete button clicked");
    // //   var p = $(this).parent();
    // //   console.log(p);
    //   $(this).parent().parent().parent().remove();
    // });
  

    $(document).on("click", "i.cdel", function () {    
      $(this).parent().parent().parent().remove();
    });

    $(document).on("click", "i.edel", function () {    
        console.log("Edit button clicked");

        $("#edit_items").modal();

        let elementClicked = event.target;
        console.log(elementClicked);
      });
  
  });