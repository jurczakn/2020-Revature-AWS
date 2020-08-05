package com.revature.blackjack.handler;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.google.gson.Gson;
import com.revature.blackjack.domain.Card;
import com.revature.blackjack.domain.Request;
import com.revature.blackjack.util.HibernateUtil;

public class ListCards implements RequestHandler<Request, String> {
	private Gson gson = new Gson();

	public String handleRequest(Request input, Context context) {
		SessionFactory sessionFactory = HibernateUtil.getSessionFactory();
        try (Session session = sessionFactory.openSession()) {
            List<Card> cards = (List<Card>) session.createQuery("FROM Card", Card.class).getResultList();
            return gson.toJson(cards);
        }
	}

}
