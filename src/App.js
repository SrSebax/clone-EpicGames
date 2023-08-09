import Footer from "./components/Footer";
import ImageCarousel from "./components/ImageCarousel";
import Nav from "./components/Nav";

// const images = [
//   "https://images.ctfassets.net/p0qf7j048i0q/22CA69A7D1C3463E86938EBD6DB7F15D/2a761f4f54f4608923eee1dcdd91d57c/070518_7_Things_I_Tell_Parents_of_Kids_With_ADHD_and_Social_Skills_Issues_About_Fortnite.jpg?w=3840&q=75&h=3840&fm=webp",
//   "https://rocketleague.media.zestyio.com/rl_epic-link_home_screen_wheel.png",
//   "https://cdn.mos.cms.futurecdn.net/aqP4mNv2PZxdRYYypfhWRP-1200-80.jpg"
// ];

const images = [
  {
    src: "https://cdn2.unrealengine.com/Epic+Games+Node%2Fue-alt-1920x1080-e653a4a4dae65307fd2420076abe44bb71b22f06.jpg?resize=1&w=800",
    title: "Unreal Engine",
  },
  {
    src: "https://cdn2.unrealengine.com/Epic+Games+Node%2Ffn-1920x1080-05e434e24b3170bc6cc6003c102270ee4cde3a75.jpg?resize=1&w=800",
    title: "Fortnite",
  },
  {
    src: "https://cdn2.unrealengine.com/rl-f2p-hero-epic-adjust-gradient-1920x1080-982990639.jpg?resize=1&w=800",
    title: "Rocket League",
  },
  {
    src: "https://cdn2.unrealengine.com/epichomepage-artboard-1-1920x1080-329693365.jpg?resize=1&w=800",
    title: "Store",
  },
  {
    src: "https://cdn2.unrealengine.com/Epic+Games+Node%2Frr-1920x1080-5a3f8bce26f45d078c2738cf5140ad18be39041c.jpg?resize=1&w=800",
    title: "Robo Recall",
  },
  {
    src: "https://cdn2.unrealengine.com/Epic+Games+Node%2Fut-1920x1080-416b0b679e572854df52c39154aff5945328c04d.jpg?resize=1&w=800",
    title: "Unreal Tournament",
  },
];
export default function App() {
  return (
    <div>
      <Nav />
      <ImageCarousel images={images} />
      <Footer />
    </div>
  );
}
