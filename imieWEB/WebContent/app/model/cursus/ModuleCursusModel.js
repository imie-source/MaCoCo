Ext.define('ExtJsMVC.model.cursus.ModuleCursusModel',
{
	extend: 'Ext.data.TreeModel',
	fields: [
	         {name: 'mocId'},
	         {name: 'text', mapping: 'mocIntitule'}, 
	         {name: 'mocObjectifs'},
	         {name: 'uniteFormationCursus'},
	         {name: 'children', mapping: 'coursCursuses'}
	        ],
	        
    childType : 'ExtJsMVC.model.cursus.CoursCursusModel',
	hasMany: {model: 'ExtJsMVC.model.cursus.CoursCursusModel', name: 'coursCursuses'},
	        
	proxy: 
	{
	    type: 'rest',
	    url: '/imieWEB/webapi/modulecursus',
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
                    data.coursCursuses = undefined;
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

