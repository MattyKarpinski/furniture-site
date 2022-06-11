import './Slider.scss';
import SimpleImageSlider from "react-simple-image-slider";

const Slider = () => {
  const images = [
    { url: "https://reactjsexample.com/content/images/2021/07/react-simple-image-slider.gif" },
    { url: "https://reactjsexample.com/content/images/2021/07/react-simple-image-slider.gif" },
    { url: "images/3.jpg" },
    { url: "images/4.jpg" },
    { url: "images/5.jpg" },
    { url: "images/6.jpg" },
    { url: "images/7.jpg" },
  ];
  
  return <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
}

export default Slider;