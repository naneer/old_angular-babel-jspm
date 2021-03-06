import angular from 'angular';
import 'angular-ui-router';

import {authRequiredRouteModule} from '../../auth-required.route';
import {homeCardComponentModule} from 'lib/components/home-cards/home-card.directive';
import {homeIndexRouteControllerModule} from './home-index.controller';
import template from './home-index.template.html!text';

export var homeIndexRouteModule = angular.module('homeIndexRouteModule', [
  'ui.router',
  homeCardComponentModule.name,
  homeIndexRouteControllerModule.name,
  authRequiredRouteModule.name
]).config([
  '$stateProvider',
  function homeRoute($stateProvider){
    $stateProvider.state('authRequired.home.index', {
      url: '/',
      views: {
        'index': {
          template: template,
          controllerAs: 'ctrl',
          controller: 'homeIndexRouteController'
        }
      },
      resolve: {
        content: function() {
          return { 
              card_0: {
                img: '',
                header: 'Hello Planet!',
                paragraph: 'Web Development'
              }
          };
        }
      }
    })
  }
])
;