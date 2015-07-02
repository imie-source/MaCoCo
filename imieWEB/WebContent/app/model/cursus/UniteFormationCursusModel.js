Ext.define('ExtJsMVC.model.cursus.UniteFormationCursusModel',
{
	extend : 'Ext.data.TreeModel',
	fields : [
		         {name: 'ufcId'}, 
		         {name: 'text', mapping: 'ufcNom'}, 
		         {name: 'ufcObjectifs'}, 	
		         {name: 'cursus'}, 	
		         {name: 'children', mapping: 'moduleCursuses'}
		     ],
		     
	childType : 'ExtJsMVC.model.cursus.ModuleCursusModel',
	hasMany:  {model: 'ExtJsMVC.model.cursus.ModuleCursusModel', associationKey: 'moduleCursuses'},	
		     
     proxy: 
     {
         type: 'rest',
         url: './webapi/uniteformationcursus/',
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
                    data.moduleCursuses = undefined;
                    data.cursus.uniteFormationCursuses = undefined;
                    data.cursus.promotions = undefined;
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
            	if(data.ufcId != undefined)
        		{
            		data.id = 'ufcId'.concat(data.ufcId);
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

