const allData = async (isSeeMore) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
  const data = await res.json();
  display(data.data.tools, isSeeMore);
  console.log(data);
};

const display = (tools, isSeeMore) => {
  const cardContainer = document.getElementById("card-container");
  const seeMore = document.getElementById("see-more");
  if (!isSeeMore) {
    tools = tools.slice(0, 6);
  }
  if (isSeeMore) {
    seeMore.classList.add("hidden");
  }

  tools.forEach((card1) => {
    const card = document.createElement("div");
    card.classList = "border p-5 rounded-2xl";
    card.innerHTML = `
  <img src="${card1.image}" alt="" />
          <div class="pt-2 mb-5">
            <h2 class="text-2xl font-semibold">${card1.name}</h2>
            <ul class="pt-3">
            <li>1.${card1.features[0]}</li>
            <li>2.${card1.features[1]}</li>
            <li>3.${card1.features[2]}</li>
              
            </ul>
          </div>
          <hr />
          <div class="pt-2">
            <h4 class="text-2xl font-semibold py-2">ChatGPT</h4>
            <div class="flex justify-between">
              <div>
                <i class="fa-regular fa-calendar-days"></i>
                <span>${card1.published_in}</span>
              </div>
              <div class="">
                <i
                  class="fa-solid fa-arrow-right-long w-12 h-12 bg-[#f1e1e189] text-[#EB5757] items-center justify-center flex rounded-full"
                ></i>
              </div>
            </div>
          </div>
  `;
    cardContainer.appendChild(card);
  });
};

const seeMore = () => {
  allData(true);
};
allData();
