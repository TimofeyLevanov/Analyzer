
var cell = [];//массив html элементов, из ячеек таблицы.
         
var data = [];//тип данных дата.
        
var day = [];//день, например вторник, понедельник и т.д.
var date = [];//дата, например 01, 17, 31.
var month = [];
var year = [];

chrome.runtime.sendMessage({problem: "work?"}, function(response) {
        if(response.farewell == "yes"){
            console.log("страница уже открыта");
        }
});
var today = new Date();
today = today.getDate();
var type = [];
var network = [];
var requests = [];
var fills = [];
var impressions = [];
var revised_impressions = [];
var fillrate = [];
var displayrate = [];
var clicks = [];
var CTR = [];
var views = [];
var revenue = [];
var eCPM = [];
var managed_eCPM = [];
var managed_revenue = [];
var revised_impressions = [];
var revised_procent = [];
var a = 0;
var x;
var time = 0;
var one = true;
var array = [];
var color1=[];
var color2=[];
var color3=[];
var color4=[];
var color5=[];
var color6=[];
var color7=[];
var color8=[];
var color9=[];
var ID_for_baground=0;
var test=0;
try {
    var nameApp=innerHtml(document.getElementsByClassName("btn dropdown-toggle btn-default")[0].innerHTML);//ошибка происходит при общей стате, т.к. поле с названием апы пустое.
} catch (err) {
}

chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    ID_for_baground=response.test;
    dateToChart("id2",ID_for_baground);
  });
  
var complited = true;
    //что бы обновить страницу
    
(function() {
    
    x = document.getElementById('apps_stats');
    
    if (x == null) {
        time++;
        setTimeout(arguments.callee, 1000);
        console.log(time);
    } else {
      
        console.log('таблица грузилась ' + time + ' секунд');
        var rows = x.getElementsByTagName("tr");
     
        for (let i = 0; i+2 < rows.length; i++) {// i+2 что бы исключить последнии 2 строки, т.к. они лишнии.
                //console.log(rows[i+1]);//смотреть что парсерим. Вдруг будут какие-нибудь изменения
             cell = rows[i+1].getElementsByTagName('td');//что бы исключить первую строку т.к. она нам не нужна.
            if(cell.length!=13){
                complited = false;
                console.log(cell.length +' Ошибка! может быть дашборт не сортирован по Type, Network, Date?');
          
                break;
            }
                data[i]=($(cell[0]).html());
                data[i]=newdate(data[i],i);
                network[i]=$(cell[1]).html();
                type[i]=$(cell[2]).html(); 
                requests[i]=+(deleteСomma($(cell[3]).html()));
                fills[i]=+(deleteСomma($(cell[4]).html()));
                impressions[i]=+(deleteСomma($(cell[5]).html()));
                revised_impressions[i]=+(deleteСomma($(cell[6]).html()));
                revised_procent[i]=parseFloat(magic(cell[7]));
                fillrate[i]=parseFloat(magic(cell[8]));
                displayrate[i]=parseFloat(magic(cell[9]));
               // clicks[i]=+(deleteСomma($(cell[10]).html()));
               // CTR[i]=parseFloat(magic(cell[11]));
               // views[i]=+(deleteСomma($(cell[12]).html()));
                revenue[i]=parseFloat(magic(cell[10]));
                eCPM[i]=parseFloat(magic(cell[11]));
               // managed_eCPM[i]=parseFloat(magic(cell[15]));
                managed_revenue[i]=parseFloat(magic(cell[12]));
                
                if(typeof(requests[i]) != typeof(5)){
                    console.log('ошибка типа ' + typeof(requests[i])+" "+requests[i]);
                }
                if(typeof(fills[i]) != typeof(5)){
                    console.log('ошибка типа ' + typeof(fills[i])+" "+ fills[i]);
                }
                if(typeof(impressions[i]) != typeof(5)){
                    console.log('ошибка типа ' + typeof(impressions[i])+" "+impressions[i]);
                }

            } 
           if(complited == true){
          //  dateToChart("refresh");
            setTimeout(function(){         
                var typeKill= [];
            
                metkaType:
                for (let i = 0; i < type.length; i++) {
                    for (let j = 0; j < typeKill.length; j++) {
                        if (typeKill[ j ] == type[ i ]) {
                            continue metkaType;
                        }
                    }
                    typeKill.push( type[ i ] ) ;
                    var help = type[ i ];
                    var networkKill = [];
                    metkaNetwork:
                    for (var k = 0; k < network.length; k++) {
                        for (var i1 = 0; i1 < networkKill.length; i1++) {
                            if (networkKill[ i1 ] == network[ k ]) {
                                continue metkaNetwork;
                            }
                        }
                        networkKill.push( network[k] );
                        array.length = 0;
                        if(network[k]!="Test Ads" && network[k]!="Backfill" && network[k]!="Service Messages"){
                            for (var N = 0; N < network.length; N++) {
                                if ((help == type[N]) && (network[N] == (networkKill[ networkKill.length - 1 ]))) {
                                    array.push(N);
                                }
                            }
                        }
                        //алгоритмы
                        if(array.length > 0){
                   
                            check = new Boolean(false);
                            let check_eCPM_Decrease = new Boolean(false);
                            var ecpmCount = 0.0;
                            var counter = 0;
                            for (var ecpm = 0; ecpm < array.length; ecpm++) {
                                if (eCPM[ array[ecpm] ] != 0 && (impressions[ array[ecpm] ] > 250 )) {
                                    ecpmCount += eCPM[ array[ecpm] ];
                                    counter++;
                                }
                            }
                            if (ecpmCount != 0 /* && array.length - counter > 0*/) {
                                ecpmCount = ecpmCount /  counter;
                            }
                            checkECPM = new Boolean(false)
                            //сверхдоходы ПЕРЕРАБОТАТЬ
                            for (var h = 0; h < array.length - 2; h++) {
                                if (revenue[array[h+1]] > 100 && (eCPM[ array[h] ] * 2 < eCPM[ array[h + 1] ]) ) {
                                      checkECPM = true;
                                      color1.push(h+1);
                                }else{
                                    if (eCPM[array[h]] > 50){
					                    checkECPM = true;
                                        color1.push(h);
								    }
								}
									
                          								
								
                            }
                            //просел eCPM
                            for (let e = 0;e<array.length-3; e++){//что бы исключить сегодня.
                                if(revenue[ array[ e ] ] >50){
                                    if(e == 4){
                                        if( eCPM[ array[ e + 2 ] ] != 0){
                                            if((eCPM[ array[ e ] ] * 0.75) > eCPM[ array[ e + 1] ]){
                                                check_eCPM_Decrease = true;
                                                color2.push(e + 1);
                                            }
                                        }
                                    }
                                    else{
										
                                        if((eCPM[ array[ e ] ] * 0.75) > eCPM[ array[ e + 1] ]){
                                            check_eCPM_Decrease = true;
                                            color2.push(e+1);
                                        }
                                    }
                                }
                            }
							//нет дохода
                            for (var h = 0; h < array.length-2; h++) {//что бы исключить 2 последних дня.
                                
                                if (ecpmCount == 0.0) {
                                    if (type[ array[h] ] == "Banner") {
                                        if (impressions[ array[h] ] > 10000) {
                                            if (revenue[ array[h] ] < 0.1) {
                                                check = true;
                                                color3.push(h);
                                            }
                                        }
                                    } else {
                                        if (impressions[ array[h] ] > 1000) {
                                            if (revenue[ array[h] ] < 0.3) {
                                                check = true;
                                                color3.push(h);
                                            }
                                        }
                                    }
                                } else {
                                    if (impressions[ array[h] ] > (3000 / ecpmCount) || 
                                       ((views[ array[h] ] > (3000 / ecpmCount)))) {  
                                        if (revenue[ array[h] ] < 0.2 ) {
                                            check = true;
                                            color3.push(h);
                                        }
                                    }else{
										if(impressions[array[h]] == 0 && revenue[ array[h] ] > 0){
									        check = true;
                                            color3.push(h);
										}
									}
                                }
                            }
                            if(check_eCPM_Decrease == true){
                                dateToChart("просел eCPM", color2, ID_for_baground, array, requests, impressions, date, type, network, fillrate, revised_impressions, revenue, eCPM);
                                color2 = [];
                            }
                            if(checkECPM == true){
                                dateToChart("много заплатили", color1, ID_for_baground, array, requests, impressions, date, type, network, fillrate, revised_impressions, revenue, eCPM);
                                color1 = [];
                            }
                            if (check==true) {
                                dateToChart("Нет дохода", color3, ID_for_baground, array, requests, impressions, date, type, network, fillrate, revised_impressions, revenue, eCPM);
                                color3 = [];
                            }
                            check = false;
                            //филлрейт
                           var fil = [];
                            if (array.length != 0) {
                                var sumFil = fillrate[ array[0] ];
                                var sumReq = requests[ array[0] ];
                                sumReq++;
                                var counterFil = 0;
        
                                counterFil++;
                                typeBool = new Boolean(false);
                                if(type[ array[0] ] == "Banner"){
                                    typeBool = true;
                                }
    
                                for (var f = 0; f < array.length-1; f++) {
                                    if(f+1 < array.length-1){
                                    if(typeBool){
                                        if (f + 1 < array.length-1) {
                                            if(fills[ array[f] ] > 6000){//удалил request>6000
                                                if ((fillrate[ array[f] ] * 0.75) > fillrate[array[f + 1]]) {
                                                    check = true;
                                                    color4.push(f+1);
                                                }
                                            }
                                        }
                                    }
                                    else {
                                        if(f + 1<array.length) {
                                            if (fills[ array[f] ] > 1000 ) {//удалил request>2000
                                                if (fillrate[ array[f] ]* 0.75 > fillrate[ array[f + 1] ] ) {
                                                    check = true;
                                                    color4.push(f+1);
                                                }
                                            }
                                    }
                                    }
                                }
                                    if (requests[ array[f] ] > 5000) {
                                        sumFil = sumFil + fillrate[ array[f] ];
                                        sumReq = sumReq + requests[ array[f] ];
                                        counterFil++;
                                    }
                                }
                                if (check == true) {
                                    dateToChart("проcел fillrate", color4, ID_for_baground, array, requests, impressions, date, type, network, fillrate, displayrate, revenue, eCPM);
                                    color4 = [];
                                }
                                Mm = new Boolean(false);
                                if (sumFil != 0) {
                                    Mm = (sumFil / counterFil) < 0.9;
                                }
                                var ka = sumReq / counterFil;
                                if ((sumFil == 0 || Mm) && (ka >700)) {
                                    dateToChart("низкий fillrate", color5, ID_for_baground, array, requests, impressions, date, type, network, fillrate, displayrate, revenue, eCPM);
                                    color5 = [];
                                }
                            }
                            check = false;
                            //displayrate
                    
                            var vil = [];
                            var sumDisplayrate = 0;
                            if (array.length != 0) {
                                var sumfills = 500;
                                var counterVil = 1;
    
                                typeBool = new Boolean(false);
                                if(type[ array[0] ] == "Banner"){
                                    typeBool=true;
                                }
    
                                for (var f = 0; f < array.length-2; f++) {
                                    if(f<array.length-1){
                                    if(typeBool){
										if(impressions[ array[f] ] > 10000 && displayrate[array [f] ]>110){
											  check = true;
                                              color6.push(f+1);
										}else{
                                        if(f + 1 < array.length) {
                                            if(impressions[ array[f] ] > 10000 && fills[ array[f+1] ]> 10000){
                                                if ((displayrate[ array[f] ] * 0.75) > 
                                                     displayrate[ array[f + 1] ] ) {
                                                    check = true;
                                                    color6.push(f+1);
                                                }
                                            }
                                        }
										}
                                    }
                                    else {
										if(impressions[ array[f] ] > 1000 && displayrate[array [f] ]>110){
											check = true;
                                              color6.push(f+1);
										}else{
                                        if(f + 1<array.length) {
                                            if (impressions[ array[f] ] > 1000 && fills[ array[f+1] ]>2000) {
                                                if (displayrate[ array[f] ]* 0.75 > 
                                                   (displayrate[ array[f + 1] ] )) {
                                                    check = true;
                                                    color6.push(f+1);
                                                }
                                            }
                                        }
										}
                                    }
                                }
                                    if (fills[ array[f] ] > 500) {
                                        sumDisplayrate = sumDisplayrate + displayrate[ array[f] ];
                                        sumfills = sumfills + fills[ array[f] ];
                                        counterVil++;
                                    }
                                }
                            if (check == true) {
                                dateToChart("просел display rate", color6, ID_for_baground, array, requests, impressions, date, type, network, fillrate, displayrate, revenue, eCPM);
                                color6 = [];
                            }
                            var m2 = sumfills / counterVil;
                            if (sumDisplayrate != 0) {
    
                            }
                            if ((sumDisplayrate == 0 || sumDisplayrate / counterVil < 2) && (m2 > 800)) {
                                dateToChart("низкий display rate", color7, ID_for_baground, array, requests, impressions, date, type, network, fillrate, displayrate, revenue, eCPM);
                                color7 = [];
                            }
                            //трафик пропал
                            check = false;
                            for (var r = 1; r < array.length; r++) {
							if (date[array[r]]!=today && requests[array[r - 1]] * 0.75 > requests[array[r]] && requests[array[r - 1]] - requests[array[r]] > 5000) {
                                        check = true;
                                        color8.push(r);
                                }
                            }
                            if (check == true) {
                                dateToChart("трафик пропал", color8, ID_for_baground, array, requests, impressions, date, type, network, fillrate, displayrate, revenue, eCPM);
                                color8 =[];
                            }
                            //revised
                            check = false;
                            if(network[array[0]]!="Appodeal Exchange"){
                                for (var r = 0;r < array.length - 2; r++){
                                    var math = Math.abs(impressions[ array[ r ] ] - revised_impressions[ array[ r ] ])
                                    if(impressions[array [ r] ]>revised_impressions[array [ r ] ]){
                                        var more = impressions[array [ r] ];
                                    }else{
                                        var more = revised_impressions[array [ r ] ];
                                    }

                                        if (type[ array[h] ] == "Banner" || type[ array[h] ] == "Native" ) {
                                            if((impressions[array[r]]>10000 || revised_impressions[array[r]]>10000) && math>0.4 * more){
                                                check = true;
                                                color9.push(r);
                                            }
                                        }
                                        else{
                                            if((impressions[array[r]]>3000 || revised_impressions[array[r]]>3000) && math>0.4 * more){
                                                check = true;
                                                color9.push(r);
                                            }
                                        }
                                }
                            }
                            if (check == true) {
                                dateToChart("revised", color9, ID_for_baground, array, requests, impressions, date, type, network, fillrate, revised_impressions, revenue, eCPM);
                                color9 = [];
                            }
                            //eCPM is low

                            check = false;
                            var sumImpressions=0;
                            var mediumImpressions=0;
                            var countImpressions=0;
                         for(let r=0;r<array.length;r++){
                             if(impressions[array[r]]!=0){
                                sumImpressions+=impressions[array[r]];
                                countImpressions++;
                             }
                         }
                         mediumImpressions=sumImpressions/countImpressions;

                             if (type[ array[0] ] == "Banner" && mediumImpressions>40000) {
                                 if(ecpmCount<=0.03){
                                     check = true;
                                 }
                             }
                             if (type[ array[0] ] == "MREC" && mediumImpressions>10000) {
                                if(ecpmCount<=0.05){
                                    check = true;
                                }
                            }
                            if (type[ array[0] ] == "Interstitial" && mediumImpressions>10000) {
                                if(ecpmCount<=0.1){
                                    check = true;
                                }
                            }
                            if (type[ array[0] ] == "Native" && mediumImpressions>30000) {
                                if(ecpmCount<=0.05){
                                    check = true;
                                }
                            }
                            if (type[ array[0] ] == "Video" && mediumImpressions>10000) {
                                if(ecpmCount<=0.2){
                                    check = true;
                                }
                            }
                            if (type[ array[0] ] == "Rewarded Video" && mediumImpressions>10000) {
                                if(ecpmCount<=0.3){
                                    check = true;
                                }
                            }
                            if (check == true) {
                                dateToChart("eCPM is low", color9, ID_for_baground, array, requests, impressions, date, type, network, fillrate, revised_impressions, revenue, eCPM);
                                color9 = [];
                            }
             // алгоритмы конец
                        }
                    }
                    }
                }
				
				dateToChart("completed!",nameApp,ID_for_baground);
				console.log(detalisation_by_date.checked)
				console.log(detalisation_by_banner_type.checked)
				console.log(detalisation_by_network.checked)
				if(detalisation_by_date.checked && detalisation_by_network.checked && detalisation_by_banner_type.checked)
				window.close();; },1400);				              
    }
    else{
        dateToChart("error");
		//window.close();
    }
}
})();
    function dateToChart(problem, color, ID_for_baground, array, requests, impressions, date, type, network, fillrate, displayrate, revenue, eCPM){
        
        chrome.runtime.sendMessage({problem: problem, color: color,ID_for_baground:ID_for_baground, array: array, requests: requests, impressions: impressions, data: date, type: type, network: network, fillrate: fillrate, displayrate: displayrate, revenue: revenue, eCPM : eCPM}, function(response) {
        });
    }
    function deleteСomma(value){	
        for(var i = 0; i + 1<value.length;i++){
            if(value[i] == ','){
                value = value.substring(0,i) + value.substring( i + 1,value.length);
            }
        }
        
        return value;
    }
    function magic(fractional) {
		fractional = $(fractional).html();
		let a;
		let b;
		for (let i = 1; i + 1 < fractional.length; i++){
			if(fractional.substring(i,i+1)==">"){
                a = i + 1;
			}
			if(fractional.substring(i, i + 1) == "<"){
                b = i;
			}
        }
        
		fractional = fractional.substring(a, b);
		if(fractional == "N/A"){
			return NaN;
        }
	return deleteСomma(fractional);
    }
    function innerHtml(text){
        let a = 0;
        let b = 0;
        var bool=true;
         for(let i=1;i<text.length;i++){
             if(bool){
                 if(text[i]==">"){
                     bool=false;
                     a=i+1;
                 }
             }
             if(text[i]=="<"){
               b=i;
               break;
             }
           }
     return text.substring(b, a);
      }
    function newdate(data, i){
		day[i] = data.substring(0,3);
		month[i] = data.substring(5,8);
	    if(month[i] == "Jan")month[i] = 01;
		if(month[i] == "Feb")month[i] = 02;
		if(month[i] == "Mar")month[i] = 03;
        if(month[i] == "Apr")month[i] = 04;
        if(month[i] == "May")month[i] = 05;
        if(month[i] == "Jun")month[i] = 06;
        if(month[i] == "Jul")month[i] = 07;
        if(month[i] == "Aug")month[i] = 08;
        if(month[i] == "Sep")month[i] = 09;
        if(month[i] == "Oct")month[i] = 10;
        if(month[i] == "Nov")month[i] = 11;
        if(month[i] == "Dec")month[i] = 12;		
		date[i] = parseInt(data.substring(9, 11));
		year[i] = parseInt(data.substring(13, 17));
        return new Date(year[i], month[i], date[i]);
    }