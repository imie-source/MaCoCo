Ext.define('ExtJsMVC.view.enseignement.EnseignementWindowForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.enseignementWindowForm',
	requires : [ 'Ext.form.field.Text', ],

	bodyPadding : 10,
	id : 'enseignementWindowForm',
	modelValidation : true,

	fieldDefaults : {
		labelWidth : 100,
		labelAlign : 'right',
		selectOnFocus : true,
		flex : 1,
		anchor : '100%'
	},
	items : [ {
		fieldLabel : 'Enseignement',
		bind : '{currentEnseignement.entNom}',
		xtype : 'textfield',
	}, {
		fieldLabel : 'Contenu',
		bind : '{currentEnseignement.entContenu}',
		xtype : 'textareafield',
	}, {
		fieldLabel : 'Objet',
		bind : '{currentEnseignement.entObjet}',
		xtype : 'textareafield',
	}, {
		fieldLabel : 'Contrainte',
		bind : '{currentEnseignement.entContrainte}',
		xtype : 'textareafield',
	}, {
		fieldLabel : 'Materiel',
		bind : '{currentEnseignement.entMateriel}',
		xtype : 'textareafield',
	}, {
		xtype : 'enseignementWindowMultiSelector',
	/*
	 * xtype:'enseignementWindowSimpleGrid', selType: 'checkboxmodel', height :
	 * 200, bind:'{currentEnseignement.prerequis}',
	 */
	}, ],

	/*
	 * buttons:[{ text:'Enregistrer', handler:'onCommit', glyph:0xf00c,
	 *  }, { text:'Annuler', handler:'onReject', glyph:0xf0e2,
	 *  },
	 *  ]
	 */

	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'bottom',
		items : [ '->', {
			text : 'Enregistrer',
			handler : 'onCommit',
			glyph : 0xf00c,

		}, {
			text : 'Annuler',
			handler : 'onReject',
			glyph : 0xf0e2,

		},

		]

	} ],
});
