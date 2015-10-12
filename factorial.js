function factorial( n ) {
  var x = 1;
  for( var c = 1; c <= n; c++ ) {
    x*=c;
  };
  return x;
}
document.write( factorial(5));   //returns 120
