  function findWaldo(arr, found) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "Waldo") {
        found.index = i;
        //console.log(found);
        found();   // execute callback
      }
    }
  }

  function actionWhenFound() {
    console.log("Found Waldo at index ", actionWhenFound.index);
  }

  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);