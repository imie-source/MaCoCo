var cleanTreeFields =  function(data) 
{
    data.id = undefined;
    data.leaf = undefined;
    data.parentId = undefined;
    data.children = undefined;
    data.text = undefined;
    return data;
}


var refreshStaticTree = function(treeStore, idField)
{
	var firstElement = treeStore.getRoot().getChildAt(0);
	
	var storeModel = firstElement.getProxy().getModel();
	
	var newTree = storeModel.load(firstElement.get(idField));

	
	treeStore.setRoot(
	{
		text: 'new root',
		expanded: true,
		children: []
	});
	
	treeStore.getRoot().appendChild(newTree);
	
}

var addNbJourWindow = function(periodeList, coursList){
	var nbJoursPeriode = 0;
	   var nbJoursCours = 0;
	   var nbCours = 0;
	   var nbJoursRestant;
	   var detailView = Ext.ComponentQuery.query('#messageNbJours')[0]
	    if(detailView.getChildEls())
		   {
	 	   detailView.removeAll();
		   }
	  
	   coursList.forEach(function(cours){
		if(cours.entityName === 'ExtJsMVC.model.cursus.CoursCursusModel'){
			nbJoursCours += cours.get('cocDuree');
		}else{
			nbJoursCours += cours.get('copDuree');
		}
		   nbCours++;
	   });	 
	   
	   if(periodeList[0].entityName === 'ExtJsMVC.model.cursus.PeriodeCursusModel'){
		   var periodeCursusOrdoViewPanel = Ext.ComponentQuery.query('#periodeCursusOrdoViewPanel')[0]
	       if(periodeCursusOrdoViewPanel.getChildEls())
		   {
	    	   periodeCursusOrdoViewPanel.removeAll();
		   }
	
		   periodeList.forEach(function(periode){
			   nbJoursPeriode += periode.get('perNbjours');
		   });	
		   
		   periodeList.forEach(function(periode){
	
			   var heightPanel = periode.get('perNbjours')*25;
		       var htmlPanel = periode.get('perNom');
		       var periodePanel = Ext.create('Ext.panel.Panel', {	  
	                html : htmlPanel,
					height : heightPanel,
					width : '100%',
		       });
		       
		       periodeCursusOrdoViewPanel.add(periodePanel);   
	
		   });	  
	   }
	   else{
		   var periodePromoOrdoViewPanel = Ext.ComponentQuery.query('#periodePromotionOrdoViewPanel')[0]
	       if(periodePromoOrdoViewPanel.getChildEls())
		   {
	    	   periodePromoOrdoViewPanel.removeAll();
		   }
	
		   periodeList.forEach(function(periode){
			   nbJoursPeriode += periode.get('perproNbjours');
		   });	
		   
		   periodeList.forEach(function(periode){
	
			   var heightPanel = periode.get('perproNbjours')*25;
		       var htmlPanel = periode.get('perproNom');
		       var periodePanel = Ext.create('Ext.panel.Panel', {	  
	                html : htmlPanel,
					height : heightPanel,
					width : '100%',
		       });
		       
		       periodePromoOrdoViewPanel.add(periodePanel);   
	
		   });	
	   }
	   nbJoursRestant = nbJoursPeriode-nbJoursCours;
	   
	   var html;
	   var idMessageNbJours;
	   if(nbJoursRestant>1){
		   html = 'Il reste '.concat(nbJoursRestant).concat(' jours de cours disponibles.');   
		   idMessageNbJours = 'messageNbJoursOk';
	   }else if (nbJoursRestant>=0){
		   html = 'Il reste '.concat(nbJoursRestant).concat(' jour de cours disponible.');
		   idMessageNbJours = 'messageNbJoursOk';
	   }else if (nbJoursRestant>=-1){
		   html = 'Attention : Il y a '.concat(nbJoursRestant.toString().substring(1)).concat(' jour de cours en trop.');
		   idMessageNbJours = 'messageNbJoursNok';
	   }else {
		   html = 'Attention : Il y a '.concat(nbJoursRestant.toString().substring(1)).concat(' jours de cours en trop.');
		   idMessageNbJours = 'messageNbJoursNok';
	   }
	   
    var messageWindow = Ext.create('Ext.panel.Panel', {	  
         id : idMessageNbJours,  
         html : html,
			height : 50,
			width : 400,
			padding : '10 10 10 10',
			margin : ' 10 20 10 20'
    });
    
    detailView.add(messageWindow);
}


