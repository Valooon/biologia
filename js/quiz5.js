function por()
 {
   var p1= document.quiz5.p1.value;
   var p2= document.quiz5.p2.value;
   var p3= document.quiz5.p3.value;
   
   var contador=0;
   var porcentaje;

   if(p1 == 'A')
   {
       contador++;
   }
   if(p2 == 'B')
   {
       contador++;
   }
   if(p3 == 'A')
   {
       contador++;
   }
   porcentaje = contador *100/3;
   porcentaje=parseInt(porcentaje);
   return porcentaje;
}