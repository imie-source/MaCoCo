Ext.define('ExtJsMVC.model.cursus.ModuleCursusModel',
{
	extend: 'Ext.data.TreeModel',
	fields: [
	         {name: 'mocId'},
	         {name: 'text', mapping: 'mocIntitule'}, 
	         {name: 'mocObjectifs'},
	         {name: 'mocModalite'},
	         {name: 'uniteFormationCursus'},
	         {name: 'children', mapping: 'coursCursuses'}
	        ],
	        
    childType : 'ExtJsMVC.model.cursus.CoursCursusModel',
	hasMany: {model: 'ExtJsMVC.model.cursus.CoursCursusModel', associationKey: 'coursCursuses'},
	        
	proxy: 
	{
	    type: 'rest',
	    url: './webapi/modulecursus',
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
                    data.mocModalite = undefined;
                    data.uniteFormationCursus.moduleCursuses = undefined;
                    //data.coursCursuses = undefined;
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
                	if(data.mocId != undefined)
            		{
                		data.id = 'mocId'.concat(data.mocId);
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

