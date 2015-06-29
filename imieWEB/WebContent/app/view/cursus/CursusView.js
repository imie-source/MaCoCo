Ext.define('ExtJsMVC.view.cursus.CursusView', {
	extend : 'Ext.container.Container',
	itemId : 'viewCursusView',
	xtype : 'view-cursusView',
	alias:'widget.cursusView',
	requires : [
	            'ExtJsMVC.view.cursus.CursusViewController', 
	            'ExtJsMVC.view.cursus.CursusViewModel',
	            'ExtJsMVC.view.cursus.detailCursus.WeekGrid',
	            'ExtJsMVC.view.cursus.detailCursus.CursusViewGrid',
	            'ExtJsMVC.view.cursus.arbre1.CursusArbre',
	            'ExtJsMVC.view.cursus.arbre2.CursusArbre2',
	            'ExtJsMVC.view.cursus.detailCursus.DetailCursusGlobal',
	            'ExtJsMVC.view.cursus.detailCursus.DetailCursusOrdo',
	            'ExtJsMVC.view.cursus.detailCursus.DetailCursus',
	            'ExtJsMVC.view.cursus.detailUf.DetailUniteFormation',
	            'ExtJsMVC.view.cursus.detailModule.DetailModule',
	            'ExtJsMVC.view.cursus.detailCours.DetailCours',	          
	            'ExtJsMVC.view.cursus.grilleEnfant.PeriodeGrid',	            
	            'ExtJsMVC.view.cursus.grilleEnfant.CursusChildrenGrid',	            
	            'ExtJsMVC.view.cursus.detailPeriode.DetailPeriode',
	            'ExtJsMVC.view.referentiel.arbre.ArbreReferentiel',
	    		'ExtJsMVC.view.referentiel.detailReferentiel.DetailReferentiel',
	    		'ExtJsMVC.view.referentiel.detailActiviteType.DetailActiviteType',
	    		'ExtJsMVC.view.referentiel.detailCompetencePro.DetailCompetencePro',
	    		'ExtJsMVC.view.referentiel.detailSavoir.DetailSavoir',	            
	            'ExtJsMVC.view.referentiel.grilleEnfant.RefChildrenGrid',
	            'ExtJsMVC.view.promotion.arbre.PromotionArbre2',
	            'ExtJsMVC.view.promotion.detailPromotion.PromotionViewGrid',
	            'ExtJsMVC.view.promotion.detailCours.DetailCoursPromo',
	            'ExtJsMVC.view.promotion.detailModule.DetailModulePromo',
	            'ExtJsMVC.view.promotion.detailPromotion.DetailPromo',
	            'ExtJsMVC.view.promotion.detailPromotion.DetailPromoGlobal',
	            'ExtJsMVC.view.promotion.detailPromotion.DetailPromoOrdo',
	            'ExtJsMVC.view.promotion.detailUf.DetailUniteFormationPromo',
	            'ExtJsMVC.view.promotion.detailPromotion.DetailNewPromo',
	            'ExtJsMVC.view.promotion.grilleEnfant.PromoChildrenGrid',
	            'ExtJsMVC.view.promotion.grilleEnfant.PeriodePromotionGrid',	                       
	            'ExtJsMVC.view.promotion.detailPeriode.DetailPeriodePromotion',
	            'ExtJsMVC.view.cursus.detailUf.DetailUniteFormationGridModule'
	            
	            
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
										autoScroll : true,
										flex  : 1,
										
									},
									{
										itemId : 'secondTree',
										autoScroll : true,
										flex  : 1,
										
									},
									{ 
										itemId : 'refTree',
										autoScroll : true,
		                        		flex  : 1,
		                    		}
			             			]	
                         
                     		},
                     
                    		{ 	
                     			
                    	 		itemId : 'switchView',
                    	 		autoScroll : true,
                     			flex  : 2,
                     			
                       	 		
                     		},
                     		
                     	]
					
			
});