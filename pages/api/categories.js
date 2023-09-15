// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const listCategories = [
  {
    "id": "01",
    "name": "Powder",
    "url": "/powder",
  },
  {
    "id": "02",
    "name": "Plant",
    "url": "/plant",
  },
  {
    "id": "03",
    "name": "Cereal",
    "url": "/cereal",
  },
  {
    "id": "04",
    "name": "Dessert",
    "url": "/dessert",
  },
];

export default function handler(req, res) {
  res.status(200).json(listCategories);
}
