import angular from 'angular';

class recipesCreateIndexRouteController {
  constructor(servings){
    this.servings = servings;
    this.units = [
      {'name': 'teaspoon', 'shortname': 'tsp'},
      {'name': 'tablespoon', 'shortname': 'tbsp'},
      {'name': 'fluid ounce', 'shortname': 'fl oz'},
      {'name': 'cup', 'shortname': 'cup'},
      {'name': 'pint', 'shortname': 'pt'},
      {'name': 'quart', 'shortname': 'qt'},
      {'name': 'gallon', 'shortname': 'gal'},
      {'name': 'milliliter', 'shortname': 'ml'},
      {'name': 'liter', 'shortname': 'l'},
      {'name': 'pound', 'shortname': 'lb'},
      {'name': 'ounce', 'shortname': 'oz'},
      {'name': 'milligram', 'shortname': 'mg'},
      {'name': 'gram', 'shortname': 'g'},
      {'name': 'kilogram', 'shortname': 'kg'},
      {'name': 'inch', 'shortname': 'in'},
      {'name': 'millimeter', 'shortname': 'mm'},
      {'name': 'centimeter', 'shortname': 'cm'},
      {'name': 'meter', 'shortname': 'm'}      
    ];
  }
}

recipesCreateIndexRouteController.$inject = ['servings'];

export var recipesCreateIndexRouteControllerModule = angular.module('recipesCreateIndexRouteControllerModule', [
  
]).controller('recipesCreateIndexRouteController', recipesCreateIndexRouteController)
;
