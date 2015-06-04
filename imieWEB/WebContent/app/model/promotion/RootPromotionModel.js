Ext.define('ExtJsMVC.model.promotion.RootPromotionModel',
{
	extend : 'Ext.data.TreeModel',
	fields : [
	          {name: 'itemId'}, 
	          {name: 'name'}
	         ],
	childType : 'ExtJsMVC.model.promotion.PromotionModel'
});

