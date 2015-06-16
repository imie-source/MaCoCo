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
	          {name: 'cocOrdre'},
	          {name: 'moduleCursus'},
	          {name: 'savoirs'},
	          {name: 'enseignements'},
	          {name : 'leaf',  type : 'boolean', defaultValue : true}
	         ],
	
	hasMany: {model: 'ExtJsMVC.model.referentiel.Savoir', associationKey: 'savoirs'},
	hasMany: {model: 'ExtJsMVC.model.enseignement.Enseignement', associationKey: 'prerequis'},

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
    	}, 
	
	 	reader : 
		{
	        transform: 
	        {
	            fn: function(data) 
	            {
	            	if(data.cocId != undefined)
	        		{
	            		data.id = 'cocId'.concat(data.cocId);
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

