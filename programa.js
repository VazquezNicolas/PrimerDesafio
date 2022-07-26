let i = 1, j = 1, l = 0; // condiciones del while
let totalP = 0, totalM=0, total=0; //Precio total
let contP1 =0, contP2 = 0, contP3 = 0, contP4 = 0, contP5 = 0; //Contadores de las cantidades de los pasapañuelos comprados
let contM1 =0, contM2 = 0, contM3 = 0, contM4 = 0, contM5 = 0; //Contadores de las cantidades de los mates comprados
let final = 0; //Confirmar compra

const suma = (a , b) => {return a+b}
const resta = (a , b) => {return a-b}

while( i != 0)
{  
    alert ("Ingrese un número para ver los productos")
    let producto = prompt("Productos:\n[1] Pasapañuelos\n[2] Mates3D\n");
   
    if (producto == 1)
    {
        j=1;
        while (j != 0)
        {
            let pasaP = prompt("[1] Pasapañuelos Manada = $500\n[2] Pasapañuelos Spiderman = $600 \n[3] Pasapañuelos Batman = $800 \n[4] Pasapañuelos Scorpion = $1000\n[5] Pasapañuelos Baloo = $1500\n[6] Dejar de comprar");

            switch (pasaP)
            {
                case "1": totalP = suma (totalP , 500); alert ("Total a pagar: $"+totalP); contP1++; break;
                case "2": totalP = suma (totalP , 600); alert ("Total a pagar: $"+totalP); contP2++; break;
                case "3": totalP = suma (totalP , 800); alert ("Total a pagar: $"+totalP); contP3++; break;
                case "4": totalP = suma (totalP , 1000); alert ("Total a pagar: $"+totalP); contP4++; break;
                case "5": totalP = suma (totalP , 1500); alert ("Total a pagar: $"+totalP); contP5++; break;
                case "6": j = 0; alert ("Total a pagar: $"+totalP); break;
                default: alert("No Ingresó ni un 1 ni un 2"); break;
            }
        }

    }

    else if (producto == 2)
    {
        j=1;
        while (j != 0)
        {
            let mate = prompt("[1]Mate Manada = $1500\n[2] Mate Spiderman = $1600 \n[3] Mate Batman = $1800 \n[4] Mate Scorpion = $2000\n[5] Mate Baloo = $2500\n[6] Dejar de Comprar");
            
            switch (mate)
            {
                case "1": totalM = suma (totalM , 1500); alert ("Total a pagar: $"+totalM); contM1++; break;
                case "2": totalM = suma (totalM , 1600); alert ("Total a pagar: $"+totalM); contM2++; break;
                case "3": totalM = suma (totalM , 1800); alert ("Total a pagar: $"+totalM); contM3++; break;
                case "4": totalM = suma (totalM , 2000); alert ("Total a pagar: $"+totalM); contM4++; break;
                case "5": totalM = suma (totalM , 2500); alert ("Total a pagar: $"+totalM); contM5++; break;
                case "6": j = 0; alert ("Total a pagar: $"+totalM); break;
                default: alert("No Ingresó ni un 1 ni un 2"); break;
            }
        }
    }

    else 
    {
        alert("Ingresó mal el número para ver los productos");  
    }

    i = prompt ("¿Desea comprar otro producto?\n[0] NO\n[1] SI")
}

cantMates = contM1 + contM2 + contM3 + contM4 + contM5;
cantPP    = contP1 + contP2 + contP3 + contP4 + contP5;
total = totalM + totalP;
if (totalM > 0)
{
    alert("Cantidad de Mates comprados:"+cantMates+"\nMates de Manada = "+contM1+"\nMate Spiderman = "+contM2+"\nMate Batman = "+contM3+"\nMate Scorpion = "+contM4+"\nMate Baloo = "+contM5);
}
if (totalP > 0)
{
    alert("Cantidad de Pasapañuelos comprados:"+cantPP+"\nPasapañuelos de Manada = "+contP1+"\nPasapañuelos Spiderman = "+contP2+"\nPasapañuelos Batman = "+contP3+"\nPasapañuelos Scorpion = "+contP4+"\nPasapañuelos Baloo = "+contP5);
}

alert("Total a pagar por pasapañuelos = $" +totalP+"\nTotal a pagar por mates = $"+totalM+ "\nTotal a pagar = $" +total);

l = prompt ("¿Desea Realizar la Compra?\n[1] Si\n[2]No")
if (l == 1)
{
alert ("¡Gracias por su compra!");
}
else if (l == 2)
{
    alert ("Su compra fue Cancelada\n¡Vuelva Pronto!");
}