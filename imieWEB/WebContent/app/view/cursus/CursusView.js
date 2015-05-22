Ext.define('ExtJsMVC.view.cursus.CursusView', {
	extend : 'Ext.container.Container',
	itemId : 'viewCursusView',
	xtype : 'view-cursusView',
	alias:'widget.cursusView',
	requires : [
	            'ExtJsMVC.view.cursus.CursusViewController', 
	            'ExtJsMVC.view.cursus.CursusViewModel',
	            'ExtJsMVC.view.cursus.WeekGrid',
	            'ExtJsMVC.view.cursus.CursusViewGrid',
	            'ExtJsMVC.view.cursus.CursusArbre',
	            'ExtJsMVC.view.cursus.CursusArbre2',
	            'ExtJsMVC.view.cursus.DetailCursusGlobal',
	            'ExtJsMVC.view.cursus.DetailCursusOrdo',
	            'ExtJsMVC.view.cursus.DetailCursus',
	            'ExtJsMVC.view.cursus.DetailUniteFormation',
	            'ExtJsMVC.view.cursus.DetailModule',
	            'ExtJsMVC.view.cursus.DetailCours',
	            'ExtJsMVC.view.referentiel.ArbreReferentiel',
	    		'ExtJsMVC.view.referentiel.DetailReferentiel',
	    		'ExtJsMVC.view.referentiel.DetailActiviteType',
	    		'ExtJsMVC.view.referentiel.DetailCompetencePro',
	    		'ExtJsMVC.view.referentiel.DetailSavoir'
	],
	
	controller : 'cursusViewController',
	
	viewModel : {
		type : 'cursusViewModel'
	},

	layout:{
		type:'hbox',
		align:'stretch'
		
	},
	height : window.innerHeight, 
	defaults:{
		border:true,
		flex : 1,
	},
	
					 
					 	items : 
			            [					               	
                     		{ 
						 		itemId: 'voletGauche',
						 		margin : '0 10 0 0',					 
						 		flex  : 1,
		       			 		layout : 
		       			 			{
		                     			type  : 'vbox',
		                     			align : 'stretch'
		                 			},
	                     		items : 
		                 			[
									{
										xtype : 'cursus-Arbre',
										flex  : 1,
										
									},
									{
										xtype : 'cursus-Arbre2',
										flex  : 1,
										
									},
									{ 
		                        		xtype : 'arbre-Referentiel' ,
		                        		flex  : 1,
		                    		}
			             			]	
                         
                     		},
                     
                    		{ 	
                     			
                    	 		itemId : 'switchView',
                         		//xtype : 'cursusViewGrid',
                     			flex  : 2,
                     			
                       	 		
                     		},
                     		
                     	]
					
			
});