;(function() {
    'use strict';

	/**
	 * Menu Resource Modules
	 * 
	 * see sourcecode in services/resources/menu_resource.inc
	 * 
	**/
    angular.module('d7-services.resources.menu.resource', ['d7-services.commons.configurations', 'd7-services.commons.baseResource', 'd7-services.resources.menu.resourceConstant', 'd7-services.resources.menu.channel'])
    

    /**
	 * MenuResource
	 * 
	 * This service mirrors the Drupal menu resource of the services 3.x module.
	 * To use this you have to set following line in your Drupal CORS module settings
	 * 
	**/
    .factory('MenuResource', MenuResource);

    /**
	 * Manually identify dependencies for minification-safe code
	 * 
	**/
    MenuResource.$inject = ['$http', 'DrupalApiConstant', 'BaseResource', 'MenuResourceConstant', 'MenuChannel'];
    
	/** @ngInject */
	function MenuResource($http, DrupalApiConstant, BaseResource, MenuResourceConstant, MenuChannel) { 
		
		//setup and return service            	
        var menuResourceService = {
			retrieve 		: retrieve
        };
        
        return menuResourceService;

        ////////////
        
        /**
		 * retrieve
		 * 
		 * Returns the details of currently logged in user.
		 * 
		 * Method: POST 
		 * Url: http://drupal_instance/api_endpoint/menu/retrieve
		 * 
		 * @return 	{Promise} Object with session id, session name and a user object.
		 * 
		**/
        function retrieve() {
	    	var errors = [];
	    	
			var retrievePath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + MenuResourceConstant.resourcePath + '/' + MenuResourceConstant.actions.retrieve,
				requestConfig = {
						method :'POST',
						url : retrievePath
				};
			
			return BaseResource.request(requestConfig,MenuChannel.pubRetrieveConfirmed,  MenuChannel.pubRetrieveFailed);
			
		};

	
	};

})();