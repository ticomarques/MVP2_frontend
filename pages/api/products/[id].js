// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const list = [
  {
    "id": "ghost-whey-x-chips-ahoy",
    "name": "Ghost Whey X Chips Ahoy",
    "details": "We've said it before and we will say it again, nothing beats the real thing. With years of R&D and REAL CHIPS AHOY!® cookie pieces in every scoop, this flavor is second to none.",
    "price": "$39.99",
    "image": "/images/whey-ahoy.png"
  },
  {
    "id": "ghost-whey-vegan",
    "name": "GHOST® Vegan Protein",
    "details": "GHOST Vegan Protein combines a premium, fully disclosed vegan protein blend with industry-leading flavors...what more could you ask for?",
    "price": "$49.99",
    "image": "https://cdn.shopify.com/s/files/1/2060/6331/products/Vegan.png?v=1574882358"
  }
];

export default function handler(req, res) {
  const item = list.filter( product => product.id === req.query.id)
  res.status(200).json(item);
}
