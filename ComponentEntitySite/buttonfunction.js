    window.onload = function() {
      changepic('1', '19.824 98.409 0');
    };
    function changepic(sky, moon){
      var e = document.getElementById('skypic');
      var p = document.getElementById('student');
      e.setAttribute('src', '#'+sky);
      e.emit('terminate');
      e.setAttribute('rotation', '0 0 0');
      p.setAttribute('rotation', moon);
      e.emit('commence');
    };
