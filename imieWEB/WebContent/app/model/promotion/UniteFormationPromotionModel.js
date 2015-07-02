Ext.define('ExtJsMVC.model.promotion.UniteFormationPromotionModel',
{
	extend : 'Ext.data.TreeModel',
	fields : [
		         {name: 'ufpId'}, 
		         {name: 'text', mapping: 'ufpNom'}, 
		         {name: 'ufpObjectifs'}, 	
		         {name: 'promotion'}, 	
		         {name: 'children', mapping: 'modulePromotions'}
		     ],
		     
	childType : 'ExtJsMVC.model.promotion.ModulePromotionModel',
	hasMany:  {model: 'ExtJsMVC.model.promotion.ModulePromotionModel', associationKey: 'modulePromotions'},	
		     
     proxy: 
     {
         type: 'rest',
         url: './webapi/uniteformationpromotion/',
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
                    data.modulePromotions = undefined;
                    data.promotion.uniteFormationPromotions = undefined;
                    return data;
                },
                scope: this
            }
    	} 
     },
     
 	reader : 
	{
        transform: 
        {
            fn: function(data) 
            {
            	if(data.ufpId != undefined)
        		{
            		data.id = 'ufpId'.concat(data.ufpId);
        		}
            },
            scope: this
        }
	}, 
     
    pseudoWriting: function()
    {
    	var pseudoWriter = this.getProxy().getWriter();
    	return pseudoWriter.getRecordData(this);
    }
});

