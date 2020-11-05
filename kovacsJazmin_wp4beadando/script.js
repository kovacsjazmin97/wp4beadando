function Duplavissza() { }
function Vissza() { }
function Elore() { }
function Duplaelore() { }
function CikkLeptet() { }
function Cikknevek() { }
function Listavaltas() { }
function Csuszkavaltas() { }
try {
    $.get('https://raw.githubusercontent.com/kovacsjazmin97/wp4beadando-2020-ET00B7/main/kovacsJazmin_wp4beadando/data.txt', function (data) {

        var cikkek = data.split("\n");
        var zzzzzz = cikkek.pop();
        var splittelt = [];
        for (i = 0; i < cikkek.length; i++) {
            splittelt[i] = cikkek[i].split("$$$");//
        }


        var ajanlott_cimkek = [];
        for (i = 0; i < splittelt.length; i++) {
            ajanlott_cimkek[i] = splittelt[i][0].split("__label__");
            for (z = 0; z < ajanlott_cimkek[i].length; z++) {
                ajanlott_cimkek[i][z] = ajanlott_cimkek[i][z].split(" ");
            }
        }
        var ajanlott_specialis_cimkek = [];
        for (i = 0; i < splittelt.length; i++) { 
            ajanlott_specialis_cimkek[i] = splittelt[i][1].split("__label__");
            for (z = 0; z < ajanlott_specialis_cimkek[i].length; z++) {
                ajanlott_specialis_cimkek[i][z] = ajanlott_specialis_cimkek[i][z].split(" ");
            }
        }
        var eredeti_cimkek = []; var eredeti_cimkek_egyeb = [];
        for (i = 0; i < splittelt.length; i++) {
            eredeti_cimkek[i] = splittelt[i][2].split("__label__");
	    eredeti_cimkek_egyeb[i] = eredeti_cimkek[i][eredeti_cimkek[i].length-1].split(" "); eredeti_cimkek_egyeb[i].shift();
	    eredeti_cimkek[i][eredeti_cimkek[i].length-1] = eredeti_cimkek[i][eredeti_cimkek[i].length-1].split(" ")[0]+" ";
        }
	
	
        var cim = [];
        for (i = 0; i < splittelt.length; i++) {
            cim[i] = splittelt[i][3];
        }
        var cikk_szovege = [];
        for (i = 0; i < splittelt.length; i++) {
            cikk_szovege[i] = splittelt[i][4];
        }


        for (z = 0; z < ajanlott_cimkek.length; z++) {
            ajanlott_cimkek[z].shift();
        }
        for (z = 0; z < ajanlott_specialis_cimkek.length; z++) {
            ajanlott_specialis_cimkek[z].shift();
        }
        for (z = 0; z < eredeti_cimkek.length; z++) {
            eredeti_cimkek[z].shift();
        }





        var CikkIndex = 0;


        CikkLeptet = function () {
            $("#szoveg").html(cikk_szovege[CikkIndex]);
            document.querySelector("#eredeti_cimkek").innerHTML = "";
            document.querySelector("#ajanlott_cimkek").innerHTML = "";
            document.querySelector("#eredeti_cimkek_egyeb").innerHTML = "";
            document.querySelector("#ajanlott_cimkek_egyeb").innerHTML = "";
            for (z = 0; z < eredeti_cimkek[CikkIndex].length; z++) {
                
                    document.querySelector("#eredeti_cimkek").innerHTML += eredeti_cimkek[CikkIndex][z] + "<br>";
                
            }
	    for (z = 0; z < eredeti_cimkek_egyeb[CikkIndex].length; z++) {
                        if ((eredeti_cimkek_egyeb[CikkIndex][z].indexOf("geography__") !== -1) || (eredeti_cimkek_egyeb[CikkIndex][z].indexOf("organization__") !== -1) || (eredeti_cimkek_egyeb[CikkIndex][z].indexOf("person__") !== -1)) {
                    document.querySelector("#eredeti_cimkek_egyeb").innerHTML += eredeti_cimkek_egyeb[CikkIndex][z] + "<br>";
                      }
            }
            
            for (z = 0; z < ajanlott_cimkek[CikkIndex].length; z++) {
                if (ajanlott_cimkek[CikkIndex][z][1] >= document.getElementById('Csuszka').value)
                    document.querySelector("#ajanlott_cimkek").innerHTML += ajanlott_cimkek[CikkIndex][z][0] + " " + "(" + ajanlott_cimkek[CikkIndex][z][1] + ")" + "<br>";
            }
            for (z = 0; z < ajanlott_specialis_cimkek[CikkIndex].length; z++) {
                if ((ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("geography__") !== -1) || (ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("organization__") !== -1) || (ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("person__") !== -1)) {
                    if (ajanlott_specialis_cimkek[CikkIndex][z][1] >= document.getElementById('Csuszka').value)
                        document.querySelector("#ajanlott_cimkek_egyeb").innerHTML += ajanlott_specialis_cimkek[CikkIndex][z][0] + " " + "(" + ajanlott_specialis_cimkek[CikkIndex][z][1] + ")" + "<br>";
                }
            }
            Csuszkavaltas();
            document.querySelector("#cardok").innerHTML = document.querySelector("#cardok").innerHTML.replace(/@@/g, ' ');
	    

	    var HelyesTalalatok = 0;
            for (z = 0; z < eredeti_cimkek[CikkIndex].length; z++) {
                
                    
                    for (i = 0; i < ajanlott_cimkek[CikkIndex].length; i++) {
                        
                        if (ajanlott_cimkek[CikkIndex][i][0] === eredeti_cimkek[CikkIndex][z].trim()) {

                            HelyesTalalatok++;
                        }
                    }
            } 


            for (z = 0; z < eredeti_cimkek_egyeb[CikkIndex].length; z++) {
                
                    
                    for (i = 0; i < ajanlott_specialis_cimkek[CikkIndex].length; i++) {
                        
                        if (ajanlott_specialis_cimkek[CikkIndex][i][0] === eredeti_cimkek_egyeb[CikkIndex][z]) {

                            HelyesTalalatok++;
                        }
                    }
            } 

            



            
        };



        Duplavissza = function () {
            CikkIndex -= 20;
            if (CikkIndex < 0) { CikkIndex = cikkek.length + CikkIndex; }
            if (CikkIndex > cikkek.length - 1) { CikkIndex = CikkIndex - cikkek.length; }
            CikkLeptet();
            Cikknevek();
        };


        Vissza = function () {
            CikkIndex--;
            if (CikkIndex < 0) { CikkIndex = cikkek.length + CikkIndex; }
            if (CikkIndex > cikkek.length - 1) { CikkIndex = CikkIndex - cikkek.length; }
            CikkLeptet();
            Cikknevek();
        };


        Elore = function () {
            CikkIndex++;
            if (CikkIndex < 0) { CikkIndex = cikkek.length + CikkIndex; }
            if (CikkIndex > cikkek.length - 1) { CikkIndex = CikkIndex - cikkek.length; }
            CikkLeptet();
            Cikknevek();
        };


        Duplaelore = function () {
            CikkIndex += 20;
            if (CikkIndex < 0) { CikkIndex = cikkek.length + CikkIndex; }
            if (CikkIndex > cikkek.length - 1) { CikkIndex = CikkIndex - cikkek.length; }
            CikkLeptet();
            Cikknevek();

        };

        Cikknevek = function () {
            var kivalaszt = document.getElementById("CikkLista");
            CikkIndex = CikkIndex + Number(kivalaszt.options[kivalaszt.selectedIndex].value);
            if (CikkIndex < 0) { CikkIndex = cikkek.length + CikkIndex; }
            if (CikkIndex > cikkek.length - 1) { CikkIndex = CikkIndex - cikkek.length; }
            kivalaszt.selectedIndex = 0;
            CikkLeptet();
            Listavaltas();
        };



        Listavaltas = function () {
            var select = document.getElementById('CikkLista');
            for (i = 0; i < 20; i++) {

             if ((CikkIndex + i) > cikkek.length - 1) { select.options[i].text = cim[CikkIndex + i -cikkek.length]; }
                else {select.options[i].text = cim[CikkIndex + i];}
            }
        };
        CikkLeptet();
        Cikknevek();

        Csuszkavaltas = function () {


            document.getElementById('CsuszkaSzovegErtek').innerHTML = document.getElementById('Csuszka').value;

            document.querySelector("#ajanlott_cimkek").innerHTML = "";
            document.querySelector("#ajanlott_cimkek_egyeb").innerHTML = "";

            for (z = 0; z < ajanlott_cimkek[CikkIndex].length; z++) {
                if (ajanlott_cimkek[CikkIndex][z][1] >= document.getElementById('Csuszka').value)
                    document.querySelector("#ajanlott_cimkek").innerHTML += ajanlott_cimkek[CikkIndex][z][0] + " " + "(" + ajanlott_cimkek[CikkIndex][z][1] + ")" + "<br>";
            }
            for (z = 0; z < ajanlott_specialis_cimkek[CikkIndex].length; z++) {
                if ((ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("geography__") !== -1) || (ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("organization__") !== -1) || (ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("person__") !== -1)) {
                    if (ajanlott_specialis_cimkek[CikkIndex][z][1] >= document.getElementById('Csuszka').value)
                        document.querySelector("#ajanlott_cimkek_egyeb").innerHTML += ajanlott_specialis_cimkek[CikkIndex][z][0] + " " + "(" + ajanlott_specialis_cimkek[CikkIndex][z][1] + ")" + "<br>";
                }
            }
	    var CheckboxMinErtek = document.getElementById('CheckboxMin').checked;
            if (CheckboxMinErtek == true){
                                 document.querySelector("#ajanlott_cimkek").innerHTML = "";
                document.querySelector("#ajanlott_cimkek_egyeb").innerHTML = "";
                var az = 0;
                for (z = 0; z < ajanlott_cimkek[CikkIndex].length; z++) {
                    if (z <= 2) {
                        document.querySelector("#ajanlott_cimkek").innerHTML += ajanlott_cimkek[CikkIndex][z][0] + " " + "(" + ajanlott_cimkek[CikkIndex][z][1] + ")" + "<br>";
                    }
                    else {
                        if (ajanlott_cimkek[CikkIndex][z][1] >= document.getElementById('Csuszka').value)
                            document.querySelector("#ajanlott_cimkek").innerHTML += ajanlott_cimkek[CikkIndex][z][0] + " " + "(" + ajanlott_cimkek[CikkIndex][z][1] + ")" + "<br>";
                    }
                }
                for (z = 0; z < ajanlott_specialis_cimkek[CikkIndex].length; z++) {
                    if (az > 2) {
                        if ((ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("geography__") !== -1) || (ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("organization__") !== -1) || (ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("person__") !== -1)) {
                            if (ajanlott_specialis_cimkek[CikkIndex][z][1] >= document.getElementById('Csuszka').value)
                                document.querySelector("#ajanlott_cimkek_egyeb").innerHTML += ajanlott_specialis_cimkek[CikkIndex][z][0] + " " + "(" + ajanlott_specialis_cimkek[CikkIndex][z][1] + ")" + "<br>";
                        }
                    }
                    if ((az <= 2))
                        if ((ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("geography__") !== -1) || (ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("organization__") !== -1) || (ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("person__") !== -1)) {
                            document.querySelector("#ajanlott_cimkek_egyeb").innerHTML += ajanlott_specialis_cimkek[CikkIndex][z][0] + " " + "(" + ajanlott_specialis_cimkek[CikkIndex][z][1] + ")" + "<br>";
                            az++;
                        }

                }
               }
            	

            document.querySelector("#cardok").innerHTML = document.querySelector("#cardok").innerHTML.replace(/@@/g, ' ');

        };


    }, 'text');
} catch (err) { alert(err.message); }








