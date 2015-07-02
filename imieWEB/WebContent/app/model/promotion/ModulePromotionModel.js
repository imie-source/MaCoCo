Ext.define('ExtJsMVC.model.promotion.ModulePromotionModel',
{
	extend: 'Ext.data.TreeModel',
	fields: [
	         {name: 'mopId'},
	         {name: 'text', mapping: 'mopIntitule'}, 
	         {name: 'mopObjectifs'},
	         {name: 'mopModalite'},
	         {name: 'uniteFormationPromotion'},
	         {name: 'children', mapping: 'coursPromotions'}
	        ],
	        
    childType : 'ExtJsMVC.model.promotion.CoursPromotionModel',
	hasMany: {model: 'ExtJsMVC.model.promotion.CoursPromotionModel', associationKey: 'coursPromotions'},
	        
	proxy: 
	{
	    type: 'rest',
	    url: './webapi/modulepromotion',
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
                    data.mopModalite = undefined;
                    data.uniteFormationPromotion.modulePromotions = undefined;
                    //data.coursPromotions = undefined;
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
                	if(data.mopId != undefined)
            		{
                		data.id = 'mopId'.concat(data.mopId);
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

