angular.module('ionicApp')
	.controller('verb2Ctrl', function($scope) {
		
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
		$scope.randomStart=1;
		$scope.randomEnd=108;
		$scope.chooseIndex=[1];
		$scope.finishFlag=false;	
		$scope.displaySetting='eg';
		
		
		$scope.vocabulary2 = [{"number":1,"eg":"accept","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}];
		$scope.vocabulary = [{"number":1,"eg":"accept","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":2,"eg":"act","ch":"���","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":3,"eg":"add","ch":"�[�W","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":4,"eg":"agree","ch":"�P�N","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":5,"eg":"allow","ch":"���\","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":6,"eg":"appear","ch":"�X�{","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":7,"eg":"attempt","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":8,"eg":"attend","ch":"�X�u","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":9,"eg":"beat","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":10,"eg":"blow","ch":"�j","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":11,"eg":"borrow","ch":"�ɶU","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":12,"eg":"cause","ch":"�y��","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":13,"eg":"choose","ch":"���","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":14,"eg":"collect","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":15,"eg":"complete","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":16,"eg":"consider","ch":"�Ҽ{","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":17,"eg":"contain","ch":"�]�t","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":18,"eg":"control","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":19,"eg":"cook","ch":"�i�N.�U�p","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":20,"eg":"cross","ch":"��V","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":21,"eg":"count","ch":"��","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":22,"eg":"cover","ch":"�л\","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":23,"eg":"dance","ch":"���R","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":24,"eg":"decide","ch":"�M�w","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":25,"eg":"disappear","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":26,"eg":"discover","ch":"�o�{","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":27,"eg":"divide","ch":"�Ϥ��}","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":28,"eg":"doubt","ch":"�ü{","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":29,"eg":"draw","ch":"�yø.��.��","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":30,"eg":"dream","ch":"�ڷQ","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":31,"eg":"dress","ch":"�۸�.��W","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":32,"eg":"drive","ch":"�X��.�r��","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":33,"eg":"drop","ch":"�w�U.���U","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":34,"eg":"enjoy","ch":"�ɨ�","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":35,"eg":"exist","ch":"�s�b","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":36,"eg":"expect","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":37,"eg":"fail","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":38,"eg":"fill","ch":"���","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":39,"eg":"fit","ch":"��.�X","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":40,"eg":"flow","ch":"�y��","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":41,"eg":"fly","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":42,"eg":"guess","ch":"�q�Q","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":43,"eg":"hang","ch":"�Q��","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":44,"eg":"hurry","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":45,"eg":"hate","ch":"���c","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":46,"eg":"improve","ch":"�W�i","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":47,"eg":"include","ch":"�]�A","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":48,"eg":"introduce","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":49,"eg":"invite","ch":"�ܽ�.�l��","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":50,"eg":"join","ch":"�[�J","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":51,"eg":"kill","ch":"���","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":52,"eg":"lead","ch":"�޾�","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":53,"eg":"lend","ch":"�ɥX�h","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":54,"eg":"lift","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":55,"eg":"marry","ch":"��.��","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":56,"eg":"notice","ch":"�`�N","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":57,"eg":"obtain","ch":"Ĺ�o.��o","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":58,"eg":"offer","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":59,"eg":"order","ch":"�R�O.�q��","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":60,"eg":"own","ch":"�֦�","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":61,"eg":"pass","ch":"�q�L","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":62,"eg":"permit","ch":"��\","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":63,"eg":"pick","ch":"�D","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":64,"eg":"point","ch":"���X","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":65,"eg":"pour","ch":"�ɭ�","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":66,"eg":"practice","ch":"�m��","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":67,"eg":"prepare","ch":"�ǳ�","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":68,"eg":"promise","ch":"���\.����","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":69,"eg":"prove","ch":"�ҹ�","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":70,"eg":"provide","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":71,"eg":"pull","ch":"�ԧ�","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":72,"eg":"push","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":73,"eg":"reach","ch":"���X��.��{","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":74,"eg":"realize","ch":"�⮩","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":75,"eg":"receive","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":76,"eg":"recognize","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":77,"eg":"refuse","ch":"�ڵ�","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":78,"eg":"remember","ch":"�O�o","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":79,"eg":"repeat","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":80,"eg":"reply","ch":"�^��.�^��","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":81,"eg":"report","ch":"���i","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":82,"eg":"require","ch":"�n�D","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":83,"eg":"return","ch":"��^","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":84,"eg":"rise","ch":"�W��.�ɰ_��","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":85,"eg":"save","ch":"�@��.�x�s","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":86,"eg":"search","ch":"�j�M","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":87,"eg":"seem","ch":"�ݰ_��.���G","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":88,"eg":"separate","ch":"���}","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":89,"eg":"serve","ch":"�A��","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":90,"eg":"share","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":91,"eg":"shout","ch":"��.�s","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":92,"eg":"show","ch":"�i�{","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":93,"eg":"sign","ch":"ñ�p","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":94,"eg":"smell","ch":"�D�_��","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":95,"eg":"spend","ch":"���.����","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":96,"eg":"spread","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":97,"eg":"succeed","ch":"���\.��{","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":98,"eg":"suggest","ch":"��ĳ","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":99,"eg":"surround","ch":"��¶","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":100,"eg":"taste","ch":"�~�|","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":101,"eg":"tear","ch":"��.��","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":102,"eg":"tie","ch":"���j","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":103,"eg":"travel","ch":"�Ȧ�","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":104,"eg":"wave","ch":"���R","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":105,"eg":"wear","ch":"����.�˧�","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":106,"eg":"win","ch":"�o��.Ĺ�o","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":107,"eg":"wonder","ch":"�Z�i.���","txtEnglish":"","txtChinese":"","randomFlag":false}
							,{"number":108,"eg":"worry","ch":"��~","txtEnglish":"","txtChinese":"","randomFlag":false}];		
	});