const addGuestButton = document.querySelector(".invite");
const guestInputLabel = document.querySelector(".add-guest label");
const guestInput = document.querySelector(".add-guest input");
const guestList = document.querySelector(".guest-list");
const guestCount = document.querySelector(".attendance");
const guestFull = document.querySelector(".alert");
const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
    const guest = guestInput.value;
    if (guest !== "") {
        addToList(guest);
        updateGuestCount();
        clearInput();
    }
});

const addToList = function (guest) {
 const listItem = document.createElement("li");
 listItem.innerText = guest;
 guestList.append(listItem);
};

const updateGuestCount = function () {
    const guest = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guest.length;

    if (guests.length === 8) {
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide");
    }
    };

const assignItems = function () {
    const potluckItems = [
        "cheese",
        "crackers",
        "fresh fruit",
        "coleslaw",
        "apple cake",
        "gazpacho",
        "baguette",
        "egg salad",
        "potato salad",
        "summer rolls",
        "hummus",
        "cookies"
    ];

    const allGuests = document.querySelectorAll(".guest-list li");

    for (let guest of allGuests) {
      let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
      let randomPotluckItem = potluckItems[randomPotluckIndex];

      let listItem = document.createElement("li");
      listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
      assignedItems.append(listItem);

      potluckItems.splice(randomPotluckIndex, 1);
    }
};

assignButton.addEventListener("click", function() {
    assignItems();
    assignButton.disabled = true;
});

