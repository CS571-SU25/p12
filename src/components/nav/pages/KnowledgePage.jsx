import React, { useState } from "react";
import {Container, Row, Col, Card} from "react-bootstrap";


export default function KnowledgePage() {

  const items = [
    {
      id: 1,
      question: "How did Hong Kong get its name?",
      answer: "The name 'Hong Kong' (Heung Gong, 香江) likely comes from its history as a port for trading fragrant incense (莞香) during the Ming and Qing dynasties. Another theory links it to a sweet-water stream ('Fragrant Harbour')"
    },
    {
      id: 2,
      question: "What is Hong Kong's political status?",
      answer: "It is a special administrative region (SAR) of China."
    },
    {
      id: 3,
      question: "Why is Hong Kong called the 'SAR'?",
      answer: "Under the policy 'One Country, Two Systems,' Hong Kong has a high degree of autonomy in its legal, economic, and governmental systems."
    },

    {
      id: 4,
      question: "What languages do people in Hong Kong commonly use in daily life? ",
      answer: "They speak Cantonese (Chinese dialect), Mandarin, and English. English is more widely used in higher education."
    },

    {
      id: 5,
      question: "Why is English also an official language?",
      answer: "This is because Hong Kong was a former British colony from 1842 to 1997. It retained English as an official language alongside Chinese when sovereignty was handed back."
    }
  ]
  return <>
    <section aria-labelledby="hk-knowledge-title" style={{ padding: "1rem", maxWidth: 800, margin: "0 auto" }}>
  <h1 id="hk-knowledge-title">Knowledge of HK</h1>

  <p style={{ marginBottom: "1.5rem", color: "#555", fontSize: "1rem" }}>
        Below are some of the most frequently asked questions about Hong Kong—
        from its name and political status to the languages people speak.
        Feel free to scroll and learn more!
      </p>

  <dl style={{ marginTop: "1.5rem" }}>
    {items.map(({ id, question, answer }) => (
      <div key={id} style={{ display: "flex", marginBottom: "1rem" }}>
        <dt
          style={{
            flexShrink: 0,
            width: "30%",
            fontWeight: 600,
            borderLeft: "4px solid #007bff",
            paddingLeft: "1rem",
          }}
        >
          {question}
        </dt>
        <dd style={{ flex: 1, margin: 0, paddingLeft: "1rem", color: "#333" }}>
          {answer}
        </dd>
      </div>
    ))}
  </dl>
</section>


  </>
}