function por()
 {
   var p1= document.quiz3.p1.value;
   var p2= document.quiz3.p2.value;
   
   var contador=0;
   var porcentaje;

   if(p1 == 'C')
   {
       contador++;
   }
   if(p2 == 'B')
   {
       contador++;
   }
   porcentaje = contador *100/2;
   porcentaje=parseInt(porcentaje);
   return porcentaje;
}