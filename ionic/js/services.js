'use strict';

angular.module('conFusion.services', ['ngResource'])
	.constant('baseURL', "http://localhost:3000/")
	.service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL){
		
		var promotions = [
			{
				_id: 0,
				name: 'Weekend Grand Buffet',
				image: 'images/buffet.png',
				label: 'New',
				price: '19.99',
				description: 'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person'
			}
		];

		this.getDishes = function(){
			
			return $resource(baseURL + "dishes/:id", null, {'update': {method: 'PUT' }});
			//return $resource(baseURL + "dishes/:id");
		};

		// IMplement a function named getPromotion
		// that returns a selected promotion.

		this.getPromotion = function(){
			return $resource(baseURL + "promotions/:id");
		};


	}])

	.factory('corporateFactory', ['$resource', 'baseURL' ,function( $resource, baseURL){
		return $resource( baseURL + "leadership/:id");
	}])

	.factory('feedbackFactory', ['$resource', 'baseURL', function( $resource, baseURL){
		return $resource( baseURL + "feedback/:id" );
	}])

	.factory('favoriteFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
		var favFac = {};
		var favorites = [];

		favFac.deleteFromFavorites = function(index){
			for (var i = 0; i < favorites.length; i++) {
				if (favorites[i].id == index) {
					favorites.splice(i, 1);
				}
			}
		};

		favFac.getFavorites = function(){
			return favorites;
		};

		favFac.addToFavorites = function (index) {
			for (var i = 0; i < favorites.length; i++) {
				if(favorites[i].id == index){
					return;
				}
			}
			favorites.push({id: index});
		};
	
		return favFac;
	}])

;