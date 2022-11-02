import './App.css';
import { Home } from './icons';
// import { ReactComponent as home } from './icons/home.svg';
import ImageSlider from './components/ImageSlider';
import Card from './components/Card';
import HelpCard from './components/HelpCard';
import InformationCard from './components/InformationCard';
import PrimaryButton from './components/PrimaryButton';
import SecondaryButton from './components/SecondaryButton';
import GradientCard from './components/GradientCard';
import BannerCardWhite from './components/BannerCardWhite';
import UsefulDocumentCard from './components/UsefulDocumentCard';
function App() {
  const slides = [
    {content: "AIB allows you manage your bank accounr on-the-go, track your expenses and set aside money in real-time. Open yours in minutes right from your smart phone.", title :"Join us at AIB"},
    {content: "I'm second", title :"Second"},
    {content: "I'm the third", title :"Third"},
  ]
  return (
    <div>
    <ImageSlider slides = {slides}/>
    <Card title = 'Card Information' imageUrl = 'https://media.istockphoto.com/photos/father-mother-and-daughter-using-electronic-devices-sitting-on-sofa-picture-id1307392582?s=612x612' cardBody ='Mam quis nulia. Integer malesuada. In in enim aarcu imperdiet malesuada. Sed vel lectus.(Max 100)' />
    <HelpCard title ="Need some Help?" imageUrl={Home} helpcardBody="We'll try to answer your questions and give you the " shortText="We're here to help"/>
    <InformationCard imageUrl={Home}/>
<PrimaryButton title="Primary"/>
<SecondaryButton/>
<GradientCard title="Loans" gradientBody="All you need to know about our loans at a glance" imageUrl='https://media.istockphoto.com/photos/father-mother-and-daughter-using-electronic-devices-sitting-on-sofa-picture-id1307392582?s=612x612'/>
<BannerCardWhite title='Join us at AIB' cardBody="Whether you're buying new or used, we can help you spread the cost of your car. Find out what you can borrow using our calculator, you could have what you need in three hours."/>
<UsefulDocumentCard title="Current Account leaflet" cardBody="Find attached our product brochure that outlines our key benefits and features attached to our current accounts"/>
   
   
    </div>

  );
}

export default App;
