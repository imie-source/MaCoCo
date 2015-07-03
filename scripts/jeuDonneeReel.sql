--
-- Insertion des referentiels
--

INSERT INTO referentiel (ref_id, ref_nom) VALUES (3, 'REAC_CDI');
INSERT INTO referentiel (ref_id, ref_nom) VALUES (4, 'REAC_CPCSI');
INSERT INTO referentiel (ref_id, ref_nom) VALUES (5, 'REAC_RISR');
INSERT INTO referentiel (ref_id, ref_nom) VALUES (6, 'REAC_T2SI');
INSERT INTO referentiel (ref_id, ref_nom) VALUES (7, 'REAC_TSRIT');
INSERT INTO referentiel (ref_id, ref_nom) VALUES (2, 'REAC_DL');

SELECT pg_catalog.setval('referentiel_ref_id_seq', 7, true);

SELECT pg_catalog.setval('savoir_sav_id_seq', 1, false);
--
-- Insertion des cursus
--

INSERT INTO cursus (cur_id, cur_nom, ref_id) VALUES (3, 'ITS DL', 2);
INSERT INTO cursus (cur_id, cur_nom, ref_id) VALUES (8, 'RISR', 5);
INSERT INTO cursus (cur_id, cur_nom, ref_id) VALUES (9, 'TSRIT', 7);
INSERT INTO cursus (cur_id, cur_nom, ref_id) VALUES (10, 'ITS T2SI', 6);
INSERT INTO cursus (cur_id, cur_nom, ref_id) VALUES (11, 'CDI ', 3);
INSERT INTO cursus (cur_id, cur_nom, ref_id) VALUES (2, 'CDPN', 3);
INSERT INTO cursus (cur_id, cur_nom, ref_id) VALUES (5, 'WMD', 3);
INSERT INTO cursus (cur_id, cur_nom, ref_id) VALUES (4, 'CPCSI Tronc commun', 4);
INSERT INTO cursus (cur_id, cur_nom, ref_id) VALUES (6, 'CPCSI Sem Dev.', NULL);
INSERT INTO cursus (cur_id, cur_nom, ref_id) VALUES (7, 'CPCSI Sem Rsx', NULL);

SELECT pg_catalog.setval('cursus_cur_id_seq', 11, true);


INSERT INTO periode (per_id, per_debut, per_fin, per_nbjours, cur_id, per_nom) VALUES (1, NULL, NULL, 60, 2, 'année 3');
INSERT INTO periode (per_id, per_debut, per_fin, per_nbjours, cur_id, per_nom) VALUES (2, NULL, NULL, 60, 2, 'année 4');
INSERT INTO periode (per_id, per_debut, per_fin, per_nbjours, cur_id, per_nom) VALUES (3, NULL, NULL, 73, 4, 'periode 1');

SELECT pg_catalog.setval('periode_per_id_seq', 3, true);


INSERT INTO unite_formation_cursus (ufc_id, ufc_nom, ufc_objectifs, ufc_ordre, cur_id) VALUES (1, 'Persistance', NULL, NULL, 2);
INSERT INTO unite_formation_cursus (ufc_id, ufc_nom, ufc_objectifs, ufc_ordre, cur_id) VALUES (2, 'Application', NULL, NULL, 2);
INSERT INTO unite_formation_cursus (ufc_id, ufc_nom, ufc_objectifs, ufc_ordre, cur_id) VALUES (4, 'Géni logiciel', NULL, NULL, 2);
INSERT INTO unite_formation_cursus (ufc_id, ufc_nom, ufc_objectifs, ufc_ordre, cur_id) VALUES (3, 'Environnement de dev', NULL, NULL, 2);
INSERT INTO unite_formation_cursus (ufc_id, ufc_nom, ufc_objectifs, ufc_ordre, cur_id) VALUES (5, 'Transverse', NULL, NULL, 2);
INSERT INTO unite_formation_cursus (ufc_id, ufc_nom, ufc_objectifs, ufc_ordre, cur_id) VALUES (6, 'Mise en situation', NULL, NULL, 2);
INSERT INTO unite_formation_cursus (ufc_id, ufc_nom, ufc_objectifs, ufc_ordre, cur_id) VALUES (9, 'Dev.application  Web', NULL, NULL, 3);
INSERT INTO unite_formation_cursus (ufc_id, ufc_nom, ufc_objectifs, ufc_ordre, cur_id) VALUES (10, 'Metier Chef de projet ', NULL, NULL, 4);
INSERT INTO unite_formation_cursus (ufc_id, ufc_nom, ufc_objectifs, ufc_ordre, cur_id) VALUES (11, 'Architecture réseau', NULL, NULL, 4);
INSERT INTO unite_formation_cursus (ufc_id, ufc_nom, ufc_objectifs, ufc_ordre, cur_id) VALUES (12, ' Architecture logicielle', '', NULL, 4);
INSERT INTO unite_formation_cursus (ufc_id, ufc_nom, ufc_objectifs, ufc_ordre, cur_id) VALUES (13, 'Compétences transverses', NULL, NULL, 4);
INSERT INTO unite_formation_cursus (ufc_id, ufc_nom, ufc_objectifs, ufc_ordre, cur_id) VALUES (14, 'Architecture logicielle', NULL, NULL, 6);
INSERT INTO unite_formation_cursus (ufc_id, ufc_nom, ufc_objectifs, ufc_ordre, cur_id) VALUES (16, 'Architecture réseau', NULL, NULL, 7);

SELECT pg_catalog.setval('unite_formation_cursus_ufc_id_seq', 16, true);


INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (2, 'Administration', NULL, NULL, 1);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (3, 'reporting', NULL, NULL, 1);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (4, 'Référencement', NULL, NULL, 2);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (5, 'WOA', NULL, NULL, 2);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (7, 'POO', NULL, NULL, 2);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (8, 'Mobilité', NULL, NULL, 2);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (9, 'IOT', NULL, NULL, 2);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (10, 'Protocoles de comm', NULL, NULL, 2);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (11, 'GIT', NULL, NULL, 3);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (12, 'Modélisation', NULL, NULL, 4);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (13, 'Tests', NULL, NULL, 4);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (14, 'Architecture', NULL, NULL, 4);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (15, 'altenance et compétence', NULL, NULL, 5);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (16, 'Gestion de projet', NULL, NULL, 5);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (17, 'Projet fil rouge', NULL, NULL, 6);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (18, 'Sécurité', NULL, NULL, 4);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (19, 'Qualité logicielle', NULL, NULL, 4);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (20, 'Dev Ops', NULL, NULL, 4);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (1, 'Technologies de persistance', NULL, NULL, 1);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (21, 'Developper avec la persistance', NULL, NULL, 1);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (22, 'livrables documentaire', NULL, NULL, 5);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (25, 'Les principes du management de projet', NULL, NULL, 10);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (35, 'Gestion des appels d''offre ', NULL, NULL, 10);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (34, 'Veille technologique ', NULL, NULL, 10);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (36, 'Projet de synthèse', NULL, NULL, 10);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (37, 'Gouvernance du système d''information', NULL, NULL, 10);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (6, 'web', NULL, NULL, 2);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (40, 'Architecture système et réseau ', NULL, NULL, 11);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (41, 'Cloud computing ', NULL, NULL, 11);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (42, 'Sécurité du SI ', NULL, NULL, 11);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (43, 'Les enjeux de l''infrastructure du SI sur la gouvernance d''entreprise', NULL, NULL, 11);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (46, 'Urbanisation ', NULL, NULL, 12);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (45, 'Application web ', 'Maitriser servlet, JSP, MVC', NULL, 12);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (47, 'Architecture en couche, ORM, SOA', NULL, NULL, 12);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (48, 'Industrialisation ', NULL, NULL, 12);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (49, 'Stratégie de test', NULL, NULL, 12);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (51, 'Approche métier', 'Obtenir une culture professionnelle et actuelle dans le management des systèmes d''information ', NULL, 13);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (53, 'Développement personnel', NULL, NULL, 13);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (50, 'Sécurité ', NULL, NULL, 12);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (54, 'Concepts et bases en culture logicielle ', NULL, NULL, 14);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (57, 'Organisation et concepts (analyse fonctionnelle)', NULL, NULL, 16);


SELECT pg_catalog.setval('module_cursus_moc_id_seq', 57, true);





SELECT pg_catalog.setval('activite_type_act_id_seq', 1, false);

SELECT pg_catalog.setval('competence_pro_com_id_seq', 1, false);


INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (96, 'SOA', NULL, NULL, NULL, NULL, 0, 47, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (101, 'Tests automatisés, build automation, TDD, PIC, BDD', NULL, NULL, NULL, NULL, 0, 48, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (92, 'ISO 25000
', NULL, NULL, NULL, 'theorie  + comment l''appliquer sur un projet
', 0, 19, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (105, 'UML avancé', NULL, NULL, NULL, 'Survole des 14 schémas. Approfondissement sur les diagrammes peu vu : profil, composite', 0, 12, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (116, 'Analyse organisationnelle  : Stratégie d''entreprise', NULL, NULL, NULL, NULL, 0, 37, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (125, 'Les normes du management de projet ', NULL, NULL, NULL, NULL, 0, 25, 4);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (133, 'Les domaines : Management des équipes et partie prenantes', NULL, NULL, NULL, NULL, 0, 25, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (145, 'Lien entre l''architecture du SI et la gouvernance d''entreprise', NULL, NULL, NULL, NULL, 0, 43, 0.5);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (144, 'Sécurité du SI', NULL, NULL, NULL, NULL, 0, 42, 3);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (39, 'Applications mobiles natif', NULL, NULL, NULL, NULL, 6, 8, 5);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (35, 'MVC client web - WOA', NULL, NULL, NULL, NULL, 8, 5, 4);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (54, 'Développement d''un produit
', NULL, NULL, NULL, 'Cahier des charges imposé par IMIE
', 22, 17, 4);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (2, 'rappel SQL', NULL, NULL, NULL, 'postgres', 24, 1, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (51, 'AMOA : Analyse fonctionelle
', NULL, NULL, NULL, NULL, 19, 16, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (49, 'Architecture en couche standard -Design Patterns', NULL, '', NULL, 'factory, facade, proxy', 17, 14, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (42, 'Web Service N2 : produire WS Rest / SOAP', NULL, NULL, NULL, 'JEE + NodeJs
', 11, 10, 3);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (53, 'Conception d''un produit', NULL, NULL, NULL, 'Cahier des charges imposé par IMIE
', 21, 17, 4);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (38, 'Programmer dans un langage objet N2', NULL, NULL, NULL, 'rappel N1 + multiThreading', 7, 7, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (4, 'rappel admin sgbd + clustering', NULL, NULL, NULL, 'postgres', 27, 2, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (37, 'Composer un modèle objet N2', NULL, NULL, NULL, 'rappel N1 + délégation, résolution diamant + design pattern', 9, 7, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (40, 'Objets connectés', NULL, NULL, NULL, NULL, 10, 9, 5);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (44, 'rappel + merise N2', NULL, NULL, NULL, 'héritage, containtes d''intégrité', 12, 12, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (45, 'rappel + Tests unitaires et intégration automatisés N2', NULL, NULL, NULL, 'mock + mock d''injection
Mockito', 13, 13, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (46, 'tests : les différents types, stratégie, processus, pilotage', NULL, NULL, NULL, NULL, 14, 13, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (47, 'réaliser une recette fonctionnelle', NULL, NULL, NULL, ' Elaborer et exécuter des scénarii de tests et rédiger des comptes-rendus 
', 15, 13, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (48, 'Injection de dépendance et composant ditribué', NULL, NULL, NULL, 'JEE', 16, 14, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (36, 'AngularJS', NULL, NULL, NULL, NULL, 5, 5, 3);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (50, 'Alternance et competence', NULL, NULL, NULL, NULL, 18, 15, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (32, 'HTML et CSS N2', NULL, NULL, NULL, 'canvas, web component, varaibles css', 1, 6, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (52, 'cycles de vie et livrables associés', NULL, NULL, NULL, 'cascade,V,RAD,itértif
', 20, 16, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (8, 'réferencement - seo', NULL, NULL, NULL, NULL, 31, 4, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (5, 'optimisation des données', NULL, NULL, NULL, 'indexation, explain plan, dénormalisaiton
postgres', 26, 2, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (43, 'rappel GIT', NULL, NULL, NULL, NULL, 23, 11, 0.5);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (3, 'Programation SGBD', NULL, NULL, NULL, 'postgres', 25, 21, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (41, 'WebSocket', NULL, NULL, NULL, 'JEE + NodeJs', 4, 10, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (33, 'serveur web N2', NULL, NULL, NULL, 'servlet,listener,filter,jsp,jstl,templating
JEE', 3, 6, 3);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (6, 'Data dans le cloud', NULL, NULL, NULL, 'MongoLab', 28, 2, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (7, 'rappel générer des rapport et des état', NULL, NULL, NULL, 'Birt', 30, 3, 0.5);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (34, 'rappel javascript Objet', NULL, NULL, NULL, NULL, 2, 5, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (1, 'NO SQL', NULL, NULL, NULL, 'mongoDB', 29, 1, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (146, 'Enjeux et impacts', NULL, NULL, NULL, NULL, 0, 43, 0.5);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (95, 'ORM', NULL, NULL, NULL, NULL, 0, 47, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (99, 'JPC - MVC', NULL, NULL, NULL, NULL, 0, 45, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (103, 'Certificat, signature, authentification', NULL, NULL, NULL, NULL, 0, 50, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (109, 'POO', NULL, NULL, NULL, NULL, 0, 54, 3);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (114, 'Les différents matériels constituant un réseau', NULL, NULL, NULL, NULL, 0, 57, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (117, 'Analyse organisationnelle : Schéma directeur', NULL, NULL, NULL, NULL, 0, 37, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (126, 'Les domaines : Management de l''intégration et du contenu', NULL, NULL, NULL, NULL, 0, 25, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (128, 'Les domaines : Management des coûts et des approvisionnements', NULL, NULL, NULL, NULL, 0, 25, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (143, 'Connaissances des différentes solutions sur le marché', NULL, NULL, NULL, NULL, 0, 41, 0.5);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (94, 'Architecture en couche', NULL, NULL, NULL, NULL, 0, 47, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (107, 'Méthodes qualité logicielle', NULL, 'Utiliser les bonnes pratiques, ISO 25000', NULL, NULL, 0, 54, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (100, 'MDA', NULL, NULL, NULL, NULL, 0, 12, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (113, 'Le rôle de l''architecte, notion de composant, les différentes architectures', NULL, NULL, NULL, NULL, 0, 14, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (141, 'Les différents types de cloud PAAS, SAAS,IAAS', NULL, NULL, NULL, NULL, 0, 41, 0.25);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (118, 'Etude de cas : gouvernance d''entreprise ', NULL, NULL, NULL, NULL, 0, 37, 4);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (119, 'Datawarehouse  : Informatique décisionnelle et Buisness Intelligence', NULL, NULL, NULL, NULL, 0, 37, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (121, 'Les outils de la gouvernance ', NULL, NULL, NULL, NULL, 0, 37, 3);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (122, 'Les enjeux juridiques', NULL, NULL, NULL, NULL, 0, 37, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (124, 'Le cadre du management de projet ', NULL, NULL, NULL, NULL, 0, 25, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (127, 'Les domaines : Management de la qualité', NULL, NULL, NULL, NULL, 0, 25, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (129, 'Les domaines : Management des risques et des délais', NULL, NULL, NULL, NULL, 0, 25, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (131, 'Etude de cas technique', NULL, NULL, NULL, NULL, 0, 36, 10);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (134, 'Conception et dimensionnement des réseaux et infrastructures', NULL, NULL, NULL, NULL, 0, 40, 2.5);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (108, 'UML', NULL, NULL, NULL, NULL, 0, 54, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (97, 'Sécurité applicative, Authentification, Identification', NULL, NULL, NULL, 'injection sql et javascript, gestion des droits applicatifs, authentification par certificat', 0, 18, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (115, ' Administration- protocoles - normes - communication générale', NULL, NULL, NULL, NULL, 0, 57, 4);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (123, 'Réponse à un appel d''offre', NULL, NULL, NULL, NULL, 0, 35, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (132, 'Les outils du chef de projet : Management "Agiles"', NULL, NULL, NULL, NULL, 0, 25, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (135, 'Infrastructure Télécoms ', NULL, NULL, NULL, NULL, 0, 40, 0.5);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (136, 'Etude de cas: Mise en place d''une infrastructure réseau ', NULL, NULL, NULL, NULL, 0, 40, 2.5);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (137, ' Soutenance Etude de cas infrastructure réseau', NULL, NULL, NULL, NULL, 0, 40, 0.5);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (79, 'Les techniques de sourcing et recrutement', NULL, NULL, NULL, NULL, 0, 51, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (98, 'Servlet', NULL, NULL, NULL, NULL, 0, 45, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (76, 'Conférence professionnelle', NULL, NULL, NULL, NULL, 0, 51, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (80, 'Comportement et savoir être ', NULL, NULL, NULL, NULL, 0, 53, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (78, 'Coaching & développement son leadership', NULL, NULL, NULL, NULL, 0, 53, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (81, 'Gestion des conflits', NULL, NULL, NULL, NULL, 0, 53, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (102, 'Pilotage ', NULL, NULL, NULL, NULL, 0, 49, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (104, 'Urbanisation ', NULL, NULL, NULL, NULL, 0, 46, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (77, 'Base graph en arbre', NULL, NULL, NULL, 'NEO4J ou  orientDB', 0, 1, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (82, 'ORM Niveau 2', NULL, NULL, NULL, 'JEE
', 0, 21, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (83, 'PIC', NULL, NULL, NULL, NULL, 0, 20, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (84, 'Cloud pour l''industrialisation', NULL, NULL, NULL, NULL, 0, 20, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (85, 'Utilisation conteneur léger', NULL, NULL, NULL, 'Docker', 0, 20, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (86, 'Déployer une application  et mise en production', NULL, NULL, NULL, 'déploiement manuel, contenu du livrable, déploiement dans le cloud, déploiment automatique
', 0, 20, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (87, 'Build Automation', NULL, NULL, NULL, 'gradle
', 0, 20, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (88, 'Tests automatisés - performance', NULL, NULL, NULL, 'Jmeter
', 0, 19, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (89, 'Tests fonctionnels automatisés', NULL, NULL, NULL, 'selenium IDE + webdriver
', 0, 19, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (130, 'Principes de veille et outils collaboratifs ', NULL, NULL, NULL, NULL, 0, 34, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (142, 'Introduction à la virtualisation et ses principes', NULL, NULL, NULL, NULL, 0, 41, 0.5);

SELECT pg_catalog.setval('cours_cursus_coc_id_seq', 146, true);


--
-- Insertion des enseignements
--

INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (41, 'Etude de cas: Mise en place d''une infrastructure réseau ', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (38, 'Etude de cas technique ( épreuve jury )', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (42, ' Soutenance Etude de cas infrastructure réseau', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (4, 'Les domaines : Management de l''intégration et du contenu', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (5, 'Les domaines : Management de la qualité', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (6, 'Les domaines : Management des coûts et des approvisionnements', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (8, 'Les domaines : Management des risques et des délais', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (7, 'Analyse du besoin ', '', NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (9, 'Mise en place du projet ', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (10, 'Introduction à l''organisation d''entreprise ', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (11, 'Mobiliser un comportement orienté client', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (13, 'Gestion de projet : Concepts généraux et conduite opérationnelle ', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (14, 'Maitriser les coûts et les délais', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (15, 'Management d''équipe', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (16, 'Améliorer la délivrance des services informatiques ', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (17, 'Gestion de projet : cycle de vie du projet ', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (19, 'Pilotage projet ', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (20, 'Alternance et compétences', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (21, 'Veille technologique', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (22, 'TP de synthèse', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (24, 'Les domaines : Management des équipes et partie prenantes', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (25, 'Les outils du chef de projet : Management "Agiles"', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (26, 'Initiation :Les méthodes agiles ', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (27, 'Perfectionnement 1 : Les méthodes Agiles', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (28, 'Perfectionnement 2 : Les méthodes Agiles ', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (29, 'Analyse organisationnelle  : Stratégie d''entreprise', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (30, 'Analyse organisationnelle : Schéma directeur', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (31, 'Datawarehouse  : Informatique décisionnelle et Buisness Intelligence', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (32, 'Les enjeux juridiques', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (33, 'Les outils de la gouvernance ', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (34, 'Etude de cas : gouvernance d''entreprise ', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (18, 'Outils qualité et système de pilotage projet ', 'Les outils "qualité logicielle" et les bonnes pratiques
Les normes
CMMi
Les indicateurs de performance et tableaux de bord ', 'savoir appliquer  et  faire  appliquer  les  normes  de  qualité  et  de  sécurité  logicielle  de  son  entreprise  ou  de  son 
prestataire de services.
Savoir rendre compte de l''avancement des travaux, des difficultés rencontrées et indiquer le reste à faire.', NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (43, 'Cloud computing', 'Les différents types de cloud PAAS, SAAS,IAAS
Introduction à la virtualisation et ses principes
Connaissances des différentes solutions sur le marché', NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (12, 'utiliser les bonnes pratiques pour améliorer la délivrance du SI ', 'ITIL se décompose en neuf domaines, correspondant à neuf livres, permettant de couvrir l''ensemble des problématiques couvertes par les DSI. 

Service Support
Service Delivery
Infrastructure Management
Applications Management
Service Management
Business Perspective
Business Requirements
Technology', 'L''objectif d''ITIL est de doter les directions des systèmes informatiques (DSI) d''outils et de documents leur permettant d''améliorer la qualité de leurs prestations, c''est-à-dire améliorer la satisfaction de leurs clients, tout en répondant au mieux aux objectifs stratégiques de l''organisation', NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (35, ' UML ', NULL, 'Comprendre ce que sont les concepts « objet ». 
Utiliser le langage UML afin de permettre et  de « mieux
comprendre », de visualiser le besoin . ', NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (36, 'Réponse à un appel d''offre', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (2, 'Le cadre du management de projet', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (3, 'Les normes du management de projet', 'Cinq groupes de processus du management de projet suivants
•	le démarrage,
•	la planification,
•	l’exécution,
•	la surveillance et la maîtrise,
•	la clôture.
', NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (37, 'Principes de veille et outils collaboratifs ', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (39, 'Conception et dimensionnement des réseaux et infrastructures', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (40, 'Infrastructure Télécoms ', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (44, 'Sécurité du SI ', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel) VALUES (45, 'Les enjeux de l''infrastructure du SI sur la gouvernance d''entreprise', 'Lien entre l''architecture du SI et la gouvernance d''entreprise
Enjeux et impacts', NULL, NULL, NULL);

SELECT pg_catalog.setval('enseignement_ent_id_seq', 45, true);




INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (4, 2);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (4, 3);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (5, 2);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (5, 3);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (5, 4);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (8, 2);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (6, 2);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (3, 2);



INSERT INTO utilisateur (id_utilisateur, nom_utilisateur, password_utilisateur) VALUES (2, 'imie', '383802d3b28964619d5fa0c868d75aaf1bb14791df07f622f8c7157821a5ba9a');

SELECT pg_catalog.setval('utilisateur_id_utilisateur_seq', 2, true);
