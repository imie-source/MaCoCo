Ext.define('ExtJsMVC.model.promotion.CoursPromotionModel',
{
	extend : 'Ext.data.TreeModel',
	fields : [
	          {name: 'copId'}, 
	          {name: 'text', mapping: 'copIntitule'}, 
	          {name: 'copDuree'}, 
	          {name: 'copType'}, 
	          {name: 'copObjectifs'}, 
	          {name: 'copEvaluation'},
	          {name: 'copCommentaires'},
	          {name: 'copOrdre'},
	          {name: 'modulePromotion'},
	          {name: 'savoirs'},
	          {name : 'leaf',  type : 'boolean', defaultValue : true}
	         ],
	
	hasMany: {model: 'ExtJsMVC.model.referentiel.Savoir', associationKey: 'savoirs'},

	proxy: 
	{
	    type: 'rest',
	    url: '/imieWEB/webapi/courspromotion',
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
                    data.savoirs = undefined;
                    return data;
                },
                scope: this
            }
    	}, 
	
	 	reader : 
		{
	        transform: 
	        {
	            fn: function(data) 
	            {
	            	if(data.copId != undefined)
	        		{
	            		data.id = 'copId'.concat(data.copId);
	        		}
	            	return data;
	            },
	            scope: this
	        }
		}, 
	},

	
    pseudoWriting: function()
    {
    	var pseudoWriter = this.getProxy().getWriter();
    	return pseudoWriter.getRecordData(this);
    }
	
});
