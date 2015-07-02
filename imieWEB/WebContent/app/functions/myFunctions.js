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
	   nbJoursRestant = (nbJoursPeriode-nbJoursCours);
	   nbJoursRestant = Math.round(nbJoursRestant*100)/100;
	   
	   
	   var html;
	   var idMessageNbJours;
	   if(nbJoursRestant>1){
		   html = 'Il reste '.concat(nbJoursRestant).concat(' jours à affecter.');   
		   idMessageNbJours = 'messageNbJoursOk';
	   }else if (nbJoursRestant>=0){
		   html = 'Il reste '.concat(nbJoursRestant).concat(' jour à affecter.');
		   idMessageNbJours = 'messageNbJoursOk';
	   }else if (nbJoursRestant>=-1){
		   html = 'Attention : '.concat(nbJoursRestant.toString().substring(1)).concat(' jour affecté en trop.');
		   idMessageNbJours = 'messageNbJoursNok';
	   }else {
		   html = 'Attention : '.concat(nbJoursRestant.toString().substring(1)).concat(' jours affectés en trop.');
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


var getPeriodeRowWidth = function(coursData, periodeData){
	var rowWidthList = new Array();
	var pxRow = 22;
	var jourCours = 0;
	var nbCours = 0;
	var periodeIndex = 0;
	coursData.forEach(function(cours, index) {
		console.log('cours.entityName');
		console.log(cours.entityName);
		if (cours.entityName ==='ExtJsMVC.model.promotion.CoursPromotionModel'){
			jourCours = jourCours + cours.getData().copDuree;
		}else {
			jourCours = jourCours + cours.getData().cocDuree;
		}
		nbCours ++;
		console.log('**************************');
		console.log(jourCours);
		console.log('jourCours');
		var jourPeriode = 0;
		if(periodeIndex <= periodeData.length-1){
			for(var i =0;i<=periodeIndex;i++){
				console.log('periodeData[i].getData().entityName');
				console.log(periodeData[i].getData().perproId);
				if (periodeData[i].getData().perproId != undefined){
					jourPeriode = jourPeriode + periodeData[i].getData().perproNbjours;
				}else {
					jourPeriode = jourPeriode + periodeData[i].getData().perNbjours;
				}
				
				
				console.log('bouclefor');
			}
			console.log(jourPeriode);
			console.log('jourPeriode');
			
			if(jourCours === jourPeriode){
				rowWidthList.push(nbCours*pxRow);
				nbCours = 0;
				periodeIndex++;
				console.log('jourCours === jourPeriode');
			}else if(jourCours >= jourPeriode){
				rowWidthList.push((nbCours-1)*pxRow);
				nbCours = 1;
				periodeIndex++;
				console.log('jourCours >= jourPeriode');
			}
		}
		
			
	});	
	if((rowWidthList.length-1)<periodeIndex){
		rowWidthList.push((nbCours+1)*pxRow);
	}
	console.log(rowWidthList);
	console.log(nbCours);
	return rowWidthList
}

