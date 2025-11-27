import React from 'react'
import Cards from './components/cards'
import SectionOne from './components/cards'

const App = () => {

  let foodItems = [
    {
      imageUrl: "https://plus.unsplash.com/premium_photo-1683619761492-639240d29bb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hlc3NlJTIwYnVyZ2VyfGVufDB8fDB8fHww",
      headingType: "Classic",
      foodName: "Cheese Burger",
      description: "A juicy and melty cheese burger crafted with timeless flavor."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1666819604716-7b60a604bb76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2hpY2tlbiUyMHNhbmR3aWNofGVufDB8fDB8fHww",
      headingType: "Crunchy",
      foodName: "Chicken Sandwich",
      description: "A golden, crunchy chicken fillet served with fresh toppings and creamy sauce."
    },
    {
      imageUrl: "https://plus.unsplash.com/premium_photo-1664392112262-271039647be9?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingType: "Fiery",
      foodName: "Spicy Paneer Burger",
      description: "A bold, fiery paneer patty layered with spices and cooling sauces."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R3JpbGxlZCUyME11c2hyb29tfGVufDB8fDB8fHww",
      headingType: "Savory",
      foodName: "Grilled Mushroom Melt",
      description: "A rich mushroom-filled burger packed with smoky flavor and melted cheese."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXZhY2FkbyUyMHRvYXN0fGVufDB8fDB8fHww",
      headingType: "Fresh",
      foodName: "Avocado Veggie Stack",
      description: "A refreshing veggie burger stacked with creamy avocado and crisp greens."
    }
  ];

  return (
    <>
      <div id='cardsContainer'>
        {foodItems.map(function (e,k) {
          return <div key={k}>
            <SectionOne img={e.imageUrl} typ={e.headingType} food={e.foodName} desc={e.description} />
          </div>

        })}
      </div>

    </>
  )

}

export default App
