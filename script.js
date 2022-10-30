function currentSlide(n) {
	const firstDot = document.getElementById("first-dot");
	const secondDot = document.getElementById("second-dot");
	const cardsContainer = document.getElementById("cards-container");

	if (n == 1) {
		if (firstDot.style.backgroundColor == "gray") {
			firstDot.style.backgroundColor = "black";
			secondDot.style.backgroundColor = "gray";

			while (cardsContainer.firstChild) {
				cardsContainer.removeChild(cardsContainer.firstChild);
			}

			cardsContainer.innerHTML = firstCards;
		}
	} else {
		if (secondDot.style.backgroundColor == "gray") {
			secondDot.style.backgroundColor = "black";
			firstDot.style.backgroundColor = "gray";
			while (cardsContainer.firstChild) {
				cardsContainer.removeChild(cardsContainer.firstChild);
			}

			cardsContainer.innerHTML = secondCards;
		}
	}
}

const firstCards = /* html */ `
  <div class="card">
    <div class="image-container">
      <a href="chosen_one.html">
        <img
          class="card-image"
          src="https://uploads-ssl.webflow.com/632e7b749129532db4e12812/632e7ed96f7c92a349450214_bronchosenonemagcover.png"
          alt="Chosen One"
        />
      </a>
    </div>
    <div class="details-container">
      <div class="details-title">The Chosen One</div>
      <div class="details-paragraph">
        LeBron James was considered to be an NBA lottery pick even when he
        was in highschool. Expectations were set for this kid to become a
        Hall of Famer. Will he crumble under the pressure? or will he
        reach and even exceed these high expectations?
      </div>
      <div class="link-container">Find out in this chapter</div>
    </div>
    </div>
    <div class="card">
    <div class="image-container">
      <img
        class="card-image"
        src="https://uploads-ssl.webflow.com/632e7b749129532db4e12812/632e7d49829453d232e9eb65_bronvillainarc.png"
        alt="Villain Arc"
      />
    </div>
    <div class="details-container">
      <div class="details-title">Villain Arc</div>
      <div class="details-paragraph">
        After years of being alone in Cleveland, LeBron James "betrayed"
        his homeland and as he famously said, took his talents to South
        Beach and joined the Miami Heat. How will LeBron fare against this
        hostility from his own hometown?
      </div>
      <div class="link-container">Find out in this chapter</div>
    </div>
    </div>
    <div class="card">
    <div class="image-container">
      <img
        class="card-image"
        src="https://uploads-ssl.webflow.com/632e7b749129532db4e12812/632e7e3a6a137106561728d8_bronblock.png"
        alt="Redemption"
      />
    </div>
    <div class="details-container">
      <div class="details-title">Redemption</div>
      <div class="details-paragraph">
        After winning every possible award in Miami, LeBron James decided
        to rejoin the Cleveland Cavaliers determined to win their first
        ever championship against what could be considered to be the best
        team ever assembled in NBA History.
      </div>
      <div class="link-container">Find out in this chapter</div>
    </div>
  </div>
`;

const secondCards = /* html */ `
  <div class="card">
  <div class="image-container">
    <a href="villain_arc.html">
      <img
      class="card-image"
      src="https://uploads-ssl.webflow.com/632e7b749129532db4e12812/632e7d49829453d232e9eb65_bronvillainarc.png"
      alt="Villain Arc"
    />
  </a>
  </div>
  <div class="details-container">
    <div class="details-title">Villain Arc</div>
    <div class="details-paragraph">
      After years of being alone in Cleveland, LeBron James "betrayed"
      his homeland and as he famously said, took his talents to South
      Beach and joined the Miami Heat. How will LeBron fare against this
      hostility from his own hometown?
    </div>
    <div class="link-container">Find out in this chapter</div>
  </div>
  </div>
  <div class="card">
  <div class="image-container">
    <a href="redemption.html">
      <img
        class="card-image"
        src="https://uploads-ssl.webflow.com/632e7b749129532db4e12812/632e7e3a6a137106561728d8_bronblock.png"
        alt="Redemption"
      />
    </a>	
  </div>
  <div class="details-container">
    <div class="details-title">Redemption</div>
    <div class="details-paragraph">
      After winning every possible award in Miami, LeBron James decided
      to rejoin the Cleveland Cavaliers determined to win their first
      ever championship against what could be considered to be the best
      team ever assembled in NBA History.
    </div>
    <div class="link-container">Find out in this chapter</div>
  </div>
  </div>
  </div>
  <div class="card">
  <div class="image-container">
    <a href="solidification.html">
      <img
        class="card-image"
        src="https://uploads-ssl.webflow.com/632e7b749129532db4e12812/635e15ea618e0a5b27b45a1f_lakerslebronring.png"
        alt="Solidification"
      />
    </a>
  </div>
  <div class="details-container">
    <div class="details-title">Solidification</div>
    <div class="details-paragraph">
      Following the legendary 3-1 comeback against the greatest regular season team of all time, 
      LeBron once again is alone in Cleveland as fellow star Kyrie requests a trade out. 
      After his legendary 2018 playoff run, LeBron sets off into a new chapter of his career, 
      joining the Los Angeles Lakers and further solidifying his already legendary career.
    </div>
    <div class="link-container">Find out in this chapter</div>
  </div>
  </div>
`;