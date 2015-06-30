Ext.define('ExtJsMVC.view.promotion.detailPromotion.DetailPromoOrdo', {
	xtype  : 'promo-Arbre-Ordo',
	extend : 'Ext.panel.Panel',
    height : window.innerHeight -200, 
	autoScroll : true,
		layout : 
			{
	 			type  : 'hbox',
	 			//align : 'stretch'
			},
		items : 
			[
				{
					title : 'Période',
					id : 'periodePromotionOrdoViewPanel',
					flex  : 1,
				},
				{
					xtype : 'promotionViewGrid',
		 			flex  : 5,				
				},
				{
					xtype : 'weekGrid',
					flex  : 1,
					
				},
		
			],
			
});