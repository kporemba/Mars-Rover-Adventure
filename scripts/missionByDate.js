
const apiKey = 'RzmDLLJBmdKq4r4WvJVX5C2xY3kGq4MmDCjozi90';
const baseURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${apiKey}&earth_date=2015-6-3`;
class RoverAPI {
  async getRoverImages() {
    try {
      const response = await axios.get(baseURL);
      const data = response.data;
      data.photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.img_src;
        img.alt = 'Mars Photo';
        document.getElementById('image-container').appendChild(img);
      });
    } catch (error) {
      console.error('Error getting images:', error);
    }
  }
}
const api = new RoverAPI();
api.getRoverImages();