Ext.define('ExtJsMVC.model.cursus.CoursByCursusModel',
{
	extend : 'Ext.data.TreeModel',
	
	proxy: 
	{
	    type: 'rest',
	    url: '/imieWEB/webapi/courscursus/cursus',
	}
});

