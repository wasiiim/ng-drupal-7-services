;(function() {
	'use strict';

	/**
	 * System Channel Module
	 */
	angular.module('ngDrupal7Services-3_x.resources.system.channel', ['ngDrupal7Services-3_x.commons.baseChannel', 'ngDrupal7Services-3_x.resources.system.channelConstant'])
		   .factory('SystemChannel', SystemChannel);

	
	/**
	 * Manually identify dependencies for minification-safe code
	 * 
	 **/
	SystemChannel.$inject = [ 'BaseChannel', 'SystemChannelConstant' ];
	
	/**
	 * Notification channel for system resource 
	**/
	/** @ngInject */
	function SystemChannel(BaseChannel, SystemChannelConstant) {
	
		//setup and return service            	
        var systemChannelService = {
        		
    		pubConnectConfirmed 	: pubConnectConfirmed,
    		subConnectConfirmed	: subConnectConfirmed,
    		pubConnectFailed 		: pubConnectFailed,
    		subConnectFailed		: subConnectFailed,
    		
    		pubGetVariableConfirmed 	: pubGetVariableConfirmed,
    		subGetVariableConfirmed	: subGetVariableConfirmed,
    		pubGetVariableFailed 		: pubGetVariableFailed,
    		subGetVariableFailed		: subGetVariableFailed,
    		
    		pubSetVariableConfirmed 	: pubSetVariableConfirmed,
    		subSetVariableConfirmed	: subSetVariableConfirmed,
    		pubSetVariableFailed 		: pubSetVariableFailed,
    		subSetVariableFailed		: subSetVariableFailed,
    		
    		pubDelVariableConfirmed 	: pubDelVariableConfirmed,
    		subDelVariableConfirmed	: subDelVariableConfirmed,
    		pubDelVariableFailed 		: pubDelVariableFailed,
    		subDelVariableFailed		: subDelVariableFailed
        };
        
        return systemChannelService;

        ////////////
        
        //System connect request functions
        
        /**
		 * pubConnectConfirmed
		 * 
		 * Publish the SystemConnectConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubConnectConfirmed(args) {
    		var args = args;
    		
    		BaseChannel.pubRootEmit(SystemChannelConstant.system_connectConfirmed, args);
    	};
    	
    	 /**
		 * subConnectConfirmed
		 * 
		 * subscribe for the SystemConnectConfirmed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subConnectConfirmed function
		 * @param 	{function} scopeHandler The callback handler for SystemConnectConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subConnectConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( SystemChannelConstant.system_connectConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubConnectConfirmed
		 * 
		 * Publish the SystemConnectConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubConnectFailed(args) {
    		var args = {errors: args};

    		BaseChannel.pubRootEmit(SystemChannelConstant.system_connectFailed, args);
    	};
    	
    	/**
		 * subConnectFailed
		 * 
		 * subscribe for the SystemConnectFailed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subConnectFailed function
		 * @param 	{function} scopeHandler The callback handler for SystemConnectFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subConnectFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( SystemChannelConstant.system_connectFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//________________________________________________________________________________________________________________________________________
    	
    	//System get_variable request functions
        
        /**
		 * pubGetVariableConfirmed
		 * 
		 * Publish the SystemGetVariableConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubGetVariableConfirmed(args) {
    		var args = args;
    		
    		BaseChannel.pubRootEmit(SystemChannelConstant.system_getVariableConfirmed, args);
    	};
    	
    	 /**
		 * subGetVariableConfirmed
		 * 
		 * subscribe for the SystemGetVariableConfirmed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subGetVariableConfirmed function
		 * @param 	{function} scopeHandler The callback handler for SystemGetVariableConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subGetVariableConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( SystemChannelConstant.system_getVariableConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubGetVariableFailed
		 * 
		 * Publish the SystemGetVariableFailed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubGetVariableFailed(args) {
    		var args = args;

    		BaseChannel.pubRootEmit(SystemChannelConstant.system_getVariableFailed, args);
    	};
    	
    	/**
		 * subGetVariableFailed
		 * 
		 * subscribe for the SystemGetVariableFailed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subGetVariableFailed function
		 * @param 	{function} scopeHandler The callback handler for SystemGetVariableFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subGetVariableFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( SystemChannelConstant.system_getVariableFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//________________________________________________________________________________________________________________________________________
    	
    	//System set_variable request functions
        
        /**
		 * pubSetVariableConfirmed
		 * 
		 * Publish the SystemSetVariableConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubSetVariableConfirmed(args) {
    		var args = args;
    		
    		BaseChannel.pubRootEmit(SystemChannelConstant.system_setVariableConfirmed, args);
    	};
    	
    	 /**
		 * subSetVariableConfirmed
		 * 
		 * subscribe for the SystemSetVariableConfirmed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subSetVariableConfirmed function
		 * @param 	{function} scopeHandler The callback handler for SystemSetVariableConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subSetVariableConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( SystemChannelConstant.system_setVariableConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubSetVariableFailed
		 * 
		 * Publish the SystemSetVariableFailed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubSetVariableFailed(args) {
    		var args = {errors: args};

    		BaseChannel.pubRootEmit(SystemChannelConstant.system_setVariableFailed, args);
    	};
    	
    	/**
		 * subSetVariableFailed
		 * 
		 * subscribe for the SystemSetVariableFailed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subSetVariableFailed function
		 * @param 	{function} scopeHandler The callback handler for SystemSetVariableFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subSetVariableFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( SystemChannelConstant.system_setVariableFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//________________________________________________________________________________________________________________________________________
    	
    	//System del_variable request functions
        
        /**
		 * pubDelVariableConfirmed
		 * 
		 * Publish the SystemDelVariableConfirmed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubDelVariableConfirmed(args) {
    		var args = args;
    		
    		BaseChannel.pubRootEmit(SystemChannelConstant.system_delVariableConfirmed, args);
    	};
    	
    	 /**
		 * subDelVariableConfirmed
		 * 
		 * subscribe for the SystemDelVariableConfirmed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subDelVariableConfirmed function
		 * @param 	{function} scopeHandler The callback handler for SystemDelVariableConfirmed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subDelVariableConfirmed(_Scope, scopeHandler) {
    		var prepArgs = function (args) {
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( SystemChannelConstant.system_delVariableConfirmed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//###############
    	
        
        /**
		 * pubDelVariableFailed
		 * 
		 * Publish the SystemDelVariableFailed event with giver args 
	     *
		 * @param 	{Object} args The events arguments 
		 * 
		 * 
		**/
    	function pubDelVariableFailed(args) {
    		var args = {errors: args};

    		BaseChannel.pubRootEmit(SystemChannelConstant.system_delVariableFailed, args);
    	};
    	
    	/**
		 * subDelVariableFailed
		 * 
		 * subscribe for the SystemDelVariableFailed event
	     *
		 * @param 	{Object} _Scope The scope that calls the channels subDelVariableFailed function
		 * @param 	{function} scopeHandler The callback handler for SystemDelVariableFailed event
		 * 
		 * @return 	{function} The unsubscribe function from the $rootScope.on() call
		 * 
		**/
    	function subDelVariableFailed(_Scope, scopeHandler) {
    		var prepArgs = function (args) { 
    			return args; 
    		};
    		
    		var unsubsSopeHandler = BaseChannel.subRootEmit( SystemChannelConstant.system_delVariableFailed, _Scope, scopeHandler, prepArgs);
    		
    		return unsubsSopeHandler;
    	};
    	
    	//________________________________________________________________________________________________________________________________________
    	
	};

})();