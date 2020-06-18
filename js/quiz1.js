function por()
 {
   var p1= document.quiz1.p1.value;
   var p2= document.quiz1.p2.value;
   var p3= document.quiz1.p3.value;
   var contador=0;
   var porcentaje;

   if(p1 == 'B')
   {
       contador++;
   }
   if(p2 == 'A')
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