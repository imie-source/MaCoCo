Ext.define('ExtJsMVC.view.home.AdministrationWindow', {
	//extend : 'Ext.container.Container',
	extend : 'Ext.panel.Panel',
	xtype : 'view-administrationWindow',
	alias:'widget.administrationWindow',
	requires : [
	            'ExtJsMVC.view.home.AdministrationWindowController', 
	            'ExtJsMVC.view.home.AdministrationWindowModel',
	            'ExtJsMVC.view.home.AdministrationWindowGrid',
	            'ExtJsMVC.view.home.CursusAdminWindowForm',
	            //'ExtJsMVC.view.home.RefAdminWindowForm'
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
					title:'Referentiel Grid',
					bind:{
						store:'{referentiels}',
						title:'<b>{currentReferentiel.refNom}</b>'
					},
					reference:'referentielsGrid',
					columns:[{
						text:'Référentiel',
						dataIndex:'refNom',
						flex:1.5,
						//editor:{
							//bind:'{currentCursus.curNom}',
							//selectedOnFocus:true
						//},
					}],
				   },
				   {
					//	xtype:'refAdminWindowForm',
					//	title:'Referentiel Form'
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
					title:'Cursus Grid',
					bind:{
						store:'{cursuses}',
						title:'<b>{currentCursus.curNom}</b>'
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
						title:'Cursus Form'
				   },		
				],
			},
				
    	   
			],
			
});