
interface CarouselData {
    image: ImageSourcePropType; 
    title: string;
    subtitle: string;
    description: string;
  }
  
  export const data: CarouselData[] = [
    {
      image: require("../assets/slider1.png"), // Local image import
      title: 'Your Smartest Gateway to China.',
      subtitle: 'Borderless',
      description: 'Enjoy secure efficient, and hassle-fre RMB payments',
    },
    {
      image: require("../assets/slider2.png"),
      title: 'Unlock Chinas biggest Market',
      subtitle: 'Easy payment',
      description:'Allowing you to focus on what truly matters in growing your business',
    },
    {
      image: require("../assets/slider3.png"),
      title: 'RMB Made Easy Just Like That',
      subtitle: 'Buy & Sell',
      description:'With a seamless experience ensuring timely and accurate transactions every time.',
    }
  ];
  