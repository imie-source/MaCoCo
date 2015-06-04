Ext.define('ExtJsMVC.view.promotion.PromotionArbre2', 
		{
			extend : 'Ext.tree.Panel',
			xtype  : 'promo-Arbre2',
			requires : [
			            'ExtJsMVC.view.promotion.PromotionArbre2ViewController',
			],
			
			controller : 'PromotionArbre2ViewController',
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

