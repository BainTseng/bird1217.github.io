angular.module('ionicApp')
	.controller('verb1Ctrl', function($scope) {
		
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
		$scope.randomEnd=100;
		$scope.chooseIndex=[1];
		$scope.finishFlag=false;	
		$scope.displaySetting='eg';
		
		
		$scope.vocabulary2 = [{"number":1,"eg":"answer","ch":"����.�^��","txtEnglish":"","txtChinese":"","randomFlag":false}];
		$scope.vocabulary = [{"number":1,"eg":"answer","ch":"����.�^��","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":2,"eg":"arrive","ch":"��F","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":3,"eg":"ask","ch":"�n�D.��","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":4,"eg":"become","ch":"�ܦ�.����","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":5,"eg":"begin","ch":"�}�l","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":6,"eg":"believe","ch":"�۫H","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":7,"eg":"break","ch":"�}��.����","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":8,"eg":"bring","ch":"�a��","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":9,"eg":"build","ch":"�سy","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":10,"eg":"buy","ch":"�ʶR","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":11,"eg":"call","ch":"�I�s.���q��","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":12,"eg":"carry","ch":"��a","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":13,"eg":"catch","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":14,"eg":"change","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":15,"eg":"close","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":16,"eg":"come","ch":"��","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":17,"eg":"continue","ch":"�~��","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":18,"eg":"cost","ch":"�ӶO","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":19,"eg":"cry","ch":"���_","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":20,"eg":"cut","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":21,"eg":"die","ch":"���`","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":22,"eg":"do","ch":"��","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":23,"eg":"drink","ch":"��","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":24,"eg":"eat","ch":"�Y","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":25,"eg":"end","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":26,"eg":"enter","ch":"�i�J","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":27,"eg":"explain","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":28,"eg":"fall","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":29,"eg":"feel","ch":"�Pı","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":30,"eg":"fight","ch":"����.����","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":31,"eg":"find","ch":"�o�{","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":32,"eg":"finish","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":33,"eg":"fix","ch":"�ײz","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":34,"eg":"get","ch":"�o��","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":35,"eg":"give","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":36,"eg":"go","ch":"�h","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":37,"eg":"grow","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":38,"eg":"happen","ch":"�o��","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":39,"eg":"have","ch":"�֦�","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":40,"eg":"hear","ch":"ť��","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":41,"eg":"help","ch":"��U","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":42,"eg":"hold","ch":"�O��.�伵","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":43,"eg":"hope","ch":"�Ʊ�","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":44,"eg":"hurt","ch":"�ˮ`","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":45,"eg":"interest","ch":"���H�P����","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":46,"eg":"keep","ch":"�~��.����","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":47,"eg":"know","ch":"���D.�{��","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":48,"eg":"launch","ch":"�o�g.�o��","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":49,"eg":"learn","ch":"�ǲ�.�o��","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":50,"eg":"leave","ch":"���}.�d�U","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":51,"eg":"let","ch":"��.��","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":52,"eg":"like","ch":"���w","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":53,"eg":"listen","ch":"��ť","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":54,"eg":"live","ch":"�ͬ�","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":55,"eg":"look","ch":"�ݰ_��","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":56,"eg":"lose","ch":"��.�ॢ","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":57,"eg":"love","ch":"�R","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":58,"eg":"make","ch":"�y��.�F��","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":59,"eg":"mean","ch":"��F.�N����","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":60,"eg":"meet","ch":"����.�ŦX","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":61,"eg":"move","ch":"�E��","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":62,"eg":"need","ch":"�ݭn","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":63,"eg":"open","ch":"���}.�}��","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":64,"eg":"pay","ch":"�I�X","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":65,"eg":"plan","ch":"�p�e","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":66,"eg":"put","ch":"��m","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":67,"eg":"rain","ch":"�U�B","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":68,"eg":"read","ch":"�\Ū","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":69,"eg":"ride","ch":"�M.��","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":70,"eg":"run","ch":"�g��.�]�B","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":71,"eg":"say","ch":"��","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":72,"eg":"see","ch":"�ݨ�.����","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":73,"eg":"sell","ch":"�P��","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":74,"eg":"send","ch":"�e�X","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":75,"eg":"sit","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":76,"eg":"sleep","ch":"��ı","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":77,"eg":"speak","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":78,"eg":"stand","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":79,"eg":"start","ch":"�}�l","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":80,"eg":"stay","ch":"���d.�r�d","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":81,"eg":"stop","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":82,"eg":"study","ch":"���.��Ū","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":83,"eg":"take","ch":"���o.����","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":84,"eg":"talk","ch":"����.���","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":85,"eg":"teach","ch":"�о�.�о�","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":86,"eg":"tell","ch":"�i�D.��O","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":87,"eg":"think","ch":"�Q.�{��","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":88,"eg":"touch","ch":"��Ĳ","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":89,"eg":"try","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":90,"eg":"turn","ch":"½��","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":91,"eg":"use","ch":"�ϥ�","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":92,"eg":"wake","ch":"�d��","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":93,"eg":"walk","ch":"����","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":94,"eg":"want","ch":"�Q�n","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":95,"eg":"wash","ch":"�~��","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":96,"eg":"work","ch":"�u�@","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":97,"eg":"write","ch":"�Ѽg","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":98,"eg":"understand","ch":"�z��","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":99,"eg":"visit","ch":"���X","txtEnglish":"","txtChinese":"","randomFlag":false}
					,{"number":100,"eg":"wrap","ch":"�]��.��¶","txtEnglish":"","txtChinese":"","randomFlag":false}];		
	});