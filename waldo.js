  function findWaldo(arr, found) {
    var index = 0
    arr.forEach(function(element){
      if (element === "Waldo") {
        found.index = index;
        //console.log(found);
        found();   // execute callback
      }
      index++ ;
    })
  }


  function actionWhenFound() {
    console.log("Found Waldo at index ", actionWhenFound.index);
  }

  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);