Ext.define('ExtJsMVC.model.promotion.PeriodePromotionModel',
{
	extend: 'Ext.data.TreeModel',
	fields: [
	         {name: 'perId'},
	         {name: 'perDebut'},
	         {name: 'perFin'}
	        ],
	        
	proxy: 
	{
	    type: 'rest',
	    url: '/imieWEB/webapi/periodepromotion',
    	writer : 
    	{
    		nameProperty: 'mapping',
    		writeAllFields: true,
            transform: 
            {
                fn: function(data, request) 
                {
                    data.id = undefined;
                    data.leaf = undefined;
                    data.parentId = undefined;
                    data.children = undefined;
                    data.text = undefined;
                    data.coursPromotions = undefined;
                    return data;
                },
                scope: this
            }
    	}
	},
	
    pseudoWriting: function()
    {
    	var pseudoWriter = this.getProxy().getWriter();
    	return pseudoWriter.getRecordData(this);
    }

});

