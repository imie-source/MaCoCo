Ext.define('ExtJsMVC.model.cursus.CoursCursusModel',
{
	extend : 'Ext.data.TreeModel',
	fields : [
	          {name: 'cocId'}, 
	          {name: 'text', mapping: 'cocIntitule'}, 
	          {name: 'cocDuree'}, 
	          {name: 'cocType'}, 
	          {name: 'cocObjectifs'}, 
	          {name: 'cocEvaluation'},
	          {name: 'cocCommentaires'},
	          {name: 'moduleCursus'},
	          {name: 'savoirs'},
	          {name : 'leaf',  type : 'boolean', defaultValue : true}
	         ],
	         
	hasMany: {model: 'ExtJsMVC.model.referentiel.Savoir', name: 'savoirs'},

	proxy: 
	{
	    type: 'rest',
	    url: '/imieWEB/webapi/courscursus',
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
    	} 
	},
	
    pseudoWriting: function()
    {
    	var pseudoWriter = this.getProxy().getWriter();
    	return pseudoWriter.getRecordData(this);
    }
	
});

