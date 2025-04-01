export default function AddToCart(details) {
  // alert(details.id)
  let storedCart = localStorage.getItem("addToCart");
  let listLocalStorage = storedCart ? JSON.parse(storedCart) : [];

        let newDetails = {
            id: details.id,
            gift_name: details.gift_name,
            image: details.image,
            price: details.price
        }

        let existingItem = listLocalStorage.find((item) => item.id === newDetails.id);

        if (existingItem) {
          listLocalStorage = listLocalStorage.map((item) =>
          item.id === newDetails.id ? { ...item} : item
          );
        }
        else {
         listLocalStorage.push(newDetails);
        }

        localStorage.setItem("addToCart", JSON.stringify(listLocalStorage));

        console.log("Updated Cart:", listLocalStorage);

    
    
  return (
    <div></div>
  )
}