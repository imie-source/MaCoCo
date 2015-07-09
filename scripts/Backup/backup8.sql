--
-- PostgreSQL database dump
--

-- Dumped from database version 9.3.5
-- Dumped by pg_dump version 9.3.5
-- Started on 2015-07-09 13:59:03 CEST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- TOC entry 207 (class 3079 OID 11756)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2182 (class 0 OID 0)
-- Dependencies: 207
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_with_oids = false;

--
-- TOC entry 170 (class 1259 OID 25406)
-- Name: activite_type; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE activite_type (
    act_id integer NOT NULL,
    act_libelle character varying(500),
    ref_id integer
);


--
-- TOC entry 171 (class 1259 OID 25412)
-- Name: activite_type_act_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE activite_type_act_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2183 (class 0 OID 0)
-- Dependencies: 171
-- Name: activite_type_act_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE activite_type_act_id_seq OWNED BY activite_type.act_id;


--
-- TOC entry 172 (class 1259 OID 25414)
-- Name: competence_pro; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE competence_pro (
    com_id integer NOT NULL,
    com_libelle character varying(500),
    act_id integer
);


--
-- TOC entry 173 (class 1259 OID 25420)
-- Name: competence_pro_com_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE competence_pro_com_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2184 (class 0 OID 0)
-- Dependencies: 173
-- Name: competence_pro_com_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE competence_pro_com_id_seq OWNED BY competence_pro.com_id;


--
-- TOC entry 174 (class 1259 OID 25422)
-- Name: cours_cursus; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE cours_cursus (
    coc_id integer NOT NULL,
    coc_intitule character varying(100),
    coc_type character varying(100),
    coc_objectifs character varying(500),
    coc_evaluation character varying(500),
    coc_commentaires character varying(500),
    coc_ordre integer,
    moc_id integer,
    coc_duree double precision
);


--
-- TOC entry 175 (class 1259 OID 25428)
-- Name: cours_cursus_coc_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE cours_cursus_coc_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2185 (class 0 OID 0)
-- Dependencies: 175
-- Name: cours_cursus_coc_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE cours_cursus_coc_id_seq OWNED BY cours_cursus.coc_id;


--
-- TOC entry 176 (class 1259 OID 25430)
-- Name: cours_promo; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE cours_promo (
    cop_id integer NOT NULL,
    cop_duree double precision,
    cop_intitule character varying(100),
    cop_type character varying(100),
    cop_objectifs character varying(500),
    cop_evaluation character varying(500),
    cop_commentaires character varying(500),
    cop_ordre integer,
    coc_id integer,
    mop_id integer
);


--
-- TOC entry 177 (class 1259 OID 25436)
-- Name: cours_promo_cop_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE cours_promo_cop_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2186 (class 0 OID 0)
-- Dependencies: 177
-- Name: cours_promo_cop_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE cours_promo_cop_id_seq OWNED BY cours_promo.cop_id;


--
-- TOC entry 178 (class 1259 OID 25438)
-- Name: cursus; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE cursus (
    cur_id integer NOT NULL,
    cur_nom character varying(100),
    ref_id integer
);


--
-- TOC entry 179 (class 1259 OID 25441)
-- Name: cursus_cur_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE cursus_cur_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2187 (class 0 OID 0)
-- Dependencies: 179
-- Name: cursus_cur_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE cursus_cur_id_seq OWNED BY cursus.cur_id;


--
-- TOC entry 180 (class 1259 OID 25443)
-- Name: enseignement; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE enseignement (
    ent_id integer NOT NULL,
    ent_nom character varying(100),
    ent_contenu character varying(500),
    ent_objet character varying(500),
    ent_contrainte character varying(500),
    ent_materiel character varying(500),
    ent_idprerequis integer
);


--
-- TOC entry 181 (class 1259 OID 25449)
-- Name: enseignement_ent_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE enseignement_ent_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2188 (class 0 OID 0)
-- Dependencies: 181
-- Name: enseignement_ent_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE enseignement_ent_id_seq OWNED BY enseignement.ent_id;


--
-- TOC entry 182 (class 1259 OID 25451)
-- Name: module_cursus; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE module_cursus (
    moc_id integer NOT NULL,
    moc_intitule character varying(100),
    moc_objectifs character varying(500),
    moc_ordre integer,
    ufc_id integer
);


--
-- TOC entry 183 (class 1259 OID 25457)
-- Name: module_cursus_moc_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE module_cursus_moc_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2189 (class 0 OID 0)
-- Dependencies: 183
-- Name: module_cursus_moc_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE module_cursus_moc_id_seq OWNED BY module_cursus.moc_id;


--
-- TOC entry 184 (class 1259 OID 25459)
-- Name: module_promo; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE module_promo (
    mop_id integer NOT NULL,
    mop_intitule character varying(100),
    mop_objectifs character varying(500),
    mop_ordre integer,
    moc_id integer,
    ufp_id integer
);


--
-- TOC entry 185 (class 1259 OID 25465)
-- Name: module_promo_mop_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE module_promo_mop_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2190 (class 0 OID 0)
-- Dependencies: 185
-- Name: module_promo_mop_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE module_promo_mop_id_seq OWNED BY module_promo.mop_id;


--
-- TOC entry 186 (class 1259 OID 25467)
-- Name: periode; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE periode (
    per_id integer NOT NULL,
    per_debut date,
    per_fin date,
    per_nbjours integer,
    cur_id integer,
    per_nom character varying(80)
);


--
-- TOC entry 205 (class 1259 OID 25717)
-- Name: periode_per_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE periode_per_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2191 (class 0 OID 0)
-- Dependencies: 205
-- Name: periode_per_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE periode_per_id_seq OWNED BY periode.per_id;


--
-- TOC entry 187 (class 1259 OID 25470)
-- Name: periode_promotion; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE periode_promotion (
    perpro_id integer NOT NULL,
    perpro_debut date,
    perpro_fin date,
    perpro_nbjours integer,
    pro_id integer,
    perpro_nom character varying(80)
);


--
-- TOC entry 206 (class 1259 OID 25719)
-- Name: periode_promotion_perpro_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE periode_promotion_perpro_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2192 (class 0 OID 0)
-- Dependencies: 206
-- Name: periode_promotion_perpro_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE periode_promotion_perpro_id_seq OWNED BY periode_promotion.perpro_id;


--
-- TOC entry 188 (class 1259 OID 25473)
-- Name: prerequis_enseignement; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE prerequis_enseignement (
    ent_id integer NOT NULL,
    ent_id_enseignement integer NOT NULL
);


--
-- TOC entry 189 (class 1259 OID 25476)
-- Name: promotion; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE promotion (
    pro_id integer NOT NULL,
    pro_nom character varying(100),
    cur_id integer
);


--
-- TOC entry 190 (class 1259 OID 25479)
-- Name: promotion_pro_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE promotion_pro_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2193 (class 0 OID 0)
-- Dependencies: 190
-- Name: promotion_pro_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE promotion_pro_id_seq OWNED BY promotion.pro_id;


--
-- TOC entry 191 (class 1259 OID 25481)
-- Name: r_courscursus_enseignement; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE r_courscursus_enseignement (
    coc_id integer NOT NULL,
    ent_id integer NOT NULL
);


--
-- TOC entry 192 (class 1259 OID 25484)
-- Name: r_courscursus_savoir; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE r_courscursus_savoir (
    coc_id integer NOT NULL,
    sav_id integer NOT NULL
);


--
-- TOC entry 193 (class 1259 OID 25487)
-- Name: r_courspromo_enseignement; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE r_courspromo_enseignement (
    cop_id integer NOT NULL,
    ent_id integer NOT NULL
);


--
-- TOC entry 194 (class 1259 OID 25490)
-- Name: r_courspromo_savoir; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE r_courspromo_savoir (
    cop_id integer NOT NULL,
    sav_id integer NOT NULL
);


--
-- TOC entry 195 (class 1259 OID 25493)
-- Name: referentiel; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE referentiel (
    ref_id integer NOT NULL,
    ref_nom character varying(100)
);


--
-- TOC entry 196 (class 1259 OID 25496)
-- Name: referentiel_ref_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE referentiel_ref_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2194 (class 0 OID 0)
-- Dependencies: 196
-- Name: referentiel_ref_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE referentiel_ref_id_seq OWNED BY referentiel.ref_id;


--
-- TOC entry 197 (class 1259 OID 25498)
-- Name: savoir; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE savoir (
    sav_id integer NOT NULL,
    sav_libelle character varying(500),
    com_id integer
);


--
-- TOC entry 198 (class 1259 OID 25504)
-- Name: savoir_sav_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE savoir_sav_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2195 (class 0 OID 0)
-- Dependencies: 198
-- Name: savoir_sav_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE savoir_sav_id_seq OWNED BY savoir.sav_id;


--
-- TOC entry 199 (class 1259 OID 25506)
-- Name: unite_formation_cursus; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE unite_formation_cursus (
    ufc_id integer NOT NULL,
    ufc_nom character varying(100),
    ufc_objectifs character varying(500),
    ufc_ordre integer,
    cur_id integer
);


--
-- TOC entry 200 (class 1259 OID 25512)
-- Name: unite_formation_cursus_ufc_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE unite_formation_cursus_ufc_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2196 (class 0 OID 0)
-- Dependencies: 200
-- Name: unite_formation_cursus_ufc_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE unite_formation_cursus_ufc_id_seq OWNED BY unite_formation_cursus.ufc_id;


--
-- TOC entry 201 (class 1259 OID 25514)
-- Name: unite_formation_promo; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE unite_formation_promo (
    ufp_id integer NOT NULL,
    ufp_nom character varying(100),
    ufp_objectifs character varying(500),
    ufp_ordre integer,
    ufc_id integer,
    pro_id integer
);


--
-- TOC entry 202 (class 1259 OID 25520)
-- Name: unite_formation_promo_ufp_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE unite_formation_promo_ufp_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2197 (class 0 OID 0)
-- Dependencies: 202
-- Name: unite_formation_promo_ufp_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE unite_formation_promo_ufp_id_seq OWNED BY unite_formation_promo.ufp_id;


--
-- TOC entry 203 (class 1259 OID 25522)
-- Name: utilisateur; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE utilisateur (
    id_utilisateur integer NOT NULL,
    nom_utilisateur character varying(100),
    password_utilisateur character varying(500)
);


--
-- TOC entry 204 (class 1259 OID 25528)
-- Name: utilisateur_id_utilisateur_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE utilisateur_id_utilisateur_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2198 (class 0 OID 0)
-- Dependencies: 204
-- Name: utilisateur_id_utilisateur_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE utilisateur_id_utilisateur_seq OWNED BY utilisateur.id_utilisateur;


--
-- TOC entry 1948 (class 2604 OID 25530)
-- Name: act_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY activite_type ALTER COLUMN act_id SET DEFAULT nextval('activite_type_act_id_seq'::regclass);


--
-- TOC entry 1949 (class 2604 OID 25531)
-- Name: com_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY competence_pro ALTER COLUMN com_id SET DEFAULT nextval('competence_pro_com_id_seq'::regclass);


--
-- TOC entry 1950 (class 2604 OID 25532)
-- Name: coc_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY cours_cursus ALTER COLUMN coc_id SET DEFAULT nextval('cours_cursus_coc_id_seq'::regclass);


--
-- TOC entry 1951 (class 2604 OID 25533)
-- Name: cop_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY cours_promo ALTER COLUMN cop_id SET DEFAULT nextval('cours_promo_cop_id_seq'::regclass);


--
-- TOC entry 1952 (class 2604 OID 25534)
-- Name: cur_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY cursus ALTER COLUMN cur_id SET DEFAULT nextval('cursus_cur_id_seq'::regclass);


--
-- TOC entry 1953 (class 2604 OID 25535)
-- Name: ent_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY enseignement ALTER COLUMN ent_id SET DEFAULT nextval('enseignement_ent_id_seq'::regclass);


--
-- TOC entry 1954 (class 2604 OID 25536)
-- Name: moc_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY module_cursus ALTER COLUMN moc_id SET DEFAULT nextval('module_cursus_moc_id_seq'::regclass);


--
-- TOC entry 1955 (class 2604 OID 25537)
-- Name: mop_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY module_promo ALTER COLUMN mop_id SET DEFAULT nextval('module_promo_mop_id_seq'::regclass);


--
-- TOC entry 1956 (class 2604 OID 25727)
-- Name: per_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY periode ALTER COLUMN per_id SET DEFAULT nextval('periode_per_id_seq'::regclass);


--
-- TOC entry 1957 (class 2604 OID 25728)
-- Name: perpro_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY periode_promotion ALTER COLUMN perpro_id SET DEFAULT nextval('periode_promotion_perpro_id_seq'::regclass);


--
-- TOC entry 1958 (class 2604 OID 25538)
-- Name: pro_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY promotion ALTER COLUMN pro_id SET DEFAULT nextval('promotion_pro_id_seq'::regclass);


--
-- TOC entry 1959 (class 2604 OID 25539)
-- Name: ref_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY referentiel ALTER COLUMN ref_id SET DEFAULT nextval('referentiel_ref_id_seq'::regclass);


--
-- TOC entry 1960 (class 2604 OID 25540)
-- Name: sav_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY savoir ALTER COLUMN sav_id SET DEFAULT nextval('savoir_sav_id_seq'::regclass);


--
-- TOC entry 1961 (class 2604 OID 25541)
-- Name: ufc_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY unite_formation_cursus ALTER COLUMN ufc_id SET DEFAULT nextval('unite_formation_cursus_ufc_id_seq'::regclass);


--
-- TOC entry 1962 (class 2604 OID 25542)
-- Name: ufp_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY unite_formation_promo ALTER COLUMN ufp_id SET DEFAULT nextval('unite_formation_promo_ufp_id_seq'::regclass);


--
-- TOC entry 1963 (class 2604 OID 25543)
-- Name: id_utilisateur; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY utilisateur ALTER COLUMN id_utilisateur SET DEFAULT nextval('utilisateur_id_utilisateur_seq'::regclass);


--
-- TOC entry 2139 (class 0 OID 25406)
-- Dependencies: 170
-- Data for Name: activite_type; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO activite_type (act_id, act_libelle, ref_id) VALUES (1, 'PILOTER LA CONCEPTION D’UN SYSTEME D’INFORMATION', 4);
INSERT INTO activite_type (act_id, act_libelle, ref_id) VALUES (3, 'PILOTER  LA REALISATION D’UN SYSTEME D’INFORMATION', 4);
INSERT INTO activite_type (act_id, act_libelle, ref_id) VALUES (4, 'CONDUITE DU CHANGEMENT ET MANAGEMENT DE PROJET', 4);
INSERT INTO activite_type (act_id, act_libelle, ref_id) VALUES (5, 'PILOTER L’ADMINISTRATION TECHNIQUE DU SYSTEME D’INFORMATION', 4);


--
-- TOC entry 2199 (class 0 OID 0)
-- Dependencies: 171
-- Name: activite_type_act_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('activite_type_act_id_seq', 5, true);


--
-- TOC entry 2141 (class 0 OID 25414)
-- Dependencies: 172
-- Data for Name: competence_pro; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO competence_pro (com_id, com_libelle, act_id) VALUES (1, 'ANALYSER LES BESOINS ET AUDITER L’EXISTANT', 1);
INSERT INTO competence_pro (com_id, com_libelle, act_id) VALUES (2, 'CONCEVOIR
LE MODELE FONCTIONNEL
ET TECHNIQUE
', 1);
INSERT INTO competence_pro (com_id, com_libelle, act_id) VALUES (4, 'ELABORER, LANCER ET GERER UN APPEL D’OFFRES', 1);
INSERT INTO competence_pro (com_id, com_libelle, act_id) VALUES (5, 'ADMINISTRER UNE BASE DE DONNEES RELATIONNELLE', 5);
INSERT INTO competence_pro (com_id, com_libelle, act_id) VALUES (6, 'ADMINISTRER
UN RESEAU INFORMATIQUE
', 5);
INSERT INTO competence_pro (com_id, com_libelle, act_id) VALUES (7, 'ADMINISTRER 
UN SYSTEME INFORMATIQUE
', 5);
INSERT INTO competence_pro (com_id, com_libelle, act_id) VALUES (8, 'ASSISTANCE COMPLEMENTAIRE A MAITRISE D’OUVRAGE', 4);
INSERT INTO competence_pro (com_id, com_libelle, act_id) VALUES (9, 'VEILLE TECHNOLOGIQUE ET 
PROMOTION DES NTIC
', 4);
INSERT INTO competence_pro (com_id, com_libelle, act_id) VALUES (10, 'CONDUITE DU CHANGEMENT', 4);
INSERT INTO competence_pro (com_id, com_libelle, act_id) VALUES (11, 'GARANTIR LA MAINTENANCE  DES LOGICIELS', 3);
INSERT INTO competence_pro (com_id, com_libelle, act_id) VALUES (12, 'DEPLOYER LA SOLUTION TECHNIQUE', 3);
INSERT INTO competence_pro (com_id, com_libelle, act_id) VALUES (13, 'METTRE  EN PLACE LES CAMPAGNES  DE TESTS
', 3);
INSERT INTO competence_pro (com_id, com_libelle, act_id) VALUES (14, 'DEVELOPPER LES SOLUTIONS', 3);
INSERT INTO competence_pro (com_id, com_libelle, act_id) VALUES (15, 'CONCEVOIR ET PILOTER L’ASPECT TELECOMMUNICATIONS D’UN SYSTEME D’INFORMATION', 1);


--
-- TOC entry 2200 (class 0 OID 0)
-- Dependencies: 173
-- Name: competence_pro_com_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('competence_pro_com_id_seq', 15, true);


--
-- TOC entry 2143 (class 0 OID 25422)
-- Dependencies: 174
-- Data for Name: cours_cursus; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (2001, 'Analyse du besoin (exigences fonctionnelles et non-fonctionelles)', '', '', 'evaluation projet en fin de module', NULL, 1, 2001, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (2002, 'Accessibilité et ergonomie', '', '', 'evaluation projet en fin de module', NULL, 2, 2001, 3);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (2003, '7 étapes du maquettage', '', '', 'evaluation projet en fin de module', NULL, 3, 2001, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (2004, 'mise en place du projet', '', '', 'evaluation projet en fin de module', NULL, 4, 2002, 3);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (2005, 'Méthode Agile', '', '', '', NULL, 5, 2002, 3);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (2006, 'Méthodologie de travail (réseaux sociaux, veille, organisation..)', '', '', '', NULL, 6, 2002, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (2007, 'Propriété intellectuelle et licence', '', '', '', NULL, 7, 2002, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (2008, 'GIT', '', '', '', NULL, 8, 2003, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (2009, 'IDE', '', '', '', NULL, 9, 2003, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (2010, 'Linux', '', '', 'evaluation projet en fin de module', NULL, 10, 2003, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (2011, 'Modéliser une application en utilisant UML (14 diag)', '', '', '', NULL, 11, 2004, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (2012, 'La qualité logicielle', '', '', '', NULL, 12, 2004, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (2013, 'Déployer l’application ', '', '', '', NULL, 13, 2005, 3);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (2014, '3 types de Cloud (IAAS,PAAS,SAAS)', '', '', '', NULL, 14, 2005, 3);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (2015, 'Cloud au service du développeur (IAAS, data,dev)', '', '', '', NULL, 15, 2005, 4);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (2016, 'Déployer l’application ', '', '', '', NULL, 16, 2005, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (2017, 'Stratégie de test et recette fonctionnelle', '', '', '', NULL, 17, 2006, 3);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (2018, 'test unitaire & test integration', '', '', '', NULL, 18, 2006, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (2019, 'Composer un modèle Objet (POO)', '', '', '', NULL, 19, 2007, 3);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (2020, 'Programmer dans un langage Objet ', '', '', '', NULL, 20, 2007, 3);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (2021, 'Algorithmie et programmation structurée ', '', '', '', NULL, 21, 2008, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (2022, 'les bases du PHP', '', '', '', NULL, 22, 2008, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (2023, 'Intégrer et enrichir une application e-commerce', '', '', '', NULL, 23, 2009, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (2024, 'Intégrer et enrichir une application CMS ', '', '', '', NULL, 24, 2009, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (101, 'Tests automatisés, build automation, TDD, PIC, BDD', NULL, NULL, NULL, NULL, 14, 48, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (125, 'Les normes du management de projet ', NULL, NULL, NULL, NULL, 2, 25, 4);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (105, 'UML avancé', NULL, NULL, NULL, 'Survole des 14 schémas. Approfondissement sur les diagrammes peu vu : profil, composite', 0, 12, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (133, 'Les domaines : Management des équipes et partie prenantes', NULL, NULL, NULL, NULL, 5, 25, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (116, 'Analyse organisationnelle  : Stratégie d''entreprise', NULL, NULL, NULL, NULL, 8, 37, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (145, 'Lien entre l''architecture du SI et la gouvernance d''entreprise', NULL, NULL, NULL, NULL, 15, 43, 0.5);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (39, 'Applications mobiles natif', NULL, NULL, NULL, NULL, 6, 8, 5);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (35, 'MVC client web - WOA', NULL, NULL, NULL, NULL, 8, 5, 4);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (150, 'RUP /AUP', NULL, NULL, NULL, NULL, 0, 16, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (2, 'rappel SQL', NULL, NULL, NULL, 'postgres', 24, 1, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (51, 'AMOA : Analyse fonctionelle
', NULL, NULL, NULL, NULL, 19, 16, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (49, 'Architecture en couche standard -Design Patterns', NULL, '', NULL, 'factory, facade, proxy', 17, 14, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (42, 'Web Service N2 : produire WS Rest / SOAP', NULL, NULL, NULL, 'JEE + NodeJs
', 11, 10, 3);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (151, 'Pilotage de projet ', NULL, NULL, NULL, 'approche traditionelle, V', 0, 16, 2);
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
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (32, 'HTML et CSS N2', NULL, NULL, NULL, 'canvas, web component, varaibles css', 1, 6, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (52, 'cycles de vie et livrables associés', NULL, NULL, NULL, 'cascade,V,RAD,itértif
', 20, 16, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (8, 'réferencement - seo', NULL, NULL, NULL, NULL, 31, 4, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (5, 'optimisation des données', NULL, NULL, NULL, 'indexation, explain plan, dénormalisaiton
postgres', 26, 2, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (144, 'Sécurité du SI', NULL, NULL, NULL, NULL, 16, 42, 3);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (43, 'rappel GIT', NULL, NULL, NULL, NULL, 23, 11, 0.5);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (3, 'Programation SGBD', NULL, NULL, NULL, 'postgres', 25, 21, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (41, 'WebSocket', NULL, NULL, NULL, 'JEE + NodeJs', 4, 10, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (33, 'serveur web N2', NULL, NULL, NULL, 'servlet,listener,filter,jsp,jstl,templating
JEE', 3, 6, 3);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (6, 'Data dans le cloud', NULL, NULL, NULL, 'MongoLab', 28, 2, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (7, 'rappel générer des rapport et des état', NULL, NULL, NULL, 'Birt', 30, 3, 0.5);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (92, 'ISO 25000', NULL, NULL, NULL, NULL, 0, 19, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (148, 'Intégrité transactionelle', NULL, NULL, NULL, 'entre composants
entre application
entre webservice', 0, 10, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (96, 'SOA', NULL, NULL, NULL, NULL, 18, 47, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (34, 'rappel javascript Objet', NULL, NULL, NULL, NULL, 2, 5, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (50, 'Alternance et competence 1', NULL, NULL, NULL, NULL, 18, 15, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (161, 'DevOps / Mobilité', NULL, NULL, NULL, 'DevOps / Mobilité', 0, 59, 20);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (1, 'NO SQL', NULL, NULL, NULL, 'mongoDB', 29, 1, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (109, 'POO', NULL, NULL, NULL, NULL, 0, 54, 3);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (114, 'Les différents matériels constituant un réseau', NULL, NULL, NULL, NULL, 0, 57, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (146, 'Enjeux et impacts', NULL, NULL, NULL, NULL, 17, 43, 0.5);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (95, 'ORM', NULL, NULL, NULL, NULL, 19, 47, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (103, 'Certificat, signature, authentification', NULL, NULL, NULL, NULL, 21, 50, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (117, 'Analyse organisationnelle : Schéma directeur', NULL, NULL, NULL, NULL, 9, 37, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (149, 'Pile de message', NULL, NULL, NULL, 'JEE + rabbitMQ
', 0, 10, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (143, 'Connaissances des différentes solutions sur le marché', NULL, NULL, NULL, NULL, 22, 41, 0.25);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (99, 'JSP - MVC', NULL, NULL, NULL, NULL, 20, 45, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (126, 'Les domaines : Management de l''intégration et du contenu', NULL, NULL, NULL, NULL, 3, 25, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (128, 'Les domaines : Management des coûts et des approvisionnements', NULL, NULL, NULL, NULL, 4, 25, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (107, 'Méthodes qualité logicielle', NULL, 'Utiliser les bonnes pratiques, ISO 25000', NULL, NULL, 0, 54, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (100, 'MDA', NULL, NULL, NULL, NULL, 0, 12, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (131, 'Etude de cas technique', NULL, NULL, NULL, NULL, 27, 36, 10);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (134, 'Conception et dimensionnement des réseaux et infrastructures', NULL, NULL, NULL, NULL, 28, 40, 2.5);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (94, 'Architecture en couche', NULL, NULL, NULL, NULL, 23, 47, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (141, 'Les différents types de cloud PAAS, SAAS,IAAS', NULL, NULL, NULL, NULL, 24, 41, 0.25);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (122, 'Les enjeux juridiques', NULL, NULL, NULL, NULL, 26, 37, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (119, 'Datawarehouse  : Informatique décisionnelle et Buisness Intelligence', NULL, NULL, NULL, NULL, 10, 37, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (121, 'Les outils de la gouvernance ', NULL, NULL, NULL, NULL, 11, 37, 3);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (118, 'Etude de cas : gouvernance d''entreprise ', NULL, NULL, NULL, NULL, 13, 37, 4);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (127, 'Les domaines : Management de la qualité', NULL, NULL, NULL, NULL, 7, 25, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (147, 'Web services N3 - SOA', NULL, NULL, NULL, NULL, 0, 10, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (124, 'Le cadre du management de projet ', NULL, NULL, NULL, NULL, 1, 25, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (152, 'Gestion des budgets', NULL, NULL, NULL, NULL, 0, 16, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (153, 'Norme Qualité Projet', NULL, NULL, NULL, 'CMMI', 0, 16, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (159, 'Développement d''un produit', NULL, NULL, NULL, 'Cahier des charges imposé par IMIE', 0, 17, 4);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (154, 'pratique du cycle de vie agile', 'mini-projet', NULL, NULL, 'mise en pratique des outils de l''agilité (backlog, backlog de sprint, planning poker, scrum-board, suivie de la VA, Vélocité, retrospective)', 0, 16, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (113, 'L''architecture dans le projet et le produit
', NULL, NULL, NULL, 'Le rôle de l''architecte, notion de composant, les différentes architectures', 0, 14, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (129, 'Les domaines : Management des risques et des délais', NULL, NULL, NULL, NULL, 6, 25, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (108, 'UML', NULL, NULL, NULL, NULL, 0, 54, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (97, 'Sécurité applicative, Authentification, Identification', NULL, NULL, NULL, 'injection sql et javascript, gestion des droits applicatifs, authentification par certificat', 0, 18, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (115, ' Administration- protocoles - normes - communication générale', NULL, NULL, NULL, NULL, 0, 57, 4);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (123, 'Réponse à un appel d''offre', NULL, NULL, NULL, NULL, 12, 35, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (155, 'Spécification techniques', NULL, NULL, NULL, 'spécification techniques générale et detaillée à partir d''UML et iso 25000', 0, 22, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (156, 'Conception d''un produit', NULL, NULL, NULL, 'Cahier des charges proposé par l''apprenant', 0, 58, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (157, 'Développement d''un produit', NULL, NULL, NULL, 'Cahier des charges proposé par l''apprenant
', 0, 58, 3);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (132, 'Les outils du chef de projet : Management "Agiles"', NULL, NULL, NULL, NULL, 29, 25, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (135, 'Infrastructure Télécoms ', NULL, NULL, NULL, NULL, 30, 40, 0.5);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (137, ' Soutenance Etude de cas infrastructure réseau', NULL, NULL, NULL, NULL, 32, 40, 0.5);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (158, 'Conception d''un produit
', NULL, NULL, NULL, 'Cahier des charges imposé par IMIE
', 0, 17, 4);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (136, 'Etude de cas: Mise en place d''une infrastructure réseau ', NULL, NULL, NULL, 'Les définitions des techniques de transport de l’information et les choix des protocoles et de l’infrastructure proposés sont pertinents. 
La présentation de la solution intégrant : 
- le raccordement  
- les opérateurs  
- les services associés 
- les évolutions possibles…  est conforme aux attentes et 
réaliste. 
Les informations concernant les opérateurs et leurs capacités 
d’évolution sont fiables. 
Les protocoles de raccordement sont compatibles avec 
l’architecture réseau du cas étudié. ', 31, 40, 2.5);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (79, 'Les techniques de sourcing et recrutement', NULL, NULL, NULL, NULL, 25, 51, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (160, 'Alternance et competence 2', NULL, NULL, NULL, NULL, 0, 15, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (98, 'Servlet', NULL, NULL, NULL, NULL, 33, 45, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (76, 'Conférence professionnelle', NULL, NULL, NULL, NULL, 34, 51, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (80, 'Comportement et savoir être ', NULL, NULL, NULL, NULL, 35, 53, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (78, 'Coaching & développement son leadership', NULL, NULL, NULL, NULL, 36, 53, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (81, 'Gestion des conflits', NULL, NULL, NULL, NULL, 37, 53, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (102, 'Pilotage ', NULL, NULL, NULL, NULL, 38, 49, 1);
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
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (104, 'Urbanisation ', NULL, NULL, NULL, NULL, 39, 46, 2);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (130, 'Principes de veille et outils collaboratifs ', NULL, NULL, NULL, NULL, 40, 34, 1);
INSERT INTO cours_cursus (coc_id, coc_intitule, coc_type, coc_objectifs, coc_evaluation, coc_commentaires, coc_ordre, moc_id, coc_duree) VALUES (142, 'Introduction à la virtualisation et ses principes', NULL, NULL, NULL, NULL, 41, 41, 0.5);


--
-- TOC entry 2201 (class 0 OID 0)
-- Dependencies: 175
-- Name: cours_cursus_coc_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('cours_cursus_coc_id_seq', 161, true);


--
-- TOC entry 2145 (class 0 OID 25430)
-- Dependencies: 176
-- Data for Name: cours_promo; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (2007, 1, 'Propriété intellectuelle et licence', '', '', '', NULL, 7, 2007, 2002);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (2008, 1, 'GIT', '', '', '', NULL, 8, 2008, 2003);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (2009, 1, 'IDE', '', '', '', NULL, 9, 2009, 2003);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (2010, 1, 'Linux', '', '', 'evaluation projet en fin de module', NULL, 10, 2010, 2003);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (2011, 2, 'Modéliser une application en utilisant UML (14 diag)', '', '', '', NULL, 11, 2011, 2004);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (2012, 1, 'La qualité logicielle', '', '', '', NULL, 12, 2012, 2004);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (2013, 3, 'Déployer l’application ', '', '', '', NULL, 13, 2013, 2005);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (2014, 3, '3 types de Cloud (IAAS,PAAS,SAAS)', '', '', '', NULL, 14, 2014, 2005);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (2015, 4, 'Cloud au service du développeur (IAAS, data,dev)', '', '', '', NULL, 15, 2015, 2005);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (2016, 1, 'Déployer l’application ', '', '', '', NULL, 16, 2016, 2005);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (2017, 3, 'Stratégie de test et recette fonctionnelle', '', '', '', NULL, 17, 2017, 2006);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (2018, 1, 'test unitaire & test integration', '', '', '', NULL, 18, 2018, 2006);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (2019, 3, 'Composer un modèle Objet (POO)', '', '', '', NULL, 19, 2019, 2007);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (2020, 3, 'Programmer dans un langage Objet ', '', '', '', NULL, 20, 2020, 2007);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (2021, 1, 'Algorithmie et programmation structurée ', '', '', '', NULL, 21, 2021, 2008);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (2022, 1, 'les bases du PHP', '', '', '', NULL, 22, 2022, 2008);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (2023, 1, 'Intégrer et enrichir une application e-commerce', '', '', '', NULL, 23, 2023, 2009);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (2024, 1, 'Intégrer et enrichir une application CMS ', '', '', '', NULL, 24, 2024, 2009);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (2001, 1, 'Analyse du besoin (exigences fonctionnelles et non-fonctionelles)', '', '', 'evaluation projet en fin de module', NULL, 1, 2001, 2001);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (2002, 3, 'Accessibilité et ergonomie', '', '', 'evaluation projet en fin de module', NULL, 2, 2002, 2001);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (2003, 2, '7 étapes du maquettage', '', '', 'evaluation projet en fin de module', NULL, 3, 2003, 2001);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (2004, 3, 'mise en place du projet', '', '', 'evaluation projet en fin de module', NULL, 4, 2004, 2002);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (2005, 3, 'Méthode Agile', '', '', '', NULL, 5, 2005, 2002);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (2006, 1, 'Méthodologie de travail (réseaux sociaux, veille, organisation..)', '', '', '', NULL, 6, 2006, 2002);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (1, 1, 'optimisation des données', NULL, NULL, NULL, 'indexation, explain plan, dénormalisaiton
postgres', 26, 5, 1);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (2, 1, 'rappel admin sgbd + clustering', NULL, NULL, NULL, 'postgres', 27, 4, 1);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (3, 1, 'Data dans le cloud', NULL, NULL, NULL, 'MongoLab', 28, 6, 1);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (4, 0.5, 'rappel générer des rapport et des état', NULL, NULL, NULL, 'Birt', 30, 7, 2);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (5, 1, 'Base graph en arbre', NULL, NULL, NULL, 'NEO4J ou  orientDB', 0, 77, 3);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (6, 1, 'rappel SQL', NULL, NULL, NULL, 'postgres', 24, 2, 3);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (7, 1, 'NO SQL', NULL, NULL, NULL, 'mongoDB', 29, 1, 3);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (8, 2, 'ORM Niveau 2', NULL, NULL, NULL, 'JEE
', 0, 82, 4);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (9, 2, 'Programation SGBD', NULL, NULL, NULL, 'postgres', 25, 3, 4);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (10, 1, 'réferencement - seo', NULL, NULL, NULL, NULL, 31, 8, 5);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (11, 1, 'rappel javascript Objet', NULL, NULL, NULL, NULL, 2, 34, 6);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (12, 3, 'AngularJS', NULL, NULL, NULL, NULL, 5, 36, 6);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (13, 4, 'MVC client web - WOA', NULL, NULL, NULL, NULL, 8, 35, 6);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (14, 2, 'Programmer dans un langage objet N2', NULL, NULL, NULL, 'rappel N1 + multiThreading', 7, 38, 7);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (15, 2, 'Composer un modèle objet N2', NULL, NULL, NULL, 'rappel N1 + délégation, résolution diamant + design pattern', 9, 37, 7);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (16, 5, 'Applications mobiles natif', NULL, NULL, NULL, NULL, 6, 39, 8);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (17, 5, 'Objets connectés', NULL, NULL, NULL, NULL, 10, 40, 9);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (18, 1, 'Intégrité transactionelle', NULL, NULL, NULL, 'entre composants
entre application
entre webservice', 0, 148, 10);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (19, 1, 'Pile de message', NULL, NULL, NULL, 'JEE + rabbitMQ
', 0, 149, 10);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (20, 1, 'Web services N3 - SOA', NULL, NULL, NULL, NULL, 0, 147, 10);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (21, 1, 'WebSocket', NULL, NULL, NULL, 'JEE + NodeJs', 4, 41, 10);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (22, 3, 'Web Service N2 : produire WS Rest / SOAP', NULL, NULL, NULL, 'JEE + NodeJs
', 11, 42, 10);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (23, 1, 'HTML et CSS N2', NULL, NULL, NULL, 'canvas, web component, varaibles css', 1, 32, 11);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (24, 3, 'serveur web N2', NULL, NULL, NULL, 'servlet,listener,filter,jsp,jstl,templating
JEE', 3, 33, 11);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (25, 1, 'UML avancé', NULL, NULL, NULL, 'Survole des 14 schémas. Approfondissement sur les diagrammes peu vu : profil, composite', 0, 105, 12);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (26, 1, 'MDA', NULL, NULL, NULL, NULL, 0, 100, 12);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (27, 2, 'rappel + merise N2', NULL, NULL, NULL, 'héritage, containtes d''intégrité', 12, 44, 12);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (28, 2, 'rappel + Tests unitaires et intégration automatisés N2', NULL, NULL, NULL, 'mock + mock d''injection
Mockito', 13, 45, 13);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (29, 2, 'tests : les différents types, stratégie, processus, pilotage', NULL, NULL, NULL, NULL, 14, 46, 13);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (30, 2, 'réaliser une recette fonctionnelle', NULL, NULL, NULL, ' Elaborer et exécuter des scénarii de tests et rédiger des comptes-rendus 
', 15, 47, 13);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (31, 1, 'Le rôle de l''architecte, notion de composant, les différentes architectures', NULL, NULL, NULL, NULL, 0, 113, 14);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (32, 2, 'Injection de dépendance et composant ditribué', NULL, NULL, NULL, 'JEE', 16, 48, 14);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (33, 1, 'Architecture en couche standard -Design Patterns', NULL, '', NULL, 'factory, facade, proxy', 17, 49, 14);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (34, 1, 'Sécurité applicative, Authentification, Identification', NULL, NULL, NULL, 'injection sql et javascript, gestion des droits applicatifs, authentification par certificat', 0, 97, 15);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (35, 1, 'Alternance et competence 1', NULL, NULL, NULL, NULL, 0, 92, 16);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (36, 1, 'Tests automatisés - performance', NULL, NULL, NULL, 'Jmeter
', 0, 88, 16);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (37, 2, 'Tests fonctionnels automatisés', NULL, NULL, NULL, 'selenium IDE + webdriver
', 0, 89, 16);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (38, 2, 'PIC', NULL, NULL, NULL, NULL, 0, 83, 17);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (39, 1, 'Cloud pour l''industrialisation', NULL, NULL, NULL, NULL, 0, 84, 17);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (40, 1, 'Utilisation conteneur léger', NULL, NULL, NULL, 'Docker', 0, 85, 17);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (41, 2, 'Déployer une application  et mise en production', NULL, NULL, NULL, 'déploiement manuel, contenu du livrable, déploiement dans le cloud, déploiment automatique
', 0, 86, 17);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (42, 1, 'Build Automation', NULL, NULL, NULL, 'gradle
', 0, 87, 17);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (43, 0.5, 'rappel GIT', NULL, NULL, NULL, NULL, 23, 43, 18);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (44, 1, 'Alternance et competence 2', NULL, NULL, NULL, NULL, 0, 160, 19);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (45, 1, 'Alternance et competence 1', NULL, NULL, NULL, NULL, 18, 50, 19);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (46, 2, 'pratique du cycle de vie agile', NULL, NULL, NULL, 'mise en pratique des outils de l''agilité (backlog, backlog de sprint, planning poker, scrum-board, suivie de la VA, Vélocité, retrospective)', 0, 154, 20);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (47, 2, 'Pilotage de projet ', NULL, NULL, NULL, 'approche traditionelle, V', 0, 151, 20);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (48, 1, 'RUP /AUP', NULL, NULL, NULL, NULL, 0, 150, 20);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (49, 2, 'Gestion des budgets', NULL, NULL, NULL, NULL, 0, 152, 20);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (50, 2, 'Norme Qualité Projet', NULL, NULL, NULL, 'CMMI', 0, 153, 20);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (51, 2, 'AMOA : Analyse fonctionelle
', NULL, NULL, NULL, NULL, 19, 51, 20);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (52, 1, 'cycles de vie et livrables associés', NULL, NULL, NULL, 'cascade,V,RAD,itértif
', 20, 52, 20);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (53, 2, 'Spécification techniques', NULL, NULL, NULL, 'spécification techniques générale et detaillée à partir d''UML et iso 25000', 0, 155, 21);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (54, 4, 'Développement d''un produit', NULL, NULL, NULL, 'Cahier des charges imposé par IMIE', 0, 159, 22);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (55, 4, 'Conception d''un produit
', NULL, NULL, NULL, 'Cahier des charges imposé par IMIE
', 0, 158, 22);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (56, 2, 'Conception d''un produit', NULL, NULL, NULL, 'Cahier des charges proposé par l''apprenant', 0, 156, 23);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (57, 3, 'Développement d''un produit', NULL, NULL, NULL, 'Cahier des charges proposé par l''apprenant
', 0, 157, 23);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (58, 20, 'DevOps / Mobilité', NULL, NULL, NULL, 'DevOps / Mobilité', 0, 161, 24);
INSERT INTO cours_promo (cop_id, cop_duree, cop_intitule, cop_type, cop_objectifs, cop_evaluation, cop_commentaires, cop_ordre, coc_id, mop_id) VALUES (59, 2, 'Introduction à la gestion de projet', NULL, NULL, NULL, 'Outils de plannification, WBS, cahier des charges', 0, NULL, 20);


--
-- TOC entry 2202 (class 0 OID 0)
-- Dependencies: 177
-- Name: cours_promo_cop_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('cours_promo_cop_id_seq', 59, true);


--
-- TOC entry 2147 (class 0 OID 25438)
-- Dependencies: 178
-- Data for Name: cursus; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO cursus (cur_id, cur_nom, ref_id) VALUES (3, 'ITS DL', 2);
INSERT INTO cursus (cur_id, cur_nom, ref_id) VALUES (2003, 'RISR', 5);
INSERT INTO cursus (cur_id, cur_nom, ref_id) VALUES (2001, 'TSRIT', 7);
INSERT INTO cursus (cur_id, cur_nom, ref_id) VALUES (2002, 'ITS T2SI', 6);
INSERT INTO cursus (cur_id, cur_nom, ref_id) VALUES (2004, 'CDI ', 3);
INSERT INTO cursus (cur_id, cur_nom, ref_id) VALUES (2, 'CDPN', 3);
INSERT INTO cursus (cur_id, cur_nom, ref_id) VALUES (5, 'WMD', 3);
INSERT INTO cursus (cur_id, cur_nom, ref_id) VALUES (4, 'CPCSI Tronc commun', 4);
INSERT INTO cursus (cur_id, cur_nom, ref_id) VALUES (6, 'CPCSI Sem Dev.', NULL);
INSERT INTO cursus (cur_id, cur_nom, ref_id) VALUES (7, 'CPCSI Sem Rsx', NULL);
INSERT INTO cursus (cur_id, cur_nom, ref_id) VALUES (8, 'DL', 2);
INSERT INTO cursus (cur_id, cur_nom, ref_id) VALUES (9, 'T2SI', 6);


--
-- TOC entry 2203 (class 0 OID 0)
-- Dependencies: 179
-- Name: cursus_cur_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('cursus_cur_id_seq', 9, true);


--
-- TOC entry 2149 (class 0 OID 25443)
-- Dependencies: 180
-- Data for Name: enseignement; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (41, 'Etude de cas: Mise en place d''une infrastructure réseau ', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (38, 'Etude de cas technique ( épreuve jury )', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (42, ' Soutenance Etude de cas infrastructure réseau', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (4, 'Les domaines : Management de l''intégration et du contenu', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (5, 'Les domaines : Management de la qualité', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (6, 'Les domaines : Management des coûts et des approvisionnements', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (8, 'Les domaines : Management des risques et des délais', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (51, 'Méthodologie de travail ', 'base de connaissance, veille, organisation et répartition du temps de travail
', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (9, 'Mise en place du projet ', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (10, 'Introduction à l''organisation d''entreprise ', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (11, 'Mobiliser un comportement orienté client', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (13, 'Gestion de projet : Concepts généraux et conduite opérationnelle ', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (14, 'Maitriser les coûts et les délais', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (15, 'Management d''équipe', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (16, 'Améliorer la délivrance des services informatiques ', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (19, 'Pilotage projet ', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (20, 'Alternance et compétences', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (21, 'Veille technologique', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (22, 'TP de synthèse', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (24, 'Les domaines : Management des équipes et partie prenantes', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (25, 'Les outils du chef de projet : Management "Agiles"', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (52, 'Droit informatique (PI, licences)', 'Propriété intellectuelle et licence
copyleft/copyright', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (29, 'Analyse organisationnelle  : Stratégie d''entreprise', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (30, 'Analyse organisationnelle : Schéma directeur', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (31, 'Datawarehouse  : Informatique décisionnelle et Buisness Intelligence', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (32, 'Les enjeux juridiques', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (33, 'Les outils de la gouvernance ', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (34, 'Etude de cas : gouvernance d''entreprise ', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (18, 'Outils qualité et système de pilotage projet ', 'Les outils "qualité logicielle" et les bonnes pratiques
Les normes
CMMi
Les indicateurs de performance et tableaux de bord ', 'savoir appliquer  et  faire  appliquer  les  normes  de  qualité  et  de  sécurité  logicielle  de  son  entreprise  ou  de  son 
prestataire de services.
Savoir rendre compte de l''avancement des travaux, des difficultés rencontrées et indiquer le reste à faire.', NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (43, 'Cloud computing', 'Les différents types de cloud PAAS, SAAS,IAAS
Introduction à la virtualisation et ses principes
Connaissances des différentes solutions sur le marché', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (50, 'Les outils d''organisation et de planification', '1,5 jours de cours + 1,5 jour projet"
', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (36, 'Réponse à un appel d''offre', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (2, 'Le cadre du management de projet', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (3, 'Les normes du management de projet', 'Cinq groupes de processus du management de projet suivants
•	le démarrage,
•	la planification,
•	l’exécution,
•	la surveillance et la maîtrise,
•	la clôture.
', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (37, 'Principes de veille et outils collaboratifs ', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (39, 'Conception et dimensionnement des réseaux et infrastructures', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (40, 'Infrastructure Télécoms ', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (44, 'Sécurité du SI ', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (45, 'Les enjeux de l''infrastructure du SI sur la gouvernance d''entreprise', 'Lien entre l''architecture du SI et la gouvernance d''entreprise
Enjeux et impacts', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (28, 'Perfectionnement 2 : Les méthodes Agiles ', 'Product owner - Scrum master ', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (27, 'Perfectionnement 1 : Les méthodes Agiles', 'initiation à la méthode 
jeux style planning poker ', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (46, 'Accessibilité et ergonomie', 'WCAG', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (7, 'Analyse du besoin fonctionel (projet)', '', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (49, 'Spécification du besoin (produit)', 'modélisation:
 perimètre fonctionnel : diag use case (UML)
 processus métier : diag activité (UML)
 navigation et actions des écrans : diag état-transition (UML)
documentation et suivi:
 spécification fonctionnelle générale
 reférentiel d''exigence', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (17, 'Gestion de projet : cycle de vie du projet ', 'les particularités et différences entre les cycles en cascade, V, semi-itératif (RAD) et itératif (agiité)
', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (26, 'Initiation :Les méthodes agiles ', 'manifest agile
agile game
 srumboard
 planning poker
 kanban
 modification backlog
 burndown
 mesure de vélocité', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (53, 'Algorithmie et programmation structurée ', '"Les Variables
Lecture et Ecriture
Les structures de contrôles
Les Tableaux
Tableaux Multidimensionnels
Fonctions Prédéfinies
Procédures et Fonctions"
', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (54, 'Composer un modèle Objet (POO)', '"Concepts Objets
Instanciation
Identité et cycle de vie
Comportement et Etat
Encapsulation
Abstraction + Généralisation/Spécialisation
Associations
Diagramme de Classe UML
Interface et Polymorphisme
Surcharge et redéfinition
Design pattern
   Obligatoire
      Héritage -> délégation = stratégie+état+patron de methode 
      Résolution du diamant par les interfaces
   Facultatif
      Composite
      Médiateur
      Visiteur
      Poids mouche
      Chaine de responsabilité
      Décorateur"
', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (55, 'Programmer dans un langage Objet (Java,multi-thread)', 'appliquer les concept de POO en JAVA (voir cours POO)
developpement multi-Threading (cycle de vie, synchronisation)"
', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (56, 'Passerelles d''accès aux données (JDBC)', '"les différents type de drivers
CRUD à Travers JDBC
DAO / DTO
requêtes dynamique
PreparedStatement
Pilotage manuel de la transaction
Pattern Proxy pour automatiser la gestion de la connection et transaction"
', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (57, 'ORM (JPA, transaction applicative)', 'Paramétrage d’EntityManager (EM) par persistence.xml
Injection et utilisation d’EM
Exploitation des capacités transactionnelles d’un EJB pour piloter la transaction d’EM
Syntaxe et Annotation Entity, Table, Id, Column, GeneratedValue
Relation OneToOne, ManyToOne, OneToMany, ManyToMany
Stratégie Eager et Lazy
Héritage
NamedQuery', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (47, 'Maquettage', 'Habillage graphique : moodboard, style tile, mockup
Conception ergonomique : zoning, wireframe, prototype', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (58, 'Javascript', 'Syntaxe, variables, structure de contrôle
Objet par prototype, Objet anonyme, Héritage
Callback et programmation asynchrone
Closure
Abonnement et Manipulation du DOM
Bindng, Call, Apply
JQuery
   Sélecteurs et composite
   Parcours, Abonnement et Manipulation du DOM
   Animation et effets
AJAX
   Principes architecture AJAX d’IHM(HTML) et DATA(JSON)
   Manipulation du DOM à partir du retour de requête AJAX', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (68, 'Modéliser les données', 'Dictionnaire de donnée
Conception Modèle Entité-relation
  Entité-Individu
  Attribut
  Relations 
  Héritage
  Contrainte d’intégrité
Transformation en Modèle logique et modèle physique', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (59, 'Réaliser une application fenêtrée (WOA et MVC) ', '"Design Pattern Observer
Concepts MVC
Création et Abonnment de M, V, C en javascript
Utilisation de WebStorage pour la presistance du Model
Abonnment et manipulation du DOM par la vue"
', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (60, 'Concevoir et coder des pages Web (HTML5, CSS3)', 'HTML
  Evolution de la norme HTML
  Balises et Attributs
  Structure standard (Doctype,html,head, body)
  Base de http, formulaire, Input
  Balises Structurante
  Balises multimédia (audio, Video)
  Balise graphique (svg)
CSS3
  Sélecteurs
  Positionnement, Tailles et Gestion du flux  (inline, block, float, absolute, relativ, flexbox)
  Font, Font-face
  Transition, keyframe
  Responsive Design, Media-queries, viewport
  Preprocesseur CSS', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (63, 'NodeJs', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (64, 'Référencement - SEO', 'Les moteurs de recherches
  Fonctionnement des moteurs de recherches
  Comment les internautes utilisent-ils les moteurs de recherche ?
  Recherches par mots clefs, etc.
Intégrer le SEO dans le développement
  Comment optimiser le développement pour le SEO
  ""Link Building"" et popularité
Mesures et tracking
  Les différents trafics
  navigation directe, trafic référent, trafic de recherche', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (65, 'Langage SQL ', '"DDL
DML
DCL"
', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (61, 'Couche de présentation web générale', 'Norme http et principe d’un serveur web
Servlet sans JSP pour répondre à une requête GET et POST (HTML+formulaire/json)
Filter
Listener', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (66, 'Programmer dans un SGBD', 'Procédures stockées
Triggers
Gestion des transactions', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (62, 'Couche de présentation web MVC', 'Conception MVC Web et MVC2 Web
JSP
JSTL et Expression Language
Fragment et inclusion
TagLib de templating
facultatif : Framework MVC Web : Struts ou SpringMVC', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (67, 'Utiliser une base NoSQL ', 'Comprendre les différences entre le SQL et le NoSQL
Les cas d''utilisation du NoSQL
MongoDB opérations CRUD
Modélisation des données
Administration
Agrégations de données
Introduction sur les indexes', '
Approcher le NoSQL et le stockage orienté document', NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (69, 'Administration base de donnée', 'installer et paramétrer un SGBD
concevoir une politique de droits et administrer les droits d''un SGBD dans ce sens
gérer un service système de pilotage d''un SGBD
archiver et restaurer une base de donnée
maintenance de la base de donnée
Clustering de charge et de périmètre', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (70, 'Optimisation des données (index et conception)', 'Equilibre entre norme et performance : dénormalisation
interprétation des explain plan
optimisation des indexes
requêtes récursives
création de vue pour augmenter les performances des requêtes récurrentes', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (72, 'Tests unitaires et intégrations automatisés ', '"TDD ; Pratique avec un cas d’usage ludique.
Test unitaire (test d’un composant)
Test Intégration (test de plusieurs composants assemblés sans aller jusqu’à l’application complète)
Mock
Jeux d’essai
"
', 'Etre capable de tester une application simple et complexe par des tests unitaires et d’intégration automatisés incluant l’injection d’un jeux d’essai en base de données et les mocks. L’approche TDD doit être pratiquée indépendamment ou sur l’intégralité de ce cours.', 'JUnit
DBUnit
Mockito
MockEJB', NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (71, 'Générer des rapports et des états', 'concevoir des états destinés à l''impression
extraire des données de production, les données necessaires à l''état', NULL, 'Birt ou JasperRepport. Cours non-lié aux notions de BI.
', NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (74, 'Stratégie de test et recette fonctionnelle', 'processus de test selon CMMI
Plannifier les test (pilotage et réalisation)
   plan de test
   classe de risque par exigences (voir iso 25000)
   stratégie de test par classe de risque / efort de test
   critères d''acceptation
   mode de livraison
Préparer les tests (pilotage)
Executer les tests (pilotage)
Cloturer les tests (pilotage)', 'Etre en capacité de piloter toutes les phases du processus de test. Réaliser la phase de Plannificaiton des tests.
', NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (75, 'Réaliser une recette fonctionnelle', 'Préparer les test (réalisation)
   Elaborer des scénarii de tests
Executer les tests (réalisation)
   éxécuter les campagnes de test
   saisir les bugs
Cloturer les tests (réalisation)
   rédiger des comptes-rendus', 'Réaliser les phases de Préparation, Execution et Cloture des tests
', 'squash mt', NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (76, 'Qualité logicielle', 'ISO 25000
TP : appliquer ISO 25000 pour spécifier un produit décrit par un cahier des charges 
', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (35, 'Modéliser une application avec UML (14 diag)', NULL, 'Utiliser le langage UML afin de permettre et  de « mieux comprendre », de visualiser le besoin. "révision sur les diagrammes déjà vu (Use case, state, activity,class, object)
approfondissement sur les autres diagrammes (14) y compris profil
', '', NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (77, 'Outil de versionning (git)', '"Historique architecture de versionning
Installer et configurer GIT
Versionner un projet et cloner un projet existant
Etat et action possible sur un fichier
Workfow de collaboration, merge, conflit 
Branche
Rebase"
', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (78, 'Linux', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (79, 'IDE', 'Différence ente un éditeur riche et un IDE', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (80, 'Certificat, signature, authentification', NULL, NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (81, 'Business Intelligence', 'Objectifs
Etat de l''art
Processus
   Extraction des données
   Transformation en Datawarehouse
      Fait et Dimenssions
      ETL
   Reporting et Diffusion
Les solutions du marché', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (83, 'Architecture logicielle', 'Notions complètes :
- Les architectures : Standalone / Client Lourd / WEB (Stateless/Statefull) / WOA / SOA
- le métier d''architecte et l''architecture dans un projet
- Clusterisation / Load Balancing / Scalabilité
Notions partielles (car enseignées dans des cours dédiés) :
- Transaction distribuée
- Message Queue / ESB
 / Socket / WebSocket/ Web Service (REST/SOAP)
- environnements JEE : EJB/CDI/JPA/Servlet/JSP/JAX-RS/JAX-WS/websocket/JMS', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (84, 'Application en couches', '- couche / interfaçage / Application du Design Pattern Facade
- Découplage entre couche / Design Pattern Abstract Factory
- Inversion de dépendance', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (12, 'Utiliser les bonnes pratiques pour améliorer la délivrance du SI ', 'ITIL se décompose en neuf domaines, correspondant à neuf livres, permettant de couvrir l''ensemble des problématiques couvertes par les DSI. 

Service Support
Service Delivery
Infrastructure Management
Applications Management
Service Management
Business Perspective
Business Requirements
Technology', 'L''objectif d''ITIL est de doter les directions des systèmes informatiques (DSI) d''outils et de documents leur permettant d''améliorer la qualité de leurs prestations, c''est-à-dire améliorer la satisfaction de leurs clients, tout en répondant au mieux aux objectifs stratégiques de l''organisation', NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (85, 'Injection de dépendance', 'Contexte d''injection géré par un container
CDI', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (86, 'Composant distribué', 'théorie des composants distribués
transaction distribué
pool de composant
EJB Statefull/Stateless', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (88, 'Communication par socket', '"mis en place d''un socket
émission et réception de chaine de caractère
sérialistaion d''un objet
emission et reception d''un objet"
', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (89, 'Développer une application Android', 'Architecture materiel, OS, JVM
Les differents types d''applications
Outils de developpement et de déploiement
Possibilités apportées par le SDK
Activity
View et Layout
Service
Resource manager
Content Provider
Intent
Events
Threads
Permissions
Notifications materielles
Optimisation des performances', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (90, 'Build automation', '"Automatisation des mécanisme
build
build des tests unitaires et intégration
tests unitaires et d''intégration
packaging
livraison sur environnment d''intégration
tests fonctionnels et de performance"
', NULL, 'gradle', NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (87, 'Communication entre composants applicatif ', 'WS (JAX-WS, WSDL, UDDI)
REST (JAX-RS)', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (92, 'Message Queu', 'JMS , RabbitMQ', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (91, 'Industrialisation et Déploiement', 'Plateforme d’intégration continue (PIC)
Récupération des sources sur un gestionnaire de version
Déclenchement du Build Automation par la PIC
Historisation des résultats de test et graphiques', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (93, 'Déploiement', 'Processus de déploiement et livraison de produit 
Déploiement sur Machine virtuelle, Conteneur Léger, PAAS, IAAS
', NULL, NULL, NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (95, 'Tests de performance automatisé', 'Tests de performance automatisé', NULL, 'JMete', NULL, NULL);
INSERT INTO enseignement (ent_id, ent_nom, ent_contenu, ent_objet, ent_contrainte, ent_materiel, ent_idprerequis) VALUES (73, 'Test fonctionnels automatisés  ', 'Automatisation des tests fonctionnels', NULL, 'Selenium Web-Driver', NULL, NULL);


--
-- TOC entry 2204 (class 0 OID 0)
-- Dependencies: 181
-- Name: enseignement_ent_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('enseignement_ent_id_seq', 95, true);


--
-- TOC entry 2151 (class 0 OID 25451)
-- Dependencies: 182
-- Data for Name: module_cursus; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (2001, 'Analyse du besoin', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', NULL, 2001);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (2002, 'Gestion de projets', '', NULL, 2001);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (2003, 'Environnement de travail', '', NULL, 2002);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (2004, 'Concevoir une application', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', NULL, 2002);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (2005, 'Deploiement et cloud computing', 'objectifs', NULL, 2002);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (2006, 'validation du produit', '', NULL, 2002);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (2007, 'Développer dans un langage objet', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', NULL, 2003);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (2008, 'Développer dans un langage procédurale', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', NULL, 2003);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (2009, 'Gestionnaire de contenu et e-commerce', '', NULL, 2003);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (2010, 'Module 4', '', NULL, 2003);
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
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (58, 'Projet Fil Rouge 2', NULL, NULL, 6);
INSERT INTO module_cursus (moc_id, moc_intitule, moc_objectifs, moc_ordre, ufc_id) VALUES (59, 'spécialisation', NULL, NULL, 17);


--
-- TOC entry 2205 (class 0 OID 0)
-- Dependencies: 183
-- Name: module_cursus_moc_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('module_cursus_moc_id_seq', 59, true);


--
-- TOC entry 2153 (class 0 OID 25459)
-- Dependencies: 184
-- Data for Name: module_promo; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (2001, 'Analyse du besoin', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', NULL, 2001, 2001);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (2002, 'Gestion de projets', '', NULL, 2002, 2001);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (2003, 'Environnement de travail', '', NULL, 2003, 2002);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (2004, 'Concevoir une application', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', NULL, 2004, 2002);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (2005, 'Deploiement et cloud computing', 'objectifs', NULL, 2005, 2002);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (2006, 'validation du produit', '', NULL, 2006, 2002);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (2007, 'Développer dans un langage objet', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', NULL, 2007, 2003);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (2008, 'Développer dans un langage procédurale', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', NULL, 2008, 2003);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (2009, 'Gestionnaire de contenu et e-commerce', '', NULL, 2009, 2003);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (2010, 'Module 4', '', NULL, 2010, 2003);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (1, 'Administration', NULL, NULL, 2, 1);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (2, 'reporting', NULL, NULL, 3, 1);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (3, 'Technologies de persistance', NULL, NULL, 1, 1);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (4, 'Developper avec la persistance', NULL, NULL, 21, 1);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (5, 'Référencement', NULL, NULL, 4, 2);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (6, 'WOA', NULL, NULL, 5, 2);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (7, 'POO', NULL, NULL, 7, 2);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (8, 'Mobilité', NULL, NULL, 8, 2);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (9, 'IOT', NULL, NULL, 9, 2);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (10, 'Protocoles de comm', NULL, NULL, 10, 2);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (11, 'web', NULL, NULL, 6, 2);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (12, 'Modélisation', NULL, NULL, 12, 3);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (13, 'Tests', NULL, NULL, 13, 3);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (14, 'Architecture', NULL, NULL, 14, 3);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (15, 'Sécurité', NULL, NULL, 18, 3);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (16, 'Qualité logicielle', NULL, NULL, 19, 3);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (17, 'Dev Ops', NULL, NULL, 20, 3);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (18, 'GIT', NULL, NULL, 11, 4);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (19, 'altenance et compétence', NULL, NULL, 15, 5);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (20, 'Gestion de projet', NULL, NULL, 16, 5);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (21, 'livrables documentaire', NULL, NULL, 22, 5);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (22, 'Projet fil rouge', NULL, NULL, 17, 6);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (23, 'Projet Fil Rouge 2', NULL, NULL, 58, 6);
INSERT INTO module_promo (mop_id, mop_intitule, mop_objectifs, mop_ordre, moc_id, ufp_id) VALUES (24, 'spécialisation', NULL, NULL, 59, 7);


--
-- TOC entry 2206 (class 0 OID 0)
-- Dependencies: 185
-- Name: module_promo_mop_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('module_promo_mop_id_seq', 24, true);


--
-- TOC entry 2155 (class 0 OID 25467)
-- Dependencies: 186
-- Data for Name: periode; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO periode (per_id, per_debut, per_fin, per_nbjours, cur_id, per_nom) VALUES (1, NULL, NULL, 60, 2, 'année 3');
INSERT INTO periode (per_id, per_debut, per_fin, per_nbjours, cur_id, per_nom) VALUES (2, NULL, NULL, 60, 2, 'année 4');
INSERT INTO periode (per_id, per_debut, per_fin, per_nbjours, cur_id, per_nom) VALUES (3, NULL, NULL, 73, 4, 'periode 1');


--
-- TOC entry 2207 (class 0 OID 0)
-- Dependencies: 205
-- Name: periode_per_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('periode_per_id_seq', 3, true);


--
-- TOC entry 2156 (class 0 OID 25470)
-- Dependencies: 187
-- Data for Name: periode_promotion; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO periode_promotion (perpro_id, perpro_debut, perpro_fin, perpro_nbjours, pro_id, perpro_nom) VALUES (1, NULL, NULL, 60, 1, 'année 3');
INSERT INTO periode_promotion (perpro_id, perpro_debut, perpro_fin, perpro_nbjours, pro_id, perpro_nom) VALUES (2, NULL, NULL, 62, 1, 'année 4');


--
-- TOC entry 2208 (class 0 OID 0)
-- Dependencies: 206
-- Name: periode_promotion_perpro_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('periode_promotion_perpro_id_seq', 2, true);


--
-- TOC entry 2157 (class 0 OID 25473)
-- Dependencies: 188
-- Data for Name: prerequis_enseignement; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (71, 65);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (17, 50);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (18, 50);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (49, 7);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (5, 4);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (8, 2);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (3, 2);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (4, 2);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (4, 3);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (6, 2);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (6, 14);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (6, 3);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (2, 13);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (2, 14);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (2, 15);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (2, 17);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (2, 19);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (42, 41);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (42, 17);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (42, 14);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (42, 13);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (11, 16);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (28, 26);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (28, 27);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (27, 26);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (31, 30);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (31, 29);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (19, 50);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (26, 50);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (56, 55);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (62, 61);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (63, 61);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (63, 58);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (81, 65);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (86, 85);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (88, 55);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (89, 55);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (54, 53);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (55, 54);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (64, 60);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (61, 55);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (59, 58);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (58, 54);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (77, 78);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (84, 55);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (85, 84);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (83, 55);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (90, 72);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (35, 49);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (73, 72);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (72, 55);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (75, 74);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (74, 50);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (70, 68);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (69, 65);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (57, 56);
INSERT INTO prerequis_enseignement (ent_id, ent_id_enseignement) VALUES (66, 53);


--
-- TOC entry 2158 (class 0 OID 25476)
-- Dependencies: 189
-- Data for Name: promotion; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO promotion (pro_id, pro_nom, cur_id) VALUES (2001, 'promotion 1', 2001);
INSERT INTO promotion (pro_id, pro_nom, cur_id) VALUES (1, 'CDPN-N-07', 2);


--
-- TOC entry 2209 (class 0 OID 0)
-- Dependencies: 190
-- Name: promotion_pro_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('promotion_pro_id_seq', 1, true);


--
-- TOC entry 2160 (class 0 OID 25481)
-- Dependencies: 191
-- Data for Name: r_courscursus_enseignement; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (133, 6);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (131, 6);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (129, 6);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (132, 6);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (132, 2);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (129, 2);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (127, 2);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (128, 2);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (126, 2);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (133, 2);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (125, 2);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (131, 2);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (123, 36);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (39, 89);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (37, 54);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (38, 55);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (42, 87);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (149, 92);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (8, 64);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (32, 60);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (33, 61);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (35, 59);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (34, 58);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (43, 77);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (49, 84);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (48, 85);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (113, 83);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (87, 90);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (132, 24);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (86, 93);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (83, 91);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (44, 68);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (105, 35);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (92, 76);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (133, 5);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (131, 5);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (133, 8);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (132, 8);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (88, 95);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (89, 73);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (97, 80);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (45, 72);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (131, 8);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (133, 3);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (126, 3);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (128, 3);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (127, 3);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (129, 3);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (132, 3);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (131, 3);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (47, 75);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (46, 74);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (5, 70);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (4, 69);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (82, 57);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (3, 66);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (7, 71);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (1, 67);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (2, 65);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (132, 7);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (51, 7);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (52, 17);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (153, 18);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (155, 49);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (133, 4);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (128, 4);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (131, 4);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (127, 4);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (129, 4);
INSERT INTO r_courscursus_enseignement (coc_id, ent_id) VALUES (132, 4);


--
-- TOC entry 2161 (class 0 OID 25484)
-- Dependencies: 192
-- Data for Name: r_courscursus_savoir; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (135, 64);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (127, 80);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (135, 80);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (136, 47);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (136, 48);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (136, 49);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (136, 50);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (126, 81);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (123, 12);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (136, 81);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (123, 72);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (128, 82);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (136, 82);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (128, 70);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (131, 70);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (136, 70);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (135, 68);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (136, 68);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (135, 66);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (136, 66);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (76, 27);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (76, 28);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (130, 30);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (76, 30);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (125, 33);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (124, 33);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (129, 33);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (79, 33);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (125, 34);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (127, 24);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (126, 22);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (127, 22);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (133, 34);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (124, 34);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (79, 34);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (123, 71);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (128, 71);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (125, 35);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (129, 19);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (126, 35);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (124, 35);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (79, 35);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (124, 37);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (132, 37);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (79, 37);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (130, 31);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (79, 31);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (129, 32);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (76, 32);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (130, 32);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (79, 32);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (124, 38);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (133, 38);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (124, 39);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (129, 39);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (133, 39);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (133, 21);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (133, 15);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (132, 15);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (133, 20);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (126, 20);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (129, 20);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (132, 20);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (127, 26);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (132, 26);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (133, 36);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (127, 36);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (124, 36);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (132, 36);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (130, 29);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (129, 2);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (131, 2);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (129, 4);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (131, 4);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (131, 5);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (131, 6);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (133, 76);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (126, 76);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (131, 76);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (128, 77);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (131, 77);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (134, 73);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (134, 74);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (131, 78);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (134, 78);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (133, 75);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (126, 75);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (129, 75);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (134, 75);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (131, 79);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (134, 79);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (135, 65);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (126, 67);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (131, 67);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (135, 67);
INSERT INTO r_courscursus_savoir (coc_id, sav_id) VALUES (135, 69);


--
-- TOC entry 2162 (class 0 OID 25487)
-- Dependencies: 193
-- Data for Name: r_courspromo_enseignement; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 2163 (class 0 OID 25490)
-- Dependencies: 194
-- Data for Name: r_courspromo_savoir; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 2164 (class 0 OID 25493)
-- Dependencies: 195
-- Data for Name: referentiel; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO referentiel (ref_id, ref_nom) VALUES (3, 'REAC_CDI');
INSERT INTO referentiel (ref_id, ref_nom) VALUES (4, 'REAC_CPCSI');
INSERT INTO referentiel (ref_id, ref_nom) VALUES (5, 'REAC_RISR');
INSERT INTO referentiel (ref_id, ref_nom) VALUES (6, 'REAC_T2SI');
INSERT INTO referentiel (ref_id, ref_nom) VALUES (7, 'REAC_TSRIT');
INSERT INTO referentiel (ref_id, ref_nom) VALUES (2, 'REAC_DL');


--
-- TOC entry 2210 (class 0 OID 0)
-- Dependencies: 196
-- Name: referentiel_ref_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('referentiel_ref_id_seq', 7, true);


--
-- TOC entry 2166 (class 0 OID 25498)
-- Dependencies: 197
-- Data for Name: savoir; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (1, 'Mener des interviews d’utilisateurs faisant ressortir les rôles, fonctions et besoins de chaque acteur concerné par le projet.', 1);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (2, 'Mettre en évidence les contraintes, les problèmes et les  besoins d’évolution du système d’information existant', 1);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (3, 'Modéliser les flux et les circuits d’information dans l’entreprise.', 1);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (4, 'Décrire l’ensemble des matériels et des logiciels du parc informatique en soulignant leur état de vétusté et les évolutions en cours.', 1);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (5, 'Schématiser l’architecture actuelle du système d’information', 1);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (6, 'Rédiger la synthèse des données recueillies.', 1);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (12, 'Identifier les différents marchés concernés,', 4);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (14, 'Assurer la compatibilité entre les programmes hérités et les nouvelles technologies utilisées.', 7);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (15, 'Coordonner l’intervention des différents opérateurs intervenant sur le projet (internes externes) et donner les consignes ', 7);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (16, 'Mettre en place une politique de sauvegarde des données (plan de sauvegarde, restauration, reprises…).', 7);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (17, 'Créer et configurer l''infrastructure sécurisée du système d’information, optimiser la sécurité du système de fichiers avec le cryptage (cf. activité réseau).
', 7);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (18, 'Etablir ou s’assurer de l’existence d’une documentation permettant la traçabilité des interventions, modifications, à l’intention de la direction et du responsable informatique', 7);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (19, 'Piloter l’installation du réseau dans l’entreprise prédéfini dans le cahier des charges,', 6);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (20, 'Organiser et manager les équipes internes et externes qui auront en charge l’installation et l’administration du réseau,', 6);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (21, 'Etablir et valider les supports documentaires à l’usage des futurs administrateurs réseau', 6);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (22, 'Définir les avantages et les inconvénients des différentes architectures permettant de mettre en place une base de données.', 5);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (23, 'Définir les besoins et les composants physiques et logiques de l’architecture de la base de données.', 5);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (24, 'Assurer l’intégrité et la cohérence des données et la sécurité des accès aux données.', 5);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (25, 'Optimiser l’exploitation de la base et ses performances en établissant les requêtes qui permettent d’obtenir les résultats attendus.', 5);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (26, 'Choisir et mettre en place des outils d’aide à la décision pour la direction de l’entreprise.', 5);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (27, ' Analyser et valider la conformité des contrats proposés par les différents prestataires', 8);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (28, 'Déterminer les conditions de conformité et de réception du produit final.', 8);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (29, 'Mettre en place des outils de veille pour se maintenir informé sur l’offre en technologie, les outils, les services et les prix proposés par le marché.', 9);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (30, 'Suivre l’évolution des méthodes, des normes, du droit et de la réglementation spécifique à la sécurité, l’utilisation de logiciels…', 9);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (31, 'Recueillir, synthétiser et tirer les conclusions.', 9);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (32, 'Anticiper les grandes évolutions des systèmes', 9);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (33, 'Evaluer globalement les dimensions temporelles, ressources humaines, compétences du nouveau système d’information et les formaliser dans un plan d’action.', 10);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (34, 'Rédiger un plan de communication pour la direction générale à l’intention des collaborateurs.', 10);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (35, 'Identifier et anticiper les besoins et attentes des utilisateurs.', 10);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (36, 'Définir les besoins de formation en fonction des profils à former et la méthode pédagogique.', 10);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (37, 'Mettre en place les différentes actions d’accompagnement, recrutement, formation.', 10);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (38, 'Animer et évaluer la formation des utilisateurs.', 10);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (39, 'Gérer les éventuels conflits (internes ou externes) liés à la mise en place de la nouvelle organisation et des nouveaux outils.', 10);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (47, 'Elabore une documentation d’installation.', 12);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (48, 'Dans le cadre du déploiement, le chef de projet :
- Coordonne l’action des différents intervenants internes ou externes,
', 12);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (49, 'Dans le cadre du déploiement, le chef de projet :
- Assiste les utilisateurs dans l’appropriation du nouvel outil

', 12);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (50, 'Dans le cadre du déploiement, le chef de projet :
- Valide le fonctionnement de la solution,

', 12);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (51, 'Dans le cadre du déploiement, le chef de projet :
- Procède au recettage.
', 12);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (56, 'Etablir un plan de validation,
', 13);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (59, 'Définir la méthodologie et le cadre technique du projet de développement du système d’information,', 14);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (60, 'Constituer une équipe de développeurs informatiques (interne et/ou externe),', 14);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (61, 'Contrôler la conformité des développements, le respect des délais et des coûts, conformément au cahier des charges.
', 14);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (62, 'Coordonner l’avancement des développements et suivre leur progression,

', 14);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (63, ' Fixer des objectifs en termes de livrables et de délais,

', 14);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (64, 'Analyser les techniques, les services, les infrastructures et les applications des moyens de télécommunication de l’entreprise', 15);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (65, 'Analyser la qualité du trafic sur le réseau.
', 15);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (66, 'Analyser les besoins en services de transport de la voix, de communication des données et de transports de l’image.', 15);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (67, 'Déterminer les besoins de l’entreprise en « haut débit », en applications multimédias ou en radio téléphonie mobile ainsi que les perspectives d’utilisation des technologies des réseaux sans fil.', 15);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (68, 'Estimer le débit nécessaire pour le bon fonctionnement de l’entreprise et le support le plus approprié.
', 15);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (69, 'Comparer et caractériser l’ensemble des offres à commutation de paquets.', 15);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (70, 'Chiffrer ou faire chiffrer les solutions possibles, analyser les services fournis, négocier les prix.
', 15);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (71, 'Rédiger le contenu de l’appel d’offres pour ces différents marchés dans le respect des procédures,', 4);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (72, 'Animer un comité d’attribution des marchés :
* en présentant une synthèse des solutions possibles,
* en présentant les avantages et inconvénients des différentes réponses,
* en apportant ses connaissances techniques pour faciliter les choix.
', 4);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (73, 'Concevoir l’architecture de la plate-forme technique à partir des spécifications fonctionnelles générales,', 2);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (74, 'Établir un plan d’intégration de technologies multiples et hétérogènes,', 2);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (78, 'Rédiger un dossier de spécifications techniques.
', 2);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (75, 'Mesurer les changements induits par le système d’information proposé et en évaluer les risques,', 2);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (76, 'Prévoir et planifier globalement les grands axes du changement sur le plan fonctionnel et opérationnel,', 2);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (77, 'Déterminer les coûts et gains non techniques induits par les mutations liées au nouveau système d’information,
', 2);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (80, 'Déterminer le type de maintenance ou d’évolution à réaliser en s’appuyant sur les outils et indicateurs de mesure des performances,', 11);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (79, 'Rédiger un dossier de spécifications techniques.
', 2);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (81, 'Participer à l’élaboration des spécifications fonctionnelles et techniques des évolutions demandées en analysant la demande et en vérifiant la faisabilité,', 11);
INSERT INTO savoir (sav_id, sav_libelle, com_id) VALUES (82, 'Analyser le coût et les contraintes liées à la maintenance.', 11);


--
-- TOC entry 2211 (class 0 OID 0)
-- Dependencies: 198
-- Name: savoir_sav_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('savoir_sav_id_seq', 82, true);


--
-- TOC entry 2168 (class 0 OID 25506)
-- Dependencies: 199
-- Data for Name: unite_formation_cursus; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO unite_formation_cursus (ufc_id, ufc_nom, ufc_objectifs, ufc_ordre, cur_id) VALUES (2001, 'Unite Formation 1', '', NULL, 2001);
INSERT INTO unite_formation_cursus (ufc_id, ufc_nom, ufc_objectifs, ufc_ordre, cur_id) VALUES (2002, 'Unite Formation 2', '', NULL, 2001);
INSERT INTO unite_formation_cursus (ufc_id, ufc_nom, ufc_objectifs, ufc_ordre, cur_id) VALUES (2003, 'Unite Formation 3', '', NULL, 2001);
INSERT INTO unite_formation_cursus (ufc_id, ufc_nom, ufc_objectifs, ufc_ordre, cur_id) VALUES (2004, 'Unite Formation 4', '', NULL, 2002);
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
INSERT INTO unite_formation_cursus (ufc_id, ufc_nom, ufc_objectifs, ufc_ordre, cur_id) VALUES (17, 'spécialisation', NULL, NULL, 2);


--
-- TOC entry 2212 (class 0 OID 0)
-- Dependencies: 200
-- Name: unite_formation_cursus_ufc_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('unite_formation_cursus_ufc_id_seq', 17, true);


--
-- TOC entry 2170 (class 0 OID 25514)
-- Dependencies: 201
-- Data for Name: unite_formation_promo; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO unite_formation_promo (ufp_id, ufp_nom, ufp_objectifs, ufp_ordre, ufc_id, pro_id) VALUES (2001, 'Unite Formation 1', '', NULL, 2001, 2001);
INSERT INTO unite_formation_promo (ufp_id, ufp_nom, ufp_objectifs, ufp_ordre, ufc_id, pro_id) VALUES (2002, 'Unite Formation 2', '', NULL, 2002, 2001);
INSERT INTO unite_formation_promo (ufp_id, ufp_nom, ufp_objectifs, ufp_ordre, ufc_id, pro_id) VALUES (2003, 'Unite Formation 3', '', NULL, 2003, 2001);
INSERT INTO unite_formation_promo (ufp_id, ufp_nom, ufp_objectifs, ufp_ordre, ufc_id, pro_id) VALUES (1, 'Persistance', NULL, NULL, 1, 1);
INSERT INTO unite_formation_promo (ufp_id, ufp_nom, ufp_objectifs, ufp_ordre, ufc_id, pro_id) VALUES (2, 'Application', NULL, NULL, 2, 1);
INSERT INTO unite_formation_promo (ufp_id, ufp_nom, ufp_objectifs, ufp_ordre, ufc_id, pro_id) VALUES (3, 'Géni logiciel', NULL, NULL, 4, 1);
INSERT INTO unite_formation_promo (ufp_id, ufp_nom, ufp_objectifs, ufp_ordre, ufc_id, pro_id) VALUES (4, 'Environnement de dev', NULL, NULL, 3, 1);
INSERT INTO unite_formation_promo (ufp_id, ufp_nom, ufp_objectifs, ufp_ordre, ufc_id, pro_id) VALUES (5, 'Transverse', NULL, NULL, 5, 1);
INSERT INTO unite_formation_promo (ufp_id, ufp_nom, ufp_objectifs, ufp_ordre, ufc_id, pro_id) VALUES (6, 'Mise en situation', NULL, NULL, 6, 1);
INSERT INTO unite_formation_promo (ufp_id, ufp_nom, ufp_objectifs, ufp_ordre, ufc_id, pro_id) VALUES (7, 'spécialisation', NULL, NULL, 17, 1);


--
-- TOC entry 2213 (class 0 OID 0)
-- Dependencies: 202
-- Name: unite_formation_promo_ufp_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('unite_formation_promo_ufp_id_seq', 7, true);


--
-- TOC entry 2172 (class 0 OID 25522)
-- Dependencies: 203
-- Data for Name: utilisateur; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO utilisateur (id_utilisateur, nom_utilisateur, password_utilisateur) VALUES (1, 'imie', NULL);
INSERT INTO utilisateur (id_utilisateur, nom_utilisateur, password_utilisateur) VALUES (2, 'imie', '383802d3b28964619d5fa0c868d75aaf1bb14791df07f622f8c7157821a5ba9a');


--
-- TOC entry 2214 (class 0 OID 0)
-- Dependencies: 204
-- Name: utilisateur_id_utilisateur_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('utilisateur_id_utilisateur_seq', 2, true);


--
-- TOC entry 1965 (class 2606 OID 25545)
-- Name: prk_constraint_activite_type; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY activite_type
    ADD CONSTRAINT prk_constraint_activite_type PRIMARY KEY (act_id);


--
-- TOC entry 1967 (class 2606 OID 25547)
-- Name: prk_constraint_competence_pro; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY competence_pro
    ADD CONSTRAINT prk_constraint_competence_pro PRIMARY KEY (com_id);


--
-- TOC entry 1969 (class 2606 OID 25549)
-- Name: prk_constraint_cours_cursus; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY cours_cursus
    ADD CONSTRAINT prk_constraint_cours_cursus PRIMARY KEY (coc_id);


--
-- TOC entry 1971 (class 2606 OID 25551)
-- Name: prk_constraint_cours_promo; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY cours_promo
    ADD CONSTRAINT prk_constraint_cours_promo PRIMARY KEY (cop_id);


--
-- TOC entry 1973 (class 2606 OID 25553)
-- Name: prk_constraint_cursus; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY cursus
    ADD CONSTRAINT prk_constraint_cursus PRIMARY KEY (cur_id);


--
-- TOC entry 1975 (class 2606 OID 25555)
-- Name: prk_constraint_enseignement; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY enseignement
    ADD CONSTRAINT prk_constraint_enseignement PRIMARY KEY (ent_id);


--
-- TOC entry 1977 (class 2606 OID 25557)
-- Name: prk_constraint_module_cursus; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY module_cursus
    ADD CONSTRAINT prk_constraint_module_cursus PRIMARY KEY (moc_id);


--
-- TOC entry 1979 (class 2606 OID 25559)
-- Name: prk_constraint_module_promo; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY module_promo
    ADD CONSTRAINT prk_constraint_module_promo PRIMARY KEY (mop_id);


--
-- TOC entry 1981 (class 2606 OID 25561)
-- Name: prk_constraint_periode; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY periode
    ADD CONSTRAINT prk_constraint_periode PRIMARY KEY (per_id);


--
-- TOC entry 1983 (class 2606 OID 25563)
-- Name: prk_constraint_periode_promotion; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY periode_promotion
    ADD CONSTRAINT prk_constraint_periode_promotion PRIMARY KEY (perpro_id);


--
-- TOC entry 1985 (class 2606 OID 25565)
-- Name: prk_constraint_prerequis_enseignement; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY prerequis_enseignement
    ADD CONSTRAINT prk_constraint_prerequis_enseignement PRIMARY KEY (ent_id, ent_id_enseignement);


--
-- TOC entry 1987 (class 2606 OID 25567)
-- Name: prk_constraint_promotion; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY promotion
    ADD CONSTRAINT prk_constraint_promotion PRIMARY KEY (pro_id);


--
-- TOC entry 1989 (class 2606 OID 25569)
-- Name: prk_constraint_r_courscursus_enseignement; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY r_courscursus_enseignement
    ADD CONSTRAINT prk_constraint_r_courscursus_enseignement PRIMARY KEY (coc_id, ent_id);


--
-- TOC entry 1991 (class 2606 OID 25571)
-- Name: prk_constraint_r_courscursus_savoir; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY r_courscursus_savoir
    ADD CONSTRAINT prk_constraint_r_courscursus_savoir PRIMARY KEY (coc_id, sav_id);


--
-- TOC entry 1993 (class 2606 OID 25573)
-- Name: prk_constraint_r_courspromo_enseignement; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY r_courspromo_enseignement
    ADD CONSTRAINT prk_constraint_r_courspromo_enseignement PRIMARY KEY (cop_id, ent_id);


--
-- TOC entry 1995 (class 2606 OID 25575)
-- Name: prk_constraint_r_courspromo_savoir; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY r_courspromo_savoir
    ADD CONSTRAINT prk_constraint_r_courspromo_savoir PRIMARY KEY (cop_id, sav_id);


--
-- TOC entry 1997 (class 2606 OID 25577)
-- Name: prk_constraint_referentiel; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY referentiel
    ADD CONSTRAINT prk_constraint_referentiel PRIMARY KEY (ref_id);


--
-- TOC entry 1999 (class 2606 OID 25579)
-- Name: prk_constraint_savoir; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY savoir
    ADD CONSTRAINT prk_constraint_savoir PRIMARY KEY (sav_id);


--
-- TOC entry 2001 (class 2606 OID 25581)
-- Name: prk_constraint_unite_formation_cursus; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY unite_formation_cursus
    ADD CONSTRAINT prk_constraint_unite_formation_cursus PRIMARY KEY (ufc_id);


--
-- TOC entry 2003 (class 2606 OID 25583)
-- Name: prk_constraint_unite_formation_promo; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY unite_formation_promo
    ADD CONSTRAINT prk_constraint_unite_formation_promo PRIMARY KEY (ufp_id);


--
-- TOC entry 2005 (class 2606 OID 25585)
-- Name: prk_constraint_utilisateur; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY utilisateur
    ADD CONSTRAINT prk_constraint_utilisateur PRIMARY KEY (id_utilisateur);


--
-- TOC entry 2006 (class 2606 OID 25586)
-- Name: fk_activite_type_ref_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY activite_type
    ADD CONSTRAINT fk_activite_type_ref_id FOREIGN KEY (ref_id) REFERENCES referentiel(ref_id) ON DELETE CASCADE;


--
-- TOC entry 2007 (class 2606 OID 25591)
-- Name: fk_competence_pro_act_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY competence_pro
    ADD CONSTRAINT fk_competence_pro_act_id FOREIGN KEY (act_id) REFERENCES activite_type(act_id) ON DELETE CASCADE;


--
-- TOC entry 2008 (class 2606 OID 25596)
-- Name: fk_cours_cursus_moc_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY cours_cursus
    ADD CONSTRAINT fk_cours_cursus_moc_id FOREIGN KEY (moc_id) REFERENCES module_cursus(moc_id) ON DELETE CASCADE;


--
-- TOC entry 2009 (class 2606 OID 25601)
-- Name: fk_cours_promo_coc_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY cours_promo
    ADD CONSTRAINT fk_cours_promo_coc_id FOREIGN KEY (coc_id) REFERENCES cours_cursus(coc_id);


--
-- TOC entry 2010 (class 2606 OID 25606)
-- Name: fk_cours_promo_mop_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY cours_promo
    ADD CONSTRAINT fk_cours_promo_mop_id FOREIGN KEY (mop_id) REFERENCES module_promo(mop_id);


--
-- TOC entry 2011 (class 2606 OID 25611)
-- Name: fk_cursus_ref_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY cursus
    ADD CONSTRAINT fk_cursus_ref_id FOREIGN KEY (ref_id) REFERENCES referentiel(ref_id);


--
-- TOC entry 2012 (class 2606 OID 25616)
-- Name: fk_module_cursus_ufc_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY module_cursus
    ADD CONSTRAINT fk_module_cursus_ufc_id FOREIGN KEY (ufc_id) REFERENCES unite_formation_cursus(ufc_id) ON DELETE CASCADE;


--
-- TOC entry 2013 (class 2606 OID 25621)
-- Name: fk_module_promo_moc_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY module_promo
    ADD CONSTRAINT fk_module_promo_moc_id FOREIGN KEY (moc_id) REFERENCES module_cursus(moc_id);


--
-- TOC entry 2014 (class 2606 OID 25626)
-- Name: fk_module_promo_ufp_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY module_promo
    ADD CONSTRAINT fk_module_promo_ufp_id FOREIGN KEY (ufp_id) REFERENCES unite_formation_promo(ufp_id);


--
-- TOC entry 2015 (class 2606 OID 25631)
-- Name: fk_periode_cur_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY periode
    ADD CONSTRAINT fk_periode_cur_id FOREIGN KEY (cur_id) REFERENCES cursus(cur_id);


--
-- TOC entry 2016 (class 2606 OID 25636)
-- Name: fk_periode_promotion_pro_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY periode_promotion
    ADD CONSTRAINT fk_periode_promotion_pro_id FOREIGN KEY (pro_id) REFERENCES promotion(pro_id);


--
-- TOC entry 2017 (class 2606 OID 25641)
-- Name: fk_prerequis_enseignement_ent_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY prerequis_enseignement
    ADD CONSTRAINT fk_prerequis_enseignement_ent_id FOREIGN KEY (ent_id) REFERENCES enseignement(ent_id);


--
-- TOC entry 2018 (class 2606 OID 25646)
-- Name: fk_prerequis_enseignement_ent_id_enseignement; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY prerequis_enseignement
    ADD CONSTRAINT fk_prerequis_enseignement_ent_id_enseignement FOREIGN KEY (ent_id_enseignement) REFERENCES enseignement(ent_id);


--
-- TOC entry 2019 (class 2606 OID 25651)
-- Name: fk_promotion_cur_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY promotion
    ADD CONSTRAINT fk_promotion_cur_id FOREIGN KEY (cur_id) REFERENCES cursus(cur_id);


--
-- TOC entry 2020 (class 2606 OID 25656)
-- Name: fk_r_courscursus_enseignement_coc_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY r_courscursus_enseignement
    ADD CONSTRAINT fk_r_courscursus_enseignement_coc_id FOREIGN KEY (coc_id) REFERENCES cours_cursus(coc_id);


--
-- TOC entry 2021 (class 2606 OID 25661)
-- Name: fk_r_courscursus_enseignement_ent_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY r_courscursus_enseignement
    ADD CONSTRAINT fk_r_courscursus_enseignement_ent_id FOREIGN KEY (ent_id) REFERENCES enseignement(ent_id);


--
-- TOC entry 2022 (class 2606 OID 25666)
-- Name: fk_r_courscursus_savoir_coc_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY r_courscursus_savoir
    ADD CONSTRAINT fk_r_courscursus_savoir_coc_id FOREIGN KEY (coc_id) REFERENCES cours_cursus(coc_id) ON DELETE CASCADE;


--
-- TOC entry 2023 (class 2606 OID 25671)
-- Name: fk_r_courscursus_savoir_sav_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY r_courscursus_savoir
    ADD CONSTRAINT fk_r_courscursus_savoir_sav_id FOREIGN KEY (sav_id) REFERENCES savoir(sav_id) ON DELETE CASCADE;


--
-- TOC entry 2024 (class 2606 OID 25676)
-- Name: fk_r_courspromo_enseignement_cop_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY r_courspromo_enseignement
    ADD CONSTRAINT fk_r_courspromo_enseignement_cop_id FOREIGN KEY (cop_id) REFERENCES cours_promo(cop_id);


--
-- TOC entry 2025 (class 2606 OID 25681)
-- Name: fk_r_courspromo_enseignement_ent_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY r_courspromo_enseignement
    ADD CONSTRAINT fk_r_courspromo_enseignement_ent_id FOREIGN KEY (ent_id) REFERENCES enseignement(ent_id);


--
-- TOC entry 2026 (class 2606 OID 25686)
-- Name: fk_r_courspromo_savoir_cop_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY r_courspromo_savoir
    ADD CONSTRAINT fk_r_courspromo_savoir_cop_id FOREIGN KEY (cop_id) REFERENCES cours_promo(cop_id);


--
-- TOC entry 2027 (class 2606 OID 25691)
-- Name: fk_r_courspromo_savoir_sav_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY r_courspromo_savoir
    ADD CONSTRAINT fk_r_courspromo_savoir_sav_id FOREIGN KEY (sav_id) REFERENCES savoir(sav_id);


--
-- TOC entry 2028 (class 2606 OID 25696)
-- Name: fk_savoir_com_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY savoir
    ADD CONSTRAINT fk_savoir_com_id FOREIGN KEY (com_id) REFERENCES competence_pro(com_id) ON DELETE CASCADE;


--
-- TOC entry 2029 (class 2606 OID 25701)
-- Name: fk_unite_formation_cursus_cur_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY unite_formation_cursus
    ADD CONSTRAINT fk_unite_formation_cursus_cur_id FOREIGN KEY (cur_id) REFERENCES cursus(cur_id) ON DELETE CASCADE;


--
-- TOC entry 2030 (class 2606 OID 25706)
-- Name: fk_unite_formation_promo_pro_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY unite_formation_promo
    ADD CONSTRAINT fk_unite_formation_promo_pro_id FOREIGN KEY (pro_id) REFERENCES promotion(pro_id);


--
-- TOC entry 2031 (class 2606 OID 25711)
-- Name: fk_unite_formation_promo_ufc_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY unite_formation_promo
    ADD CONSTRAINT fk_unite_formation_promo_ufc_id FOREIGN KEY (ufc_id) REFERENCES unite_formation_cursus(ufc_id);


-- Completed on 2015-07-09 13:59:04 CEST

--
-- PostgreSQL database dump complete
--

