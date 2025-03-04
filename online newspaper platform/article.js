// Function to extract the article ID from the URL
function getArticleId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("Articles script loaded."); // Debugging log

  // Example articles data (Modify as needed)
  window.articles = {
    1: {
      title: "Trump Showdown, Zelensky Warned!",
      content:
        "Hours Before Trump Showdown, Zelensky Was Warned Not To 'Take The Bait'.",
      image: "images/latestnews1.webp",
      body: `
              Just hours before Ukrainian President Volodymyr Zelensky stepped into the Oval Office for his infamous meeting with President Donald Trump, 
              he received a blunt warning from a US Senator.<br><br>
  
              "Don't take the bait," South Carolina Republican Senator Lindsey Graham advised, 
              cautioning the Ukrainian leader against engaging in a heated debate with Trump, according to the New York Times. "I said, don't get into arguments about security agreements," Graham told the Times in an interview. 
          `,
      dataKeywords:
        "trump, zelensky, us senator, lindsey graham, oval office, ukraine",
      url: "article.html?id=1",
    },
    2: {
      title: "Israel Aid to Gaza!",
      content:
        "Israel stops humanitarian aid into Gaza after Hamas rejects ceasefire’s first phase.",
      image: "images/latestnews2.webp",
      body: `
            Israel said Sunday it has stopped the entry of all humanitarian aid into Gaza after phase one of its ceasefire deal with Hamas expired, citing the militant group’s refusal of a US-backed extension.<br><br>

            The first phase of the ceasefire in Gaza, under which dozens of Israeli hostages and hundreds of Palestinian prisoners and detainees have been freed since mid-January, reached its expiration date on Saturday.<br><br>

            The Israelis want phase one to continue – the exchange of hostages, alive and deceased, in return for the continued release of Palestinian prisoners and detainees, and the flow of higher volumes of aid into Gaza. There are thought to be 24 Israeli hostages still alive in Gaza.`,
      dataKeywords: "israel, gaza, ceasefire, humanitarian aid, hamas, hostage",
      url: "article.html?id=2",
    },
    3: {
      title: "US Spaceship on Moon",
      content:
        "US Spaceship Lands On Moon, Second Private Lander To Achieve Milestone.",
      image: "images/latestnews3.webp",
      body: `Firefly Aerospace's Blue Ghost Mission 1 touched down near Mons Latreille, a volcanic formation in Mare Crisium on the Moon's northeastern near side.<br><br>
            A US company successfully landed its spacecraft on the Moon on Sunday after a long journey through space, marking only the second private mission to achieve the milestone -- and the first to do so upright.<br><br>
            Firefly Aerospace's Blue Ghost Mission 1 touched down shortly after 3:34 am US Eastern Time (0834 GMT) near Mons Latreille, a volcanic formation in Mare Crisium on the Moon's northeastern near side.<br>`,
      dataKeywords:
        "us spaceship, moon landing, private lander, space exploration",
      url: "article.html?id=3",
    },
    4: {
      title: "Japan Wildfire",
      content:
        "1 Dead, Thousands Evacuated After Japan's Biggest Wildfire In Over 30 Years.",
      image: "images/latestnews4.webp",
      body: `Around 2,000 people fled areas around the northern Japan city of Ofunato to stay with friends or relatives, while more than 1,200 evacuated to shelters, according to officials.<br><br>
            Thousands of people evacuated from parts of northern Japan as the country's largest wildfire in three decades raged unabated Sunday after killing at least one person, officials said. Around 2,000 people fled areas around the northern Japan city of Ofunato to stay with friends or relatives, while more than 1,200 evacuated to shelters, according to officials.
            <br><br>
            "We're still examining the size of the affected area, but it is the biggest since the 1992 wildfire" in Kushiro, Hokkaido, a disaster management agency spokesman told AFP Saturday`,
      dataKeywords: "japan, wildfire, evacuation, disaster",
      url: "article.html?id=4",
    },
    5: {
      title: "Charli XCX at Brits",
      content: "Brits go Brat as Charli XCX wins five awards",
      image: "images/spot1.webp",
      body: `The Brit Awards belonged to Charli XCX on Saturday night, who completed her transformation from underground hero to bona fide pop star by winning five awards including best artist and song of the year.
              <br><br>
            Ezra Collective, Sam Fender, Stormzy and best new artists The Last Dinner Party were the other big British winners on Saturday night, while Fontaines DC and Chappell Roan bagged the international awards.
              <br><br>
            The night also included a memorable, blush-inducing performance from US pop sensation Sabrina Carpenter, who was handed the global success award at London's O2 Arena.
            <br>
            <img src="images/spot11.webp" style="width: 100%; height: auto; display: block; margin: 10px 0; border-radius: 8px;"/><br>
            The arena fell silent near the end of the show for a moving video tribute to the late Liam Payne, who died last October.`,
      dataKeywords:
        "charli xcx, brit awards, brits 2024, best artist, song of the year, ezra collective, sam fender, stormzy, sabrina carpenter, liam payne, tribute, london o2 arena",
      url: "article.html?id=5",
    },
    6: {
      title: "Pam miss Oscars!",
      content:
        "Pamela Anderson on missing out on Oscars, ditching makeup and 'innocence' of Baywatch",
      image: "images/sport2.webp",
      body: `Pamela Anderson has had her fair share of ups and downs over her career.<br><br>
            So that might explain why she's so stoic about missing out on an Oscar nomination for her role in The Last Showgirl.<br><br>
            “The win is the work,” the Canadian actress told BBC News.<br>

            “You couldn't have told me I'd be here a decade ago, so this is very exciting for me, to even be in the conversation.”<br>

            Anderson, 57, did manage to score nominations at the Golden Globes and Screen Actors Guild Awards for her part in Gia Coppola’s film about a fading Las Vegas dancer.<br><br>

            But she is not in the running for the Academy Awards, which take place this Sunday in Los Angeles.<br>

            “I just wish everybody well,” she said.<br>

          “I think anybody, any actor, realises that all of this is about having another chance to be able to perform and share your talent with the world.”`,
      dataKeywords:
        "pamela anderson, oscars, the last showgirl, academy awards, golden globes, screen actors guild, gia coppola, las vegas dancer",
      url: "article.html?id=6",
    },
    7: {
      title: "Madame gone worst!",
      content:
        "‘Madame Web’ leads Razzies wins for the best of the worst in movies",
      image: "images/spot3.webp",
      body: `The winners of this year’s awards for the best of the worst in cinema – known as the Razzies – were announced Friday, and Anderson won the Razzie Redeemer for her performance in “The Last Showgirl.”<br><br>

            The Golden Raspberry Awards (the formal name for the Razzies) celebrate what they view as Hollywood’s movie duds. In keeping with its history, the “winners” are announced annually ahead of the Academy Awards ceremony.<br><br>

            “Madame Web” led this year’s Razzies with three wins, followed by “Joker: Folie a Deux,” “Megalopolis” and “Unfrosted” with two apiece.<br><br>

            “Megalopolis” director Francis Ford Coppola took to Instagram on Friday morning to say he was “thrilled” to accept his award for worst director, writing in part, “In this wreck of a world today, where ART is given scores as if it were professional wrestling, I chose to NOT follow the gutless rules laid down by an industry so terrified of risk that despite the enormous pool of young talent at its disposal, may not create pictures that will be relevant and alive 50 years from now.”`,
      dataKeywords:
        "madame web, razzies, worst movies, golden raspberry awards, joker folie a deux, megalopolis, francis ford coppola, worst director, hollywood duds",
      url: "article.html?id=7",
    },
    8: {
      title: "RIP Dawn",
      content:
        "‘Buffy’ star Sarah Michelle Gellar honors late on-screen sister Michelle Trachtenberg",
      image: "images/spot4.webp",
      body: `Michelle Trachtenberg’s former “Buffy the Vampire Slayer” costar Sarah Michelle Gellar is looking back at their time together on screen and off, one day after Trachtenberg died in New York City.<br><br>
            On Thursday, Gellar posted a series of photos to her verified Instagram account that showed her and the late 39-year-old former child actress throughout the years. They included moments from the show, their time promoting it and some seemingly personal photographs, including one of Trachtenberg smiling at an infant in a tender moment.<br><br>
            Gellar added a message alongside the photos in quotation marks that read: “Michelle, listen to me. Listen. I love you. I will always love you. The hardest thing in this world, is to live in it. I will be brave. I will live… for you”`,
      dataKeywords:
        "michelle trachtenberg, buffy the vampire slayer, sarah michelle gellar, dawn summers, tribute, hollywood, celebrity deaths, 2024",
      url: "article.html?id=8",
    },
    9: {
      title: "Tips for Maintaining a Healthy Lifestyle",
      content:
        "Exercising regularly, eating nourishing foods, and reducing your intake of sugar and alcohol are just some of the recommendations for maintaining a healthy lifestyle.",
      image: "images/health.webp",
      body: `Consuming healthy foods, beverages, and snacks, and getting regular physical activity may help you reach and maintain a healthy body weight. Making suitable lifestyle choices may also help men and women prevent some health problems.<br>
            <img src="images/health2.jpeg" style="width: 100%; height: auto; display: block; margin: 10px 0; border-radius: 8px;"><br>
            Here’s a quick overview of some ways to eat better and be more active.
            <ul>
            <li>Choose whole grains more often. Try whole-wheat breads and pastas, oatmeal, or brown rice.</li>
            <li>Select a mix of colorful vegetables. Vegetables of different colors provide a variety of nutrients. Try collards, kale, spinach, squash, sweet potatoes, and tomatoes.</li>
            <li>At restaurants, eat only half of your meal and take the rest home.</li>
            <li>Walk in parks, around a track, or in your neighborhood with your family or friends.</li>
            <li>Make getting physical activity a priority.</li>
            <li>Try to do at least 150 minutes a week of moderate-intensity aerobic activity, like biking or brisk walking.</li>
            <li>If your time is limited, work in small amounts of activity throughout your day.</li>
            </ul>
            Learn more ways to move more and eat better—for yourself and your family!`,
      dataKeywords:
        "healthy lifestyle, nutrition tips, exercise, wellness, fitness, balanced diet, weight management, physical activity, healthy eating, mental well-being",
      url: "article.html?id=9",
    },
  };

  function loadArticle() {
    const articleId = new URLSearchParams(window.location.search).get("id");
    if (!articleId || !window.articles[articleId]) {
      console.error("Article not found.");
      return;
    }

    const article = window.articles[articleId];
    document.getElementById("article-title").textContent = article.title;
    document.getElementById("article-content").innerHTML = article.content;
    document.getElementById("article-image").src = article.image;
    document.getElementById("article-body").innerHTML = article.body;
  }

  if (document.getElementById("article-title")) {
    loadArticle();
  }

  // Search Function (For Navbar Search)
  window.searchArticles = function (event) {
    event.preventDefault(); // Prevent page reload

    let query = document.getElementById("search-bar").value.toLowerCase();
    if (!query) return; // Exit if search is empty

    // Search for matching articles based on keywords
    let foundArticle = Object.values(window.articles).find(
      (article) =>
        article.dataKeywords &&
        article.dataKeywords.toLowerCase().includes(query)
    );

    if (foundArticle) {
      console.log("Redirecting to:", foundArticle.url);
      window.location.href = foundArticle.url; // Redirect to article page
    } else {
      alert("No articles found for this search!");
    }
  };
});

// Function to handle comment submission
document
  .getElementById("comment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user input
    const name = document.getElementById("comment-name").value.trim();
    const comment = document.getElementById("comment-text").value.trim();

    if (!name || !comment) return; // Prevent empty submissions

    // Create a new comment element
    const commentElement = document.createElement("div");
    commentElement.classList.add("mt-3", "p-3", "border", "rounded");
    commentElement.innerHTML = `
      <strong>${name}</strong>
      <p>${comment}</p>
      <small class="text-muted">${new Date().toLocaleString()}</small>
      <div class="mt-2">
          <!-- WhatsApp Share Link -->
          <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(
            comment
          )}"
             target="_blank" class="btn btn-success btn-sm me-2">
             Share on WhatsApp
          </a>
          <!-- Twitter Share Link -->
          <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(
            comment
          )}"
             target="_blank" class="btn btn-info btn-sm">
             Share on Twitter
          </a>
      </div>
      <hr />
  `;

    // Add the comment to the comments list
    document.getElementById("comments-list").appendChild(commentElement);

    // Clear the form fields
    document.getElementById("comment-form").reset();
  });

// Add Social Media Share Section Below the Comments
const shareSection = document.createElement("div");
shareSection.classList.add("text-center", "mt-4");
shareSection.innerHTML = `
  <p class="fw-bold">or <br/> Share your Thoughts via</p>
  <div>
      <a href="https://api.whatsapp.com/send?text=Share your thoughts on this article!"
         target="_blank">
         <img src="images/whatsapp.png" alt="WhatsApp" width="40" class="me-3">
      </a>
      <a href="https://twitter.com/intent/tweet?text=Share your thoughts on this article!"
         target="_blank">
         <img src="images/x.webp" alt="Twitter" width="40" class="me-3">
      </a>
  </div>
`;

// Append Share Section Below the Comments List
document.getElementById("comments-list").after(shareSection);

// Load the article when the page loads
window.onload = loadArticle;
