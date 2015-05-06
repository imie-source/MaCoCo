Ext.define('ExtJsMVC.view.home.AdministrationWindow', {
	extend : 'Ext.panel.Panel',
	xtype : 'view-administrationWindow',
	alias:'widget.administrationWindow',
	requires : [
	            'ExtJsMVC.view.home.AdministrationWindowController', 
	            'ExtJsMVC.view.home.AdministrationWindowModel',
	            'ExtJsMVC.view.home.AdministrationWindowGrid',
	            'ExtJsMVC.view.home.CursusAdminWindowForm',
	          'ExtJsMVC.view.home.RefAdminWindowForm'
	],
	
	controller : 'administrationWindowController',
	
	viewModel : {
		type : 'administrationWindowModel'
	},
	title : 'Accueil',
	layout:{
		type:'hbox',
		align:'stretch'
		
	},
	defaults:{
		border:true,
		flex : 1,
	},
	
	items : 
        [					               	
     		{ 
		 		itemId: 'voletRef',
		 		xtype:'container',
			 	layout :{
             			type  : 'vbox',
             			align : 'stretch'
         			},
         		defaults:{
         			margin : 20,
         			},
         			
         			
				items:[
				   {
					xtype:'administrationWindowGrid',
					height : 600,
					title:'Liste des référentiels',
					bind:{
						store:'{referentiels}',
						title:'<b>Liste des référentiels : {currentReferentiel.refNom}</b>'
					},
					reference:'referentielsGrid',
					columns:[{
						text:'Référentiel',
						dataIndex:'refNom',
						flex:1.5,
						editor:{
							bind:'{currentCursus.curNom}',
							selectedOnFocus:true
						},
					}],
				   },
				   {
						xtype:'refAdminWindowForm',
						//title:'Referentiel Form'
				   },	
				],
     	   },
    		{ 
		 		itemId: 'voletCursus',
		 		xtype:'container',
			 	layout :{
            			type  : 'vbox',
            			align : 'stretch'
        			},
             	defaults:{
             			margin : 20,
             		},
             			
				items:[
				   {
					xtype:'administrationWindowGrid',
					height : 600,
					title:'Liste des cursus',
					bind:{
						store:'{cursuses}',
						title:'<b>Liste des cursus : {currentCursus.curNom}</b>'
					},
					reference:'cursusesGrid',
					columns:[{
						text:'Cursus',
						dataIndex:'curNom',
						flex:1.5,
						editor:{
							bind:'{currentCursus.curNom}',
							selectedOnFocus:true
						},
					}],
				   },
				   {
				
						xtype:'cursusAdminWindowForm',
						//title:'Cursus Form'
				   },		
				],
			},
				
    	   
			],
			
});