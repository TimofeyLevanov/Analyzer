localValue = 0;
completed_bul=true;
var nameApp;
var json_Requests;
var link;
var json_Impressions;
var json_Fillrate;
var json_DisplayRate;
var json_Revenue;
var json_eCPM;
var bool_test=true;
var ID_app=undefined;
    var labelType, useGradients, nativeTextSupport, animate;
    (function() {
      var ua = navigator.userAgent,
          iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
          typeOfCanvas = typeof HTMLCanvasElement,
          nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
          textSupport = nativeCanvasSupport 
            && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
      //I'm setting this based on the fact that ExCanvas provides text support for IE
      //and that as of today iPhone/iPad current text support is lame
      labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
      nativeTextSupport = labelType == 'Native';
      useGradients = nativeCanvasSupport;
      animate = !(iStuff || !nativeCanvasSupport);
    })();

    function init(){
      
      var json_Requests;
      var json_Impressions;
      var json_Fillrate;
      var json_DisplayRate;
      var json_Revenue;
      var json_eCPM;
      var problem="";
      var array=[];
      var date;
      var requests;
      var impressions;
      var type;
      var network;
      var fillrate;
      var displayrate;
      var revenue;
      var eCPM;
      var length=0;
      var color = [];

      var id_for_content;
      var array_json_Requests_1 = [];
      var array_json_Impressions_1 = [];
      var array_json_Fillrate_1 = [];
      var array_json_DisplayRate_1 = [];
      var array_json_Revenue_1 = [];
      var array_json_eCPM_1 = [];
      var array_problem_1 = [];

      var array_json_Requests_2 = [];
      var array_json_Impressions_2 = [];
      var array_json_Fillrate_2 = [];
      var array_json_DisplayRate_2 = [];
      var array_json_Revenue_2 = [];
      var array_json_eCPM_2 = [];
      var array_problem_2 = [];

      var array_json_Requests_3 = [];
      var array_json_Impressions_3 = [];
      var array_json_Fillrate_3 = [];
      var array_json_DisplayRate_3 = [];
      var array_json_Revenue_3 = [];
      var array_json_eCPM_3 = [];
      var array_problem_3 = [];

      var array_json_Requests_4 = [];
      var array_json_Impressions_4 = [];
      var array_json_Fillrate_4 = [];
      var array_json_DisplayRate_4 = [];
      var array_json_Revenue_4 = [];
      var array_json_eCPM_4 = [];
      var array_problem_4 = [];

      var array_json_Requests_5 = [];
      var array_json_Impressions_5 = [];
      var array_json_Fillrate_5 = [];
      var array_json_DisplayRate_5 = [];
      var array_json_Revenue_5 = [];
      var array_json_eCPM_5 = [];
      var array_problem_5 = [];

      var array_json_Requests_6 = [];
      var array_json_Impressions_6 = [];
      var array_json_Fillrate_6 = [];
      var array_json_DisplayRate_6 = [];
      var array_json_Revenue_6 = [];
      var array_json_eCPM_6 = [];
      var array_problem_6 = [];

      var array_json_Requests_7 = [];
      var array_json_Impressions_7 = [];
      var array_json_Fillrate_7 = [];
      var array_json_DisplayRate_7 = [];
      var array_json_Revenue_7 = [];
      var array_json_eCPM_7 = [];
      var array_problem_7 = [];

      var array_json_Requests_8 = [];
      var array_json_Impressions_8 = [];
      var array_json_Fillrate_8 = [];
      var array_json_DisplayRate_8 = [];
      var array_json_Revenue_8 = [];
      var array_json_eCPM_8 = [];
      var array_problem_8 = [];

      var array_json_Requests_9 = [];
      var array_json_Impressions_9 = [];
      var array_json_Fillrate_9 = [];
      var array_json_DisplayRate_9 = [];
      var array_json_Revenue_9 = [];
      var array_json_eCPM_9 = [];
      var array_problem_9 = [];
      
      var array_json_Requests_10 = [];
      var array_json_Impressions_10 = [];
      var array_json_Fillrate_10 = [];
      var array_json_DisplayRate_10 = [];
      var array_json_Revenue_10 = [];
      var array_json_eCPM_10 = [];
      var array_problem_10 = [];


      var Switch = undefined;
      var Count_1 = 0;
      var Count_2 = 0;
      var Count_3 = 0;
      var Count_4 = 0;
      var Count_5 = 0;
      var Count_6 = 0;
      var Count_7 = 0;
      var Count_8 = 0;
      var Count_9 = 0;
      var Count_10 = 0;
      var start = false;
      var stop = true;
      chrome.extension.sendMessage({}, function(response) {
        //code to initialize my extension
    });

    //code to send message to open notification. This will eventually move into my extension logic

     // var objSel = document.getElementById("mySelectId");  
      chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
          if(request.Indification== "indification"){
            sendResponse({message: ID_app!=undefined});
          }
          if(request.ID != undefined){
            sessionStorage.setItem('id', request.ID);
            ID_app=request.ID;
          }
          if(request.problem=="id2"){
            start=true;
            if(ID_app==undefined){
              ID_app=request.color;
            }
            else{
              if(ID_app!=request.color){
                stop = false;
              }
            }
          }
          if(ID_app!=undefined){//очередность заполнения, сначало ID_app должна заполнится, иначе нельзя.
          if(id_for_content==undefined && request.ID_for_baground==ID_app){//менять значение id_for_content ненужно, поэтому идет проверка undefined и переменные должны быть одинаковые, так как апа должны быть одна, с другой апы id мы должны игнорировать.
            id_for_content=request.ID_for_baground;
            stop = true;
          }
          else{
            if(id_for_content!=request.ID_for_baground){
              stop = false;
            }
          }
        }
          console.log(id_for_content);
          console.log(ID_app);
          console.log("==========");

        if(start && id_for_content==ID_app && stop) {
          // if(true){
          if (request.problem == "work?"){
              sendResponse({farewell: "yes"});
          }

              localValue = request.greeting;

              if(problem == "refresh"){
                //location.reload();
              }
              color = request.color;
              array = request.array;
              problem = request.problem;
              date = request.data;
              requests=request.requests;
              impressions=request.impressions;
              type = request.type;
              network = request.network;
              fillrate = request.fillrate;
              displayrate = request.displayrate;
              revenue = request.revenue;
              eCPM = request.eCPM;
              json_Requests={};
              json_Impressions={};
              json_Fillrate={};
              json_DisplayRate={};
              json_Revenue={};
              json_eCPM={};
              if(problem=="completed!"){////////////////////////////////////////////////////////////////////
                bool_test=false;
                nameApp=request.color;
                console.log(nameApp);

          document.getElementById("head2").innerHTML=ID_app;

              }////////////////////////////////////////////////////////////////////////////////
              if(completed_bul&&problem=="completed!"){
                 document.getElementById("head1").innerHTML="Проблем не обнаруженно";
              }
              if(completed_bul&&problem=="error"){
                document.getElementById("head1").innerHTML="Произошла ошибка!Проверка не была выполнена.";
              }
              if(array==undefined){
                  length=0;
              }
              else{
                  length = array.length;
              }
              if(length>0){
                completed_bul=false;
                initialization();
              }
            }//

        });
    {//скрыть большую часть кода.
        function Values(){
          var massive=[];
          this.label;
          this.values=massive;
        }
        function Json(length){
            var arrayObjects=[];
            var arrayNetworks=[];
            for(let i=0;i<length;i++){
                arrayObjects.push(new Values());
                arrayNetworks.push();
            }

            this.values=arrayObjects;
            this.label=arrayNetworks;
        }
        //init BarChart

function BarChart(id){
    return new $jit.BarChart({
      //id of the visualization container
      injectInto: id,
      //whether to add animations
      animate: true,
      //horizontal or vertical barcharts
      orientation: 'vertical',
      //bars separation
      barsOffset: 20,
      //visualization offset
      Margin: {
        top:5,
        left: 5,
        right: 5,
        bottom:5
      },
      //labels offset position
      labelOffset: 5,
      //bars style
      type: useGradients? 'stacked:gradient' : 'stacked',
      //whether to show the aggregation of the values
      showAggregates:true,
      //whether to show the labels for the bars
      showLabels:true,
      //labels style
      Label: {
        type: labelType, //Native or HTML
        size: 13,
        family: 'Arial',
        color: 'white'
      },
      //add tooltips
      Tips: {
        enable: true,
        onShow: function(tip, elem) {
          tip.innerHTML = "<b>" + elem.name + "</b>: " + elem.value;
        }
      }
    });
}
        var barChart = BarChart('infovis');
        var barChart1 = BarChart('infovis1');
        var barChart2 = BarChart('infovis2');
        var barChart3 = BarChart('infovis3');
        var barChart4 = BarChart('infovis4');
        var barChart5 = BarChart('infovis5');

            var button = $jit.id('update');//вперед
            var button1 = $jit.id('update1');//назад
            var button_1 = $jit.id('update3_1');//просел eCPM
            var button_2 = $jit.id('update3_2');//много заплатили
            var button_3 = $jit.id('update3_3');//Нет дохода
            var button_4 = $jit.id('update3_4');//проcел fillrate
            var button_5 = $jit.id('update3_5');//низкий fillrate
            var button_6 = $jit.id('update3_6');//просел display rate
            var button_7 = $jit.id('update3_7');//низкий display rate
            var button_8 = $jit.id('update3_8');//трафик пропал
            var button_9 = $jit.id('update3_9');//revised
            var button_10 = $jit.id('update3_10');//eCPM is low
            
			var button_link = $jit.id('update3');//links

        disabled(button);//изначальная блокировка кнопки "назад"
        disabled(button1);//изначальная блокировка кнопки "вперед"
        //остальные кнопки.
        disabled(button_1);
        disabled(button_2);
        disabled(button_3);
        disabled(button_4);
        disabled(button_5);
        disabled(button_6);
        disabled(button_7);
        disabled(button_8);
        disabled(button_9);
        disabled(button_10);

        var buttons = [button_1, button_2, button_3, button_4, button_5, button_6, button_7, button_8, button_9, button_10]
        
        function addGreenStyle(button) {
          button.classList.add('green');
        }
        function removeGreen() {
          for (let i = 0; i < buttons.length; i++) {
              buttons[i].classList.remove('green');
          }
        }
//update json on click "сортировочных кнопок"
function click_Button_action(button_id, Place_id, problem, innerHTML_displayrate, count, 
                       requests, impressions, fillrate, 
                       displayrate, revenue, eCPM){
    Color_Undefined();
    document.getElementById("Displayrate").innerHTML=innerHTML_displayrate;
    document.getElementById(Place_id).style.color="#FFA500";
    document.getElementById("head1").innerHTML=problem[count] + " - " + requests[count]["label"][0];
    document.getElementById("head3").innerHTML=(count+1)+"/"+(displayrate.length);
    barChart.loadJSON(requests[count]);
    barChart1.loadJSON(impressions[count]);
    barChart2.loadJSON(fillrate[count]);
    barChart3.loadJSON(displayrate[count]);
    barChart4.loadJSON(revenue[count]);
    barChart5.loadJSON(eCPM[count]);
    link = impressions[count]["label"][0];
    disabled(button1);
    disabled(button);
                      
    setTimeout(function(){
      if(count>0){
          unDisabled(button);
      }
      if( problem.length>1 &&  problem.length-1>count){
        console.log("&");
          unDisabled(button1);
      }},1400); 
      removeGreen();
      addGreenStyle(document.querySelector(button_id));
      block_buttons();
      console.log(problem.length);
}
function Color_Undefined(){
  document.getElementById("eCPM").style.color="";
  document.getElementById("Revenue").style.color="";
  document.getElementById("Fillrate").style.color="";
  document.getElementById("Displayrate").style.color="";
  document.getElementById("Requests").style.color="";
  document.getElementById("Impressions").style.color="";
}

$jit.util.addEvent(button_link, 'click', function() {//просел eCPM
 		      chrome.runtime.sendMessage({link: "link",network: link,id:id_for_content}, function(response) {
        });
});
$jit.util.addEvent(button_1, 'click', function() {//просел eCPM
  Switch=1;
  click_Button_action('#update3_1',"eCPM", array_problem_1, "Revised impressions", Count_1, array_json_Requests_1, array_json_Impressions_1 
                , array_json_Fillrate_1, array_json_DisplayRate_1, array_json_Revenue_1, array_json_eCPM_1);
});
$jit.util.addEvent(button_2, 'click', function() {//много заплатили
    Switch=2;
    click_Button_action('#update3_2',"eCPM",array_problem_2, "Revised impressions", Count_2, array_json_Requests_2, array_json_Impressions_2 
    , array_json_Fillrate_2, array_json_DisplayRate_2, array_json_Revenue_2, array_json_eCPM_2);
});
$jit.util.addEvent(button_3, 'click', function() {//нет дохода
  Switch=3;
  click_Button_action('#update3_3',"Revenue", array_problem_3, "Revised impressions", Count_3, array_json_Requests_3, array_json_Impressions_3 
  , array_json_Fillrate_3, array_json_DisplayRate_3, array_json_Revenue_3, array_json_eCPM_3);
});
$jit.util.addEvent(button_4, 'click', function() {//просел fillrate
  Switch=4;
  click_Button_action('#update3_4',"Fillrate", array_problem_4, "Display rate", Count_4, array_json_Requests_4, array_json_Impressions_4 
  , array_json_Fillrate_4, array_json_DisplayRate_4, array_json_Revenue_4, array_json_eCPM_4);
});
$jit.util.addEvent(button_5, 'click', function() {//низкий fillrate
  Switch=5;
  click_Button_action('#update3_5',"Fillrate", array_problem_5, "Display rate", Count_5, array_json_Requests_5, array_json_Impressions_5 
  , array_json_Fillrate_5, array_json_DisplayRate_5, array_json_Revenue_5, array_json_eCPM_5);
});
$jit.util.addEvent(button_6, 'click', function() {//просел display rate
  Switch=6;
  click_Button_action('#update3_6',"Displayrate", array_problem_6, "Display rate", Count_6, array_json_Requests_6, array_json_Impressions_6 
                , array_json_Fillrate_6, array_json_DisplayRate_6, array_json_Revenue_6, array_json_eCPM_6);
});
$jit.util.addEvent(button_7, 'click', function() {//низкий display rate
  Switch=7;
  click_Button_action('#update3_7',"Displayrate", array_problem_7, "Display rate", Count_7, array_json_Requests_7, array_json_Impressions_7 
  , array_json_Fillrate_7, array_json_DisplayRate_7, array_json_Revenue_7, array_json_eCPM_7);
});
$jit.util.addEvent(button_8, 'click', function() {//трафик пропал
  Switch=8;
  click_Button_action('#update3_8',"Requests", array_problem_8, "Display rate", Count_8, array_json_Requests_8, array_json_Impressions_8 
  , array_json_Fillrate_8, array_json_DisplayRate_8, array_json_Revenue_8, array_json_eCPM_8);
});
$jit.util.addEvent(button_9, 'click', function() {//revisions impressions
  Switch=9;
  click_Button_action('#update3_9',"Displayrate", array_problem_9, "Revised impressions", Count_9, array_json_Requests_9, array_json_Impressions_9 
  , array_json_Fillrate_9, array_json_DisplayRate_9, array_json_Revenue_9, array_json_eCPM_9);
});
$jit.util.addEvent(button_10, 'click', function() {//eCPM is low
  Switch=10;
  click_Button_action('#update3_10',"eCPM", array_problem_10, "Revised impressions", Count_10, array_json_Requests_10, array_json_Impressions_10 
                , array_json_Fillrate_10, array_json_DisplayRate_10, array_json_Revenue_10, array_json_eCPM_10);
});

function button_back(array_problem, count, array_json_Requests,  array_json_Impressions, array_json_Fillrate,
   array_json_DisplayRate, array_json_Revenue, array_json_eCPM){
  document.getElementById("head1").innerHTML = array_problem[ count ] + " - " + array_json_Requests[ count ][ "label" ][0];
  document.getElementById("head3").innerHTML = ( count + 1 ) + "/" + ( array_json_DisplayRate.length );
  barChart.loadJSON(array_json_Requests[ count ]);
  barChart1.loadJSON(array_json_Impressions[count ]);
  barChart2.loadJSON(array_json_Fillrate[ count ]);
  barChart3.loadJSON(array_json_DisplayRate[ count ]);
  barChart4.loadJSON(array_json_Revenue[ count ]);
  barChart5.loadJSON(array_json_eCPM[ count ]);
  link = array_json_Impressions[count]["label"][0];
  disabled(button);
  disabled(button1);

  setTimeout(function(){
      if(count!=0){
        unDisabled(button);
      }
      unDisabled(button1);
      },1400); 
}
//update json on click "Назад"/"вперед"
        $jit.util.addEvent(button, 'click', function() { //кнопка "назад"
                switch(Switch) {
                  case 1: 
              Count_1--;
              button_back(array_problem_1, Count_1, array_json_Requests_1, array_json_Impressions_1, array_json_Fillrate_1, 
                          array_json_DisplayRate_1, array_json_Revenue_1, array_json_eCPM_1);
                    break;
                  case 2:  
              Count_2--;
              button_back(array_problem_2, Count_2, array_json_Requests_2, array_json_Impressions_2, array_json_Fillrate_2, 
                array_json_DisplayRate_2, array_json_Revenue_2, array_json_eCPM_2);
                    break;
                  case 3:  
              Count_3--;
              button_back(array_problem_3, Count_3, array_json_Requests_3, array_json_Impressions_3, array_json_Fillrate_3, 
                array_json_DisplayRate_3, array_json_Revenue_3, array_json_eCPM_3);
                    break;
                  case 4: 
              Count_4--;
              button_back(array_problem_4, Count_4, array_json_Requests_4, array_json_Impressions_4, array_json_Fillrate_4, 
                array_json_DisplayRate_4, array_json_Revenue_4, array_json_eCPM_4);
                    break;
                  case 5: 
              Count_5--;
              button_back(array_problem_5, Count_5, array_json_Requests_5, array_json_Impressions_5, array_json_Fillrate_5, 
                array_json_DisplayRate_5, array_json_Revenue_5, array_json_eCPM_5);
                    break;
                  case 6: 
              Count_6--;
              button_back(array_problem_6, Count_6, array_json_Requests_6, array_json_Impressions_6, array_json_Fillrate_6, 
                array_json_DisplayRate_6, array_json_Revenue_6, array_json_eCPM_6);
                    break;
                  case 7: 
              Count_7--;
              button_back(array_problem_7, Count_7, array_json_Requests_7, array_json_Impressions_7, array_json_Fillrate_7, 
                array_json_DisplayRate_7, array_json_Revenue_7, array_json_eCPM_7);
                    break;
                  case 8: 
              Count_8--;
              button_back(array_problem_8, Count_8, array_json_Requests_8, array_json_Impressions_8, array_json_Fillrate_8, 
                array_json_DisplayRate_8, array_json_Revenue_8, array_json_eCPM_8);
                    break;
                  case 9: 
              Count_9--;
              button_back(array_problem_9, Count_9, array_json_Requests_9, array_json_Impressions_9, array_json_Fillrate_9, 
                array_json_DisplayRate_9, array_json_Revenue_9, array_json_eCPM_9);
                   break;
                case 10: 
                Count_10--;
                button_back(array_problem_10, Count_10, array_json_Requests_10, array_json_Impressions_10, array_json_Fillrate_10, 
                  array_json_DisplayRate_10, array_json_Revenue_10, array_json_eCPM_10);
                    break;   
                  default:
                  console.log(Switch);
                  console.log("это невозможно");
                    break;
                }   
                block_buttons();   
        });
        function button_next(array_problem, count, array_json_Requests, array_json_Impressions, array_json_Fillrate,
                             array_json_DisplayRate, array_json_Revenue, array_json_eCPM){
          document.getElementById("head1").innerHTML=array_problem[count] + " - " + array_json_Requests[count]["label"][0];
          document.getElementById("head3").innerHTML=(count+1)+"/"+(array_json_DisplayRate.length);
          barChart.loadJSON(array_json_Requests[count]);
          barChart1.loadJSON(array_json_Impressions[count]);
          barChart2.loadJSON(array_json_Fillrate[count]);
          barChart3.loadJSON(array_json_DisplayRate[count]);
          barChart4.loadJSON(array_json_Revenue[count]);
          barChart5.loadJSON(array_json_eCPM[count]);
          link = array_json_Impressions[count]["label"][0];
          disabled(button);
          disabled(button1);
          setTimeout(function(){ 
            if( array_problem.length-1!=count){
              unDisabled(button1)
            }
            unDisabled(button) },1400);          
        }
        //кнопка "вперед"
        $jit.util.addEvent(button1, 'click', function() { 
        switch(Switch) {
          case 1: 
      Count_1++;
      button_next(array_problem_1, Count_1, array_json_Requests_1, array_json_Impressions_1, array_json_Fillrate_1,
        array_json_DisplayRate_1, array_json_Revenue_1, array_json_eCPM_1);
            break;
          case 2:  
      Count_2++;
      button_next(array_problem_2, Count_2, array_json_Requests_2, array_json_Impressions_2, array_json_Fillrate_2,
        array_json_DisplayRate_2, array_json_Revenue_2, array_json_eCPM_2);
            break;
          case 3:  
      Count_3++;
      button_next(array_problem_3, Count_3, array_json_Requests_3, array_json_Impressions_3, array_json_Fillrate_3,
        array_json_DisplayRate_3, array_json_Revenue_3, array_json_eCPM_3);
            break;
          case 4: 
      Count_4++;
      button_next(array_problem_4, Count_4, array_json_Requests_4, array_json_Impressions_4, array_json_Fillrate_4,
        array_json_DisplayRate_4, array_json_Revenue_4, array_json_eCPM_4);
            break;
          case 5: 
      Count_5++;
      button_next(array_problem_5, Count_5, array_json_Requests_5, array_json_Impressions_5, array_json_Fillrate_5,
        array_json_DisplayRate_5, array_json_Revenue_5, array_json_eCPM_5);
            break;
          case 6: 
      Count_6++;
      button_next(array_problem_6, Count_6, array_json_Requests_6, array_json_Impressions_6, array_json_Fillrate_6,
        array_json_DisplayRate_6, array_json_Revenue_6, array_json_eCPM_6);
            break;
          case 7: 
      Count_7++;
      button_next(array_problem_7, Count_7, array_json_Requests_7, array_json_Impressions_7, array_json_Fillrate_7,
        array_json_DisplayRate_7, array_json_Revenue_7, array_json_eCPM_7);
            break;
          case 8: 
      Count_8++;
      button_next(array_problem_8, Count_8, array_json_Requests_8, array_json_Impressions_8, array_json_Fillrate_8,
        array_json_DisplayRate_8, array_json_Revenue_8, array_json_eCPM_8);
            break;
          case 9: 
      Count_9++;
      button_next(array_problem_9, Count_9, array_json_Requests_9, array_json_Impressions_9, array_json_Fillrate_9,
        array_json_DisplayRate_9, array_json_Revenue_9, array_json_eCPM_9);
            break;  
         case 10: 
         Count_10++;
         button_next(array_problem_10, Count_10, array_json_Requests_10, array_json_Impressions_10, array_json_Fillrate_10,
          array_json_DisplayRate_10, array_json_Revenue_10, array_json_eCPM_10);
               break;  
          default:
          console.log("это невозможно one");
            break;
        }  
        block_buttons();            
        });
      } 
        function initialization(){

        var bool_color=false;
        var json_Requests=new Json(length);
        var json_Impressions=new Json(length);
        var json_Fillrate=new Json(length);
        var json_DisplayRate=new Json(length);
        var json_Revenue=new Json(length);
        var json_eCPM=new Json(length);

        for(i=0;i<length;i++){
          //пропал трафик
          var bool_color=false;
          var requests_color=true;
          if( problem =="трафик пропал"){
          if(color.length>=1){
            for(let a=0;a<color.length;a++){
            if(color[a]==i){
                bool_color=true;
            }
          }
          }
          json_Requests["label"][i]=type[array[i]] +" "+ network[array[i]];
          json_Requests["values"][i]['label']=date[array[i]];
          if(bool_color){
                json_Requests["values"][i]["values"][0]=0;
                json_Requests["values"][i]["values"][1]=0;
                json_Requests["values"][i]["values"][2]=0;
                json_Requests["values"][i]["values"][3]=requests[array[i]];
                requests_color=false;
          }
          else{
            json_Requests["values"][i]["values"][0]=requests[array[i]];
          }
        }
         //просел eCPM
         var bool_color=false;
         var ecpm_color=true;
         if(problem =="просел eCPM"){
         if(color.length>=1){
          ecpm_color=false;
           for(let a=0;a<color.length;a++){
           if(color[a]==i){
               bool_color=true;
           }
         }
         }
         json_eCPM["label"][i]=type[array[i]] +" "+ network[array[i]];
         json_eCPM["values"][i]['label']=date[array[i]];
         if(bool_color){
             json_eCPM["values"][i]["values"][0]=0;
             json_eCPM["values"][i]["values"][1]=0;
             json_eCPM["values"][i]["values"][2]=0;
             json_eCPM["values"][i]["values"][3]=eCPM[array[i]];
         }
         else{
          json_eCPM["values"][i]["values"][0]=eCPM[array[i]];
        }
        }
         //много заплатили
         var bool_color=false;
         var ecpm_color1=true;
         if( problem =="много заплатили"){
         if(color.length>=1){
          ecpm_color1=false;
           for(let a=0;a<color.length;a++){
           if(color[a]==i){
               bool_color=true;
           }
         }
         }
         json_eCPM["label"][i]=network[array[i]];
         json_eCPM["values"][i]['label']=date[array[i]];
         if(bool_color){
               json_eCPM["values"][i]["values"][0]=0;
               json_eCPM["values"][i]["values"][1]=0;
               json_eCPM["values"][i]["values"][2]=0;
               json_eCPM["values"][i]["values"][3]=eCPM[array[i]];
         }
         else{
           json_eCPM["values"][i]["values"][0]=eCPM[array[i]];
         }
        }
         //Нет дохода
         var bool_color=false;
         var revenue_color=true;
         if(problem =="Нет дохода"){
         if(color.length>=1){
          revenue_color=false;
           for(let a=0;a<color.length;a++){
           if(color[a]==i){
               bool_color=true;
           }
         }
         }
         json_Revenue["label"][i]=network[array[i]];
         json_Revenue["values"][i]['label']=date[array[i]];
         json_Impressions["label"][i]=network[array[i]];
         json_Impressions["values"][i]['label']=date[array[i]]
         if(bool_color){
               json_Revenue["values"][i]["values"][0]=0;
               json_Revenue["values"][i]["values"][1]=0;
               json_Revenue["values"][i]["values"][2]=0;
               json_Revenue["values"][i]["values"][3]=revenue[array[i]];
               json_Impressions["values"][i]["values"][0]=0;
               json_Impressions["values"][i]["values"][1]=0;
               json_Impressions["values"][i]["values"][2]=0;
               json_Impressions["values"][i]["values"][3]=impressions[array[i]]; 
         }
         else{
           json_Impressions["values"][i]["values"][0]=impressions[array[i]];
           json_Revenue["values"][i]["values"][0]=revenue[array[i]];
         }
        }
         //проcел fillrate
         var bool_color=false;
         var fillrate_color=true;
         if( problem =="проcел fillrate"){
         if(color.length>=1){
          fillrate_color=false;
           for(let a=0;a<color.length;a++){
           if(color[a]==i){
               bool_color=true;
           }
         }
         }
         json_Fillrate["label"][i]=network[array[i]];
         json_Fillrate["values"][i]['label']=date[array[i]];         if(bool_color){
               json_Fillrate["values"][i]["values"][0]=0;
               json_Fillrate["values"][i]["values"][1]=0;
               json_Fillrate["values"][i]["values"][2]=0;
               json_Fillrate["values"][i]["values"][3]=fillrate[array[i]];
         }
         else{
           json_Fillrate["values"][i]["values"][0]=fillrate[array[i]];
         }
        }
         //просел display rate
         var bool_color=false;
         var displayrate_color=true;
         if( problem =="просел display rate"){
         if(color.length>=1){
           displayrate_color=false;
           for(let a=0;a<color.length;a++){
           if(color[a]==i){
               bool_color=true;
           }
         }
         }
         json_DisplayRate["label"][i]=network[array[i]];
         json_DisplayRate["values"][i]['label']=date[array[i]];         if(bool_color){
          json_DisplayRate["values"][i]["values"][0]=0;
          json_DisplayRate["values"][i]["values"][1]=0;
          json_DisplayRate["values"][i]["values"][2]=0;
          json_DisplayRate["values"][i]["values"][3]=displayrate[array[i]];
         }
         else{
          json_DisplayRate["values"][i]["values"][0]=displayrate[array[i]];
         }
        }
         //revised
         var bool_color=false;
         var revised_color=true;
         if(problem =="revised"){
         if(color.length>=1){
          revised_color=false;
           for(let a=0;a<color.length;a++){
           if(color[a]==i){
               bool_color=true;
           }
         }
         }
         json_Impressions["label"][i]=network[array[i]];
         json_Impressions["values"][i]['label']=date[array[i]];
         json_DisplayRate["label"][i]=network[array[i]];
         json_DisplayRate["values"][i]['label']=date[array[i]];
         if(bool_color){
                json_Impressions["values"][i]["values"][0]=0;
                json_Impressions["values"][i]["values"][1]=0;
                json_Impressions["values"][i]["values"][2]=0;
                json_Impressions["values"][i]["values"][3]=impressions[array[i]];
                json_DisplayRate["values"][i]["values"][0]=0;
                json_DisplayRate["values"][i]["values"][1]=0;
                json_DisplayRate["values"][i]["values"][2]=0;
                json_DisplayRate["values"][i]["values"][3]=displayrate[array[i]];
         }
         else{
            json_Impressions["values"][i]["values"][0]=impressions[array[i]];
            json_DisplayRate["values"][i]["values"][0]=displayrate[array[i]];
         }
         }
         //============================================================
          if(requests_color){
              json_Requests["label"][i]=type[array[i]] +" "+ network[array[i]];
              json_Requests["values"][i]['label']=date[array[i]];
              json_Requests["values"][i]["values"][0]=requests[array[i]];
          }
          if((revised_color==true) && (revenue_color==true)){

            json_Impressions["label"][i]=network[array[i]];
            json_Impressions["values"][i]['label']=date[array[i]];
            json_Impressions["values"][i]["values"][0]=impressions[array[i]];
          }
          if(fillrate_color){
            json_Fillrate["label"][i]=network[array[i]];
            json_Fillrate["values"][i]['label']=date[array[i]];
            json_Fillrate["values"][i]["values"][0]=fillrate[array[i]];
          }
          if(displayrate_color && revised_color){
             json_DisplayRate["label"][i]=network[array[i]];
             json_DisplayRate["values"][i]['label']=date[array[i]];
             json_DisplayRate["values"][i]["values"][0]=displayrate[array[i]];
          }
          if(revenue_color){
            json_Revenue["label"][i]=network[array[i]];
            json_Revenue["values"][i]['label']=date[array[i]];
            json_Revenue["values"][i]["values"][0]=revenue[array[i]];
          }
          if(ecpm_color && ecpm_color1){
            json_eCPM["label"][i]=network[array[i]];
            json_eCPM["values"][i]['label']=date[array[i]];
            json_eCPM["values"][i]["values"][0]=eCPM[array[i]];
          }
//==============================================================================
        }
        //function filing_array()
        if(problem == "просел eCPM"){
          array_json_Requests_1.push(json_Requests);
          array_json_Impressions_1.push(json_Impressions);
          array_json_Fillrate_1.push(json_Fillrate);
          array_json_DisplayRate_1.push(json_DisplayRate);
          array_json_Revenue_1.push(json_Revenue);
          array_json_eCPM_1.push(json_eCPM);
         array_problem_1.push(problem);
          unDisabled(button_1);
        }
        if(problem == "много заплатили"){
          array_json_Requests_2.push(json_Requests);
          array_json_Impressions_2.push(json_Impressions);
          array_json_Fillrate_2.push(json_Fillrate);
          array_json_DisplayRate_2.push(json_DisplayRate);
          array_json_Revenue_2.push(json_Revenue);
          array_json_eCPM_2.push(json_eCPM);
         //  array_problem_2.push(problem);
          array_problem_2.push(problem);
          unDisabled(button_2);          
        }
        if(problem == "Нет дохода"){
          array_json_Requests_3.push(json_Requests);
          array_json_Impressions_3.push(json_Impressions);
          array_json_Fillrate_3.push(json_Fillrate);
          array_json_DisplayRate_3.push(json_DisplayRate);
          array_json_Revenue_3.push(json_Revenue);
          array_json_eCPM_3.push(json_eCPM);
          array_problem_3.push(problem);
          unDisabled(button_3);          
        }
        if(problem == "проcел fillrate"){
          array_json_Requests_4.push(json_Requests);
          array_json_Impressions_4.push(json_Impressions);
          array_json_Fillrate_4.push(json_Fillrate);
          array_json_DisplayRate_4.push(json_DisplayRate);
          array_json_Revenue_4.push(json_Revenue);
          array_json_eCPM_4.push(json_eCPM);
          array_problem_4.push(problem);
          unDisabled(button_4);          
        }
        if(problem == "низкий fillrate"){
          array_json_Requests_5.push(json_Requests);
          array_json_Impressions_5.push(json_Impressions);
          array_json_Fillrate_5.push(json_Fillrate);
          array_json_DisplayRate_5.push(json_DisplayRate);
          array_json_Revenue_5.push(json_Revenue);
          array_json_eCPM_5.push(json_eCPM);
          array_problem_5.push(problem);
          unDisabled(button_5);          
        }
        if(problem == "просел display rate"){
          array_json_Requests_6.push(json_Requests);
          array_json_Impressions_6.push(json_Impressions);
          array_json_Fillrate_6.push(json_Fillrate);
          array_json_DisplayRate_6.push(json_DisplayRate);
          array_json_Revenue_6.push(json_Revenue);
          array_json_eCPM_6.push(json_eCPM);
          array_problem_6.push(problem);
          unDisabled(button_6);
        } 
        if(problem == "низкий display rate"){
          array_json_Requests_7.push(json_Requests);
          array_json_Impressions_7.push(json_Impressions);
          array_json_Fillrate_7.push(json_Fillrate);
          array_json_DisplayRate_7.push(json_DisplayRate);
          array_json_Revenue_7.push(json_Revenue);
          array_json_eCPM_7.push(json_eCPM);
          array_problem_7.push(problem);
          unDisabled(button_7);          
        } 
        if(problem == "трафик пропал"){
          array_json_Requests_8.push(json_Requests);
          array_json_Impressions_8.push(json_Impressions);
          array_json_Fillrate_8.push(json_Fillrate);
          array_json_DisplayRate_8.push(json_DisplayRate);
          array_json_Revenue_8.push(json_Revenue);
          array_json_eCPM_8.push(json_eCPM);
          array_problem_8.push(problem);
          unDisabled(button_8);          
        }         
        if(problem == "revised"){
          array_json_Requests_9.push(json_Requests);
          array_json_Impressions_9.push(json_Impressions);
          array_json_Fillrate_9.push(json_Fillrate);
          array_json_DisplayRate_9.push(json_DisplayRate);
          array_json_Revenue_9.push(json_Revenue);
          array_json_eCPM_9.push(json_eCPM);
          array_problem_9.push(problem);
          unDisabled(button_9);
        } 
        if(problem == "eCPM is low"){
          array_json_Requests_10.push(json_Requests);
          array_json_Impressions_10.push(json_Impressions);
          array_json_Fillrate_10.push(json_Fillrate);
          array_json_DisplayRate_10.push(json_DisplayRate);
          array_json_Revenue_10.push(json_Revenue);
          array_json_eCPM_10.push(json_eCPM);
          array_problem_10.push(problem);
          unDisabled(button_10);
        } 
      }
      function disabled(button){
        button.classList.remove('white');
        button.classList.add('gray');
        button.classList.add(`disabled`); 
      }
      function unDisabled(button){
        button.classList.remove(`disabled`);
        button.classList.remove('gray');
        button.classList.add('white');
      }
       function block_buttons(){
         if(array_json_Requests_1.length!=0){
          disabled(button_1);
         }
         if(array_json_Requests_2.length!=0){
          disabled(button_2);
        }
        if(array_json_Requests_3.length!=0){
          disabled(button_3);
        }
        if(array_json_Requests_4.length!=0){
          disabled(button_4);
        }
        if(array_json_Requests_5.length!=0){
          disabled(button_5);
        }
        if(array_json_Requests_6.length!=0){
          disabled(button_6);
        }
        if(array_json_Requests_7.length!=0){
          disabled(button_7);
        }
        if(array_json_Requests_8.length!=0){
          disabled(button_8);
        }
        if(array_json_Requests_9.length!=0){
          disabled(button_9);
        }
        if(array_json_Requests_10.length!=0){
          disabled(button_10);
        }
        setTimeout(function(){ 
          if(array_json_Requests_1.length!=0){
            unDisabled(button_1);
           }
           if(array_json_Requests_2.length!=0){
            unDisabled(button_2);
          }
          if(array_json_Requests_3.length!=0){
            unDisabled(button_3);
          }
          if(array_json_Requests_4.length!=0){
            unDisabled(button_4);
          }
          if(array_json_Requests_5.length!=0){
            unDisabled(button_5);
          }
          if(array_json_Requests_6.length!=0){
            unDisabled(button_6);
          }
          if(array_json_Requests_7.length!=0){
            unDisabled(button_7);
          }
          if(array_json_Requests_8.length!=0){
            unDisabled(button_8);
          }
          if(array_json_Requests_9.length!=0){
            unDisabled(button_9);
          }
          if(array_json_Requests_10.length!=0){
            unDisabled(button_10);
          }},1400);
       }
      }
    