﻿angular.module('ionicApp')
	.directive('selectOnClick', function () {
    // Linker function
    return function (scope, element, attrs) {
      element.bind('click', function () {
        this.select();
      });
    };
  });

angular.module('ionicApp')
	.controller('HomeTabCtrl', function($scope) {
			
		$scope.Model={};	
		$scope.Model.txtEnglish = '';
		$scope.SearchDictionary = function(){
			var parm=$scope.Model.txtEnglish;
			if(parm=='')
			{
				return;
			}						
			
			var history={"Text":parm,"Time":new Date()};
			$scope.DictionaryHistory.splice(0, 0, history);
			angular.forEach($scope.DictionarySelect, function(item, index) {				
				if(item["checked"]==true)
				{
					var dictionaryType=item["DisplayText"];
					var searchText=parm;
					
					if(dictionaryType=='Collins' || dictionaryType=='Oxford Learner' )
					{
						searchText=searchText.replace(/\ /g,'-');
					}										
					var uri=item["Url"]+searchText;
					console.log(uri);
					window.open(uri);
				}
			}, parm);
						
		};
		$scope.ClearHistory = function(){
			$scope.DictionaryHistory=[];						
		};
		
		$scope.SearchHistory = function(item){
			var historyText=item["Text"];					
			$scope.Model.txtEnglish=historyText;
		};
 	
		$scope.DictionarySelect=[{"DisplayText":"Collins","Url":"https://www.collinsdictionary.com/dictionary/english/","checked":true}
							,{"DisplayText":"Oxford Learner","Url":"http://www.oxfordlearnersdictionaries.com/definition/english/","checked":true}
							,{"DisplayText":"Oxford","Url":"https://en.oxforddictionaries.com/definition/us/","checked":true}];
							//,{"DisplayText":"Cambridge","Url":"http://dictionary.cambridge.org/dictionary/learner-english/","checked":true}
		
		$scope.DictionaryHistory=[];
		
	console.log('HomeTabCtrl');
});
