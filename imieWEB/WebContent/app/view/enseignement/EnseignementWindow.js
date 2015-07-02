Ext.define('ExtJsMVC.view.enseignement.EnseignementWindow', {
	extend : 'Ext.panel.Panel',
	xtype : 'view-enseignementWindow',
	alias:'widget.enseignementWindow',
	requires : [
	            'ExtJsMVC.view.enseignement.EnseignementWindowController', 
	            'ExtJsMVC.view.enseignement.EnseignementWindowModel',
	            'ExtJsMVC.view.enseignement.EnseignementWindowSimpleGrid',
	            'ExtJsMVC.view.enseignement.EnseignementWindowGrid',
	            'ExtJsMVC.view.enseignement.EnseignementWindowForm',
	            'ExtJsMVC.view.enseignement.EnseignementWindowMultiSelector',
	],
	
	controller : 'enseignementWindowController',
	
	viewModel : {
		type : 'enseignementWindowModel'
	},
	height : '100%',
	autoScroll : true,
	title : 'Gestion des enseignements',
	layout:{
		type:'hbox',
		align:'stretch'
	},
	defaults:{
		border:true,
		flex : 1,
 		margin : 10,
	},
	
	items:[
	   
	   {
		  itemId : 'entSwitchView',
		   
	   }
	],
	
	
			
});