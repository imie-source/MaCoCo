Ext.define('ExtJsMVC.view.promotion.detailPromotion.DetailPromoGlobal', {
    extend : 'Ext.tab.Panel',
    xtype  : 'promo-DetailPromoGlobal',
    store: 'PromotionStore',
    requires : [
	            'ExtJsMVC.view.promotion.detailPromotion.DetailPromoViewController',
	],
	
	controller : 'DetailPromoViewController',
    frame   : true,
// padding : 5,
    bodyPadding : 5,
    activeTab: 0,

    
    items : 
    [
		{
			itemId: 'detailPromo',
			title: 'Detail Promotion',
			items :
			[
			 	{xtype : 'promo-DetailPromo'}
			]
		},
		
		{
			itemId: 'ordoPromo',
		    title: 'Ordonnancement',
		    items :
		    [
		     	{xtype : 'promo-Arbre-Ordo'},
		        {
		        	id : 'seleniumDetailPromoOrdoPrint',
		            xtype : 'button',
		            text : 'Imprimer',
		            itemId : 'printOrdo',
		            handler : 'onPrintOrdoClick'
		
		        }
		    ]
		}
    ]
});