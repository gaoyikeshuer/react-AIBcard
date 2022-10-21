import './App.css';
import ImageSlider from './components/ImageSlider';
function App() {
  const slides = [
    {content: "AIB allows you manage your bank accounr on-the-go, track your expenses and set aside money in real-time. Open yours in minutes right from your smart phone.", title :"Join us at AIB"},
    {content: "I'm second", title :"Second"},
    {content: "I'm the third", title :"Third"},
  ]
  return (
    <div className='card-body'>
    <ImageSlider slides = {slides}/>
    </div>
  );
}

export default App;
