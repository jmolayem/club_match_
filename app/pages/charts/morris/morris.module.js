/**
 * @author a.demeshko
 * created on 12/18/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.morris', [])
    .config(routeConfig).config(function(baConfigProvider){
      var layoutColors = baConfigProvider.colors;
      Morris.Donut.prototype.defaults.backgroundColor = 'transparent';
      Morris.Donut.prototype.defaults.labelColor = layoutColors.defaultText;
      Morris.Grid.prototype.gridDefaults.gridLineColor = layoutColors.borderDark;
      Morris.Grid.prototype.gridDefaults.gridTextColor = layoutColors.defaultText;
    });

  /** @ngInject */

})();