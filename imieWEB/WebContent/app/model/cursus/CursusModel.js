Ext.define('ExtJsMVC.model.cursus.CursusModel',
	{
		extend : 'Ext.data.TreeModel',
		fields : [
			          {name: 'curId'}, 
			          {name: 'text', mapping: 'curNom'}, 
			          {name: 'refId'}, 
			          {name: 'children', mapping: 'uniteFormationCursuses'}
		         ],
		childType : 'ExtJsMVC.model.cursus.UniteFormationCursusModel',
	    hasMany:  {model: 'ExtJsMVC.model.cursus.UniteFormationCursusModel', name: 'uniteFormationCursuses'},	
	   
	    proxy: 
		{
	    	url: '/imieWEB/webapi/cursus/',
	    	type : 'rest',
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
	                    data.uniteFormationCursuses = undefined;
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