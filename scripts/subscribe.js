// console.log("hello world");

// class NasaApi {
// constructor(apiKey) {
const baseUrl = "https://api.nasa.gov/planetary";
const apiKey = "BaVlLYSFA9Haj50i7T57sqeIIlYgDB2sWphQa5XL";
// }

async function getpicture() {
    fetch(baseUrl)
    // .then(response => {
    //     if (!response.ok) {
    //         throw new error("network error");
    //     }
    //     return response.json();
    // })

    // const id = 

    // {
    const imageContainer = document.getElementById("#apiImage");
    const showUrl = `${baseUrl}/apod?api_key=${apiKey}`;
    const shows = await axios.get(showUrl);
    // return shows.data;
    console.log(shows.data);
    // catch (error) {
    //     console.log(error);
    // }
}
// }

// const nasaApi = new NasaApi("");

// console.log(getpicture());
// console.log("hello world");
// const imageContainer = document.querySelector(".hero__image");
// const


//     imageContainer.append()