import BathSale from "../components/Homepage/BathSale";
import BrowseIdeasByRoom from "../components/Homepage/BrowseIdeasByRoom";
import BrowsePhotosByStyle from "../components/Homepage/BrowsePhotosByStyle";
import ContactLocalProfessional from "../components/Homepage/ContactLocalProfessional";
import ContemporaryLivingIdeas from "../components/Homepage/ContemporaryLivingIdeas";
import FarmhouseKitchenIdeas from "../components/Homepage/FarmhouseKitchenIdeas";
import LatestStories from "../components/Homepage/LatestStories";
import ModernBedroomIdeas from "../components/Homepage/ModernBedroomIdeas";
import PhotosForYou from "../components/Homepage/PhotosForYou";
import ShopByDepartment from "../components/Homepage/ShopByDepartment";
import SoftwareForContractors from "../components/Homepage/SoftwareForContractors";
import TraditionalBathroomIdeas from "../components/Homepage/TraditionalBathroomIdeas";
import TraditionalKitchenIdeas from "../components/Homepage/TraditionalKitchenIdeas";
import HomeSlider from "../components/Slider/HomeSlider";

const Home = () => {
    return <>
    <HomeSlider />

    <ShopByDepartment/>
    <SoftwareForContractors/>
    <ContactLocalProfessional/>
    <BrowseIdeasByRoom/>
    <LatestStories/>
    <BathSale/>
    <BrowsePhotosByStyle/>
    <PhotosForYou/>
    <TraditionalKitchenIdeas/>
    <ContemporaryLivingIdeas/>
    <TraditionalBathroomIdeas/>
    <ModernBedroomIdeas/>
    <FarmhouseKitchenIdeas/>
    </>
  };
  
  export default Home;