Ext.define('ExtJsMVC.model.promotion.CoursByPromotionModel',
{
	extend : 'Ext.data.TreeModel',
	
	proxy: 
	{
	    type: 'rest',
	    url: './webapi/courspromotion/promotion',
	}
});

