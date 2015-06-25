
Ext.define('ExtJsMVC.view.referentiel.arbre.ArbreReferentiel', 
		{
			extend : 'Ext.tree.Panel',
			xtype  : 'arbre-Referentiel',
			title : 'Réferentiel',
			bind :{
				store: '{rootReferentiels}'
			},
			reference:'referentielTree',
			rootVisible: false,
			requires : [
			            'ExtJsMVC.view.referentiel.arbre.ArbreReferentielViewController'
			],
			
			controller : 'ArbreReferentielViewController',
		    viewConfig: 
		    {
		        plugins: 
		        {
		            ptype: 'treeviewdragdrop',
		            dragGroup: 'groupCoursSavoir'
		        }
		    },
		});