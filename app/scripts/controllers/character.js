'use strict';

angular.module('charactersApp').controller('CharacterCtrl', [
	'$scope',
	'$http',
	'$routeParams',
	function ($scope, $http, $routeParams) {
		$http.get('characters/' + $routeParams.characterId + '.json').success(function(data) {
			$scope.character = data;
		});
		$scope.getBab = function (level,progression) {
			var bab = 0;
			switch(progression){
				case "FB": 
					bab = level;
				break;
				case "MB": 
					bab = Math.floor(level * 0.75);
				break;
				case "SB":
					bab = Math.floor(level / 2);
				break;			
			}
			return bab;
		};
		$scope.getCmd = function (bab, str, dex, size, deflection ) {
			var cmd = 10 + bab + str + dex + size + deflection;
			return cmd;
		};
		$scope.getCmb = function (bab, str, size ) {
			var cmd = bab + str + size;
			return cmd;
		};
		$scope.ablMod = function (score) {
			return Math.floor((score-10)/2);						
		};
		$scope.getCheck = function (score) {
			var mod = Math.floor((score-10)/2);
			if (mod >= 0) {
				mod = '+' + mod;
			}
			return '1d20' + mod;
		};
		$scope.isDie = function (dice) {
			dice = dice.replace(/- */,'+ -');
			dice = dice.replace(/D/,'d');
			var items = dice.split(/ *\+ */);
			for (var i=0; i < items.length; i++) {
				if(!/^[ \t]*(-)?(\d+)?(?:(d)(\d+))?[ \t]*$/.test(items[i])) {
					return false;
				}
			}
			return true;
		};
		$scope.findSpell = function(spellList, spellName) {
			return spellList.filter(function(e) {
				return e.name === spellName;
			})[0];
		};
	}
]);


