-- public.cards definition

-- Drop table

-- DROP TABLE public.cards;

CREATE TABLE public.cards (
	cards_suit varchar(8) NOT NULL,
	cards_value int4 NOT NULL,
	cards_face varchar(5) NOT NULL,
	CONSTRAINT pk_cards PRIMARY KEY (cards_suit, cards_face)
);