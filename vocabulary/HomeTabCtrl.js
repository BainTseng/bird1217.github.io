angular.module('ionicApp')
	.controller('HomeTabCtrl', function($scope) {
	
	var getRandomInt=function(min, max){
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		};

	var chooseDictionary=function (){
		    var randomIndex=getRandomInt($scope.randomStart,$scope.randomEnd);
		    while($scope.chooseIndex.indexOf(randomIndex)!=-1)
		    {
		    	  randomIndex=getRandomInt($scope.randomStart,$scope.randomEnd);
		    }
		    $scope.chooseIndex.push(randomIndex);
		    
		    var randomTitle =  $scope.vocabulary.filter(function(item) {
		    	return item.number == randomIndex
				});
		    randomTitle[0]["randomFlag"]=true;
		    
		    var currentTitle =  $scope.vocabulary.filter(function(item) {
		    	return item.number == $scope.vocabulary2[0]["number"];
				});
		    
		    if(currentTitle.length>0)
		    {
		    	currentTitle[0]["randomFlag"]=true;
		    }
		    
		    if(randomTitle.length==0)
		    {
		    	return undefined;
		    }
		    else
		    {
		    	return randomTitle[0];
		    }
		};

	$scope.nextDictionary = function(){
		    var randomDictionary = chooseDictionary();	
		    if(randomDictionary!=undefined){
		    	//$scope.title2=randomTitle[0];
		    	$scope.vocabulary2=[];
		    	$scope.vocabulary2.push(randomDictionary);
		    	$scope.showEnglish=false; 
			    var exist =  $scope.vocabulary.filter(function(item) {
			       return item["randomFlag"] == false;
			    });
			      
			    setTimeout(function(){ 
			    	angular.element(document.querySelector('#txtEnglish').focus()); 
				}, 1);		  
				if(exist.length==0){
				$scope.finishFlag=true;
				}
		    }else{
		    	alert('undefine');
		    }
	   	};

 	
	$scope.vocabulary2=[{"number":1,"eg":"are","ch":"be�ʵ�","txtEnglish":"","txtChinese":"","randomFlag":false}];
	$scope.vocabulary = [{"number":1,"eg":"are","ch":"be�ʵ�","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":2,"eg":"was","ch":"be�ʵ�","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":3,"eg":"were","ch":"be�ʵ�","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":4,"eg":"been","ch":"be�ʵ�","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":5,"eg":"any","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":6,"eg":"many","ch":"�\�h","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":7,"eg":"every","ch":"�C�@��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":8,"eg":"some","ch":"�@��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":9,"eg":"would","ch":"�N�|","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":10,"eg":"could","ch":"�i�H","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":11,"eg":"should","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":12,"eg":"shall","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":13,"eg":"they","ch":"�L��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":14,"eg":"their","ch":"�L�̪�","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":15,"eg":"there","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":16,"eg":"here","ch":"�o��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":17,"eg":"where","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":18,"eg":"who","ch":"��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":19,"eg":"what","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":20,"eg":"you","ch":"�A","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":21,"eg":"your","ch":"�A��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":22,"eg":"have","ch":"��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":23,"eg":"four","ch":"�|","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":24,"eg":"one","ch":"�@","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":25,"eg":"once","ch":"�@��/�@��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":26,"eg":"two","ch":"�G","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":27,"eg":"to","ch":"�h","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":28,"eg":"do","ch":"��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":29,"eg":"does","ch":"��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":30,"eg":"done","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":31,"eg":"pour","ch":"�ɭ�","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":32,"eg":"pull","ch":"��.��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":33,"eg":"push","ch":"��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":34,"eg":"put","ch":"��m","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":35,"eg":"prove","ch":"�ҩ�","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":36,"eg":"improve","ch":"�W�i.����","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":37,"eg":"give","ch":"��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":38,"eg":"get","ch":"�o��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":39,"eg":"lose","ch":"���h.�g��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":40,"eg":"lost","ch":"���h.�g��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":41,"eg":"cost","ch":"�ӶO","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":42,"eg":"come","ch":"��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":43,"eg":"calm","ch":"���R","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":44,"eg":"live","ch":"�ͬ�","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":45,"eg":"realize","ch":"�⮩","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":46,"eg":"laugh","ch":"��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":47,"eg":"move","ch":"�E��.����","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":48,"eg":"own","ch":"�֦�","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":49,"eg":"sign","ch":"ñ.�лx.�۵P","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":50,"eg":"find","ch":"�o�{","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":51,"eg":"climb","ch":"��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":52,"eg":"want","ch":"�n","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":53,"eg":"watch","ch":"��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":54,"eg":"wash","ch":"�~","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":55,"eg":"bury","ch":"�I","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":56,"eg":"buy","ch":"�R","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":57,"eg":"guy","ch":"�å�","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":58,"eg":"guilt","ch":"����.�o�L","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":59,"eg":"build","ch":"��.�y","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":60,"eg":"ruin","ch":"���a","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":61,"eg":"child","ch":"�p��.�ൣ","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":62,"eg":"children","ch":"�p��.�ൣ��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":63,"eg":"woman","ch":"�k�H","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":64,"eg":"women","ch":"�k�H��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":65,"eg":"aunt","ch":"�h.�T.����","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":66,"eg":"people","ch":"�H��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":67,"eg":"host","ch":"�D��.�D�H","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":68,"eg":"ghost","ch":"��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":69,"eg":"most","ch":"�j�h��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":70,"eg":"both","ch":"���","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":71,"eg":"dairy","ch":"�Żs�~","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":72,"eg":"dog","ch":"��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":73,"eg":"door","ch":"��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":74,"eg":"floor","ch":"�a�O.�Ӽh","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":75,"eg":"flood","ch":"�x��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":76,"eg":"blood","ch":"��G","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":77,"eg":"bureau","ch":"��.�B","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":78,"eg":"board","ch":"�O�l.�G�i��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":79,"eg":"broad","ch":"�e�s��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":80,"eg":"half","ch":"�@�b","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":81,"eg":"heart","ch":"��.��Ŧ","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":82,"eg":"height","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":83,"eg":"idea","ch":"�D�N.�Q�k.�I�l","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":84,"eg":"suicide","ch":"�۱�","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":85,"eg":"tuition","ch":"�о�","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":86,"eg":"juice","ch":"�G��.�ץ�","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":87,"eg":"fruit","ch":"���G","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":88,"eg":"bruise","ch":"��C.��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":89,"eg":"suit","ch":"�M��.�A�X","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":90,"eg":"above","ch":"�b�K.���W","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":91,"eg":"tour","ch":"�Ȧ�.���j","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":92,"eg":"hour","ch":"�p��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":93,"eg":"group","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":94,"eg":"soup","ch":"��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":95,"eg":"sour","ch":"�Ī�","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":96,"eg":"sure","ch":"�T�w��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":97,"eg":"mourn","ch":"�s��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":98,"eg":"sword","ch":"�C","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":99,"eg":"soldier","ch":"�h�L","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":100,"eg":"shoulder","ch":"�ӻH","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":101,"eg":"muscle","ch":"�٦�","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":102,"eg":"shoe","ch":"�c�l","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":103,"eg":"quality","ch":"�~��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":104,"eg":"quantity","ch":"�ƶq","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":105,"eg":"rhythm","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":106,"eg":"rhyme","ch":"������","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":107,"eg":"theater","ch":"�@��.�q�v�|","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":108,"eg":"eye","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":109,"eg":"valley","ch":"�s��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":110,"eg":"value","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":111,"eg":"minute","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":112,"eg":"movie","ch":"�q�v","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":113,"eg":"wind","ch":"��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":114,"eg":"wild","ch":"���ͪ�","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":115,"eg":"mild","ch":"�ũM��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":116,"eg":"blind","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":117,"eg":"kind","ch":"���O��.����","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":118,"eg":"behind","ch":"�b�K.���᭱","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":119,"eg":"said","ch":"��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":120,"eg":"enough","ch":"������","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":121,"eg":"vehicle","ch":"��q�u��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":122,"eg":"friend","ch":"�B��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":123,"eg":"area","ch":"�ϰ�","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":124,"eg":"love","ch":"�R","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":125,"eg":"post","ch":"�l��.�l�H","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":126,"eg":"beautiful","ch":"���R��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":127,"eg":"TRUE","ch":"�u�ꪺ","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":128,"eg":"blue","ch":"�Ū�.�~�{��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":129,"eg":"busy","ch":"���L��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":130,"eg":"real","ch":"�u��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":131,"eg":"pretty","ch":"�Z.��.�}�G��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":132,"eg":"foreign","ch":"��~��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":133,"eg":"awesome","ch":"��H��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":134,"eg":"very","ch":"�D�`","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":135,"eg":"vary","ch":"�ϧO.�ܧ�","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":136,"eg":"though","ch":"���M","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":137,"eg":"through","ch":"��L.�z�L","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":138,"eg":"thorough","ch":"������","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":139,"eg":"other","ch":"��L��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":140,"eg":"another","ch":"�t�@��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":141,"eg":"either","ch":"���@","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":142,"eg":"neither","ch":"��̬Ҥ�","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":143,"eg":"father","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":144,"eg":"feather","ch":"�Ф�","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":145,"eg":"weather","ch":"�Ѯ�","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":146,"eg":"knowledge","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":147,"eg":"purpose","ch":"�ت�.�N��","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":148,"eg":"course","ch":"�ҵ{","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":149,"eg":"clothes","ch":"��A","txtEnglish":"","txtChinese":"","randomFlag":false}
		,{"number":150,"eg":"only","ch":"�u��","txtEnglish":"","txtChinese":"","randomFlag":false}];
	
	$scope.randomStart=1;
	$scope.randomEnd=150;
	
	$scope.chooseIndex=[1];
	$scope.finishFlag=false;	
	
	console.log('HomeTabCtrl');
	$scope.displaySetting='eg';
	
	
})
;