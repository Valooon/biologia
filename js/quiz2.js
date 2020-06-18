function por()
 {
   var p1= document.quiz2.p1.value;
   var p2= document.quiz2.p2.value;
   var p3= document.quiz2.p3.value;
   var p4= document.quiz2.p4.value;
   var contador=0;
   var porcentaje;

   if(p1 == 'A')
   {
       contador++;
   }
   if(p2 == 'A')
   {
       contador++;
   }
   if(p3 == 'C')
   {
       contador++;
   }
   if(p4 == 'B')
   {
       contador++;
   }
   porcentaje = contador *100/4;
   porcentaje=parseInt(porcentaje);
   return porcentaje;
}