---
layout: default
title: Articles
description: My recent musings.
permalink: /articles
---

# Recent Articles

{% for post in site.posts %}
  {% assign words = post.content | number_of_words %}
  {% assign reading_time = words | divided_by:238 %}
  {% if post.title == "Interview with the National Gallery" %}
    - **Interview with the National Gallery** ({{ reading_time | ceil }} mins)
      - Summary of my chat with Angie of the National Gallery.
      - Link to the podcast.
  {% elsif post.title == "How Machine Learning is used to Reduce Motion in Magnetic Resonance Imaging" %}
    - **How Machine Learning is used to Reduce Motion in Magnetic Resonance Imaging** ({{ reading_time | ceil }} mins)
      - Artificial Intelligence is poised to revolutionise Magnetic Resonance Imaging (MRI). From tackling motion artefacts to enhancing image clarity, AI-powered solutions are reshaping the landscape of medical imaging.
      - Download the full literature review [here](/ai_medical_review.pdf).
  {% endif %}
{% endfor %}

Let me know what you think [here](/contact.html).
