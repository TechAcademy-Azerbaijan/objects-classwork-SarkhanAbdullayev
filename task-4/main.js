let figure = {
    title: "rectangle",
    length: 10,
    width: 6,
    area : function() {
        return figure.length * figure.width;
    },
    perimeter: function(){
        return figure.length*2 + figure.width*2;
    }
  };

  console.log(figure.area());
  console.log(figure.perimeter());   
