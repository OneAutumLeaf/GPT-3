import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="Generative Pre-trained Transformer 3, commonly known by its abbreviated form GPT-3, is an unsupervised Transformer language model and the successor to GPT-2. It was first described in May 2020. OpenAI stated that full version of GPT-3 contains 175 billion parameters, two orders of magnitude larger than the 1.5 billion parameters in the full version of GPT-2 (although GPT-3 models with as few as 125 million parameters were also trained)." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Get your own chatbots in your own regional language, say bye bye to language restriction." />
      <Feature title="Knowledgebase" text="You want knowledge about something but confused, we got u covered by the knowledge presented on the internet at your ease." />
      <Feature title="Education" text="Your institution is lacking goog AI automation and lab , we got solution for you as well" />
    </div>
  </div>
);

export default WhatGPT3;
