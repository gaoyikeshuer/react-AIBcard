import './App.css';
import ImageSlider from './components/ImageSlider';
import Card from './components/Card';
import HelpCard from './components/HelpCard';
import home from './icons/home.png' 
import InformationCard from './components/InformationCard';
import PrimaryButton from './components/PrimaryButton';
import SecondaryButton from './components/SecondaryButton';
function App() {
  const slides = [
    {content: "AIB allows you manage your bank accounr on-the-go, track your expenses and set aside money in real-time. Open yours in minutes right from your smart phone.", title :"Join us at AIB"},
    {content: "I'm second", title :"Second"},
    {content: "I'm the third", title :"Third"},
  ]
  return (
    <div>
    <ImageSlider slides = {slides}/>
    <Card title = 'Card Title' imageUrl = 'https://media.istockphoto.com/photos/father-mother-and-daughter-using-electronic-devices-sitting-on-sofa-picture-id1307392582?s=612x612' cardBody ='Mam quis nulia. Integer malesuada. In in enim aarcu imperdiet malesuada. Sed vel lectus.(Max 100)' />
    <HelpCard title ="Need some Help?" imageUrl={home} helpcardBody="We'll try to answer your questions and give you the " shortText="We're here to help"/>
    <InformationCard imageUrl={home}/>
<PrimaryButton/>
<SecondaryButton/>
    </div>

  );
}

export default App;
