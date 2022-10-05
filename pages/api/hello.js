// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json( [
{
"img": "/cities/Bangalore.jpg",
"location": "Bangalore",
"distance": "45-minute drive"
},
{
"img": "/cities/Mysore.png",
"location": "Mysore",
"distance": "4.5-hour drive"
},
{
"img": "/cities/Hyderabad.jpg",
"location": "Hydrebad",
"distance": "4.5-hour drive"
},
{
"img": "/cities/Goa.jpg",
"location": "Goa",
"distance": "4-hour drive"
},
{
"img": "/cities/Chennai.jpg",
"location": "Chennai",
"distance": "45-minute drive"
},
{
"img": "/cities/Mumbai.jpg",
"location": "Mumbai",
"distance": "4.5-hour drive"
},
{
"img": "/cities/Kolkata.jpg",
"location": "Kolkata",
"distance": "6-hour drive"
},
{
"img": "/cities/Kochi.jpg",
"location": "Kochi",
"distance": "2-hour drive"
}
],)
}
