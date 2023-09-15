// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const list = [
  {
    "id": "ghost-vegan-peanut-butter",
    "name": "Ghost Whey Vegan Peanut Butter",
    "details": "We've said it before and we will say it again, nothing beats the real thing. With years of R&D and REAL CHIPS AHOY!® cookie pieces in every scoop, this flavor is second to none.",
    "price": "$19.99",
    "image": "images/Vegan.png"
  },
  {
    "id": "ghost-vegan-pancake",
    "name": "GHOST® Vegan Pancake",
    "details": "GHOST Vegan Protein combines a premium, fully disclosed vegan protein blend with industry-leading flavors...what more could you ask for?",
    "price": "$29.99",
    "image": "images/VeganPancake.png"
  },
  {
    "id": "ghost-whey-ahoy",
    "name": "GHOST® Vegan Protein",
    "details": "GHOST Vegan Protein combines a premium, fully disclosed vegan protein blend with industry-leading flavors...what more could you ask for?",
    "price": "$39.99",
    "image": "images/whey-ahoy.png"
  },
  {
    "id": "ghost-cereal-milk",
    "name": "GHOST® Cereal Milk",
    "details": "GHOST Vegan Protein combines a premium, fully disclosed vegan protein blend with industry-leading flavors...what more could you ask for?",
    "price": "$49.99",
    "image": "images/wheyCerealMilk.png"
  },
  {
    "id": "ghost-whey-cinnabon",
    "name": "GHOST® Whey Cinnabon",
    "details": "GHOST Vegan Protein combines a premium, fully disclosed vegan protein blend with industry-leading flavors...what more could you ask for?",
    "price": "$29.99",
    "image": "images/WheyCinnabon.png"
  },
  {
    "id": "ghost-whey-coffee",
    "name": "GHOST® Coffee",
    "details": "GHOST Vegan Protein combines a premium, fully disclosed vegan protein blend with industry-leading flavors...what more could you ask for?",
    "price": "$39.99",
    "image": "images/WheyCoffee.png"
  },
  {
    "id": "ghost-whey-NB",
    "name": "GHOST® Nutter Butter",
    "details": "GHOST Vegan Protein combines a premium, fully disclosed vegan protein blend with industry-leading flavors...what more could you ask for?",
    "price": "$49.99",
    "image": "images/WheyNB.png"
  }
];

export default function handler(req, res) {
  res.status(200).json(list);
}
