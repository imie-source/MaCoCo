Ext.define('ExtJsMVC.view.cursus.PromotionArbre2', 
		{
			extend : 'Ext.tree.Panel',
			xtype  : 'promo-Arbre2',
			title : 'Détail',
			bind :{
				store: '{rootPromotion}'
			},
			reference:'promoTree',
			loader : {
			},
			rootVisible: false,
			//TODO: Fix permettant le collapse/expand apres un setRoot
			//animate: false,
		    viewConfig: 
		    {
		        plugins: 
		        {
		            ptype: 'treeviewdragdrop',
		        }
		    },
		});

